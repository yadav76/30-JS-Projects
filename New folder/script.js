const ApiKey = "7a63ce5271d7da4da09b447e33e32aec";
const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")
async function checkweather(city) {
    const respons = await fetch(ApiUrl + city + `&appid=${ApiKey}`);
    var data = await respons.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].description = "clouds") {
        weatherIcon.src = "./images/clouds.png"
    } else if (data.weather[0].description = "clear") {
        weatherIcon.src = "./images/clear.png"

    } else if (data.weather[0].description = "light rain") {
        console.log(data.weather[0].main);
        weatherIcon.src = "./images/rain.png"
    } else if (data.weather[0].description = "mist") {
        console.log(data.weather[0].main);
        weatherIcon.src = "./images/mist.png"
    } else if (data.weather[0].description = "dizzle") {
        console.log(data.weather[0].main);
        weatherIcon.src = "./images/drizzle.png"
    }
    else {
        console.log("hii")
    }
}

// const showdata = () => {
//     checkweather(searchbox.value);

// }

searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
    // console.log('hi')
})