class Dado {
    constructor(fase) {
        this.fase = fase;
        this.counter = 0;
    }

   
    gerarDado() {
        let telaDeJogo = document.getElementById("telaDeJogo")
        let dadoHtmlDiv = document.createElement('div')
        let dadoHtmlP = document.createElement('p')

        dadoHtmlP.innerHTML = this.counter
        dadoHtmlDiv.appendChild(dadoHtmlP)
        telaDeJogo.appendChild(dadoHtmlDiv)
    }

    rolarDado() {
        this.counter = Math.floor(Math.random() * 5)
        dado1.innerHTML = counter1
        setInterval(this.rolarDado,500)
    }

    pararDado() {}

    rolarDadoNovamente() {}



}