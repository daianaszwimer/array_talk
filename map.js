//map
let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
let doubleArray = numbers.map((number)=>{
    return number * 2;
});


var str = '12345';
var newStr = [].map.call(str, function(x) {//o bien Array.prototype.map.call
	//esta funcion nos transforma el string en array
  return x;
}).reverse().join(''); //returns '54321'

let pods = [
  ["JB", "Daiu"],
  ["JB", "Migue"],
  ["JB", "Nico"],
  ["JB", "Her"],
  ["LD", "Joni"],
  ["Growth", "Santi"]
]

//quiero un array de objetos que tenga nombre de pod y nombre de persona

let people = pods.map(([podName, name])=>({podName, name}))
console.log(people)
/*
0: {podName: "JB", name: "Daiu"}
1: {podName: "JB", name: "Migue"}
2: {podName: "JB", name: "Nico"}
3: {podName: "JB", name: "Her"}
4: {podName: "LD", name: "Joni"}
5: {podName: "Growth", name: "Santi"}
length: 6
__proto__: Array(0)
*/

let names = people.map((person)=>{
    return person.name;
});