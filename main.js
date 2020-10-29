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

}