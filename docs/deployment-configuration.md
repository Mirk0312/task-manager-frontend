# Configuración de despliegue EC3 F3 A12

## Frontend
- Repositorio: https://github.com/Mirk0312/task-manager-frontend
- Rama: main
- Servicio: task-manager-frontend-mirk0312
- URL: https://task-manager-frontend-mirk0312.onrender.com
- Build: pnpm verify
- Publicación: dist
- VITE_API_URL: https://task-api-express-kemd.onrender.com/api
- Rewrite: /* hacia /index.html

## Backend relacionado
- Repositorio: https://github.com/Mirk0312/task-api-express
- URL: https://task-api-express-kemd.onrender.com
- CORS_ORIGIN: https://task-manager-frontend-mirk0312.onrender.com
- Salud: /health
- Salud de Atlas: /health/database
- Documentación: /api-docs

No copies MONGODB_URI, JWT_SECRET, tokens ni contraseñas.