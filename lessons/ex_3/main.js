function meuEscopo() {
    const form = document.querySelector('.form');
    const result = document.querySelector('.result');

    const pessoas = [];

    // form.onsubmit = function (event) {
    //     event.preventDefault();
    // }

    function recebeForm(event) {
        event.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const altura = form.querySelector('.altura');
        const peso = form.querySelector('.peso');

        // console.log(nome.value, sobrenome.value, peso.value, altura.value)
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        })
        console.log(pessoas)

        const imc = Number(peso.value / altura.value ** 2).toFixed(2);

        result.innerHTML += `<p>
            Nome: ${nome.value} <br>
            Sobrenome: ${sobrenome.value} <br>
            Peso: ${peso.value} <br>
            Altura: ${altura.value} <br>
            IMC: ${imc} <br>
            (${imc > 18 && imc < 30 ? 'Saudável' : 'Problema de peso'}) <br>
            </p>`
    }

    form.addEventListener('submit', recebeForm)
}
meuEscopo();