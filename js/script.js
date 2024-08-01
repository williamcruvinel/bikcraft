//Ativar Links do menu
const links = document.querySelectorAll(".header-menu a")

function ativarlink(link){
  const url = location.href
  const href = link.href
  if(url.includes(href)){
    link.classList.add('ativo')
  }
}

links.forEach(ativarlink)

//Ativar itens do orçamento
const parametro = new URLSearchParams(location.search)

function ativarProduto(parametro){
  const elemento = document.getElementById(parametro)
  if(elemento){
    elemento.checked = true
  }
}

parametro.forEach(ativarProduto)

//Perguntas frequentes
const perguntas = document.querySelectorAll(".perguntas button")

function ativarPergunta(event){
  const pergunta = event.currentTarget
  const controls = pergunta.getAttribute('aria-controls')
  const resposta = document.getElementById(controls)
  resposta.classList.toggle('ativa')

  const ativa = resposta.classList.contains('ativa')
  pergunta.setAttribute('aria-expanded', ativa)
}

function eventosPerguntas(pergunta){
  pergunta.addEventListener('click', ativarPergunta)
}

perguntas.forEach(eventosPerguntas)

//Galeria da bicicleta
const galeria = document.querySelectorAll('.bicicleta-img img')
const galeriaContainer = document.querySelector('.bicicleta-img')

function trocarImagem(event){
  const img = event.currentTarget
  const media = matchMedia('(width > 920px)').matches
  if(media){
    galeriaContainer.prepend(img)
  }
}

function eventoGaleria(img){
 img.addEventListener('click', trocarImagem)
}

galeria.forEach(eventoGaleria)

//Animação Plugin
if(window.SimpleAnime){
  new SimpleAnime()
}