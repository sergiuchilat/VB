let arrayCountry = [],
    countryMin = 0,
    countryMax = 0,
    country = 0,
    countries = 0,
    countCountry = 0,
    indexCountry = 0

function countryCalculate() {
    countryMin = document.getElementById('countryMin').value,
    countryMax = document.getElementById('countryMax').value,
    country = document.getElementById('country').value,
    countries = document.getElementById('countryNumber').value
    if (indexCountry < countries){
        arrayCountry[indexCountry] = Number(country)
        if (arrayCountry[indexCountry] >= countryMin && arrayCountry[indexCountry] <= countryMax) countCountry++
    indexCountry++
    }
    let parent = document.querySelector('.country'),
        span = document.createElement('span')
    span.innerHTML = '<span> countries: ' + arrayCountry + '<br> countries in interval: ' + countCountry + '</span> </br> </br>'
    parent.append(span)
    //Clear input
    document.getElementById('country').value = ''
}

function stuffCountry() {
    let min = arrayCountry[0],
        max = arrayCountry[0],
        sum = 0
    for (let i = 0; i < arrayCountry.length; i++){
        if (arrayCountry[i] < min ) min = arrayCountry[i]
        if (arrayCountry[i] > max ) max = arrayCountry[i]
        sum += arrayCountry[i]
    }
    alert('Min = ' + min + ' Max = ' + max + ' Medium = ' + (sum/countries) + ' Gap = ' + (max-min))
}