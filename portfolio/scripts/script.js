const secoes = document.querySelectorAll("main section[id]");
const linksMenu = document.querySelectorAll(".botao");

function atualizarMenu() {
    let secaoAtual = "";

    secoes.forEach((secao) => {
        const topoDaSecao = secao.offsetTop;

        if (window.scrollY >= topoDaSecao - 250) {
            secaoAtual = secao.id;
        }
    });

    linksMenu.forEach((link) => {
        link.classList.remove("ativo");

        if (link.getAttribute("href") === `#${secaoAtual}`) {
            link.classList.add("ativo");
        }
    });
}

window.addEventListener("scroll", atualizarMenu);
atualizarMenu();