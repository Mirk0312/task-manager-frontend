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

## Integración con la API REST
La aplicación consume la API de tareas mediante Fetch API.

### Requisitos
- Backend disponible en http://localhost:3000
- Frontend ejecutado mediante Vite
- MongoDB Atlas conectado desde el Backend

### Configuración local
1. Copiar `.env.example` como `.env.local`.
2. Confirmar `VITE_API_URL=/api`.
3. Iniciar el Backend con `pnpm dev`.
4. Iniciar el Frontend con `pnpm dev`.

### Funciones remotas
- Listado paginado.
- Búsqueda, filtro y ordenamiento.
- Creación, edición y cambio de estado.
- Eliminación con confirmación.
- Consulta de detalle por identificador.
- Estados de carga, vacío, error y reintento.

## Ejecución
```bash
pnpm install
pnpm dev

### Compilación
```bash
pnpm build