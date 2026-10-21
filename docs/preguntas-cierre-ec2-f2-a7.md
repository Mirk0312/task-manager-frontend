# Preguntas de cierre EC2 F2 A7

## 1. ¿Qué diferencia existe entre una variable local y el estado de React?
Una variable local ordinaria se reinicia cada vez que el componente se vuelve a renderizar y no notifica a React sobre sus cambios, por lo que la interfaz no se actualiza. En cambio, el estado de React (`useState`) persiste su valor entre renderizados y, al ser modificado, solicita automáticamente a React que redibuje el componente para reflejar el nuevo valor en la interfaz.

## 2. ¿Qué valores devuelve useState?
Devuelve un arreglo con dos elementos: el valor actual del estado y una función actualizadora para modificar dicho valor.

## 3. ¿Por qué useState se declara en el nivel superior del componente?
Para garantizar que React mantenga el mismo orden y la misma cantidad de llamadas a los Hooks en cada renderizado del componente. Declararlos dentro de condiciones o bucles rompería las reglas internas de los Hooks.

## 4. ¿Qué significa que un campo sea controlado?
Significa que el valor del elemento de entrada (`value`) está controlado directamente por el estado del componente y cualquier cambio en él (`onChange`) actualiza dicho estado.

## 5. ¿Por qué handleSubmit utiliza preventDefault?
Para evitar el comportamiento por defecto del navegador en los formularios, el cual recarga la página completa al hacer clic en enviar.

## 6. ¿Cómo comunica TaskForm una nueva tarea a App?
Mediante una función recibida a través de las propiedades (`props`) enviada desde el componente padre (`App`). El formulario procesa los datos y ejecuta esa función pasando el título como argumento.

## 7. ¿Por qué App funciona como fuente de verdad?
Porque almacena el estado principal de la colección de tareas en el nivel superior, distribuyendo los datos y las funciones de modificación hacia los componentes hijos mediante props.

## 8. ¿Cómo se implementa Create sin utilizar push?
Utilizando el operador *spread* (`...`) junto con la función actualizadora del estado para crear un nuevo arreglo que incluye la nueva tarea al inicio, preservando la inmutabilidad.

## 9. ¿Cómo permite map actualizar una sola tarea?
Recorre el arreglo de tareas y evalúa el identificador de cada elemento; si coincide con el que se desea modificar, devuelve un nuevo objeto con las propiedades actualizadas usando *spread*, y si no coincide, devuelve el objeto original intacto.

## 10. ¿Cómo utiliza filter la operación Delete?
Evalúa cada elemento del arreglo y retorna únicamente aquellos cuyo identificador sea diferente al ID que se mandó eliminar, descartando el seleccionado y generando un nuevo arreglo.

## 11. ¿Por qué se emplea una función actualizadora en setTasks?
Porque garantiza que la actualización del estado se base siempre en el valor más reciente y seguro del estado anterior, evitando problemas de sincronización en actualizaciones concurrentes o múltiples.

## 12. ¿Qué información conserva TaskItem como estado local?
Conserva únicamente el estado temporal de la edición (si se encuentra editando o no, y el texto borrador del título que se está escribiendo).

## 13. ¿Por qué los cambios desaparecen al recargar la página?
Porque el estado se almacena exclusivamente en la memoria RAM del navegador y no se está utilizando persistencia externa como `localStorage` o una API REST en esta fase.

## 14. ¿Qué dificultad encontraste y cómo la resolviste?
Una dificultad común fue asegurar que los selectores de clases CSS coincidieran perfectamente entre los componentes para que los estilos dinámicos (como el tachado) aplicaran de forma correcta, lo cual se resolvió revisando la correspondencia exacta de las clases en los archivos TSX y CSS.