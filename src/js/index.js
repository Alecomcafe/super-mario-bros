/* 
Objetivo 1 - quando o usuário clicar no botão de veja trailer, devemos abrir a modal com o video do trailer.
- passo 1 - dar um jeito de pegar o elemnto que representa o botão na tela usando o JS.
- passo 2 - dar um jeito de identificar quando o usuário clicar no botão.
- passo 3 - dar um jeito de pegar o elemento da modal no js.
- passo 4 - abrir a modal na tela. Este passo pode ir dentro do passo 2.

Objetivo 2 - quando o usuário clicar no X devemos fechar a modal.
- passo 1 - dar um jeito de pegar o elemnto de fechar a modal usando o JS.
- passo 2 - dar um jeito de identificar quando o usuário clicar no X.
- passo 3 - fechar a modal
*/

// Ojetivo 1
// passo 1 - dar um jeito de pegar o elemnto que representa o botão na tela usando o JS.

const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const video = document.getElementById("video");
const linkDoVideo = video.src;



//passo 3 - dar um jeito de pegar o elemento da modal no js.


// passo 2 e 4 - dar um jeito de identificar quando o usuário clicar no botão. 4 - E abrir modal.
botaoTrailer.addEventListener("click", () => {
    modal.classList.add("aberto");
    video.setAttribute("src", linkDoVideo)
    
});



// Objetivo 2 - 
// passo 1 - dar um jeito de pegar o elemnto de fechar a modal usando o JS.
const botaofecharModal = document.querySelector(".fechar-modal");

// passo 2 - dar um jeito de identificar quando o usuário clicar no X.Passo 3 - fechar a modal
botaofecharModal.addEventListener("click", () => {
     modal.classList.remove("aberto");
     video.setAttribute("src", "")
});





