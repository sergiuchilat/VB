let arraySport = [],
    sportMin = 0,
    sportMax = 0,
    sport = 0,
    sports = 0,
    countSport = 0,
    indexSport = 0

function sportCalculate() {
    sportMin = document.getElementById('sportMin').value,
    sportMax = document.getElementById('sportMax').value,
    sport = document.getElementById('sport').value,
    sports = document.getElementById('sportNumber').value
    if (indexSport < sports){
        arraySport[indexSport] = Number(sport)
        if (arraySport[indexSport] >= sportMin && arraySport[indexSport] <= sportMax) countSport++
    indexSport++
    }
    let parent = document.querySelector('.sport'),
        span = document.createElement('span')
    span.innerHTML = '<span> sports: ' + arraySport + '<br> sports in interval: ' + countSport + '</span> </br> </br>'
    parent.append(span)
    //Clear input
    document.getElementById('sport').value = ''
}

function stuffSport() {
    let min = arraySport[0],
        max = arraySport[0],
        sum = 0
    for (let i = 0; i < arraySport.length; i++){
        if (arraySport[i] < min ) min = arraySport[i]
        if (arraySport[i] > max ) max = arraySport[i]
        sum += arraySport[i]
    }
    alert('Min = ' + min + ' Max = ' + max + ' Medium = ' + (sum/sports) + ' Gap = ' + (max-min))
}