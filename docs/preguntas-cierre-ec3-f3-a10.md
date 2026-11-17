# Preguntas de Cierre EC3 F3 A10

## 1. ¿Qué ventajas ofrece separar los servicios de la API de los componentes visuales en React?
Permite mantener una arquitectura limpia y modular. Los componentes se enfocan únicamente en la interfaz de usuario y los estados visuales, mientras que los servicios encapsulan la lógica de red (`fetch`), facilitando el mantenimiento, la reutilización de código y la depuración de errores HTTP.

## 2. ¿Por qué es importante tipar las respuestas de la API con TypeScript en lugar de utilizar `any`?
Evita errores en tiempo de ejecución al garantizar que la estructura de los datos devueltos por el backend (como las listas de tareas o los metadatos de paginación) coincida exactamente con lo que espera el frontend, mejorando el autocompletado y la seguridad del código.

## 3. ¿Cómo interviene el proxy de Vite en la comunicación con el servidor backend durante el desarrollo?
Evita problemas de CORS al permitir que las peticiones realizadas a rutas relativas (como `/api/tasks`) sean redirigidas automáticamente por el servidor de desarrollo de Vite hacia el puerto del backend (por ejemplo, `http://localhost:3000`).

## 4. ¿Qué rol cumple el manejo de estados asíncronos (carga, éxito, error y vacío) en la experiencia de usuario?
Garantiza una interfaz fluida e informativa, permitiendo mostrar indicadores de carga (`loading`), avisos cuando no hay registros (`empty`), mensajes claros ante fallos de red (`error`) o contenido exitoso sin dejar la pantalla en blanco.

## 5. ¿Qué dificultad encontraste al conectar el frontend con el backend y cómo la resolviste?
(Respuesta personal según tu experiencia, por ejemplo: Asegurar la correcta sincronización de los modelos de datos y el manejo de los encabezados de las peticiones HTTP).