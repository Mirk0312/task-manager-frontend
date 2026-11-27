// src/hooks/useTaskList.ts
import { useCallback, useEffect, useState } from 'react';
import type { PageMeta, TaskListQuery } from '../models/api.types';
import type { RequestStatus } from '../models/request-status.type';
import type { Task } from '../models/task.interface';
import { getHttpErrorMessage, isAbortError } from '../services/http.service';
import { listTasks } from '../services/task.api.service';

interface TaskListState {
  tasks: Task[];
  meta: PageMeta;
  status: RequestStatus;
  errorMessage: string;
}

const EMPTY_META: PageMeta = {
  page: 1,
  limit: 5,
  total: 0,
  totalPages: 0,
  hasNextPage: false,
  hasPreviousPage: false,
};

function extractTasksAndMeta(
  payload: unknown,
  fallbackPage: number,
  fallbackLimit: number,
): { tasks: Task[]; meta: PageMeta } {
  const defaultMeta: PageMeta = {
    ...EMPTY_META,
    page: fallbackPage,
    limit: fallbackLimit,
  };

  if (Array.isArray(payload)) {
    return {
      tasks: payload as Task[],
      meta: {
        ...defaultMeta,
        total: payload.length,
        totalPages: payload.length > 0 ? 1 : 0,
      },
    };
  }

  if (typeof payload === 'object' && payload !== null) {
    const record = payload as Record<string, unknown>;
    const candidateList = Array.isArray(record.items)
      ? record.items
      : Array.isArray(record.tasks)
        ? record.tasks
        : Array.isArray(record.data)
          ? record.data
          : [];

    const candidateMeta =
      typeof record.meta === 'object' && record.meta !== null
        ? (record.meta as Partial<PageMeta>)
        : {};

    return {
      tasks: candidateList as Task[],
      meta: {
        ...defaultMeta,
        ...candidateMeta,
        page: candidateMeta.page ?? fallbackPage,
        limit: candidateMeta.limit ?? fallbackLimit,
        total: candidateMeta.total ?? candidateList.length,
      },
    };
  }

  return { tasks: [], meta: defaultMeta };
}

export function useTaskList(query: TaskListQuery, accessToken: string | null) {
  const { page, limit, search, status: statusFilter, sortBy, order } = query;
  const [state, setState] = useState<TaskListState>({
    tasks: [],
    meta: { ...EMPTY_META, page, limit },
    status: 'idle',
    errorMessage: '',
  });
  const [reloadKey, setReloadKey] = useState(0);

  const reload = useCallback(() => {
    setReloadKey((current) => current + 1);
  }, []);

  useEffect(() => {
    if (!accessToken) {
      setState({
        tasks: [],
        meta: { ...EMPTY_META, page, limit },
        status: 'idle',
        errorMessage: '',
      });
      return;
    }

    const controller = new AbortController();

    async function load(): Promise<void> {
      setState((current) => ({
        ...current,
        status: 'loading',
        errorMessage: '',
      }));

      try {
        const response = await listTasks(
          {
            page,
            limit,
            search,
            status: statusFilter,
            sortBy,
            order,
          },
          accessToken as string,
          controller.signal,
        );

        const { tasks, meta } = extractTasksAndMeta(response, page, limit);

        setState({
          tasks,
          meta,
          status: tasks.length === 0 ? 'empty' : 'success',
          errorMessage: '',
        });
      } catch (error) {
        if (isAbortError(error)) {
          return;
        }
        setState({
          tasks: [],
          meta: { ...EMPTY_META, page, limit },
          status: 'error',
          errorMessage: getHttpErrorMessage(error),
        });
      }
    }

    void load();

    return () => controller.abort();
  }, [
    accessToken,
    page,
    limit,
    search,
    statusFilter,
    sortBy,
    order,
    reloadKey,
  ]);

  return { ...state, reload };
}