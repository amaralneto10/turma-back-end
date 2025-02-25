
const botaoRes = document.getElementById('botaoRes')


function mediaFinal() {
    let n1 = parseFloat(document.getElementById("nota1").value) || 0;
    let n2 = parseFloat(document.getElementById("nota2").value) || 0;
    let n3 = parseFloat(document.getElementById("nota3").value) || 0;
    let n4 = parseFloat(document.getElementById("nota4").value) || 0;

    let media = (n1 + n2 + n3 + n4) / 4;

    document.getElementById("resultado").innerText = "Média: " + media.toFixed(2);

}