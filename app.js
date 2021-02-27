const submit = document.querySelector('.btn')
const celcius = document.querySelector(".celcius")
const fahrenheit = document.querySelector(".fahrenheit")
const kelvin = document.querySelector(".kelvin")
const weather_image = document.querySelector('.weather_image')

const conditionImage = {
    superCold: 'https://images.unsplash.com/photo-1549472579-e133f59d8b23?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
    extraCold: "https://images.unsplash.com/photo-1551701113-60eec9564876?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1323&q=80",
    cold: "https://images.unsplash.com/photo-1593435713463-e8bf5bea9786?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80",
    normalCold: 'https://images.unsplash.com/photo-1603739421258-4aa79ad860df?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1383&q=80',
    normal: "https://images.unsplash.com/photo-1557764459-ec0f03edcfca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80",
    sunny: "https://images.unsplash.com/photo-1565677913671-ce5a5c0ae655?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    desert: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    muri: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
    lava: "https://images.unsplash.com/photo-1554232682-b9ef9c92f8de?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
}

let lastEdit = 'celcius'

const updateLastEdit = () => {
    celcius.addEventListener('keyup', (e) => {
        lastEdit = 'celcius'
    })

    fahrenheit.addEventListener('keyup', (e) => {
        lastEdit = 'fahrenheit'
    })

    kelvin.addEventListener('keyup', (e) => {
        lastEdit = 'kelvin'
    })
}
updateLastEdit()

const updateImage = (temp) => {
    if(temp < -10){
        weather_image.setAttribute('src', conditionImage.superCold)
    }else if(temp >= -10 && temp <= 0){
        weather_image.setAttribute('src', conditionImage.extraCold)
    }else if(temp > -10 && temp <= 0){
        weather_image.setAttribute('src', conditionImage.cold)
    }else if(temp > 0 && temp <= 15){
        weather_image.setAttribute('src', conditionImage.normalCold)
    }else if(temp > 15 && temp <= 25){
        weather_image.setAttribute('src', conditionImage.normal)
    }else if(temp > 25 && temp <= 35){
        weather_image.setAttribute('src', conditionImage.sunny)
    }else if(temp > 35 && temp < 1000){
        weather_image.setAttribute('src', conditionImage.desert)
    }else if(temp >= 1000){
        weather_image.setAttribute('src', conditionImage.lava)
    }
}

const convert = (lastEdited) => {
    if(lastEdited === 'celcius') {
        const fVlue = (parseFloat(celcius.value) * 9 / 5) + 32
        const kVlue = parseFloat(celcius.value) + 273

        fahrenheit.value = Math.floor(fVlue) + ' °F'
        kelvin.value = Math.floor(kVlue) + ' K'
        
    }else if(lastEdited === 'fahrenheit'){
        const cVlue = (parseFloat(fahrenheit.value) - 32) * 5/9
        const kVlue = (parseFloat(fahrenheit.value) - 32) * 5/9 + 273

        celcius.value = Math.floor(cVlue) + ' °C'
        kelvin.value = Math.floor(kVlue) + ' K'

    }else if(lastEdited === 'kelvin'){
        const cVlue = parseFloat(kelvin.value) - 273
        const fVlue = (parseFloat(kelvin.value) - 273.15) * 9/5 + 32

        celcius.value = Math.floor(cVlue) + ' °C'
        fahrenheit.value = Math.floor(fVlue) + ' °F'   
    }
}

submit.addEventListener('click', () => {
    convert(lastEdit)
    let temp = 0
    if(lastEdit === 'celcius') {
        temp = celcius.value
    }else if(lastEdit === 'fahrenheit'){
        temp = (parseFloat(fahrenheit.value) - 32) * 5 / 9
    }else if(lastEdit === 'kelvin'){
        temp = parseFloat(kelvin.value) - 273
    }
    updateImage(temp)
})

