let listaClientes = [];

document.addEventListener('DOMContentLoaded', () => {
    fetch('./dados/clientes.json')
        .then(response => response.json())
        .then(clientes => {
            listaClientes = clientes; // Salva para uso posterior
            const select = document.getElementById('select-clientes');
            clientes.forEach(cliente => {
                const option = document.createElement('option');
                option.value = cliente.id; // ou outro identificador
                option.textContent = cliente.nome; // ajuste conforme o JSON
                select.appendChild(option);
            });
        })
        .catch(error => console.error('Erro ao carregar clientes:', error));

    const valorProduto2 = document.getElementById('input-valor-produto2');
    const btnVerificarDesconto = document.getElementById('btn-verificar-desconto');
    const resultadoProblema2 = document.getElementById('resultado-problema2')
    const selectClientes = document.getElementById('select-clientes')

    btnVerificarDesconto.addEventListener('click', () => {
        if (valorProduto2.value === '') {
            alert('Preencher valor do Produto')
        } else if (selectClientes.value === '') {
            alert('Selecione um Cliente');
        } else {
            const clienteSelecionado = listaClientes.find(
                cliente => cliente.id.toString() === selectClientes.value
            );
            if (clienteSelecionado && clienteSelecionado.vip) {
                const calculaDescontoVip = valorProduto2.value - (valorProduto2.value*0.10)
                resultadoProblema2.textContent = `Cliente VIP: ${calculaDescontoVip}`
            } else {
                resultadoProblema2.textContent = `Cliente não é VIP: ${valorProduto2.value}`
            }
        }

    })



});