const senha_elemento = document.getElementById("senha")
const copiar_elemento = document.getElementById("copiar")
const tamanho_elemento = document.getElementById("tamanho")
const maiusculas_elemento = document.getElementById("maiusculas")
const minusculas_elemento = document.getElementById("minusculas")
const especiais_elemento = document.getElementById("especiais")
const numeros_elemento = document.getElementById("numeros")
const gerar_senha_btn = document.querySelector('.submit')
const limpar_btn = document.querySelector('.reset')

const maiusculas = 'ABCDEFGIJKLMNOPQRTUVWXYZ'
const minusculas = 'abcdefgijklmnopqrtuvwxyz'
const numeros = '01234569'
const caracteres ='!@#|$%+-?/|~^;:ç*&[]'

gerar_senha_btn.addEventListener('click', gerar_senha)
copiar_elemento.addEventListener('click', copiar)
limpar_btn.addEventListener('click', atualizar_pagina)


function gerar_senha() {
    let tamanho_senha = tamanho_elemento.value

    if(!tamanho_senha || tamanho_senha < 6)
    {
        tamanho_senha = 6
    }
    else if( tamanho_senha > 10)
    {
        tamanho_senha = 10
    }

    let = senha = ''
    for (let i = senha.length; i < tamanho_senha; i++)
    {
        const letra_sorteada = misturar_senha()
        senha += letra_sorteada
    }
    senha_elemento.innerText = senha
    
}

function misturar_senha() {
    const lista = []
    if(maiusculas_elemento.checked) {
        let sorteada = maiusculas[Math.floor(Math.random() * maiusculas.length)]
        lista.push(sorteada)
    }
    if(minusculas_elemento.checked) {
        let sorteada = minusculas[Math.floor(Math.random() * minusculas.length)]
        lista.push(sorteada)
    }
    if(numeros_elemento.checked) {
        let sorteada = numeros[Math.floor(Math.random() * numeros.length)]
        lista.push(sorteada)
    }
    if(especiais_elemento.checked) {
        let sorteada = caracteres[Math.floor(Math.random() * caracteres.length)]
        lista.push(sorteada)
    }
    if (lista.length === 0)
    {
        return ''
    }
    return lista[Math.floor(Math.random() * lista.length)]
}

function atualizar_pagina() {
    location.reload()
}
function copiar() {
    const area_texto = document.createElement('textarea')
    const pw = senha_elemento.innerText

    if (!pw) {
        return
    }

    area_texto.value = pw
    document.body.appendChild(area_texto)
    area_texto.select()
    document.execCommand('copy')
    area_texto.remove()
    window.alert('Senha copiada com sucesso!!!')
}
