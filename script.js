// const dadin1 = new DadosRolling(1)
// const dadin2 = new DadosRolling(2)
// const dadin3 = new DadosRolling(3)
// const dadin4 = new DadosRolling(4)
// const dadin5 = new DadosRolling(5)

// dadin1.gerarDadoRolling()
// dadin2.gerarDadoRolling()
// dadin3.gerarDadoRolling()
// dadin4.gerarDadoRolling()
// dadin5.gerarDadoRolling()

const DadinhosFase1 = new DadinhosPorFase

DadinhosFase1.gerar5Dadin()





const logoInicio = document.getElementById('telaInicial')
const passarDeFase = document.getElementById("monitor");
const elementosTelaDeJogo = document.querySelectorAll('.hide')

const gerarFase1 = new Fase("easy");
const gerarFase2 = new Fase("easy");
const gerarFase3 = new Fase("medium");
const gerarFase4 = new Fase("hard");
const gerarFase5 = new Fase("hardcore");

logoInicio.addEventListener('click', () => {  
  gerarFase1.gerarFase();
  logoInicio.classList.add('hide')
  elementosTelaDeJogo.forEach(element => {
    element.classList.remove('hide')
  })
  
})


passarDeFase.addEventListener(
  "click",
  function fase2() {
    if (gerarFase1.conclusao) {
      gerarFase1.conclusao = false
      gerarFase2.gerarFase();
      const selecionarDadosGirantes = document.querySelectorAll('.dadoGirante')
      if(selecionarDadosGirantes.length !== 5) {
        let dadinhos = document.getElementById('divDosDadinhos')
        while (dadinhos.firstChild) {
          dadinhos.removeChild(dadinhos.lastChild)
        }
        const DadinhosFase2 = new DadinhosPorFase
        DadinhosFase2.gerar5Dadin()        
      }
    }

    if (gerarFase2.conclusao) {
      gerarFase2.conclusao = false
      gerarFase3.gerarFase();
      const selecionarDadosGirantes = document.querySelectorAll('.dadoGirante')
      if(selecionarDadosGirantes.length !== 5) {
        let dadinhos = document.getElementById('divDosDadinhos')
        while (dadinhos.firstChild) {
          dadinhos.removeChild(dadinhos.lastChild)
        }
        const DadinhosFase3 = new DadinhosPorFase
        DadinhosFase3.gerar5Dadin()        
      }
    }

    if (gerarFase3.conclusao) {
      gerarFase3.conclusao = false
      gerarFase4.gerarFase();
      const selecionarDadosGirantes = document.querySelectorAll('.dadoGirante')
      if(selecionarDadosGirantes.length !== 5) {
        let dadinhos = document.getElementById('divDosDadinhos')
        while (dadinhos.firstChild) {
          dadinhos.removeChild(dadinhos.lastChild)
        }
        const DadinhosFase4 = new DadinhosPorFase
        DadinhosFase4.gerar5Dadin()        
      }
    }

    if (gerarFase4.conclusao) {
      gerarFase4.conclusao = false
      gerarFase5.gerarFase();
      const selecionarDadosGirantes = document.querySelectorAll('.dadoGirante')
      if(selecionarDadosGirantes.length !== 5) {
        let dadinhos = document.getElementById('divDosDadinhos')
        while (dadinhos.firstChild) {
          dadinhos.removeChild(dadinhos.lastChild)
        }
        const DadinhosFase5 = new DadinhosPorFase
        DadinhosFase5.gerar5Dadin()        
      }
    }
    
  });


