let divDosDadinhos = document.getElementById("divDosDadinhos");

class DadosRolling {
  constructor(posicao) {
    this.posicao = posicao;
  }

  gerarDadoRolling() {
    const canvas = document.createElement("canvas");
    canvas.classList.add(`dadoGirante`);
    divDosDadinhos.appendChild(canvas);
    const ctx = canvas.getContext("2d");

    const CANVAS_WIDTH = (canvas.width = 25);
    const CANVAS_HEIGHT = (canvas.height = 25);

    const dadoRolling = new Image();
    dadoRolling.src = "dices.png";
    const spriteWidth = 16.2;
    const spriteHeight = 16.05;

    //variáveis para manipular eixos x e y (mudança de frames)
    let frameX = 0;
    let frameY = 14;

    //deixar animação lenta
    let gameFrame = 0;
    const staggerFrames = 10;

    ctx.drawImage(
      dadoRolling,
      frameX * spriteWidth,
      frameY * spriteHeight,
      spriteWidth,
      spriteHeight,
      43, //alterar eixo X
      55, //alterar eixo Y
      spriteWidth,
      spriteHeight
    );

    function animate() {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      // ctx.fillRect(100,50,100,100);
      // ctx.drawImage(image, sx, sy, sw, sh, dx, dy,dw,dh)
      //s (sprite), significa a porção que será cortada do sprite, e d, significa a posição da imagem no container
      ctx.drawImage(
        dadoRolling,
        frameX * spriteWidth,
        frameY * spriteHeight,
        spriteWidth,
        spriteHeight,
        0, //alterar eixo X
        0, //alterar eixo Y
        25,
        25
      );

      // se multiplicar a coordenada sx pelo spriteWIDHT (1*spriteWidth, caminha uma animação para a direita)
      // se multiplicar a coordenada sy pelo spriteHEIGHT (1*spriteHeigth, caminha uma animação para a baixo)

      //linhas para animar -- preciso lidar com BLINK, então é uma posição a menos do sprite
      if (gameFrame % staggerFrames == 0) {
        if (frameX < 5) {
          frameX++;
        }
        // frameX = Math.floor(Math.random() * 6);}
        else {
          frameX = 0;
        }
      }

      //e também com a Velocidade da Animação
      gameFrame++;
      requestAnimationFrame(animate);
    }
    animate();
  }
}

class DadinhosPorFase {
  gerar5Dadin() {
    const dadin1 = new DadosRolling(1);
    const dadin2 = new DadosRolling(2);
    const dadin3 = new DadosRolling(3);
    const dadin4 = new DadosRolling(4);
    const dadin5 = new DadosRolling(5);

    dadin1.gerarDadoRolling();
    dadin2.gerarDadoRolling();
    dadin3.gerarDadoRolling();
    dadin4.gerarDadoRolling();
    dadin5.gerarDadoRolling();
  }

  sumir5Dadin() {
    
  }
}
