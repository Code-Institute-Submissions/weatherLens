const enquiryRef = document.querySelector('#enquiry');
const areaRef = document.querySelector('#area');
const dateRef = document.querySelector ('#day');
const weatherRef = document.querySelector ('#conditions');
const tempRef = document.querySelector ('#temperature');
const tempDiffRef = document.querySelector ('#temperature-difference');
const searchRef = document.querySelector ('#searchBtn');
const dateToday = new Date();

const api = {
  key: '03e844bff36a172614ecb788fd7c7fd8',
  base: 'https://api.openweathermap.org/data/2.5/',
};


enquiryRef.addEventListener('keypress', checkIfEnter);    
searchRef.addEventListener('click', checkIfEnter);      


/**
 * 
 * @param {object} event Triggered by the user either clicking the enter button or by using the mouse and clicking on the search icon
 */
function checkIfEnter(event){
  if(event.keyCode === 13 || event.type === 'click') {
    getResults(enquiryRef.value);
  }
}

/**
 * This function will fetch the weather data from the open weather API
 * If the location that the user searches for is invalid, this function will catch the error
 * 
 * @param {string} city The location the user is searching to find out the weather conditions
 * @returns {Object} The weather at the searched location
 */

function getResults(city) {
    fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
        .then((response) => response.json())
        .then((weatherData) => {
            console.log(weatherData);
            displayResults(weatherData);
        })
        .catch((error) => {
            console.log(error)
             resetView();
            
        });
}

/**
 * 
 * @param {nay} clear  clears the weather data on the screen if there is an error
 */

function resetView(clear) {
    areaRef.innerText = "";
    dateRef.innerText = "";
    tempRef.innerHTML = "";
    weatherRef.innerText = "";
    tempDiffRef.innerText = "";
}


/**
 * 
 * @param {any} weather displays the weather conditions for the users searched location
 * @returns {Object} displays the location name, date, temperature, conditions and minimum and maximum temperature
 */

function displayResults(weather) {
    if (weather.cod === '404') {
        resetView()
        areaRef.innerHTML = "City not found. Please try again."
    } else {
  areaRef.innerText = `${weather.name}, ${weather.sys.country}`;
  dateRef.innerText = dateToday.toDateString();
  tempRef.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
  weatherRef.innerText = weather.weather[0].main;
  tempDiffRef.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
}
}
