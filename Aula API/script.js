const CIDADE = document.querySelector('#cidade')
const BUTTON = document.querySelector('button')
const RESULT = document.querySelector('#resultado')

// EVENTOS

BUTTON.addEventListener('click', get_weather)

async function get_weather() {
    const API_KEY = 'e82252527048047f45c32776acc06ba9'
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CIDADE.value}&units=metric&appid=${API_KEY}`
    try {
            const response = await fetch(API_URL)
            if (!response.ok)
                {
                    throw new Error('Cidade inexistente')
                }
            else {
                const dados = await response.json()
                const temp = dados.main.temp
                const umi = dados.main.humidity
                const temp_min = dados.main.temp_min
                const temp_max = dados.main.temp_max
                const sensação = dados.main.feels_like

                    RESULT.textContent = `Temperatura: ${temp}°C Max: ${temp_max}°C Min: ${temp_min}°C Umidade: ${umi}% Sensação: ${sensação}°C`
                    RESULT2.textContent = `
                    console.log(temp, umi, temp_min, temp_max, sensação)
                }
    }
    catch (error){
        console.log('COÉ MANÉ DEU RUIM')
        console.log(error)
    }
}


