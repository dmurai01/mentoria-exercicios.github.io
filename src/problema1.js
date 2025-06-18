document.addEventListener('DOMContentLoaded', () => {
    const valorProduto = document.getElementById('input-valor-produto');
    const descontoPorcento = document.getElementById('input-desconto');
    const resultadoProblema1 = document.getElementById('resultado-problema1')
    const btnPesquisar = document.getElementById('btn-pesquisar');

    btnPesquisar.addEventListener('click', () => {
        //alert(valorProduto.value)
        if (valorProduto.value == '') {
            alert('Preencher valor do produto')
        } else
        if (descontoPorcento.value == '') {
            alert('Preencher porcentagem do desconto')
        }
        const calculaDesconto = valorProduto.value - (valorProduto.value * (descontoPorcento.value/100))
        console.log(calculaDesconto)
        resultadoProblema1.textContent = `Resultado Problema 01: ${calculaDesconto}`
    });


})

