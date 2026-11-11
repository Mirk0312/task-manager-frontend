# Administrador de tareas Frontend

Aplicación desarrollada con React, TypeScript, Vite, React Router y PNPM para administrar tareas.

## Funciones actuales
- Navegación SPA.
- Página de inicio.
- Administración de tareas.
- Detalle mediante una ruta dinámica.
- Página 404.
- Operaciones CRUD de tareas (Create, Read, Update, Delete).
- Validación centralizada de títulos al registrar y editar.
- Búsqueda de tareas por título en tiempo real y normalizada.
- Filtro de visualización por estado (Todas, Pendientes, Completadas).
- Ordenamiento de resultados por actualización reciente, creación reciente y título (A-Z).
- Persistencia de datos entre sesiones mediante `localStorage` con validación defensiva.
- Interfaz adaptable y accesible con atributos ARIA.

## Rutas
- `/`
- `/tasks`
- `/tasks/:taskId`
- `*`

## Tecnologías
- React
- TypeScript
- Vite
- React Router
- PNPM
- CSS
- Git y GitHub

## Ejecución
```bash
pnpm install
pnpm dev