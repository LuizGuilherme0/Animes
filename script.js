let listaAnimes = [
    {
        "nome": "Dragon Ball Super",
        "img": "img/dragon-ball-super-hd-wallpaper_LlIEmuFS.jpg",
        "descricao": "O Deus da Destruição acorda e está dedicado a destruir com os planetas, e acaba descobrindo a Terra. O guerreiro Goku pede ajuda a seus amigos para se converter no lendário Super Saiyajin e enfrentar o vilão"
    },
    {
        "nome": "One Piece",
        "img": "img/wp6068180.webp",
        "descricao":"One Piece é uma série de mangá escrita e ilustrada por Eiichiro Oda. Os capítulos têm sido serializados na revista Weekly Shōnen Jump desde julho de 1997, com os capítulos compilados e publicados em 106 volumes tankōbon pela editora Shueisha até junho de 2023. One Piece conta as aventuras de Monkey D."
    },
    {
        "nome": "Circulo de Fogo",
        "img": "img/UQ5EC37JIRHJFHPSTSKJTGBUIE.avif",
        "descricao": "Em uma terra tomada por monstros, dois irmãos procuram os pais e acabam encontrando criaturas desconhecidas, figuras estranhas e aliados inesperados."
    }
]

listaAnimes.map((anime, posicao) => {
    let cardAnime = document.getElementById("cards");
    cardAnime.innerHTML += ` <div class="col-md-4">
                <div class="card m-2" style="background-color:#212529;">
                    <img src="${anime.img}" class="card-img-top" height="200px" alt="...">
                    <div class="card-body">
                      <h5 class="card-title nome" style="margin-bottom:20px;">${anime.nome}</h5>
                      <a href="#" class="btn btn-secondary descricao" onclick="zoomImg('${posicao}')">Ver mais <i class="bi bi-search"></i></a>
                    </div>
                  </div>
            </div>`
            
});

function zoomImg(posicao){  
    let animeSelecionado = listaAnimes[posicao];
    document.getElementById("nomeAnime").innerHTML = animeSelecionado.nome;
    document.getElementById("descricaoAnime").innerHTML = animeSelecionado.descricao;
    document.getElementById("imgModal").src = animeSelecionado.img;

    new bootstrap.Modal('#zoomImg').show();
}


function alterarTema(){
    let tema = document.querySelector("html").getAttribute("data-bs-theme");
    let cor = document.getElementById("descricaoAnime");

    if(tema ==="dark"){
        document.querySelector("html").setAttribute("data-bs-theme","light");
        document.querySelector("#alterarTema").innerHTML=`<i class="bi bi-moon-fill"></i>`;
        cor.style.cssText = "color: rgb(157, 109, 5)";
        
    }
    else{
        document.querySelector("html").setAttribute("data-bs-theme","dark");
        document.querySelector("#alterarTema").innerHTML=`<i class="bi bi-brightness-high-fill"></i>`;
        cor.style.cssText = "color:  #5b66e0";
    }
}