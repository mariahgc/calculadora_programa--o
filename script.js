function valor(value) {
    document.getElementById('display').value += value;
}
function limpar() {
    document.getElementById('display').value = ' ';
}
function total() {
    document.getElementById('display').value = eval(document.getElementById('display').value);

}