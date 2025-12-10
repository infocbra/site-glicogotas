// carousel da dquipe
document.addEventListener('DOMContentLoaded', function() {
    const equipeWrapper = document.querySelector('.equipe-wrapper');
    const prevBtn = document.querySelector('.carousel-btn-equipe.prev');
    const nextBtn = document.querySelector('.carousel-btn-equipe.next');
    
    // função para rolar para a esquerda
    prevBtn.addEventListener('click', function() {
        equipeWrapper.scrollBy({
            left: -320,
            behavior: 'smooth'
        });
    });
    
    //  para rolar para a direita
    nextBtn.addEventListener('click', function() {
        equipeWrapper.scrollBy({
            left: 320,
            behavior: 'smooth'
        });
    });
});

// carousel do ecossistema
document.addEventListener('DOMContentLoaded', function() {
    const cardsWrapper = document.querySelector('.cards-wrapper');
    const prevBtnCards = document.querySelector('.carousel-btn.prev');
    const nextBtnCards = document.querySelector('.carousel-btn.next');
    
    if (prevBtnCards && nextBtnCards) {
        // função para rolar para a esquerda
        prevBtnCards.addEventListener('click', function() {
            cardsWrapper.scrollBy({
                left: -320,
                behavior: 'smooth'
            });
        });
        
        //  para rolar para a direita
        nextBtnCards.addEventListener('click', function() {
            cardsWrapper.scrollBy({
                left: 320,
                behavior: 'smooth'
            });
        });
    }
});