let arrayTime = [],
    timeMin = 0,
    timeMax = 0,
    time = 0,
    number = 0,
    count = 0,
    indexTime = 0

function timeCalculate() {
    timeMin = document.getElementById('timeMin').value,
    timeMax = document.getElementById('timeMax').value,
    time = document.getElementById('time').value,
    number = document.getElementById('busNumber').value
    if (indexTime < number){
        arrayTime[indexTime] = time
        if (arrayTime[indexTime] >= timeMin && arrayTime[indexTime] <= timeMax) count++
    indexTime++
    }
    let parent = document.querySelector('.time'),
        span = document.createElement('span')
    span.innerHTML = '<span> Time: ' + arrayTime + '<br> Buses in time: ' + count + '</span> </br> </br>'
    parent.append(span)
    //Clear input
    document.getElementById('time').value = ''
}

function stuffTime() {
    let min = arrayTime[0],
        max = arrayTime[0],
        sum = 0
    for (let i = 0; i < arrayTime.length; i++){
        if (arrayTime[i] < min ) min = parseInt(arrayTime[i])
        if (arrayTime[i] > max ) max = parseInt(arrayTime[i])
        sum += parseInt(arrayTime[i])
    }
    alert('Min = ' + min + ' Max = ' + max + ' Medium = ' + (sum/number) + ' Gap = ' + (max-min))
}