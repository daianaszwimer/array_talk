//add new item in array
//Mutating way
const pods = [ 'JB', 'LD', 'Growth', 'Automation', 'Infra' ]
const newPods = pods
newPods.push('React Native')
console.log(pods === newPods) // true :-(
//@todo: daiu: remove this error log from mutability.js
console.log(pods) // [ 'JB', 'LD', 'Growth', 'Automation', 'Infra', 'React Native' ]


//With spread operator
const pods = [ 'JB', 'LD', 'Growth', 'Automation', 'Infra' ]
const newPods = [ ...pods, 'React Native' ]
console.log(pods === newPods) // false :-)
console.log(pods) // [ 'JB', 'LD', 'Growth', 'Automation', 'Infra' ]
console.log(newPods) // [ 'JB', 'LD', 'Growth', 'Automation', 'Infra', 'React Native' ]

//sort array items
//Mutating way
const movies = [ 'Frozen', 'Moana', 'The Incredibles', 'Monsters Inc' ]
const sortedMovies = movies.sort()
console.log(sortedMovies === movies) // true :-(
console.log(movies) // [ "Frozen", "Moana", "Monsters Inc", "The Incredibles"]

//With spread operator
const movies = [ 'Frozen', 'Moana', 'The Incredibles', 'Monsters Inc' ]
const sortedMovies = movies.slice().sort()
console.log(sortedMovies === movies) // false :-D
console.log(movies) // ["Frozen", "Moana", "The Incredibles", "Monsters Inc"]


//With spread operator
const characters = [ 'Obi-Wan', 'Vader', 'Luke' ]
// Changing Vader to Anakin
const backInTime = characters.map(char => char === 'Vader' ? 'Anakin' : char)
console.log(backInTime) // [ 'Obi-Wan', 'Anakin', 'Luke' ]
// All characters uppercase
const shoutOut = characters.map(char => char.toUpperCase())
console.log(shoutOut) // [ 'OBI-WAN', 'VADER', 'LUKE' ]


// Merging two character sets

const otherCharacters = [ 'Yoda', 'Finn' ]
const moreCharacters = [ ...characters, ...otherCharacters ]
console.log(moreCharacters) // [ 'Obi-Wan', 'Vader', 'Luke', 'Yoda', 'Finn' ]

const anotherCharacters = [...characters]
const otherCharacters = [ 'Yoda', 'Finn' ]
const moreCharacters = anotherCharacters.concat(otherCharacters)
console.log(moreCharacters) // [ 'Obi-Wan', 'Vader', 'Luke', 'Yoda', 'Finn' ]



//remove an item
//Mutating way
const fruits = ['peach', 'pear', 'apple', 'plum']
const newFruits = fruits
newFruits.splice(2, 1)
console.log(newFruits === fruits) // true :-(

//or

const vegetables = ['lettuce', 'corn', 'onion', 'spinach']
const newVegetables = vegetables
newVegetables.pop()
console.log(vegetables) // ["lettuce", "corn", "onion"]
//
//how would you do it (immutable way)? 
//maybe we can filter *cough cough* the element that i dont want
//
const fruits = ['peach', 'pear', 'apple', 'plum']
const newFruits = fruits.slice(0, 2).concat(fruits.slice(3))
//@todo: daiu: remove this error log from mutability.js
console.log(newFruits) //["peach", "pear", "plum"]
console.log(fruits) //["peach", "pear", "apple", "plum"]

//sources: 
//https://wecodetheweb.com/2016/02/12/immutable-javascript-using-es6-and-beyond/
//https://jaketrent.com/post/remove-array-element-without-mutating/