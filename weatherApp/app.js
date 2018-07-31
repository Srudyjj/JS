const weather = new Weather('Kharkiv', 'ua');
const ui = new UI();
console.log(ui);

// weather.changeLocation('Konotop', 'ua');
document.addEventListener("DOMContentLoaded", getWeather);

function getWeather() {
  weather.getWeather()
    .then(results => {
      console.log(results.wind.speed);
      
      ui.paint(results);
      
    })
    .catch(err => console.log(err));
}

