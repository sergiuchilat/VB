let arrayAge = [],
    ageMin = 0,
    ageMax = 0,
    age = 0,
    ages = 0,
    countAge = 0,
    indexAge = 0

function ageCalculate() {
    ageMin = document.getElementById('ageMin').value,
    ageMax = document.getElementById('ageMax').value,
    age = document.getElementById('age').value,
    ages = document.getElementById('ageNumber').value
    if (indexAge < ages){
        arrayAge[indexAge] = Number(age)
        if (arrayAge[indexAge] >= ageMin && arrayAge[indexAge] <= ageMax) countAge++
    indexAge++
    }
    let parent = document.querySelector('.age'),
        span = document.createElement('span')
    span.innerHTML = '<span> Time: ' + arrayAge + '<br> Buses in time: ' + countAge + '</span> </br> </br>'
    parent.append(span)
    //Clear input
    document.getElementById('age').value = ''
}

function stuff() {
    let min = arrayAge[0],
        max = arrayAge[0],
        sum = 0
    for (let i = 0; i < arrayAge.length; i++){
        if (arrayAge[i] < min ) min = arrayAge[i]
        if (arrayAge[i] > max ) max = arrayAge[i]
        sum += arrayAge[i]
    }
    alert('Min = ' + min + ' Max = ' + max + ' Medium = ' + (sum/ages) + ' Gap = ' + (max-min) )
}
