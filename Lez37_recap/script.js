// let saluta = "Hello world";
// saluta = "Saluta Andonio";

// let intero = 12334;
// let float = 123.23;

// let prova = null; //Alloca memoria
// let provaDue; //Non alloca memoria

// if(provaDue){
//     console.log("caso positivo")
// }
// else{
//     console.log("caso negativo")
// }

//--------------------------------------------------

// let persona = {
//     nome: "Giovanni",
//     cognome: "Pace"
// }

// console.log(persona)

// persona.eta = 37

// console.log(persona)

//--------------------------------------------------

// function saluta(varNome){
//     return `Ciao, come va ${varNome}?`;
// }

// console.log(saluta("Giovanni"));
// console.log(saluta("Valeria"));
// console.log(saluta("Marika"));
// console.log(saluta({nome: "Giovanni"}));

//--------------------------------------------------

// let oggi = new Date();
// console.log(oggi);

// let insieme = new Set ([1, 2, 3, 4, 1, "Lamborghini", {nome: "Giovanni"}]); //Non permette la permanenza di doppioni
// console.log(insieme);

//--------------------------------------------------

// let equivalenteHashTable = new Map();
// equivalenteHashTable.set("chiave uno", "Giovanni");
// equivalenteHashTable.set("chiave due", 52);
// equivalenteHashTable.set("chiave tre", {nome: "Giovanni"});
// equivalenteHashTable.set({nome: "Marika"}, {giardino: false});


// console.log(equivalenteHashTable.get({nome: "Marika"}));

// console.log(equivalenteHashTable.delete("chiave uno"));
// console.log(equivalenteHashTable.delete("chiave uno"));
// console.log(equivalenteHashTable);

//--------------------------------------------------

// let mappa = new Map(
//     [
//         ["chiave 1", "valore 1"],
//         ["chiave 2", "valore 2"],
//         ["chiave 3", "valore 3"],
//     ]

// );

// for(let chiave of mappa.keys()){
//     console.log(chiave)
// }
 
// for(let valore of mappa.values()){
//     console.log(valore)
// }
 
// mappa.forEach((valore,chiave) =>{
//     console.log(chiave, valore)
// })

//--------------------------------------------------

// let elenco = [1, 2, 3, 4, 5];

// let quadrati = elenco.map(
//     function(elem){
//         return elem * elem;
//     }
// )

// console.log(elenco);
// console.log(quadrati);

//--------------------------------------------------

// const persone = [
//     {nome: "Mario", cognome: "Rossi"},
//     {nome: "Luigi", cognome: "Bianchi"},
//     {nome: "Anna", cognome: "Verdi"},
// ];

// const elenco = persone.map(p => `${p.nome} ${p.cognome}`);

// console.log(persone);
// console.log(elenco);

//--------------------------------------------------

const persone = [
    {nome: "Mario", cognome: "Rossi"},
    {nome: "Luigi", cognome: "Bianchi"},
    {nome: "Anna", cognome: "Verdi"},
];

const indVal = persone.map((valore, indice) => `Indice: ${indice + 1}, valore: ${valore.nome}`);

console.log(indVal);















