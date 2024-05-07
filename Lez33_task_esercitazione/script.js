const stampa = () => {
    let elenco = JSON.parse( localStorage.getItem('bacchette_olv') );

    let stringaTabella = '';
    for(let [idx, item] of elenco.entries()){
        stringaTabella += `
            <tr>
                <td>${idx + 1}</td>
                <td>${item.codice}</td>
                <td>${item.mate}</td>
                <td>${item.nucleo}</td>
                <td>${item.lung}</td>
                <td>${item.res}</td>
                <td>${item.nome}</td>
                <td>${item.casata}</td>
                
            </tr>
        `;
    }

    document.getElementById("corpo-tabella").innerHTML = stringaTabella;
}

contatoreGriff = 0;
contatoreTass = 0;
contatoreCorv = 0;
contatoreSerp = 0;




const salva = () => {
    let codice = document.getElementById("input-codice").value;
    let mate = document.getElementById("input-materiale").value;
    let nucleo = document.getElementById("input-nucleo").value;
    let lung = document.getElementById("input-lunghezza").value;
    let res = document.getElementById("select-resistenza").value;
    let nome = document.getElementById("input-nome").value;
    let casata = document.getElementById("select-casata").value;


    let bacchetta = {
        codice,
        mate,
        nucleo,
        lung,
        res,
        nome,
        casata

    }

    if(casata = 'GD')
        contatoreGriff++;
    else if( casata = 'CN')
        contatoreCorv++;
    else if(casata = 'TR')
        contatoreTass++;
    else if(casata = 'SV'){
        contatoreSerp++;
    }

    let elenco = JSON.parse( localStorage.getItem('bacchette_olv') ); //Prendo il vecchio elenco decodificato sotto forma di oggetto
    elenco.push(bacchetta);                                               //Aggiungo l'elemento al vecchio elenco
    localStorage.setItem('bacchette_olv', JSON.stringify(elenco));    //Ricodifico l'elenco (sotto forma di stringa) per poterlo salvare nel Local Storage

    document.getElementById("input-codice").value ="";
    document.getElementById("input-materiale").value ="";
    document.getElementById("input-nucleo").value ="";
    document.getElementById("input-lunghezza").value ="";
    document.getElementById("select-resistenza").value ="";
    document.getElementById("input-nome").value ="";
    document.getElementById("select-casata").value ="";

    stampa();
    

    $("#modaleInserimento").modal("hide");

    console.log(contatoreGriff, contatoreCorv, contatoreTass, contatoreSerp)
}

//Creazione elenco se non esiste
let elencoString = localStorage.getItem('bacchette_olv');
if(!elencoString)
    localStorage.setItem('bacchette_olv', JSON.stringify([]) );

// setInterval(() => {
//     stampa(); 
// }, 1000);

stampa(); 




