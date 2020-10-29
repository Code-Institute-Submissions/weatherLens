const api = {
    key: "03e844bff36a172614ecb788fd7c7fd8",
    base: "https://api.openweathermap.org/data/2.5/"
}

const enquiry = document.querySelector('.enquiry');
enquiry.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(enquiry.value);
    }
}

function getResults(query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}

function displayResults (weather) {
    let area = document.querySelector('#place .area');
    area.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = new Date.now();
    let date = document.querySelector("#place .day");
    date.innerText = dateBuilder(now);

    let temp = document.querySelector('#conditions-now .temperature');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;


}

function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}