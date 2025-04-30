// Fave foods
let favoriteFoods = ['Pizza','Icecream','Chickentenders','Burgers'];
let firstFood = favoriteFoods [0]
let lastFood = favoriteFoods [favoriteFoods.length - 1]

console.log('First Food', firstFood)
console.log('Last Food', lastFood)

favoriteFoods.push("Pasta");

console.log('update favoriteFoods', favoriteFoods)

const Guest = ['Sam', 'John', 'Ally', 'Peter' ]
Guest.shift()

Guest.push("Nick");


console.log('guest.length'
)
console.log('update Guest', Guest)

let tasks = ["laundry", "groceries", "coding", "naps"];
function printTasks() {
    for ( let i = 0; i < tasks.length; i++  ){
        console.log(tasks[i]) }
}
function printTasks() {
    for (let i = 0; i < tasks.length; i++) {
        console.log((i + 1) + ". " + tasks[i]);
    }
}
printTasks();

let numbers = [1, 2, 3, 4, 5];

let reversed = [];

for (let i = numbers.length - 1; i >= 0; i--) {
reversed.push(numbers[i])
}
console.log(reversed)

function randomLunch(options) {
    let randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }
  
  let lunches = ["burrito", "pizza", "sandwich", "ramen"];
  console.log(randomLunch(lunches));