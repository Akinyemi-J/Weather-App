const apiKey = "7c3aff91c4fd4b37eee001e2258fb0d0";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl+ city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(response.status);
    if(response.status === 404)
    {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } 
    else{
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"
        switch(data.weather[0].main){
            case("Clouds"):
                weatherIcon.src = "images/cloudy.png";
                break;
            case("Clear"):
                weatherIcon.src = "images/sun.png";
                break;
            case("Rain"):
                weatherIcon.src = "images/raining.png";
                break;
            case("Drizzle"):
                weatherIcon.src = "images/drizzle.png";
                break;
            case("Mist"):
                weatherIcon.src = "images/mist.png";
                break;
            default:
                console.log(data.weather[0].main);
        }
        
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }
   

    
    
} 
searchBtn.addEventListener("click", function(){
    checkWeather(searchBox.value);
});
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkWeather(searchBox.value);
    }
});
