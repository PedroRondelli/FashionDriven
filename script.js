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
    if(contador===3 && linkNaCaixa.value !== "" ){
        let botaoFinal = document.querySelector("button")
        botaoFinal.classList.add("botaoLiberado")
    }
    else{
        let botaoFinal = document.querySelector("button")
        botaoFinal.classList.remove("botaoLiberado")
    }
}
function perguntarNome(){
    nomeUsuário = prompt("Qual é o seu nome?")
    if(nomeUsuário!== null){
        if(nomeUsuário.length < 2 ){
            perguntarNome()
    }
    }
    else{
        perguntarNome()
    }
    console.log(nomeUsuário)
}
function fazerRequisicao() {
   let promessa = axios.get("https://mock-api.driven.com.br/api/v4/shirts-api/shirts")
   promessa.then(atualizar)
   promessa.catch(fazerRequisicao)
}
function atualizar(resposta){
    let arrayResposta = resposta.data
    let roloservidor = document.querySelector(".roloServidor")
    roloservidor.innerHTML = ""
    arrayResposta.forEach(element =>{
        let template = `<div class="encomenda"><div style="background-image:url('${element.image}') ;" class="peca"></div><p><strong>Criador:</strong> ${element.owner}</p></div>`
        roloservidor.innerHTML = roloservidor.innerHTML + template
    } )
}
let nomeUsuário;

perguntarNome()
fazerRequisicao()
setInterval(liberarBotao,500)


/* <div class="encomenda"><div class="peca"></div></div> */