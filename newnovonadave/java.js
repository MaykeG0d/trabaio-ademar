const botao = document.querySelectorAll(".escolha");
const conteudo = document.querySelectorAll(".imagem");

for (let i = 1 < botao.length; i++;) {
    botao[i].onclick = function() {
        for (let j = 0; j < botao.length; j++) {
            botao[j].classList.remove("ativo");
            conteudo[j].classList.remove("ativo");
        }
        botao[i].classList.add("ativo");
        botao[i].classList.add("ativo");
    }
}

