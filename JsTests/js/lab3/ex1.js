let array = []
let i = 0
let quality = 0
let performance = 0
let goodMarks = 0

function Solve() {
    let students = document.getElementById('student-number').value
    let value = document.getElementById('marks').value
    if (i < students) {
        array[i] = Number(value)
        
        //Good Marks
        if (array[i] >= 9 && array[i] <= 10) goodMarks++

        //Quality & Performance
        if (value >= 5){
            quality++
            performance++
        }

        //Min & Max & Sort
        let min = Math.min(...array)
        let max = Math.max(...array)
        array.sort((a, b) => a - b)

        //Results
        let parent = document.querySelector('.div'),
            span = document.createElement('span')
        span.innerHTML = `<span> Marks: ${array} <br>
                          Min: ${min} <br>
                          Max: ${max} <br>
                          Med: ${average(array)} <br>
                          Gap: ${max - min} <br>
                          %Quality: ${quality * 100 / students} <br>
                          %Performance: ${performance * 100 / students} <br>
                          Marks between 9 and 10: ${goodMarks} <br> <br>`
        parent.append(span)
        i++
    }
}

document.getElementById('shift').onclick = function() {
    let index = document.getElementById('n').value
    let newArray = array.slice(1).concat(array.slice(0, 1))
    let spliceArray = array.splice(index, 1)
    alert(newArray)
    console.log(spliceArray);
}


function average(arr) {
    return arr.reduce((acc, i) => acc += i, 0) / arr.length
}