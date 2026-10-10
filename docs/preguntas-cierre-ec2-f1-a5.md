# Preguntas de cierre - EC2 F1 A5

## 1. ¿Qué problema resuelve React al construir una interfaz?
Permite construir interfaces declarativas mediante componentes reutilizables, evitando la manipulación manual y compleja del DOM.

## 2. ¿Qué es un componente?
Es una pieza modular e independiente de la interfaz que devuelve código TSX.

## 3. ¿Por qué los componentes comienzan con mayúscula?
Para que React distinga entre etiquetas HTML nativas (`div`, `button`) y componentes propios (`TaskItem`).

## 4. ¿Qué diferencia existe entre HTML y TSX?
TSX requiere el cierre obligatorio de todas las etiquetas, usa `className` en lugar de `class`, y permite insertar código TypeScript entre llaves `{}`.

## 5. ¿Para qué se utiliza className?
Para asignar clases CSS en TSX, evitando conflictos con la palabra reservada `class` de JavaScript.

## 6. ¿Qué son las propiedades o props?
Son los datos que un componente padre le pasa a un componente hijo para configurar su contenido o apariencia.

## 7. ¿Cómo ayuda TypeScript a validar las propiedades?
A través de interfaces, asegurando en tiempo de desarrollo que se reciban los tipos y valores correctos.

## 8. ¿Cuál es la responsabilidad de App.tsx?
Funcionar como el componente raíz que organiza e integra toda la estructura visual principal.

## 9. ¿Por qué la interfaz se dividió en varios componentes?
Para cumplir con el principio de responsabilidad única, facilitar el mantenimiento y reutilizar código.

## 10. ¿Por qué los botones todavía están deshabilitados?
Porque esta fase se enfoca únicamente en maquetación y tipado; la interactividad con estado se verá después.

## 11. ¿Qué componente consideras más reutilizable y por qué?
`TaskItem`, porque se adapta dinámicamente mediante props para renderizar cualquier título y estado.

## 12. ¿Qué dificultad encontraste y cómo la resolviste?
Adaptar los atributos HTML a la sintaxis de TSX (`className`), lo cual se resolvió aplicando las reglas de React y los avisos del linter.