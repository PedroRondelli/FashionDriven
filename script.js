function selecionar(divRecebida,classeDivRecebida) {
    let selecaoAntiga = document.querySelector(`${classeDivRecebida} .bordaSelecao`)
    if(selecaoAntiga !== null){
        selecaoAntiga.classList.remove("bordaSelecao")
    }
    divRecebida.classList.add("bordaSelecao")
   
    
}

function liberarBotao() {
    let contador = document.querySelectorAll(".bordaSelecao").length
    let linkNaCaixa = document.querySelector("input")
    console.log(linkNaCaixa.value)
    console.log(contador)
    if(contador===3 && linkNaCaixa.value !== "" ){
        let botaoFinal = document.querySelector("button")
        botaoFinal.classList.add("botaoLiberado")
    }
    else{
        let botaoFinal = document.querySelector("button")
        botaoFinal.classList.remove("botaoLiberado")
    }
}
setInterval(liberarBotao,500)