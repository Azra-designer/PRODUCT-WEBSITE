// const students = [
//     {
//         name: 'akash',
//         age: 21

//     },
//      {
//         name: 'talha',
//         age: 22

//     },
//      {
//         name: 'shan',
//         age: 23

//     },
//      {
//         name: 'amir',
//         age: 17
//     },
//      {
//         name: 'asad',
//         age: 18

//     }
// ]
// const fliteredStudents = students.filter((student) =>{
//     return student.age>=18
// })
// console.log(fliteredStudents)





// const expenses = [
//   { id: 1, title: "Food", amount: 500, category: "Essential" },
//   { id: 2, title: "Netflix", amount: 800, category: "Entertainment" },
//   { id: 3, title: "Petrol", amount: 1500, category: "Essential" },
//   { id: 4, title: "Pizza", amount: 700, category: "Entertainment" }
// ];

//  // Your program should
// Print all expenses using for...of
// Print object keys using for...in
// Create new array with tax added (map)
// Filter only Essential expenses
// Calculate total spending (reduce)
// Add new expense using spread
// Accept unlimited new expenses using rest parameter


// Print all expenses using for...of

// for(const expense of expenses) {
// console.log(expenses)
// console.log(expense.title)
// console.log(expense.amount)
// console.log(expense.category)
// console.log(expense.id)
// }

// Print object keys using for...in

// for (let key of expenses[0]) {
// //  console.log(key)
// console.log(expenses[0][key])
// }

// it gives value 
// for (let value in expenses[0]) {
// console.log(value)
// console.log(expenses[0][value])
// }

// it gives also value 
// for (let key in expenses[0]) {
//   console.log(expenses[0][key]);
// }


// // Create new array with tax added (map)
// expenses.map(()=>{

// })

// const taxedExpenses = expenses.map(exp => ({
//   ...exp,
//   amount: exp.amount * 1.1
// }));

// console.log(taxedExpenses)
// const taxedExpenses1 = expenses.map(expense => ({
//   ...expense,
//   amount: expense.amount * 1.1
// }));

// console.log(taxedExpenses1)

// const taxedExpenses2 = expenses.map(expenses => ({
//   ...expenses,
//   amount: expenses.amount * 1.1
// }));

// console.log(taxedExpenses2)

// expenses.map((expense, index) => {
//   console.log(index);
// });


// Filter only Essential expenses //

const expenses = [
  { id: 1, title: "Food", amount: 500, category: "Essential" },
  { id: 2, title: "Netflix", amount: 800, category: "Entertainment" },
  { id: 3, title: "Petrol", amount: 1500, category: "Essential" },
  { id: 4, title: "Pizza", amount: 700, category: "Entertainment" }
];

// const filteredExpense = expenses.filter((expense)=>
// expense.category === "Essential"
// )
// console.log(filteredExpense)


// // Calculate total spending (reduce)

// const total = expenses.reduce((x, y)=>{
//  return x + y.amount
// },0)
// console.log(total)


array.reduce((accumulator, currentValue) => {
   return something
}, initialValue)
