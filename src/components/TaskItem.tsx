import type { Task } from '../models/task.interface';
import { TaskStatusBadge } from './TaskStatusBadge';

interface TaskItemProps {
  task: Task;
}

function formatTaskDate(value: string): string {
  const date = new Date(value);
  return new Intl.DateTimeFormat('es-MX', {
    dateStyle: 'medium',
  }).format(date);
}

export function TaskItem({ task }: TaskItemProps) {
  const { title, status, updatedAt } = task;
  
  return (
    <article className={`task-item task-item--${status}`} role="listitem">
      <div className="task-item_content">
        <h3 className="task-item_title">{title}</h3>
        <TaskStatusBadge status={status} />
     
        <p className="task-item_date">
          Actualizada: {''}
          <time dateTime={updatedAt}>{formatTaskDate(updatedAt)}</time>
        </p>
      </div>
      <div className="task-item_actions" role="group" aria-label={`Acciones para ${title}`}>
        <button type="button" disabled>
          Cambiar estado
        </button>
        <button type="button" disabled>
          Editar
        </button>
        <button type="button" className="button-danger" disabled>
          Eliminar
        </button>
      </div>
    </article>
  );
}