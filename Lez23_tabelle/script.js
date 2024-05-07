let elenco = ["Giovanni", "Mario", "Valeria", "Mariko"];

// console.log(elenco);
// console.table(elenco);

// elenco.forEach(element => {
//     console.log(element)
// });

let contenuto = "";

for(let i = 0; i<elenco.length; i++){
    contenuto += `
        <tr>
            <td>${elenco[i]}</td>
        </tr>
    `
}

document.getElementById("corpo-tabella").innerHTML = contenuto;