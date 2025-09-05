function atualizarTotais() {
  let pontos = 0;
  let ouros = 0;

  document.querySelectorAll(".ponto").forEach(el => {
    pontos += parseInt(el.innerText) || 0;
  });

  document.querySelectorAll(".ouro").forEach(el => {
    ouros += parseInt(el.innerText) || 0;
  });

  document.getElementById("totalPontos").innerText = pontos;
  document.getElementById("totalOuro").innerText = ouros;
}

atualizarTotais();

setInterval(atualizarTotais, 100000);
