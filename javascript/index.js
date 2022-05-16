
// Faz a página rolar para baixo
(function DescePagina() {
    let icone = document.querySelector('.passPage ')
    icone.addEventListener("click", () => {
        console.log("DEsceu")
        window.scrollTo(0,1500);

    })
} ) ()