var SetaDireita = window.document.getElementById("setadireita")
var Leonardo = window.document.getElementById("leonardo")
var Bamanta = window.document.getElementById("samanta")
var Bruna = window.document.getElementById("bruna")
var SetaEsquerda = window.document.getElementById("setaesquerda")


function rolarparadireita() {
    leonardo.style ="display:none"
    bruna.style ="display:flex"
    SetaEsquerda.style ="display:flex; margin-top:55px"
    SetaDireita.style ="display:none"
}

function rolarparaesquerda() {
    leonardo.style ="display: flex"
    bruna.style = "display: none"
    SetaDireita.style ="display:flex; margin-top:55px"
    SetaEsquerda.style ="display:none"
}