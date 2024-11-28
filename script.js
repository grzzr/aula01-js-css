
const cores = document.querySelector("#cores")
let vermelho = 255
nArtigos = 15
valDecremento = vermelho/nArtigos

for(i=1; i<=nArtigos; i++) {
    const artigo = document.createElement('article')
    
    artigo.innerText = "/img/foto"+i
    artigo.style.color='white'
    artigo.style.padding = '5px'
    artigo.style.textAlign = 'center'
    artigo.style.backgroundColor = `rgb(${vermelho},0,0)`    
    
    artigo.addEventListener('click', selecionaArticle)

    cores.appendChild(artigo)
    vermelho -= valDecremento
}

function selecionaArticle(e) {    
    const artigo = e.target
    artigo.style.backgroundColor='black'
}