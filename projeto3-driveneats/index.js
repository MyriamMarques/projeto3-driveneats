function pratoPrincipal(elemento) {
    var somente1 = document.querySelector(".produtoMarcadoPratoPrincipal");
    if (somente1 == null) {
        elemento.classList.add("produtoMarcadoPratoPrincipal");
    } else {
        somente1.classList.remove("produtoMarcadoPratoPrincipal");
        elemento.classList.add("produtoMarcadoPratoPrincipal");
    }
    botaoConfirmar()
}

function bebida(elemento) {
    var somente1 = document.querySelector(".produtoMarcadoBebida");
    if (somente1 == null) {
        elemento.classList.add("produtoMarcadoBebida");
    } else {
        somente1.classList.remove("produtoMarcadoBebida");
        elemento.classList.add("produtoMarcadoBebida");
    }
    botaoConfirmar()
}

function sobremesa(elemento) {
    var somente1 = document.querySelector(".produtoMarcadoSobremesa");
    if (somente1 == null) {
        elemento.classList.add("produtoMarcadoSobremesa");
    } else {
        somente1.classList.remove("produtoMarcadoSobremesa");
        elemento.classList.add("produtoMarcadoSobremesa");
    }
    botaoConfirmar()
}

function botaoConfirmar() {
    let sobremesa = document.querySelector(".produtoMarcadoSobremesa");
    let bebida = document.querySelector(".produtoMarcadoBebida");
    let pratoPrincipal = document.querySelector(".produtoMarcadoPratoPrincipal");

    if (sobremesa && bebida && pratoPrincipal) {
        let botao = document.querySelector(".btnConfirmar");
        botao.classList.add("btnConfirmarAtivo");
        botao.innerHTML = '<a href="https://wa.me/5531984318470?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20o%20pedido%3A%0A-%20Prato%3A%20Frango%20Yin%20Yang%0A-%20Bebida%3A%20Coquinha%20Gelada%0A-%20Sobremesa%3A%20Pudim%0ATotal%3A%20R%24%2027.70" tarket="_blank"><button>Fechar pedido</button></a>'
    }
}