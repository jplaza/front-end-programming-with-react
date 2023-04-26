# Tarea 1

Se dice que la programación funcional es declarativa, permite expresar la
solución a un problema en términos del qué en lugar del cómo. A lo largo de este
módulo de Front-end Programming con React utilizaremos preferentemente este
estilo de programación.

Estos ejercicios tiene el objetivo de ayudarlos a familiarce un poco más con las
funciones para arreglos de JS que ya aprendieron.

Aquí la documentación a las funciones y una característica del lenguaje que
necesitarán para resolver los siguientes ejercicios

[Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)<br/>
[Array.prototype.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)<br/>
[Array.prototype.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)<br/>
[Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)


## Ejercicio 1

Dado un listado de estudiantes con su nombre y sus notas, obtén la nota promedio
de cada estudiante y retorna un listado de los estudiantes que hayan obtenido un
promedio mayor a 90.

**Datos de entrada**

```javascript
const students = [
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [75, 80, 85] },
  { name: "Charlie", scores: [90, 95, 85] },
  { name: "David", scores: [100, 100, 100] }
];
```

**Resultado esperado**

```javascript
[
  {
    name: "David",
    average: 100
  }
]
```

<div style="page-break-after: always;"></div>

## Ejercicio 2

Dado un listado de libros cada uno con su categoría, precio y nombre, obtén el
precio promedio y el precio máximo por cada categoría. El resultado deberá ser
un arreglo de objetos, cada objeto represeta a una categoría con su precio
promedio y precio más alto.


**Datos de entrada**

```javascript
const books = [
  { name: "Física 1", price: 20, category: "Física" },
  { name: "Cálculo 1", price: 30, category: "Cálculo" },
  { name: "Física 2", price: 40, category: "Física" },
  { name: "Cálculo 2", price: 50, category: "Cálculo" },
  { name: "Cálculo 3", price: 60, category: "Cálculo" },
  { name: "Física 3", price: 70, category: "Física" },
  { name: "Cálculo 4", price: 80, category: "Cálculo" },
  { name: "Física 4", price: 90, category: "Física" },
];
```

**Resultado esperado**

```javascript
[
  { category: 'Física', averagePrice: 55, highestPrice: 90 },
  { category: 'Cálculo', averagePrice: 55, highestPrice: 80 }
]
```
