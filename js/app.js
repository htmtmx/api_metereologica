let lon;
let lat;
let api_key = "8393630d2e7330ba025b7293058753ac";
let url = '';
let js = document.getElementById('js');
let icon = document.getElementById('icon_weather');
let weather = document.getElementById('weather');

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => { 
    lon = position.coords.longitude;
    lat = position.coords.latitude;

    url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;
    console.log(url);

    const getData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather">`;
      weather.innerHTML = `<h1>${data.weather[0].main}</h1>`;
      js.innerHTML += `
        <div class="col-6">
          <ul class="list-group">
            <li class="list-group-item">City: ${data.name}</li>
            <li class="list-group-item">Country: ${data.sys.country}</li>
            <li class="list-group-item">Weather: ${data.weather[0].main}</li>
            <li class="list-group-item">Percentage of Clouds: ${data.clouds.all}</li>
            <li class="list-group-item">Humidity: ${data.main.humidity}</li>
            <li class="list-group-item">Wind Speed: ${data.wind.speed}</li>
            <li class="list-group-item">Temperature: ${data.main.temp}&#8451;</li>

          </ul>
        </div>
      `;
    }
    getData();
  })
}

window.addEventListener('load', () => { 
  const button = document.querySelector('body');
});