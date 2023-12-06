function valor(value) {
    document.getElementById('display').value += value; // o valor, operação do usuario e o outro valor escolhido //
}
function limpar() {
    document.getElementById('display').value = ' '; // vazio para limpar o campo de digitação //
}
function total() {
    document.getElementById('display').value = eval(document.getElementById('display').value); // retorno do resultado //
}