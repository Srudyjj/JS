class UI {
  constructor() {
    this.time = document.getElementById('w-time');
    this.location = document.getElementById('w-location');
    this.lon = document.getElementById('w-lon');
    this.lat = document.getElementById('w-lat');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.pressure = document.getElementById('w-pressure');
    this.wind = document.getElementById('w-wind');
    this.sunrise = document.getElementById('w-sunrise');
    this.sunset = document.getElementById('w-sunset');
    this.form = document.getElementById('w-form');
    this.changeBtn = document.getElementById('w-change-btn');
  }

  paint(weather) {
    this.time.textContent = weather.dt;
    this.location.textContent = weather.name;
    this.lon.textContent = `lon: ${weather.coord.lon}`;
    this.lat.textContent = `lat: ${weather.coord.lat}`;

    this.desc.textContent = weather.weather[0].description;
    
    this.string.textContent = `${weather.main.temp} ºC`;
    this.icon.setAttribute("src",`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
    this.icon.setAttribute("alt",weather.weather[0].description);
    this.humidity.textContent = `Humidity: ${weather.main.humidity} %`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure} %`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure} hPa`;
    this.pressure.wind = `Wind: ${weather.wind.speed} m/s`;
    this.sunrise.textContent = `Sunrise: ${weather.sys.sunrise}`;
    this.sunset.textContent = `Sunset: ${weather.sys.sunset}`;
  }
}


