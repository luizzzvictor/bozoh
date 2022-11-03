class Dado {
  constructor() {
    this.counter = 0;    
  }

}

class Fase {
  constructor(nível) {
    this.pontos = 0;
    this.nível = nível;
    this.tentativas = 5;
    this.rodadaCounter = 0;
    this.conclusao = false;
  }
  // this.conclusao = false

  gerarFase() {
    //Monitores
    let monitor = document.getElementById("monitor");
    monitor.className = 'dontClick'
    let pontuação = document.getElementById("pontos");
    // let tries = document.getElementById("tries");
    let nivelDaFase = this.nível
    // tries.innerText = 5;
    const dadinhos = document.getElementById('divDosDadinhos')

    //Monitor

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
          `Você passou de fase! Pontuação desta fase equivale a ${dadoTrunfo.counter * 10}.`
        );

        if (pontuação.innerText === "-") {
          if (dadoTrunfo.counter === 0) {
            pontuação.innerText = Number(100);
          } else {
            pontuação.innerText = Number(dadoTrunfo.counter * 10);
          }
        } else {
            if (dadoTrunfo.counter === 0) {
                pontuação.innerText =
                Number(pontuação.innerText) + Number(100);

            } else {                
                pontuação.innerText =
                Number(pontuação.innerText) + Number(dadoTrunfo.counter * 10);
            }
        }

        if (nivelDaFase === 'hardcore') {
            monitor.innerText = "YOU WIN";
            alert(`Bozó! Congrats! Sua pontuação equivale a ${pontuação.innerText} pontos!`);
            window.location.reload()
        } else {
            monitor.className = 'clickMe'
            monitor.innerText = "Next Phase";
        }

      }
      if (tentativasF === 0) {
        alert(`Game over! Sua pontuação equivale a ${pontuação.innerText} pontos!`);
        window.location.reload()
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

    //Rolando Dados conforme Nível \/ tbm possível transformar em function de Dado
    function iniciarContagemTrunfo() {
      dadoTrunfo.counter = Math.floor(Math.random() * 7);
      dadoHtmlPTrunfo.innerText = dadoTrunfo.counter;
    }
    let repeatTrunfo = setInterval(iniciarContagemTrunfo, 300);

    function iniciarContagemSombra1() {
      dadoSombra1.counter = Math.floor(Math.random() * 7);
      dadoHtmlPSombra1.innerText = dadoSombra1.counter;
    }

    let repeatSombra1 = "";

    if (this.nível === "easy") {
      monitor.innerText = "Set Trunfo";
      repeatSombra1 = setInterval(iniciarContagemSombra1, 850);
    }
    if (this.nível === "medium") {
      repeatSombra1 = setInterval(iniciarContagemSombra1, 650);
    }
    if (this.nível === "hard") {
      repeatSombra1 = setInterval(iniciarContagemSombra1, 500);
    }
    if (this.nível === "hardcore") {
      repeatSombra1 = setInterval(iniciarContagemSombra1, 300);
    }

    function iniciarContagemSombra2() {
      dadoSombra2.counter = Math.floor(Math.random() * 7);
      dadoHtmlPSombra2.innerText = dadoSombra2.counter;
    }
    let repeatSombra2 = "";
    if (this.nível === "easy") {
      repeatSombra2 = setInterval(iniciarContagemSombra2, 1000);
    }
    if (this.nível === "medium") {
      repeatSombra2 = setInterval(iniciarContagemSombra2, 850);
    }
    if (this.nível === "hard") {
      repeatSombra2 = setInterval(iniciarContagemSombra2, 500);
    }
    if (this.nível === "hardcore") {
      repeatSombra2 = setInterval(iniciarContagemSombra2, 300);
    }

    function iniciarContagemSombra3() {
      dadoSombra3.counter = Math.floor(Math.random() * 7);
      dadoHtmlPSombra3.innerText = dadoSombra3.counter;
    }
    let repeatSombra3 = "";
    if (this.nível === "easy") {
      repeatSombra3 = setInterval(iniciarContagemSombra3, 1000);
    }
    if (this.nível === "medium") {
      repeatSombra3 = setInterval(iniciarContagemSombra3, 850);
    }
    if (this.nível === "hard") {
      repeatSombra3 = setInterval(iniciarContagemSombra3, 500);
    }
    if (this.nível === "hardcore") {
      repeatSombra3 = setInterval(iniciarContagemSombra3, 300);
    }
    //Rolando Dados /\ tbm possível transformar em function de Dado

    //Parando Dados \/
    dadoHtmlPTrunfo.addEventListener("click", () => {
      invocadaF = true;
      monitor.innerText = "Match Sombras";
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
        //   tries.innerText = tentativasF;
          alert("Errou");
          dadinhos.removeChild(dadinhos.firstElementChild)
          console.log(
            `Você tem ${tentativasF} tentativas, e você deu match em ${rodadaCounterF} dado(s)`
          );
        }
        checarDadosF();
        if (rodadaCounterF === 3) {
          this.conclusao = true;
        }
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
        //   tries.innerText = tentativasF;
          alert("Errou");
          dadinhos.removeChild(dadinhos.firstElementChild)
          console.log(
            `Você tem ${tentativasF} tentativas, e você deu match em ${rodadaCounterF} dado(s)`
          );
        }
        checarDadosF();
        if (rodadaCounterF === 3) {
          this.conclusao = true;
        }
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
        //   tries.innerText = tentativasF;
          alert("Errou");
          dadinhos.removeChild(dadinhos.firstElementChild)
          console.log(
            `Você tem ${tentativasF} tentativas, e você deu match em ${rodadaCounterF} dado(s)`
          );
        }
        checarDadosF();
        if (rodadaCounterF === 3) {
          this.conclusao = true;
        }
      });
    });
    //Parando Dados /\

    //Checando se Trunfo foi setado \/
    dadoHtmlPSombra1.addEventListener("click", () => {
      if (!invocadaF) {
        console.log(`O trunfo precisa ser escolhido.`);
        monitor.innerText = "You must set Trunfo";
      }
    });
    dadoHtmlPSombra2.addEventListener("click", () => {
      if (!invocadaF) {
        console.log(`O trunfo precisa ser escolhido.`);
        monitor.innerText = "You must set Trunfo";
      }
    });
    dadoHtmlPSombra3.addEventListener("click", () => {
      if (!invocadaF) {
        console.log(`O trunfo precisa ser escolhido.`);
        monitor.innerText = "You must set Trunfo";
      }
    });
    //Checando se Trunfo foi setado /\
  }
}
