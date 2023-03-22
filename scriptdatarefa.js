const form = document.getElementById('form');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  if (campoB.value > campoA.value) {
    mensagem.innerHTML = 'Formulário válido!';
    mensagem.style.color = 'green';
  } else {
    mensagem.innerHTML = 'Formulário inválido! O valor do campo B deve ser maior que o valor do campo A.';
    mensagem.style.color = 'red';
  }
});