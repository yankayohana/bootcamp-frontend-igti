var valor = document.getElementById('valor');
var prazo = document.getElementById('prazo');
var juros = document.getElementById('juros');
var prazoResultado = document.getElementById('prazo-resultado');
var jurosResultado = document.getElementById('juros-resultado');
var amortizacaoTabela = document.querySelectorAll('#amortizacao-tabela');
var button = document.getElementById('btn');


function calculos() {
    calculaPrazo();
    calculaTaxaMensal();
    amortizacao();
    cu();
    
   
}

function meses() {
    var resultado =  prazo.valueAsNumber * 12;
    return resultado;
}

function calculaPrazo() {
    var resultado =  prazo.valueAsNumber * 12;
    prazoResultado.value = resultado;
}

function calculaTaxaMensal() {
    var taxaMensal = ((juros.valueAsNumber + 1) ** (1/12)) - 1;
    jurosResultado.value = taxaMensal.toFixed(15);

}

function amortizacao() {
    var amortizacao = (valor.valueAsNumber / meses()).toFixed(2);
    amortizacaoTabela.textContent = amortizacao;
}

function jurosAcumulados() {

}

function calculaJurosAoMes() {
   var saldoDevedor = valor.valueAsNumber;
   var jurosMensal = jurosResultado.valueAsNumber;

    var resultado = saldoDevedor * jurosMensal;
    return resultado;

}





