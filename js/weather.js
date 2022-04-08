function onGeoOk(position) {
 const lat = position.coords.latitude;
 const lon = position.coords.longitude
 const API_KEY = "8b46d1d2fb5be43ae110f89a6e57cab0"
 const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
 fetch(url)
 .then(response => response.json())
 .then((data) => {
    const city = document.querySelector(".weather span:first-child");
    const weather = document.querySelector(".weather span:last-child");
    city.innerText = data.name;
    weather.innerText = `${data.main.temp} / ${data.weather[0].main}`;
 });
};
function onGeoError() {
    console.log("Can't find you, No weather info for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);