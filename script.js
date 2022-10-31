const dado1 = document.querySelector("#gire1");
const dado2 = document.querySelector("#gire2");
const dado3 = document.querySelectorAll("#gire3");

tentativas = 5;
rodadaCounter = 0

counter1 = 0;
counter2 = 0;
counter3 = 0;
counter31 = 0;


function iniciarContagem1() {
  counter1 = Math.floor(Math.random() * 5);
  dado1.innerHTML = counter1;
}

function iniciarContagem2() {
  counter2 = Math.floor(Math.random() * 5);
  dado2.innerHTML = counter2;
}

function iniciarContagem3() {
  counter3 = Math.floor(Math.random() * 5);
  dado3[0].innerHTML = counter3;
  // dado3[1].innerHTML = Math.floor(Math.random() * 5)
}

function iniciarContagem31() {
  counter31 = Math.floor(Math.random() * 5);
  dado3[1].innerHTML = counter31;
}

//essa função precisa checar individualmente os counters...
function checarDados() {
  if (counter1 === counter2) {
    console.log("Match! 1-2");
  }
  if (counter1 === counter3) {
    console.log("Match! 1-3");
  }
  if (counter1 === counter31) {
    console.log("Match! 1-4");
  }
  if (rodadaCounter === 3) {
    console.log(`Sua pontuação equivale a ${counter1*10}`)
  }
  if (tentativas = 0) {
    console.log("Você perdeu ;(")
  }
}

function checagemDerrota() {
    if (tentativas = 0) {
        console.log('Você perdeu.')
    }
}

let repeat1 = setInterval(iniciarContagem1, 500);
// let repeat2 = setInterval(iniciarContagem2,600)
// let repeat3 = setInterval(iniciarContagem3,700)
// let repeat31 = setInterval(iniciarContagem31,700)

dado1.addEventListener("click", () => {
  clearInterval(repeat1);
  let repeat2 = setInterval(iniciarContagem2, 1000);
  let repeat3 = setInterval(iniciarContagem3, 1000);
  let repeat31 = setInterval(iniciarContagem31, 1000);

  dado2.addEventListener("click", () => {
    clearInterval(repeat2);
    // rodadaCounter++;
    // checarDados();  essa chamada de função está desregulando a diminuição das tentativas, pq?
    if (counter1 !== counter2) {
      setInterval(iniciarContagem2, 1000);
    //   rodadaCounter--;
      tentativas--;
      alert("Errou.");
      console.log(tentativas);
    }
  });
  dado3[0].addEventListener("click", () => {
    clearInterval(repeat3);
    // rodadaCounter++
    // checarDados();
    if (counter1 !== counter3) {
      setInterval(iniciarContagem3, 1000);
    //   rodadaCounter--;
      tentativas--;
      alert("Errou.");
      console.log(tentativas);
    }
  });
  dado3[1].addEventListener("click", () => {
    clearInterval(repeat31);
    // rodadaCounter++;
    checarDados();
    if (counter1 !== counter31) {
      setInterval(iniciarContagem31, 1000);
    //   rodadaCounter--;
      tentativas--;
      alert("Errou.");
      console.log(tentativas);
    }
  });
});
