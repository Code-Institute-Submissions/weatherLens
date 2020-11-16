const enquiryRef = document.querySelector('#enquiry');
const areaRef = document.querySelector('#area');
const dateRef = document.querySelector ('#day');
const weatherRef = document.querySelector ('#conditions');
const tempRef = document.querySelector ('#temperature');
const tempDiffRef = document.querySelector ('#temperature-difference');
const searchRef = document.querySelector ('#searchBtn')
const api = {
  key: '03e844bff36a172614ecb788fd7c7fd8',
  base: 'https://api.openweathermap.org/data/2.5/',
};


enquiryRef.addEventListener('keypress', checkIfEnter);
searchRef.addEventListener('click', checkIfEnter);


function checkIfEnter(event){
  if(event.keyCode === 13)
  if (event.type == 'click'); {
    getResults(enquiryRef.value);
  }
}


function getResults(city){
  fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
    .then((response) => response.json()) 
    .then((weatherData) => {
    displayResults(weatherData);
    });
}

function displayResults(weather) {
  areaRef.innerText = `${weather.name}, ${weather.sys.country}`;
  const dateToday = new Date();
  dateRef.innerText = dateToday.toDateString();
  tempRef.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
  weatherRef.innerText = weather.weather[0].main;
  tempDiffRef.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
}
