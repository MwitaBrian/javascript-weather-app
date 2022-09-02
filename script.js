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
    console.log(name, icon, description, temp, humidity, speed)
  }
}