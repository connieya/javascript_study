const API_KEY = "6572b2544fd8dff5adbd7a8156b1cb4d";
function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live in = ", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main}`;
    });
}

function onGeoError() {
  alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
