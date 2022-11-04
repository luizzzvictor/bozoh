const DadinhosFase1 = new DadinhosPorFase();

DadinhosFase1.gerar5Dadin();

//TIMER \/
let pontuaçãoTemporal = document.getElementById("pontos");
let gatilhoTimeOver = false;
let timeoutHandle;
function countdown(minutes, seconds) {
  function tick() {
    //importado de: https://bit.ly/3WlQ1q6
    var counter = document.getElementById("timer");
    counter.innerHTML =
      minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
    seconds--;
    if (seconds >= 0) {
      timeoutHandle = setTimeout(tick, 1000);
    } else {
      if (minutes >= 1) {
        // countdown(mins-1);   never reach “00″ issue solved:Contributed by Victor Streithorst
        setTimeout(function () {
          countdown(minutes - 1, 59);
        }, 1000);
      }
      if (minutes === 0) {
        gatilhoTimeOver = true;
        counter.style.color = "red";
        setTimeout(function () {
          alert(
            `Time's up! Sua pontuação equivale a ${pontuaçãoTemporal.innerText} pontos!`
          );
        }, 1000);
        setTimeout(function () {
          window.location.reload();
        }, 2000);
      }
    }
  }
  tick();
}
//TIMER /\

const logoInicio = document.getElementById("telaInicial");
const passarDeFase = document.getElementById("monitor");
const elementosTelaDeJogo = document.querySelectorAll(".hide");

//Rules
let acionarRegras = document.querySelector("#rules");
let regrasImagem = document.querySelector(".hideRules");
let gatilhoDeRegras = true;
acionarRegras.addEventListener("click", () => {
  if (gatilhoDeRegras) {
    gatilhoDeRegras = false;
    regrasImagem.classList.remove("hideRules");
    logoInicio.classList.add("hide");
  } else {
    gatilhoDeRegras = true;
    regrasImagem.classList.add("hideRules");
    logoInicio.classList.remove("hide");
  }
});
//Rules

const gerarFase1 = new Fase("easy");
const gerarFase2 = new Fase("easy");
const gerarFase3 = new Fase("medium");
const gerarFase4 = new Fase("hard");
const gerarFase5 = new Fase("hardcore");

logoInicio.addEventListener("click", () => {
  countdown(2, 00);
  gerarFase1.gerarFase();
  logoInicio.classList.add("hide");
  elementosTelaDeJogo.forEach((element) => {
    element.classList.remove("hide");
  });
  acionarRegras.classList.add("hide");
});

passarDeFase.addEventListener("click", function fase2() {
  if (gerarFase1.conclusao) {
    gerarFase1.conclusao = false;
    gerarFase2.gerarFase();
    const selecionarDadosGirantes = document.querySelectorAll(".dadoGirante");
    if (selecionarDadosGirantes.length !== 5) {
      let dadinhos = document.getElementById("divDosDadinhos");
      while (dadinhos.firstChild) {
        dadinhos.removeChild(dadinhos.lastChild);
      }
      const DadinhosFase2 = new DadinhosPorFase();
      DadinhosFase2.gerar5Dadin();
    }
  }

  if (gerarFase2.conclusao) {
    gerarFase2.conclusao = false;
    gerarFase3.gerarFase();
    const selecionarDadosGirantes = document.querySelectorAll(".dadoGirante");
    if (selecionarDadosGirantes.length !== 5) {
      let dadinhos = document.getElementById("divDosDadinhos");
      while (dadinhos.firstChild) {
        dadinhos.removeChild(dadinhos.lastChild);
      }
      const DadinhosFase3 = new DadinhosPorFase();
      DadinhosFase3.gerar5Dadin();
    }
  }

  if (gerarFase3.conclusao) {
    gerarFase3.conclusao = false;
    gerarFase4.gerarFase();
    const selecionarDadosGirantes = document.querySelectorAll(".dadoGirante");
    if (selecionarDadosGirantes.length !== 5) {
      let dadinhos = document.getElementById("divDosDadinhos");
      while (dadinhos.firstChild) {
        dadinhos.removeChild(dadinhos.lastChild);
      }
      const DadinhosFase4 = new DadinhosPorFase();
      DadinhosFase4.gerar5Dadin();
    }
  }

  if (gerarFase4.conclusao) {
    gerarFase4.conclusao = false;
    gerarFase5.gerarFase();
    const selecionarDadosGirantes = document.querySelectorAll(".dadoGirante");
    if (selecionarDadosGirantes.length !== 5) {
      let dadinhos = document.getElementById("divDosDadinhos");
      while (dadinhos.firstChild) {
        dadinhos.removeChild(dadinhos.lastChild);
      }
      const DadinhosFase5 = new DadinhosPorFase();
      DadinhosFase5.gerar5Dadin();
    }
  }
});
