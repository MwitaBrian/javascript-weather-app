document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  let weather = {
  apiKey: '285dc7d12b49e28ef136e0bbb52e464c',
  getWeather: function getWeather (cityName) {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=' 
      + cityName 
      + '&units=metric&appid=' 
      + this.apiKey
    )
    .then((response) => response.json())
    .then((data) => this.displayWeather(data))
    
  },
  displayWeather: function(data) {
    const {name} = data
    const { icon, description} = data.weather[0];
    const { temp, humidity} = data.main;
    const { speed} = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector('.city').innerText = `Weather in ${name}`;
    document.querySelector('.weatherIcon').src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    document.querySelector('.description').innerText = description;
    document.querySelector('.temp').innerText = `${temp}°C`;
    document.querySelector('.humidity').innerText = `Humidity: ${humidity}%`;
    document.querySelector('.wind').innerText = `Wind speed: ${speed}km/h`;
    document.querySelector('.weather').classList.remove("loadWindow");
  },
  checkWeather: function() {
    this.getWeather(document.querySelector('.search-bar').value);
  }
};

document.querySelector('.searchButton').addEventListener('click', function (){ 
  weather.checkWeather(); 
});

document.querySelector('.searchBox').addEventListener('keyup', function(enterKey) {
  if (enterKey.key == "Enter") {
    weather.checkWeather()
  }
});


});