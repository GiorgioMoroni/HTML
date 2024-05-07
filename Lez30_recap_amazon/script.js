

const salva = () => {
    let nome = document.getElementById("input-nome").value;
    let desc = document.getElementById("input-descrizione").value;
    let prez = document.getElementById("input-prezzo").value;
    let cate = document.getElementById("select-categoria").value;

    let ogg = {
        nome,
        desc,
        prez,
        cate
    }
    let elenco = JSON.parse(localStorage.getItem('oggetti_amz'));
    elenco.push(ogg);

    localStorage.setItem('oggetti_amz', JSON.stringify(elenco));

    document.getElementById("input-nome").value = "";
    document.getElementById("input-descrizione").value = "";
    document.getElementById("input-prezzo").value = "";
    document.getElementById("select-categoria").value = "";
}

const stampa = () => {
    let elenco = JSON.parse(localStorage.getItem('oggetti_amz'));

    let stringaTabella = '';

    for(let [idx, item] of elenco.entries()){
        stringaTabella += 
        <tr>
            <td>${idx + 1}</td>
            <td>${item.nome}</td>
            <td>${item.desc}</td>
            <td>${iprezzo}</td>
            <td>${item.categoria}</td>

        </tr>
    }
    document.getElementById("corpo-tabella").innerHTML = stringTabella;
}




let elenco = localStorage.getItem('oggetti_amz');
if(!elenco){
    localStorage.setItem('oggetti_amz', JSON.stringify([]));
}