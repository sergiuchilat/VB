let arrayAirTime = [],
    timeAirMin = 0,
    timeAirMax = 0,
    timeAir = 0,
    numberAir = 0,
    countAir = 0,
    indexAirTime = 0

function timeAirCalculate() {
    timeAirMin = document.getElementById('timeMin__air').value,
    timeAirMax = document.getElementById('timeMax__air').value,
    timeAir = document.getElementById('time__air').value,
    numberAir = document.getElementById('airNumber').value
    if (indexAirTime < numberAir){
        arrayAirTime[indexAirTime] = timeAir
        if (arrayAirTime[indexAirTime] >= timeAirMin && arrayAirTime[indexAirTime] <= timeAirMax) countAir++
    indexAirTime++
    }
    let parent = document.querySelector('.timeAir'),
        span = document.createElement('span')
    span.innerHTML = '<span> Time: ' + arrayAirTime + '<br> Buses in time: ' + countAir + '</span> </br> </br>'
    parent.append(span)
    //Clear input
    document.getElementById('time').value = ''
}

function stuffAirTime() {
    let min = arrayAirTime[0],
        max = arrayAirTime[0],
        sum = 0
    for (let i = 0; i < arrayAirTime.length; i++){
        if (arrayAirTime[i] < min ) min = parseInt(arrayAirTime[i])
        if (arrayAirTime[i] > max ) max = parseInt(arrayAirTime[i])
        sum += parseInt(arrayAirTime[i])
    }
    alert('Min = ' + min + ' Max = ' + max + ' Medium = ' + (sum/numberAir) + ' Gap = ' + (max-min))
}