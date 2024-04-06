let centena = 0;
let dezena = 0;
let unidade = 0;

let display_centena = document.getElementById('num_centena');
let display_dezena = document.getElementById('num_dezena');
let display_unidade = document.getElementById('num_unidade');

atualizarDisplay(centena, dezena, unidade);


function sumCentena() {
    centena = centena + 1;
    if (centena === 10) {
        centena = 9;
    }
    atualizarDisplay(centena, dezena, unidade);
}

function sumDezena() {
    dezena = dezena + 1;
    if (dezena === 10 && centena === 9){
        dezena = 9;
        return
    }
    if (dezena === 10) {
        dezena = 0;
        sumCentena();
    }
    atualizarDisplay(centena, dezena, unidade);
}

function sumUnidade() {
    unidade = unidade + 1;
    if (unidade === 10 && dezena === 9 && centena === 9){
        unidade = 9;
        return
    }
    if (unidade === 10) {
        unidade = 0;
        sumDezena();
    }
    atualizarDisplay(centena, dezena, unidade);
}

function subCentena(){
    centena = centena - 1;
    if (centena === -1 ) {
        centena = 0;
    }
    atualizarDisplay(centena,dezena,unidade);
}

function subDezena(){
    dezena = dezena - 1;
    if (dezena === -1 && centena == 0){
        dezena = 0;
        return
    }
    if (dezena === -1 ){
        dezena = 9;
        subCentena();
    }
    atualizarDisplay(centena, dezena, unidade)
}

function subUnidade(){
    unidade = unidade - 1;
    if (unidade === -1 && dezena == 0 && centena == 0){
        unidade = 0;
        return
    }
    if (unidade === -1 ){
        unidade = 9;
        subDezena();
    }
    atualizarDisplay(centena, dezena, unidade)
}

function reset(){
    centena = 0;
    dezena = 0;
    unidade = 0;
    atualizarDisplay(centena, dezena, unidade);
}



function atualizarDisplay(centena, dezena, unidade) {
    display_centena.innerHTML = centena; 
    display_dezena.innerHTML = dezena;
    display_unidade.innerHTML = unidade;
}

