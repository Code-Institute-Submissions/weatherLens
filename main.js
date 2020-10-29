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

