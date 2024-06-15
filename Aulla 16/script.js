 const OUTPUT_COLOR = document.querySelector('#output-color span')
 const OUTPUT = document.querySelector('#output')
 const GERAR_BTN = document.querySelector('#gerar')
 const COPIAR_BTN = document.querySelector('#copiar')
 const ALERTA_ELEMENTO = document.querySelector('.alerta')

 window.onload = gerar_hexcolor
 GERAR_BTN.addEventListener('click', gerar_hexcolor)
 GERAR_BTN.addEventListener('hold', add_cursor)
 GERAR_BTN.addEventListener('mouseout', remove_cursor)
 COPIAR_BTN.addEventListener('click', copy_on_to_clipboard)
 COPIAR_BTN.addEventListener('mousein', add_cursor)
 COPIAR_BTN.addEventListener('mouseout', remove_cursor)

 function gerar_hexcolor() {
    let hex_code = '#'
    for (i = 0; i < 6; i++){
        hex_code += Math.floor(Math.random() * 16).toString(16)
    }
    OUTPUT.value = hex_code
    OUTPUT_COLOR.classList.remove('show-color')
    setTimeout(() =>OUTPUT_COLOR.classList.add('show-color'), 10)
    OUTPUT_COLOR.style.backgroundColor = hex_code
 }

 function copy_on_to_clipboard() {
    navigator.clipboard.writeText(OUTPUT.value)
    copiar_alert()
 }

 function copiar_alert() {
    ALERTA_ELEMENTO.classList.add('show')
    setTimeout(() => ALERTA_ELEMENTO.classList.remove('show'), 2000)
 }

 function add_cursor() {
    GERAR_BTN.classList.add('grabbing')
    COPIAR_BTN.classList.add('grabbing')
 }

 function remove_cursor() {
    GERAR_BTN.classList.remove('grabbing')
    COPIAR_BTN.classList.remove('grabbing')
 }