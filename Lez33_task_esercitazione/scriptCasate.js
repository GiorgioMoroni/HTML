contatoreGriff = 0;
contatoreTass = 0;
contatoreCorv = 0;
contatoreSerp = 0;



const stampaBacchette = () => {
    let elenco = JSON.parse( localStorage.getItem('bacchette_cst') );

    let stringaTabella = '';
    for(let [casata, ] of elenco.entries()){
        if(casata = 'GD')
            stringaTabella += `
                <tr>
                    <td></td>
                    <td>${casata}</td>
                    <td></td>
                    <td></td>
                    <td>${item.lung}</td>
                    <td>${item.res}</td>
                    <td>${item.nome}</td>
                    <td>${item.casata}</td>
                    
                </tr>
            `;
    }

    document.getElementById("corpo-casate").innerHTML = stringaTabella;
}
    