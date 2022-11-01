const dado1 = document.querySelector("#gire1");
const dado2 = document.querySelector("#gire2");
const dado3 = document.querySelectorAll("#gire3");
let invocada = false;

tentativas = 5;
rodadaCounter = 0;

counter1 = 0;
counter2 = 0;
counter3 = 0;
counter31 = 0;

function iniciarContagem1() {
  counter1 = Math.floor(Math.random() * 7);
  dado1.innerHTML = counter1;
}

function iniciarContagem2() {
  counter2 = Math.floor(Math.random() * 7);
  dado2.innerHTML = counter2;
}

function iniciarContagem3() {
  counter3 = Math.floor(Math.random() * 7);
  dado3[0].innerHTML = counter3;
}

function iniciarContagem31() {
  counter31 = Math.floor(Math.random() * 7);
  dado3[1].innerHTML = counter31;
}

//essa função precisa checar individualmente os counters...
function checarDados() {
  if (rodadaCounter === 3) {
    console.log(`Você ganhou.Sua pontuação equivale a ${counter1 * 10}`);
  }
  if (tentativas === 0) {
    console.log("Você perdeu ;(");
  }
}

let repeat1 = setInterval(iniciarContagem1, 500);
let repeat2 = setInterval(iniciarContagem2, 1000);
let repeat3 = setInterval(iniciarContagem3, 1000);
let repeat31 = setInterval(iniciarContagem31, 1000);

dado1.addEventListener("click", () => {
  invocada = true;
  clearInterval(repeat1);

  dado2.addEventListener("click", () => {
    if (counter1 === counter2) {
      clearInterval(repeat2);
      rodadaCounter++;
      console.log(
        `Você tem ${tentativas} tentativas, e você deu match em ${rodadaCounter} dado.`
      );
    } else {
      tentativas--;
      alert("Errou.");
      console.log(
        `Você tem ${tentativas} tentativas, e você deu match em ${rodadaCounter} dado.`
      );
    }
    checarDados();
  });
  dado3[0].addEventListener("click", () => {
    if (counter1 === counter3) {
      clearInterval(repeat3);
      rodadaCounter++;
      console.log(
        `Você tem ${tentativas} tentativas, e você deu match em ${rodadaCounter} dado.`
      );
    } else {
      tentativas--;
      alert("Errou.");
      console.log(
        `Você tem ${tentativas} tentativas, e você deu match em ${rodadaCounter} dado.`
      );
    }
    checarDados();
  });
  dado3[1].addEventListener("click", () => {
    if (counter1 === counter31) {
      clearInterval(repeat31);
      rodadaCounter++;
      console.log(
        `Você tem ${tentativas} tentativas, e você deu match em ${rodadaCounter} dado.`
      );
    } else {
      tentativas--;
      alert("Errou.");
      console.log(
        `Você tem ${tentativas} tentativas, e você deu match em ${rodadaCounter} dado.`
      );
    }
    checarDados();
  });
});


dado2.addEventListener("click", () => {
  if (!invocada) {
    console.log(`O trunfo precisa ser escolhido.`);
  }
});
dado3[0].addEventListener("click", () => {
  if (!invocada) {
    console.log(`O trunfo precisa ser escolhido.`);
  }
});
dado3[1].addEventListener("click", () => {
  if (!invocada) {
    console.log(`O trunfo precisa ser escolhido.`);
  }
});

const dadoInicial = new Dado()

const gerarFase2 = new Fase('fácil')
const gerarFase3 = new Fase('média')
const gerarFase4 = new Fase('difícil')
const gerarFase5 = new Fase('hardcore')

gerarFase2.gerarFase()
gerarFase3.gerarFase()
gerarFase4.gerarFase()
gerarFase5.gerarFase()



// dadoInicial.gerarDado()
// dadoInicial.rolarDado()
