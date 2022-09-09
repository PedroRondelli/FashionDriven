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
        botaoFinal.disabled = false
    }
    else{
        let botaoFinal = document.querySelector("button")
        botaoFinal.disabled = true
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
function clicou() {
   let modelo = document.querySelector(".modelo .bordaSelecao").classList[1]
   let gola = document.querySelector(".gola .bordaSelecao").classList[1]
   let material = document.querySelector(".tecido .bordaSelecao").classList[1]
   let valorInput= document.querySelector("input").value
   
    let objeto = {
        "model": modelo,
        "neck": gola,
        "material": material,
        "image": valorInput ,
        "owner": nomeUsuário,
        "author": nomeUsuário
    }
    console.log(objeto)
    let promessaEncomenda = axios.post("https://mock-api.driven.com.br/api/v4/shirts-api/shirts",objeto)
    promessaEncomenda.then(fazerRequisicao)
    promessaEncomenda.catch(deuErro)
    alert("Confirmando a encomenda")

}
function deuErro() {
    alert("Ops, não conseguimos processar sua encomenda")
}

let nomeUsuário;

perguntarNome()
fazerRequisicao()
setInterval(liberarBotao,500)


/* <div class="encomenda"><div class="peca"></div></div> */