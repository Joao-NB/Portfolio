// Obtém o botão
const backToTopBtn = document.getElementById("backToTopBtn");

// Quando o usuário rola a página, executa a função scrollFunction
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// Quando o usuário clica no botão, rola a página para o topo
backToTopBtn.onclick = function() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
}
