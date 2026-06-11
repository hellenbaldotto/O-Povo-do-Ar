// Variável para controlar qual o "bloco" de cards atual na tela
let currentIndex = 0;

function moveCarousel(direction) {
    const cardsContainer = document.querySelector('.cards');
    const cardElement = document.querySelector('.personagem-card');
    
    // Se por acaso o carrossel não encontrar os cards, ele para aqui para não dar erro
    if (!cardsContainer || !cardElement) return;

    const cardWidth = cardElement.offsetWidth;
    const gap = 25; // O mesmo espaço (gap) que você definiu no seu CSS
    const totalCards = document.querySelectorAll('.personagem-card').length;
    
    // Descobre o tamanho da "janela" visível do carrossel na tela do usuário
    const wrapperWidth = document.querySelector('.carousel-wrapper').offsetWidth;
    
    // Calcula quantos cards cabem inteiros na tela ao mesmo tempo
    const visibleCards = Math.floor(wrapperWidth / (cardWidth + gap));
    
    // Atualiza o índice (soma 1 se for para a direita, subtrai 1 se for para a esquerda)
    currentIndex += direction;
    
    // Limita o carrossel para não ir além do primeiro card (à esquerda)
    if (currentIndex < 0) {
        currentIndex = 0;
    } 
    // Limita o carrossel para não passar do último bloco possível (à direita)
    else if (currentIndex > totalCards - visibleCards) {
        currentIndex = totalCards - visibleCards;
    }
    
    // Calcula exatamente quantos pixels a linha de cards deve deslizar
    const amountToMove = currentIndex * (cardWidth + gap);
    
    // Aplica o movimento usando o CSS Translate (mágica do JavaScript + CSS)
    cardsContainer.style.transform = `translateX(-${amountToMove}px)`;
}


// Aguarda o HTML carregar antes de aplicar a lógica
document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector(".form-elfhame");
    const mensagem = document.getElementById("msg-sucesso");

    // Verifica se o formulário existe na página atual
    if (formulario && mensagem) {
        formulario.addEventListener("submit", function (evento) {
            // 1. Evita que a página recarregue e limpe tudo antes da animação
            evento.preventDefault();

            // 2. Adiciona a classe CSS que faz a mensagem aparecer suavemente
            mensagem.classList.add("mostrar");

            // 3. Limpa os campos do formulário para o usuário mandar outra se quiser
            formulario.reset();

            // 4. Faz a mensagem sumir sozinha após 5 segundos
            setTimeout(() => {
                mensagem.classList.remove("mostrar");
            }, 5000);
        });
    }
});