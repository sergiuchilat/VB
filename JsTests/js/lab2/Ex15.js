
function Armstrong(x) {
    let sum = 0,
        allNumbers = [],
        index = 0
    while (x > 0) {
        oneNumber = x % 10
        x = parseInt(x / 10)
        allNumbers[index] = oneNumber
        index++
    }
    for (let i = 0; i < allNumbers.length; i++) {
        sum += Math.pow(allNumbers[i], index)
    }
    return sum
}

function divisorArm(x) {
    let divisorNumber = []
    for (let i = 0; i < x; i++) {
        if (x % i == 0) {
            divisorNumber[j] = i
            j++
        }
    }
    if (divisorNumber.length == 1) return true
    else return false
}

function ifArmstrong() {
    number = document.getElementById('number').value
    n = document.getElementById('n').value
    if (number == Armstrong(number)) alert('Yes')
    else alert('No')
}

function intervalArmstrong() {
    intervalMin = document.getElementById('intervalMin').value
    intervalMax= document.getElementById('intervalMax').value
    for (let i = Number(intervalMin); i < intervalMax; i++) {
        if (i == Armstrong(i)) {
            arrayNumbers[j] = i
            j++
        }
    }
    biggest = arrayNumbers[arrayNumbers.length - 1];
    let parent = document.querySelector('.armstrong')
    parent.innerHTML = arrayNumbers
    //Clear 
    arrayNumbers = []
    j = 0
}

function firstArmstrong() {
    n = document.getElementById('n').value
    for (let i = 0; i < n; i++) {
        if (i == Armstrong(i)) {
            arrayNumbers[j] = i
            j++
        }
    }
    alert(arrayNumbers)
    arrayNumbers = []
    j = 0
}

function ArmstrongPrime() {
    intervalMin = document.getElementById('intervalMin').value
    intervalMax= document.getElementById('intervalMax').value
    let index = 0
    for (let i = Number(intervalMin); i < intervalMax; i++) {
        if (i == Armstrong(i) && divisorArm(i)) {
            arrayNumbers[index] = i
            index++
        }
        j = 0
    }
    let parent = document.querySelector('.armstrong')
    parent.innerHTML = arrayNumbers
    //Clear 
    arrayNumbers = []
    j = 0
}

document.getElementById('Armstrong-Biggest').onclick = function() {
    alert(biggest)
}