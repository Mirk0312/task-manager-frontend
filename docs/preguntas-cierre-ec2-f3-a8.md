# Preguntas de cierre EC2 F3 A8

## 1. ¿Por qué las reglas de validación se colocaron en una utilidad?
Para centralizar la lógica de negocio del título en un solo lugar y evitar duplicar código de validación entre los componentes de registro y edición.

## 2. ¿Qué significa el retorno string | null de validateTaskTitle?
Indica que la función devuelve un mensaje de texto descriptivo si existe un error, o un valor nulo (`null`) cuando el título cumple correctamente con todas las reglas establecidas.

## 3. ¿Qué función cumplen aria-invalid, aria-describedby y role="alert"?
Aportan accesibilidad (a11y): `aria-invalid` comunica si el campo contiene errores, `aria-describedby` lo vincula con los textos de ayuda o error correspondientes, y `role="alert"` anuncia de forma automática los mensajes a los lectores de pantalla.

## 4. ¿Por qué query, filter y sortBy son estados controlados?
Porque sus valores se gestionan directamente mediante React y se sincronizan en tiempo real con los campos de entrada de la interfaz de usuario.

## 5. ¿Por qué visibleTasks no debe almacenarse como estado independiente?
Porque es un dato derivado que se calcula en cada renderizado a partir del estado principal (`tasks`) y los criterios de vista, evitando duplicar datos y previniendo riesgos de inconsistencia.

## 6. ¿Cómo se normaliza una búsqueda?
Eliminando los espacios en blanco externos mediante `.trim()` y convirtiendo todo el texto a minúsculas usando la configuración regional con `toLocaleLowerCase('es-MX')` para asegurar una comparación uniforme.

## 7. ¿Por qué se crea una copia antes de utilizar sort?
Porque el método `sort` muta directamente el arreglo sobre el cual se ejecuta; por ello, se genera una copia inmutable empleando el operador spread (`[...filteredTasks]`).

## 8. ¿Qué responsabilidad tiene task-query.service.ts?
Transformar de forma pura los datos recibidos mediante filtrado y ordenamiento, sin interactuar con componentes visuales ni modificar el estado principal de la aplicación.

## 9. ¿Por qué el resultado de JSON.parse se trata como unknown?
Porque `JSON.parse` puede producir cualquier estructura de datos, por lo que se debe tipificar de forma segura como `unknown` antes de validarlo explícitamente.

## 10. ¿Qué comprueba la función isTask?
Verifica defensivamente que un valor desconocido posea la estructura exacta y los tipos de datos válidos correspondientes a la interfaz `Task`.

## 11. ¿Qué ventaja ofrece la inicialización diferida de useState?
Permite pasar una función al hook `useState` para que React ejecute la lectura de `localStorage` únicamente al crear el estado inicial, evitando lecturas innecesarias en cada renderizado.

## 12. ¿Por qué localStorage se sincroniza mediante useEffect?
Porque `localStorage` representa un sistema de almacenamiento externo al ciclo de vida de React, y el efecto permite sincronizar los datos automáticamente cada vez que el arreglo `tasks` experimenta cambios.

## 13. ¿Por qué TaskSummary recibe tasks y TaskList recibe visibleTasks?
Porque `TaskSummary` requiere calcular el resumen global con el total real de todas las actividades, mientras que `TaskList` se encarga de renderizar únicamente los elementos filtrados y visibles para el usuario.

## 14. ¿Qué información se pierde y cuál permanece al recargar?
Permanecen guardadas todas las operaciones CRUD (tareas creadas, estados actualizados y títulos editados) en el almacenamiento local; se reinician únicamente los criterios temporales de búsqueda, filtros y ordenamiento.

## 15. ¿Qué dificultad encontraste y cómo la resolviste?
Una dificultad común fue asegurar el tipado defensivo con `unknown` al recuperar datos del navegador, la cual se resolvió implementando funciones de validación de tipo exhaustivas (`isTask`) antes de aceptar la información en el estado.