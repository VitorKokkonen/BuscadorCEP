const cep = document.getElementById('cep');
const botao = document.getElementById('btn-cep');
const cepDiv = document.querySelector('.cep-buscado')

botao.addEventListener('click', () => {
    let cepDigitado = cep.value
    cepDigitado = buscaEndereco(cepDigitado);
    cepDiv.classList.add('cep-valido');


})

async function buscaEndereco(cepDigitado) {

    try {
        let buscaCep = await fetch(`https://viacep.com.br/ws/${cepDigitado}/json/`);
        let buscaCepConverse = await buscaCep.json()
        if (buscaCepConverse.erro) {
            cepDiv.innerHTML = `<p>Cep Inexistente</p>`
        }
        let cidade = buscaCepConverse.localidade
        let estado = buscaCepConverse.uf
        let rua = buscaCepConverse.logradouro
        let bairro = buscaCepConverse.bairro

        cepDiv.innerHTML = `<p>Cidade: ${cidade}</p> 
                            <p>Estado: ${estado}</p>  
                            <p>Rua: ${rua} 
                            <p>Bairro: ${bairro}</p> `


    } catch (erro) {
        cepDiv.innerHTML = `<p>Cep Inválido!</p>`
    }
}


