const botoes = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");



// Adiciona um evento de clique para cada botão
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        
        botoes.forEach(b => b.classList.remove('ativo'));
        botao.classList.add('ativo');
    });
});

botoes.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        botoes.forEach(b => b.classList.remove('ativo'));
        botao.classList.add('ativo');


        imagens.forEach(img => img.classList.remove('ativo'));
        imagens[index].classList.add('ativo');
    });
});