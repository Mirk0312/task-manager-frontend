# Preguntas de cierre - EC2 F1 A6

## 1. ¿Qué función cumple la interfaz Task?
Define el contrato o estructura obligatoria que deben cumplir todos los objetos de tipo tarea dentro de la aplicación.

## 2. ¿Qué diferencia existe entre Task y TaskStatus?
`Task` es una interfaz que describe el objeto completo de una tarea, mientras que `TaskStatus` es un tipo unión que limita los valores posibles exclusivamente a 'pending' o 'completed'.

## 3. ¿Qué significa declarar un arreglo como Task[]?
Indica que la variable es un arreglo y que cada uno de los elementos contenidos en él debe cumplir estrictamente con la estructura de la interfaz Task.

## 4. ¿Qué hace el método map?
Recorre cada uno de los elementos de una colección, aplica una función transformadora y devuelve un nuevo arreglo con los resultados.

## 5. ¿Qué resultado produce map dentro de TaskList?
Transforma cada objeto del arreglo de tareas en un componente visual independiente de tipo `<TaskItem />`.

## 6. ¿Para qué utiliza React la propiedad key?
Para identificar de manera única y estable cada elemento dentro de una lista, optimizando el rendimiento al renderizar.

## 7. ¿Por qué se utiliza task.id y no el índice?
Porque el identificador único (task.id) es estable y pertenece al modelo de datos, evitando errores si el orden de los elementos cambia.

## 8. ¿Cómo se envía una tarea de TaskList a TaskItem?
Mediante una propiedad (prop) llamada `task`, pasando el objeto completo en cada iteración del map.

## 9. ¿Cómo se comunican App, TaskSummary y TaskList?
Mediante un flujo unidireccional descendente, donde el componente padre (App) posee la colección y la distribuye a los hijos mediante props.

## 10. ¿Qué es el renderizado condicional?
Es la capacidad de React para mostrar diferentes interfaces o elementos visuales dependiendo de si se cumple o no una condición lógica.

## 11. ¿Por qué el resumen se calcula a partir de la colección?
Porque evita duplicar información o mantener estados inconsistentes; los totales se derivan de forma automática de los datos existentes.

## 12. ¿Qué dificultad encontraste durante la refactorización y cómo la resolviste?
Asegurar el tipado correcto al extraer la insignia al nuevo componente, lo cual se resolvió importando y aplicando correctamente el tipo `TaskStatus`.