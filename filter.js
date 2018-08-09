//filter
let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

let senators = [
    {name: "Silvia Giacoppo", proChoice: false},
    {name: "Rodolfo Urtubey", proChoice: false},
    {name: "Fernando Solanas", proChoice: true},
    {name: "Beatriz Mirkin", proChoice: true},
    {name: "Magdalena Odarda", proChoice: true}
]

let senatorsProChoice = senators.filter(senator => senator.proChoice);