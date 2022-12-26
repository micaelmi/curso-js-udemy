const num = Number(prompt("Digite um número:"));
const titleNumber = document.getElementById("titleNumber")
const text = document.getElementById("text")

titleNumber.innerHTML = num
text.innerHTML = `
    <p>Raiz quadrada: ${num ** 0.5}</p>
    <p>${num} é inteiro? ${Number.isInteger(num)}</p>
    <p>Não é um número? ${Number.isNaN(num)}</p>
    <p>Arredondando para baixo: ${Math.floor(num)}</p>
    <p>Arredondando para cima: ${Math.ceil(num)}</p>
    <p>Com duas casas decimais: ${num.toFixed(2)}</p>
`;