let weather = {
  apiKey: '285dc7d12b49e28ef136e0bbb52e464c',
  getWeather: function () {
    fetch('https://api.openweathermap.org/geo/1.0/direct?q=Tokyo&units=metric&appid=285dc7d12b49e28ef136e0bbb52e464c')
    .then((response) => response.json())
    .then((data) => console.log(data))
  }
}