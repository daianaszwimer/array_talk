//map
let doubleArray = numbers.map((number)=>{
    return element * 2;
});

let names = people.map((person)=>{
    return person.name;
});

var str = '12345';
var newStr = [].map.call(str, function(x) {
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

let newPods = pods.map(([podName, name])=>({podName, name}))
