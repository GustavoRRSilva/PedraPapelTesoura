const playerOptions = document.querySelectorAll(
    ".player-options div > img"
  );
  const optionsEnemy = document.querySelectorAll(
    ".enemy-options div > img"
  );
  function resetOpacity(time) {
    time.forEach((element) => {
      element.style.opacity = 0.3;
    });
  }
  function computerPlayer() {
    let valorAleatorio = Math.floor(Math.random() * 3);//math.floor retorna um número inteiro a baixo do numero feito pelo math.random
    optionsEnemy[valorAleatorio].style.opacity = 1;
    return valorAleatorio;
  }
  playerOptions.forEach((element) => {
    element.addEventListener("click", function (elementoClicado) {
      resetOpacity(playerOptions);
      elementoClicado.target.style.opacity = 1.0; //retorna o content do
      resetOpacity(optionsEnemy); 

      let opcaoPlayer = elementoClicado.target.getAttribute("opt");
      let opcaoInimigo = optionsEnemy[computerPlayer()].getAttribute("opt");
      document.querySelector(".resultado").innerHTML = verificaVencedor(
        opcaoPlayer,
        opcaoInimigo
      );
    });
  });

  function verificaVencedor(opcaoPlayer, opcaoInimigo) {
    if (
      (opcaoPlayer == "pedra" && opcaoInimigo == "papel") ||
      (opcaoPlayer == "papel" && opcaoInimigo == "tesoura") ||
      (opcaoPlayer == "tesoura" && opcaoInimigo == "pedra")
    ) {
      return "Player 2 ganhou!";
    } else if (opcaoInimigo === opcaoPlayer) {
      return "Empate!";
    } else {
      return "Player 1 ganhou!";
    }
  }