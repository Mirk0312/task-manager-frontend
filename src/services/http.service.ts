// src/services/http.service.ts
import type { ApiErrorBody } from '../models/api.types';

export interface ApiErrorPayload {
  code?: string;
  message?: string;
  requestId?: string;
  details?: unknown;
}

export interface HttpErrorOptions {
  status: number;
  code?: string;
  message: string;
  requestId?: string;
  details?: unknown;
}

type UnauthorizedHandler = () => void;

const unauthorizedHandlers = new Set<UnauthorizedHandler>();

export function setUnauthorizedHandler(handler: UnauthorizedHandler): () => void {
  unauthorizedHandlers.add(handler);
  return () => {
    unauthorizedHandlers.delete(handler);
  };
}

function notifyUnauthorized(): void {
  for (const handler of unauthorizedHandlers) {
    handler();
  }
}

function resolveApiBaseUrl(): string {
  const raw = import.meta.env.VITE_API_URL?.trim();
  if (!raw) {
    return '/api';
  }
  return raw.replace(/\/+$/, '');
}

export class HttpError extends Error {
  readonly status: number;
  readonly code?: string;
  readonly requestId?: string;
  readonly details?: unknown;

  constructor(messageOrOptions: string | HttpErrorOptions, status?: number, code?: string) {
    if (typeof messageOrOptions === 'string') {
      super(messageOrOptions);
      this.name = 'HttpError';
      this.status = status ?? 0;
      this.code = code;
      return;
    }

    super(messageOrOptions.message);
    this.name = 'HttpError';
    this.status = messageOrOptions.status;
    this.code = messageOrOptions.code;
    this.requestId = messageOrOptions.requestId;
    this.details = messageOrOptions.details;
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function isApiErrorBody(value: unknown): value is ApiErrorBody {
  if (!isRecord(value)) {
    return false;
  }
  const error = value.error;
  return (
    isRecord(error) &&
    typeof error.code === 'string' &&
    typeof error.message === 'string'
  );
}

export function isAbortError(error: unknown): boolean {
  return error instanceof DOMException && error.name === 'AbortError';
}

export function isHttpError(error: unknown): error is HttpError {
  return error instanceof HttpError;
}

export async function httpRequest<T>(
  path: string,
  init: RequestInit = {},
  accessToken?: string | null,
): Promise<T> {
  const baseUrl = resolveApiBaseUrl();
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const url = `${baseUrl}${normalizedPath}`;

  const headers = new Headers(init.headers);
  if (!headers.has('Accept')) {
    headers.set('Accept', 'application/json');
  }
  if (init.body !== undefined && init.body !== null && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }
  if (accessToken) {
    headers.set('Authorization', `Bearer ${accessToken}`);
  }

  let response: Response;
  try {
    response = await fetch(url, {
      ...init,
      headers,
    });
  } catch (error) {
    if (isAbortError(error)) {
      throw error;
    }
    throw new HttpError({
      status: 0,
      code: 'NETWORK_ERROR',
      message: 'No fue posible conectar con el servidor.',
    });
  }

  if (response.status === 401) {
    notifyUnauthorized();
  }

  if (response.status === 204) {
    return undefined as T;
  }

  const contentType = response.headers.get('content-type') ?? '';
  let payload: unknown = null;

  if (contentType.includes('application/json')) {
    try {
      payload = await response.json();
    } catch {
      throw new HttpError({
        status: response.status,
        code: 'INVALID_RESPONSE',
        message: 'La API devolvió una respuesta JSON inválida.',
      });
    }
  } else {
    const text = await response.text();
    payload = text || null;
  }

  if (!response.ok) {
    if (isApiErrorBody(payload)) {
      throw new HttpError({
        status: response.status,
        code: payload.error.code,
        message: payload.error.message,
        requestId: payload.error.requestId,
        details: payload.error.details,
      });
    }

    const errorObj =
      isRecord(payload) && 'error' in payload
        ? (payload.error as ApiErrorPayload | undefined)
        : undefined;
    const message =
      errorObj?.message ||
      `La solicitud falló con estado ${response.status}.`;
    throw new HttpError({
      status: response.status,
      code: errorObj?.code ?? 'HTTP_ERROR',
      message,
      requestId: errorObj?.requestId,
      details: errorObj?.details,
    });
  }

  if (isRecord(payload) && 'data' in payload) {
    return (payload as { data: T }).data;
  }

  return payload as T;
}

export function getHttpErrorMessage(error: unknown): string {
  if (isHttpError(error)) {
    const reference = error.requestId ? ` Referencia: ${error.requestId}.` : '';
    return `${error.message}${reference}`;
  }
  if (error instanceof Error && error.message) {
    return error.message;
  }
  return 'Ocurrió un error inesperado.';
}