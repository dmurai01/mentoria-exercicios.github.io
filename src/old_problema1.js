// Problema: Calcular qual valor pagar em um produto após aplicar um desconto a ele.
// Exemplo: Tenho um produto que custa R$ 55,00 e a loja me deu um desconto de 10%.
// Quero descobrir quanto irei pagar nesse produto.

// Solução: Saber o valor atual do produto, saber valor do desconto, mostrar valor com desconto

// Sequência de passos:
// Informe o valor atual do produto
// Informe o desconto (%)
// Faça o calculo (valor do desconto, valor do produto com desconto)
// Mostre o resultado

const valorProduto = 142.00;
const descontoPorcento = 10;

const descontoReais = 10;

const valorDoDesconto = valorProduto * (descontoPorcento / 100);
const valorComDescontoPorcento = valorProduto - valorDoDesconto;
const valorComDescontoReais = valorProduto - descontoReais

console.log(valorComDescontoPorcento);
console.log(valorComDescontoReais);