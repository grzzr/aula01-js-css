const galeria = document.querySelector("#galeria")

for(i=1;i<=4;i++) {
    const imgFoto = document.createElement('article')
    let urlFoto = `/img/foto${i}.png`
    imgFoto.innerHTML = `
        <figure>
            <img src="${urlFoto}">
            <figcaption>
                bola${i}.png
            </figcaption>
        </figure>
    `
    galeria.appendChild(imgFoto)
}