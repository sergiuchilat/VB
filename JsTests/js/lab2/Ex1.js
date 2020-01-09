let number = 0,
  intervalMin = 0,
  intervalMax = 0,
  n = 0,
  j = 0,
  arrayNumbers = [];

//Todo x -> n
function perfect (x) {
  let sum = 0;
  for (let i = 1; i < x; i++) {
    //Todo use ===
    if (x % i == 0) {
      sum += i;
    }
    //Todo can use this: sum += (x % i == 0)?i:0
  }
  return sum;
}

//Todo refactor method name
function divisor (x) {
  let divisorNumber = [];
  for (let i = 0; i < x; i++) {
    //Todo use ===
    if (x % i == 0) {
      /*divisorNumber[j] = i
      j++*/
      //Todo refactor to this
      divisorNumber.push(i);
    }
  }
  return divisorNumber;
}

function numberFriend (x) {
  let divisorsNumber = divisor(x);
  let amount = 0;
  for (let i = 0; i <= divisorsNumber.length; i++) {
    amount += perfect(divisorsNumber[i]);
  }
  return amount;
}

//Todo pass number as parameter
function perfectCheckBAD () {
  number = document.getElementById('number').value;
  if (perfect(number) == number) alert('It is pretty similar');
  else alert('It is not similar');
}

const perfectCheckGood = (number) =>  {return perfect(number) === number};

function perfectInterval () {
    intervalMin = document.getElementById('intervalMin').value,
    intervalMax = document.getElementById('intervalMax').value;
    for (let i = Number(intervalMin); i <= intervalMax; i++) {
        if (perfect(i) == i) {
            arrayNumbers[j] = i;
            j++;
        }
    }
    alert(arrayNumbers);
    arrayNumbers = [];
    //Todo ????
    j = 0;
}

function firstPerfect () {
  n = document.getElementById('n').value,
    intervalMin = document.getElementById('intervalMin').value,
    intervalMax = document.getElementById('intervalMax').value;
  for (let i = Number(intervalMin); i <= intervalMax; i++) {
    if (perfect(i) == i && arrayNumbers.length < n) {
      arrayNumbers[j] = i;
      j++;
    }
  }
  alert(arrayNumbers);
  arrayNumbers = [];
  j = 0;
}
