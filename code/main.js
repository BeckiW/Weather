function loadWeather() {

  let cityInput = document.getElementById('city')

  const query = cityInput.value
  const apiKey = "39da65c366b4ce5427d96f6fb0b3e982"

  if (query === "") {
    alert("That was an invalid city, try again")
  } else {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}`

    fetch(url).then((response) => {
      console.log(response)
      return response.json()
    }).then((data) => {
      console.log(data)

      if (data.weather === undefined) {
        alert("Invalid city, please try again")
      } else {
        console.log(data.weather)

        let div = document.getElementById("result")

        const weather = data.weather[0].main;
        const description = data.weather[0].description
        const temp = data.main.temp
        const city = data.name
        const image = data.weather[0].icon

        const tempC = Math.round(temp - 273.15)

        div.innerHTML = `
        <h2>The weather in ${city} is ....</h2>
        <h2>${weather}</h2>
        <h3>${description}</h3>
        <h4>Temperature: ${tempC}&degC</h4>
        <img src=Images/${image}.png />
        `
      }
    })
  }
}

window.onload = () => {
  let searchButton = document.getElementById("searchButton")
  searchButton.onclick = () => {
    loadWeather()
  }

  let clearButton = document.getElementById("clearButton")
  clearButton.onclick = () => {
    let div = document.getElementById("result")
    div.innerHTML = ""
    let cityInput = document.getElementById('city')
    cityInput.value = ""
  }

}
