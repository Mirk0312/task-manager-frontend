1. *¿Qué es una aplicación de página única?*
Es una aplicación web (SPA) que carga una sola página HTML inicial y actualiza el contenido dinámicamente conforme el usuario navega, sin necesidad de recargar completamente la página del navegador.   

2. *¿Qué responsabilidad tiene BrowserRouter?*
Es el componente proveedor que mantiene sincronizada la interfaz de la aplicación con la URL del navegador utilizando el API de historial HTML5 (history), permitiendo detectar cambios en la ruta.

3. *¿Cuál es la diferencia entre Routes y Route*
-Routes: Funciona como un contenedor o escaneador que agrupa todas las rutas posibles y selecciona la primera que coincida exactamente con la URL actual.

-Route: Define una ruta específica individual, asociando un patrón de URL (como /tasks) con el componente visual que debe mostrarse.

4. *¿Qué es una ruta índice?*
Es la ruta predeterminada que se renderiza automáticamente dentro de un layout cuando la URL coincide exactamente con la ruta padre (por ejemplo, la ruta raíz / asignada a HomePage).

5. *¿Qué beneficio ofrece un layout?*
Permite reutilizar la estructura visual base de la aplicación (como el encabezado, el menú de navegación y el pie de página) en todas las vistas, evitando duplicar código y manteniendo una interfaz consistente.

6. *¿Qué función cumple Outlet?*
Actúa como un marcador de posición (placeholder) dinámico dentro del layout, indicando exactamente en qué parte de la pantalla deben renderizarse las páginas hijas según la URL activa.

7. *¿Qué diferencia existe entre Link y NavLink?*
-Link: Renderiza un enlace estándar para navegar entre rutas de forma interna sin recargar la página.

-NavLink: Es una versión especial de Link que detecta automáticamente si la ruta actual coincide con su destino, permitiendo aplicar clases CSS (como --active) para resaltar la opción seleccionada en el menú.

8. *¿Por qué no se utilizan enlaces <a> para navegar internamente?*
Porque las etiquetas <a> tradicionales provocan una recarga completa de la página en el navegador, lo que reinicia el estado de JavaScript y hace que la experiencia de usuario sea más lenta.

9. *¿Qué representa :taskId?*
Representa un parámetro dinámico o variable dentro de la ruta (por ejemplo, en /tasks/123), el cual puede cambiar dependiendo de la tarea específica que se esté consultando.

10. *¿Cómo se recupera un parámetro dinámico?*Utilizando el hook useParams() proporcionado por React Router, el cual extrae los valores de los parámetros definidos en la ruta actual (como taskId).

11. *¿Cuándo debe utilizarse useNavigate?*
Debe utilizarse cuando se necesita navegar de forma programática mediante código (por ejemplo, después de completar una acción como eliminar una tarea y redirigir automáticamente al usuario de regreso a la lista).

12. *¿Qué función cumple la ruta *?*
Funciona como una ruta comodín o de respaldo (catch-all) que atrapa cualquier dirección URL que no coincida con las rutas definidas, permitiendo mostrar la página de error 404 (NotFoundPage).

13. *¿Por qué el estado continúa administrado por App?*
Para mantener un estado global centralizado, permitiendo que múltiples páginas y componentes compartan, modifiquen y sincronicen la misma información de las tareas sin perder consistencia

14. *¿Por qué localStorage permanece en esta actividad?*
Para garantizar la persistencia de los datos, asegurando que las tareas registradas no se pierdan al cerrar o recargar el navegador.   

15. *¿Qué dificultad encontraste y cómo la resolviste?*
Una dificultad técnica fue manejar la tipado estricto en TypeScript al acceder al identificador de la tarea (task.id) en la vista de detalle y asegurar que el componente validara correctamente cuando la tarea no existía. Lo resolvimos validando la existencia del parámetro con useParams y asegurando que las propiedades tipadas coincidieran con la interfaz de la tarea.