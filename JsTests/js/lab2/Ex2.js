let fibNumbers = [],
    biggest = 0

function Fibonacci(x) {
    fibNumbers[0] = 0
    fibNumbers[1] = 1
    for (let i = 2; i < x; i++) {
        fibNumbers[i] = fibNumbers[i-1] + fibNumbers[i-2]
    }
    return fibNumbers
}

function ifFibonacci() {
    n = document.getElementById('n').value
    number = document.getElementById('number').value
    Fibonacci(n)
    for (let i = 0; i <= n; i++) {
        if (number == fibNumbers[i]) number = 1
    }
    if (number == 1) alert('It is a Finobacci number')
    else if (number == number) alert('No, go away')
    let parent = document.querySelector('.toast')
    parent.innerHTML = fibNumbers
    // Clear
    fibNumbers = []
    document.getElementById('n').value = ''
    document.getElementById('number').value = ''
}

function intervalFibonacci() {
    intervalMin = document.getElementById('intervalMin').value
    intervalMax = document.getElementById('intervalMax').value
    n = document.getElementById('n').value
    Fibonacci(n)
    // Copy interval
    let tempInterval = [],
        tempFibonacci = [],
        tempIndex = intervalMax - intervalMin + 1
    for (let i = 0; i < (tempIndex); i++) {
        tempInterval[i] = intervalMin
        intervalMin++
    }
    intervalMin = document.getElementById('intervalMin').value
    let index = 0
    for (let i = 1; i < fibNumbers.length; i++) {
        for (let j = 0; j <= tempInterval.length; j++) {
            if(fibNumbers[i] == tempInterval[j]) {
                tempFibonacci[index] = fibNumbers[i]
                index++
            }
        }
    }
    biggest = tempFibonacci[tempFibonacci.length - 1];
    let parent = document.querySelector('.toast')
    parent.innerHTML = tempFibonacci
}

function FibonacciPrime() {
    intervalMin = document.getElementById('intervalMin').value
    intervalMax = document.getElementById('intervalMax').value
    n = document.getElementById('n').value
    Fibonacci(n)
    // Copy interval
    let tempInterval = [],
        tempFibonacci = [],
        tempIndex = intervalMax - intervalMin + 1
    for (let i = 0; i < (tempIndex); i++) {
        tempInterval[i] = intervalMin
        intervalMin++
    }
    intervalMin = document.getElementById('intervalMin').value
    let index = 0
    for (let i = 1; i < fibNumbers.length; i++) {
        for (let j = 0; j <= tempInterval.length; j++) {
            if (fibNumbers[i] == tempInterval[j]) {
                tempFibonacci[index] = fibNumbers[i]
                index++
            }
        }
    }
    index = 0
    for (let i = 0; i <= tempFibonacci.length; i++) {
        if (divisor(tempFibonacci[i]).length == 1) {
            arrayNumbers[index] = tempFibonacci[i]
            index++
        }
        j = 0
    }
    let parent = document.querySelector('.toast')
    parent.innerHTML = arrayNumbers
}

document.getElementById('Big').onclick = function() {
    alert(biggest)
}