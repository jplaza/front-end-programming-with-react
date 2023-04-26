// utils

const average = (...numbers) => (
  numbers.reduce((a, b) => a + b, 0) / numbers.length
)

function printResult(exercise, result) {
  const marginSize = 2
  const res = JSON.stringify(result, null, 4);
  const max = Math.max(...res.split('\n').map(l => l.length)) + (2 * marginSize)
  const sep = ''.concat(...Array(max).fill('-'), '\n\n')
  const formatted = res.split('\n').map(l => '  ' + l).join('\n')
  console.log(`${sep}  Resultado ejercicio ${exercise}:\n\n${formatted}\n\n${sep}`)
}

// Ejercicio 1 

const students = [
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [75, 80, 85] },
  { name: "Charlie", scores: [90, 95, 85] },
  { name: "David", scores: [100, 100, 100] }
];


function calcScoresAvg(student) {
  student.average = average(...student.scores);
  delete student.scores;
  return student;
}

const isHighPerformer = student => student.average > 90;

const resultEx1 = students.map(calcScoresAvg).filter(isHighPerformer) //=

printResult(1, resultEx1) //

//Ejercicio 2

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

const groupBy = (arr, key) => arr.reduce((acc, el) => {
  const groupKey = el[key]
  let group = (acc[groupKey] || [])
  group.push(el)
  acc[groupKey] = group
  return acc
}, {});

const groupedBooks = groupBy(books, "category");
const resultEx2 = Object.entries(groupedBooks).map(([category, books]) => (
  {
    category,
    averagePrice: average(...books.map(p => p.price)),
    highestPrice: Math.max(...books.map(p => p.price))
  }
)) //=

printResult(2, resultEx2)