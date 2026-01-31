const apiKey ="b3f3ec858bb6c12cc3eb7a872a0ef043";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city) {
    console.log(city);
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    var data = await response.json();
    if(data.name==undefined){
        alert("Please enter a valid city")
        return;
    }
    

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "℃" ;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "image/cloud.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "image/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "image/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "image/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "image/mist.png";
    }

    document.querySelector(".weather").style.display= "block";

    
}

searchBtn.addEventListener("click", ()=>{
    if (searchBox.value != ""){
        checkweather(searchBox.value);

    }
    
    
})