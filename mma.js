/* 
take input from user
api call
render the response
*/

const cityElement = document.querySelector("input")
const button = document.querySelector("button")


button.addEventListener("click", async function(){
    const apiKey ="b3f3ec858bb6c12cc3eb7a872a0ef043";
    const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const response = await fetch(URL+ cityElement.value + "&appid=" + apiKey )
    var report = await response.json()
    const temp = document.querySelector(".temp")
    temp.innerHTML = report["main"]["temp"]
    const city = document.querySelector(".city")
    city.innerHTML = report.name
    const humidity = document.querySelector(".humidity")
    humidity.innerHTML = report["main"]["humidity"]
    const wind = document.querySelector(".wind")
    wind.innerHTML = report["wind"]["speed"]
    const weather = document.querySelector(".weather")
    weather.style.display = "block"
})

