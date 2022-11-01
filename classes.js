class Dado {
  constructor() {
    this.counter = 0;
    // this.dadoPosicionado = 0
  }

  rolarDado() {
    // this.counter = Math.floor(Math.random() * 5)
    // this.dadoPosicionado.innerHTML = this.counter
    // setInterval(this.rolarDado,1000)
  }

  pararDado() {
    console.log("buba!");
  }

  rolarDadoNovamente() {}
}

class Fase {
  constructor(nível) {
    this.pontos = 0;
    this.nível = nível;
    this.tentativas = 5;
    this.rodadaCounter = 0;
  }

  gerarFase() {
    const dadoTrunfo = new Dado();
    const dadoSombra1 = new Dado();
    const dadoSombra2 = new Dado();
    const dadoSombra3 = new Dado();

    let tentativasF = 5;
    let rodadaCounterF = 0;
    let invocadaF = false;

    function checarDadosF() {
      if (rodadaCounterF === 3) {
        console.log(
          `Você ganhou. Sua pontuação equivale a ${dadoTrunfo.counter * 10}.`
        );
      }
      if (tentativasF === 0) {
        console.log("Você perdeu ;(");
      }
    }

    let telaDeJogo = document.getElementById("telaDeJogo");
    let dadoHtmlSection = document.createElement("section");

    //posso tranformar isso aqui \/ em uma function da Class dados
    let dadoHtmlDivTrunfo = document.createElement("div");
    let dadoHtmlPTrunfo = document.createElement("p");
    dadoHtmlPTrunfo.className = "trunfo";
    dadoHtmlPTrunfo.innerText = dadoTrunfo.counter;
    dadoHtmlSection.appendChild(dadoHtmlDivTrunfo);
    dadoHtmlDivTrunfo.appendChild(dadoHtmlPTrunfo);
    telaDeJogo.appendChild(dadoHtmlSection);

    let dadoHtmlDivSombra1 = document.createElement("div");
    let dadoHtmlPSombra1 = document.createElement("p");
    dadoHtmlPSombra1.innerText = dadoSombra1.counter;
    dadoHtmlSection.appendChild(dadoHtmlDivSombra1);
    dadoHtmlDivSombra1.appendChild(dadoHtmlPSombra1);
    telaDeJogo.appendChild(dadoHtmlSection);

    let dadoHtmlDivSombra2 = document.createElement("div");
    let dadoHtmlPSombra2 = document.createElement("p");
    dadoHtmlPSombra2.innerText = dadoSombra2.counter;
    dadoHtmlSection.appendChild(dadoHtmlDivSombra2);
    dadoHtmlDivSombra2.appendChild(dadoHtmlPSombra2);
    telaDeJogo.appendChild(dadoHtmlSection);

    let dadoHtmlDivSombra3 = document.createElement("div");
    let dadoHtmlPSombra3 = document.createElement("p");
    dadoHtmlPSombra3.innerText = dadoSombra3.counter;
    dadoHtmlSection.appendChild(dadoHtmlDivSombra3);
    dadoHtmlDivSombra3.appendChild(dadoHtmlPSombra3);
    telaDeJogo.appendChild(dadoHtmlSection);
    //posso tranformar isso aqui /\ em uma function da Class Dado

    //Rolando Dados \/ tbm possível transformar em function de Dado
    function iniciarContagemTrunfo() {
      dadoTrunfo.counter = Math.floor(Math.random() * 7);
      dadoHtmlPTrunfo.innerText = dadoTrunfo.counter;
    }
    let repeatTrunfo = setInterval(iniciarContagemTrunfo, 500);

    function iniciarContagemSombra1() {
      dadoSombra1.counter = Math.floor(Math.random() * 7);
      dadoHtmlPSombra1.innerText = dadoSombra1.counter;
    }
    let repeatSombra1 = setInterval(iniciarContagemSombra1, 1000);

    function iniciarContagemSombra2() {
      dadoSombra2.counter = Math.floor(Math.random() * 7);
      dadoHtmlPSombra2.innerText = dadoSombra2.counter;
    }
    let repeatSombra2 = setInterval(iniciarContagemSombra2, 1000);

    function iniciarContagemSombra3() {
      dadoSombra3.counter = Math.floor(Math.random() * 7);
      dadoHtmlPSombra3.innerText = dadoSombra3.counter;
    }
    let repeatSombra3 = setInterval(iniciarContagemSombra3, 1000);
    //Rolando Dados /\ tbm possível transformar em function de Dado

    //Parando Dados \/
    dadoHtmlPTrunfo.addEventListener("click", () => {
      invocadaF = true;
      clearInterval(repeatTrunfo);

      dadoHtmlPSombra1.addEventListener("click", () => {
        if (dadoTrunfo.counter === dadoSombra1.counter) {
          clearInterval(repeatSombra1);
          rodadaCounterF++;
          console.log(
            `Você tem ${tentativasF} tentativas, e você deu match em ${rodadaCounterF} dado(s)`
          );
        } else {
          tentativasF--;
          alert("Errou");
          console.log(
            `Você tem ${tentativasF} tentativas, e você deu match em ${rodadaCounterF} dado(s)`
          );
        }
        checarDadosF()
      });
      
      dadoHtmlPSombra2.addEventListener("click", () => {
        if (dadoTrunfo.counter === dadoSombra2.counter) {
          clearInterval(repeatSombra2);
          rodadaCounterF++;
          console.log(
            `Você tem ${tentativasF} tentativas, e você deu match em ${rodadaCounterF} dado(s)`
          );
        } else {
          tentativasF--;
          alert("Errou");
          console.log(
            `Você tem ${tentativasF} tentativas, e você deu match em ${rodadaCounterF} dado(s)`
          );
        }
        checarDadosF()
      });
      
      dadoHtmlPSombra3.addEventListener("click", () => {
        if (dadoTrunfo.counter === dadoSombra3.counter) {
          clearInterval(repeatSombra3);
          rodadaCounterF++;
          console.log(
            `Você tem ${tentativasF} tentativas, e você deu match em ${rodadaCounterF} dado(s)`
          );
        } else {
          tentativasF--;
          alert("Errou");
          console.log(
            `Você tem ${tentativasF} tentativas, e você deu match em ${rodadaCounterF} dado(s)`
          );
        }
        checarDadosF()
      });



    });
    //Parando Dados /\

    //Checando se Trunfo foi setado \/
    dadoHtmlPSombra1.addEventListener("click", () => {
        if (!invocadaF) {
            console.log(`O trunfo precisa ser escolhido.`);
          }
    })
    dadoHtmlPSombra2.addEventListener("click", () => {
        if (!invocadaF) {
            console.log(`O trunfo precisa ser escolhido.`);
          }
    })
    dadoHtmlPSombra3.addEventListener("click", () => {
        if (!invocadaF) {
            console.log(`O trunfo precisa ser escolhido.`);
          }
    })
    //Checando se Trunfo foi setado /\



  }
}
