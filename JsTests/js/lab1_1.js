let array = []
let i = 0
let students = 0
let quality = 0
let performance = 0
let goodMarks = 0
function solve() {
    if (i < students) {
        let value = document.getElementById('number').value,
            min = array[0],
            max = array[0],
            sum = 0
        array[i] = Number(value)
        
        //Good Marks
        if (array[i] >= 9 && array[i] <= 10) goodMarks++

        //Quality & Performance
        if (value >= 5){
            quality++
            performance++
        }

        for (let j = 1; j < array.length; j++) {
            //MIN
            if (array[j] < min) min = array[j]
            //MAX
            if (array[j] > max)  max = array[j]
            //MED
            sum += array[j]
        }

        let parent = document.querySelector('.div'),
            span = document.createElement('span')
        span.innerHTML = '<span> Marks: ' + array + '</br> Min: ' + min + '</br> Max: ' + max + '</br> Med: ' + (sum/array.length) + '<br> Gap: ' + (max-min) + '</br> %Quality: ' + (quality * 100 / students) + '</br>%Performance ' + (performance * 100 / students) + '</br> Marks between 9 and 10: ' + goodMarks + '</span> </br> </br>'
        parent.append(span)
        i++
    }
    //Clear input
    document.getElementById('number').value = ''
}

function enterNumber() {
    students = document.getElementById('n').value
    alert('Thx for introducing ' + students)
    //Clear input
    document.getElementById('n').value = ''
}