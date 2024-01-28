const botao = document.querySelector(".btn-plataforma")

console.log(botao);

const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

console.log(elementoPlataformas);

botao.addEventListener("click", () => {

    const botaoEstaAberto = elementoPlataformas.classList.contains("ativo")

elementoPlataformas.classList.toggle("ativo");

//     if (botaoEstaAberto) {
// elementoPlataformas.classList.remove("ativo")
//     } else {
// elementoPlataformas.classList.add("ativo")
//     }
})