
let apiKey = 'JYSG6TZH6UNHET3N5MC23NPQH';
let temprature = document.getElementById("temp");
let windSpeed = document.getElementById("windSpeed");
let cloudCover = document.getElementById("cloudCover");
let humidity = document.getElementById("humidity");
let weather = document.getElementById("visibility");
let cityName = document.getElementById("city1");
let cityInput = document.getElementById("cityInput");
let btn = document.getElementById("btn");
let warn = document.getElementById("alerting");
let celtemp = 0;
let fTemp = 0;
async function getWeather(){
     event.preventDefault();
    console.log("okay");
    let city = cityInput.value.trim();
    console.log(city);
        let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=JYSG6TZH6UNHET3N5MC23NPQH`;
    const response = await fetch(url);
    console.log(response);
    const weatherData = await response.json();
    console.log(weatherData);
    fTemp =  weatherData.currentConditions.temp;
    celtemp = (fTemp - 32)/1.8;
    temprature.textContent = `${celtemp.toFixed(1)}\u00B0C`;
    cityName.textContent = `${weatherData.resolvedAddress.split(',')[0].trim()}`;
    weather.textContent = `${weatherData.currentConditions.conditions}`;
    windSpeed.textContent = `${weatherData.currentConditions.windspeed}m/s `;
    cloudCover.textContent = `${weatherData.currentConditions.cloudcover}% `;
    humidity.textContent = `${weatherData.currentConditions.humidity}% `;
   
}
btn.addEventListener("click", getWeather);

    