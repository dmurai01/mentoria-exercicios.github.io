document.addEventListener('DOMContentLoaded', () => {
    const btnVerificarUrl = document.getElementById('btn-verificar-url');
    const inputUrl = document.getElementById('input-url')
    const resultadoProblema3 = document.getElementById('resultado-problema3')

    // function verificarUrl(listas, urlEsperada) {
    //     let existe = 'teste'
    //     let index
    //     listas.forEach(lista => {
    //         //console.log(lista.url)
    //         if (urlEsperada == lista.url) {
    //             existe = lista.url
    //             index = 'teste'
    //         }


    //         if (existe == urlEsperada) {
    //             resultadoProblema3.textContent = `A URL para ${lista.nome} ${urlEsperada} existe na lista`
    //         } else {
    //             resultadoProblema3.textContent = `A URL ${urlEsperada} não existe na lista`
    //         }
    //         // console.log(existe)
    //         limparCampos()

    //     });
    // }
    function verificarUrl(listas, urlEsperada) {
        const resultado = listas.find(lista => lista.url === urlEsperada);
        if (resultado) {
            resultadoProblema3.textContent = `A URL para ${resultado.nome}: ${urlEsperada} existe na lista`;
        } else {
            resultadoProblema3.textContent = `A URL ${urlEsperada} não existe na lista`;
        }
    }


    btnVerificarUrl.addEventListener('click', () => {
        if (inputUrl.value != '') {
            verificarUrl(resultadosDoGoogle, inputUrl.value)
        } else {
            resultadoProblema3.textContent = 'Preencher a URL'
        }
        inputUrl.value = ''
    })

    const resultadosDoGoogle = [
        {
            url: 'https://mentoria.juliodelima.com.br',
            nome: 'Mentoria 2.0',
            descricao: 'Conheça o Júlio de Lima, seu futuro mentor. Júlio de Lima é Principal QA Engineer, possui 15 anos de experiência em testes de software envolvendo aplicações'
        },
        {
            nome: 'Youtube',
            url: 'https://youtube.com/juliodelimas',
            descricao: 'Melhor canal de testes de software do World todo!'
        },
        {
            nome: 'Instagram',
            url: 'https://instagram.com/juliodelimasinsta',
            descricao: 'Melhor perfil de testes de software do World todo!'
        }
    ]

})