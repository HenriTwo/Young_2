const NOME = document.querySelector('#nome')
const MEDIA = document.querySelector('#media')
const RESULTADO = document.querySelector('#resultado')

window.onload = function (){
    const nome_salvo = localStorage.getItem('NOME')
    const n1_salvo = parseInt(localStorage.getItem('N1'))
    const n2_salvo = parseInt(localStorage.getItem('N2'))
    const n3_salvo = parseInt(localStorage.getItem('N3'))

    const media = (n1_salvo + n2_salvo + n3_salvo) / 3
    let aprovado = ''

    // VERIFICAR SE PASSOU
    if (media >= 7) {
        aprovado = 'Aprovado'
    }
    else if (media <= 4) {
        aprovado = 'Reprovado'
    }
    else {
        aprovado = 'RECUPERÇÃO'
    }

    //ALTERAR ELEMENTOS

    NOME.innerHTML = nome_salvo
    MEDIA.innerHTML = media.toFixed(1)
    RESULTADO.innerHTML = aprovado
}