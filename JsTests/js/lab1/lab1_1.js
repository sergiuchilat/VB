//Todo refactor
// 1. Split algorithm into methods
// 2. Formatting
// 3. Remove global variables
// 4. Use ES6 code style
// 5. Validate input data (Ex: if number)
// 5. Replace this  <button onclick="solve()">Solve</button> with event listener


let array = [];
let i = 0;// Todo remove i and use students array.length + 1
let students = 0; // Todo unused variable
let quality = 0;
let performance = 0;
let goodMarks = 0;


function readData () {

}

const solve = () => {

};

function showResult () {

}

//Todo add comments for each function/method
function solve () {
  //todo students -> n ???
  let students = document.getElementById('n').value;
  // todo value -> number ?? maybe 'mark'
  let value = document.getElementById('number').value;
  if (i < students) {
    array[i] = Number(value);
    
    //Good Marks
    //Todo check this array[i] <= 10 in readData
    // array[i] -> value ???
    if (array[i] >= 9 && array[i] <= 10) {
      goodMarks++;
    }
    
    //Quality & Performance
    if (value >= 5) {
      quality++;
      performance++;
    }
    
    //Min & Max & Sort
    let min = Math.min(...array);
    let max = Math.max(...array);
    array.sort((a, b) => a - b);
    
    //Results
    //Todo replace with const. Use const where values not changing
    let parent = document.querySelector('.div');
    let span = document.createElement('span');
    span.innerHTML = `<span> Marks: ${array} <br>
                          Min: ${min} <br>
                          Max: ${max} <br>
                          Med: ${average(array)} <br>
                          Gap: ${max - min} <br>
                          %Quality: ${quality * 100 / students} <br>
                          %Performance: ${performance * 100 / students} <br>
                          Marks between 9 and 10: ${goodMarks} <br> <br>`;
    parent.append(span);
    i++;
  }
  //Clear input
  document.getElementById('number').value = '';
}

function average (arr) {
  return arr.reduce((acc, i) => acc += i, 0) / arr.length;
}
