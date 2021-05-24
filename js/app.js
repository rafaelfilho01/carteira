var dataAtual = new Date();
var dia = dataAtual.getDate();
var mes = (dataAtual.getMonth() + 1);
var ano = dataAtual.getFullYear();
var horas = dataAtual.getHours();
var minutos = dataAtual.getMinutes();
console.log("Hoje é dia " + dia + "/" + mes + " de " + ano + ". Agora são " + horas + ":" + minutos + "h.");
// função para adicionar dinheiro
var adicionar = document.getElementById("adicionar-dinheiro")

function dinheiro() {

    adicionar.style.display = "block"
}


function salvarAdd() {
    var n2 = Number(document.getElementById("somaLimite").value)
    if (n2 <= '') {
        alert("Insira um valor")
    } else {
        document.getElementById("limite").innerHTML = n2 + Number(document.getElementById("limite").innerHTML)
        if (document.getElementById("limite").innerHTML > 0) {
            document.getElementById("limite").style.color = "rgb(12, 221, 186)"
        } else {
            document.getElementById("limite").style.color = "red"
        }
        adicionar.style.display = "none"
    }
}


function cancelarAdd() {
    var cancelar = document.getElementById("adicionar-dinheiro")
    cancelar.style.display = "none"
}
// fim função adicionar dinheiro
// função adicionar gasto

function gasto() {
    var gasto = document.getElementById("adicionar-gasto")
    gasto.style.display = "block"
}
// 

var tr = document.querySelector("tr")
var itemGasto = document.getElementById("item-gasto")
var valorGasto = document.getElementById("valor-gasto")
var dataGasto = document.getElementById("data-gasto")



function salvarGasto() {
    var quanto = Number(document.getElementById("subLimite").value)
    var oQue = String(document.getElementById("itemSub").value)
    var quando = "" + dia + "/" + mes + "/" + ano + " " + horas + ":" + minutos + "h."
    
    // 

    if (oQue == "") {
        alert("Digite um nome, exemplos: Cartão de crédito, Óculos, Lazer, Viagem")
    } else {
        itemGasto.innerHTML += `<p>${oQue}</p>`
        valorGasto.innerHTML +=`<p> ${quanto}</p>`
        dataGasto.innerHTML += `<p>${quando}</p>`
        // dataGasto.style.fontSize="16px"
        var gastoInicial = document.querySelector("#dinheiro-gasto").value
        // Soma dos gastos
        var soma = Number(quanto) + Number(gastoInicial)
        document.querySelector("#dinheiro-gasto").value = `<p>R$ ${soma}</p>`;

        var sub = Number(document.getElementById("limite").innerHTML) - Number(quanto)
        document.getElementById("limite").innerHTML = sub
        if (document.getElementById("limite").innerHTML < 0) {
            document.getElementById("limite").style.color = "red"
            document.querySelector("#situa").style.color = "red"
            document.querySelector("#situa").innerHTML = "Você está devendo"

        } else {
            document.getElementById("limite").style.color = "rgb(12, 221, 186)"
            document.querySelector("#situa").style.color = "green"
            document.querySelector("#situa").innerHTML = "Você está em dia com suas dívidas"

        }
        tr.style.border = "1px solid"
    }
}

function cancelarGasto() {
    var gasto = document.getElementById("adicionar-gasto")
    gasto.style.display = "none"

}


// limpar todos os gastos
var limpar = document.querySelector("#limpar")

limpar.addEventListener('click', function () {
    itemGasto.innerHTML = null
    valorGasto.innerHTML = null
    dataGasto.innerHTML= null
    document.querySelector("#dinheiro-gasto").value = "0";
})


// const horas = new Date()
// const minutos=
// alert( horas.getHours()+horas.getMinutes);


// 
// Função para formatar 1 em 01
// const zeroFill = n => {
// 	return ('0' + n).slice(-2)
// }

// // Cria intervalo
// const interval = setInterval(() => {
// 	// Pega o horário atual
// 	const now = new Date()

// 	// Formata a data conforme dd/mm/aaaa hh:ii:ss
// 	const dataHora = zeroFill(now.getUTCDate()) + '/' + zeroFill((now.getMonth() + 1)) + '/' + now.getFullYear() + ' ' + zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds())

// 	// Exibe na tela usando a div#data-hora
// 	dataGasto.innerHTML = dataHora
// }, 1000)
// 

// var lista = document.querySelector('td')
// var produto= document.querySelector('#produto')
// var botao = document.querySelector('#btn')

// botao.addEventListener('click', function(){
//     var item = '<tr>' + produto.value + '</tr>'
//     lista.innerHTML+=item
//     produto.value=''
// })