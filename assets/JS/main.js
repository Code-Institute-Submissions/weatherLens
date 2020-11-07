const enquiryRef = document.querySelector('.enquiry');
const areaRef = document.querySelector('#place .area');
const dateRef = document.querySelector ('#place .day');
const weatherRed = document.querySelector ('#conditions-now .conditions');
const tempRef = document.querySelector ('#conditions-now .temperature');
const tempDiffRed = document.querySelector ('.temperature-difference');

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const api = {
  key: "03e844bff36a172614ecb788fd7c7fd8",
  base: "https://api.openweathermap.org/data/2.5/"
}


enquiry.addEventListener('keypress', checkIfEnter);

function checkIfEnter(event) {
  if (evt.keyCode === 13) {
    getResults(enquiry.value);
  }
}

function getResults(city) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then((response) => response.json()) 
    .then((weatherData) => {
    displayResults(weatherData);
    });
}

function displayResults(weather) {
  area.innerText = `${weather.name}, ${weather.sys.country}`;
  const dateToday = new.Date();
  date.innerText = dateToday.toDateString();
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
  weatherElement.innerText = weather.weather[0].main;
  temperatureDifference.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
}


console.log (displayResults)