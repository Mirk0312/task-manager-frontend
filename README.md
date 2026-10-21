# Administrador de tareas - Frontend

Aplicación desarrollada con React, TypeScript, Vite y PNPM para administrar tareas.

## Alcance actual
La aplicación administra una colección local de tareas mediante estado de React (`useState`).
Actualmente permite:
- Registrar tareas mediante un formulario controlado.
- Consultar la colección en tiempo real.
- Completar y reabrir tareas.
- Editar títulos de tareas con opción de cancelar.
- Eliminar tareas con confirmación.
- Calcular el resumen automáticamente después de cada operación.
- Mostrar un estado vacío cuando no hay registros.
- Componente independiente para insignias de estado.
- Diseño adaptable.

Los cambios permanecen en memoria y se reinician al recargar la página.

## Operaciones CRUD
- **Create**: registro mediante el formulario (operador *spread*).
- **Read**: renderizado dinámico de la colección (*map*).
- **Update**: cambio de estado y edición de títulos (*map* y *spread*).
- **Delete**: eliminación confirmada (*filter*).

## Tecnologías
- React
- TypeScript
- Vite
- PNPM
- CSS
- Git y GitHub

## Instalación
```bash
pnpm install