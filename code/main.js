function loadWeather() {
  const request = new XMLHttpRequest();
  //get text from input
  ///getElementById
  //figure out how to get the text out and put it into query

  let cityInput = document.getElementById('city')

  const query = cityInput.value
  const apiKey = "39da65c366b4ce5427d96f6fb0b3e982"

  if (query === "") {
    alert("That was an invalid city, try again")
  } else {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}`

    request.open("GET", url);
    request.send();

    request.onload = () => {
      var result = JSON.parse(request.responseText);
      console.log(result);



      if (result.weather === undefined) {
        alert("No such city")

      } else {

        let div = document.getElementById("result");

        //result comes as an array so have to pull out the right number

        const weather = result.weather[0].main;
        const description = result.weather[0].description
        const temp = result.main.temp
        const image = result.weather[0].icon

        const tempC = Math.round(temp - 273.15)

        div.innerHTML = `
        <h2>${weather}</h2>
        <h3>${description}</h3>
        <h3>${tempC}&degC</h3>
        <img alt="image" src="${image}"/>
        `
      }
    }
  }
}

window.onload = () => {
  let searchButton = document.getElementById("searchButton")
  searchButton.onclick = () => {
    loadWeather()
  }
}

window.onload = () => {

  let clearButton = document.getElementById("clearButton")
  clearButton.onclick = () => {
    ///some clearing function??????
  }

}
