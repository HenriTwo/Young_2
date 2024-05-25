//IDENTIFICAR ELEMENTOS
const NOME = document.querySelector('#nome_input')
const N1 = document.getElementById('n1_input')
const N2 = document.getElementById('n2_input')
const N3 = document.getElementById('n3_input')
const botao = document.querySelector('.submit')

// ADICIONAR EVENTO

botao.addEventListener('click', salvar_dados)

// CRIAR FUNÇÃO

function salvar_dados(){
    localStorage.setItem('N1', N1.value)
    localStorage.setItem('N2', N2.value)
    localStorage.setItem('N3', N3.value)
    localStorage.setItem('NOME', NOME.value)
}

