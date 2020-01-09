let arraySalary = [],
    salaryMin = 0,
    salaryMax = 0,
    salary = 0,
    salaries = 0,
    countSalary = 0,
    indexSalary = 0

function salaryCalculate() {
    salaryMin = document.getElementById('salaryMin').value,
    salaryMax = document.getElementById('salaryMax').value,
    salary = document.getElementById('salary').value,
    salaries = document.getElementById('salaryNumber').value
    if (indexSalary < salaries){
        arraySalary[indexSalary] = Number(salary)
        if (arraySalary[indexSalary] >= salaryMin && arraySalary[indexSalary] <= salaryMax) countSalary++
    indexSalary++
    }
    let parent = document.querySelector('.salary'),
        span = document.createElement('span')
    span.innerHTML = '<span> Salaries: ' + arraySalary + '<br> Salaries in interval: ' + countSalary + '</span> </br> </br>'
    parent.append(span)
    //Clear input
    document.getElementById('salary').value = ''
}

function stuffSalary() {
    let min = arraySalary[0],
        max = arraySalary[0],
        sum = 0
    for (let i = 0; i < arraySalary.length; i++){
        if (arraySalary[i] < min ) min = arraySalary[i]
        if (arraySalary[i] > max ) max = arraySalary[i]
        sum += arraySalary[i]
    }
    alert('Min = ' + min + ' Max = ' + max + ' Medium = ' + (sum/salaries) + ' Gap = ' + (max-min) )
}