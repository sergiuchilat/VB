let arrayTemperature = [],
    Month = 0,
    days = 0,
    temperature = 0,
    medium = 0,
    bigger = 0
function daysNumber() {
    let Month = document.getElementById('Month').value
    switch(Month) {
        case '1':case '3':case '5':case '7':case '8':case '10':case '12' : days = 31
            break
        case '2' : days = 28
            break
        case '4':case '6':case '9':case '11' : days = 30
            break
    }
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    for (let i = 0; i < days; i++) {
        temperature = getRandomInt(-20, 20)
        medium = temperature/days
        if (temperature > medium) bigger++
        arrayTemperature[i] = Number(temperature)
    }
    let parent = document.querySelector('.Temperature'),
            span = document.createElement('span')
        span.innerHTML = '<span> Temperature: ' + arrayTemperature + '<br>Days with temperature bigger than medium: ' + bigger +  '</span> </br> </br>'
        parent.append(span)
}

function stuffTemperature() {
    let min = arrayTemperature[0],
        max = arrayTemperature[0],
        sum = 0
    for (let i = 0; i < arrayTemperature.length; i++){
        if (arrayTemperature[i] < min ) min = arrayTemperature[i]
        if (arrayTemperature[i] > max ) max = arrayTemperature[i]
        sum += arrayTemperature[i]
    }
    alert('Min = ' + min + ' Max = ' + max + ' Medium = ' + (sum/days) + ' Gap = ' + (max-min) )
}


