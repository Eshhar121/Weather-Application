function searchweather() {
    const city = document.getElementById("city").value;
    let location = document.getElementById("location");
    let date = document.getElementById("date");
    let temp = document.getElementById("temp");
    let state = document.getElementById("state");
    let currentimage = document.getElementById("current-image");
    let feelslike = document.getElementById("feelslike");
    let cloud = document.getElementById("cloud");
    let humidity = document.getElementById("humidity");
    let precipitation = document.getElementById("precipitation");
    let wind = document.getElementById("wind");
    let visibility = document.getElementById("visibility");
    let day1 = document.getElementById("day1");
    let day2 = document.getElementById("day2");
    let day3 = document.getElementById("day3");
    let day4 = document.getElementById("day4");

    fetch(`http://api.weatherapi.com/v1/forecast.json?key=f38c9c665dfc402a866165914240210&q=${city}&days=7&aqi=no&alerts=no`)
    .then(res=>res.json())
    .then(data=>{
        location.innerHTML = `${data.location.name},${data.location.country}`
        date.innerHTML = `${data.location.localtime}`;
        temp.innerHTML = `${data.current.temp_c}°C`;
        state.innerHTML = `${data.current.condition.text}`;
        currentimage.innerHTML = `<img width="100" height="100" src="https:${data.current.condition.icon}" alt="" class="weather-summary-image">`;
        feelslike.innerHTML = `${data.current.feelslike_c}°`;
        cloud.innerHTML = `${data.current.cloud}%`;
        humidity.innerHTML = `${data.current.humidity}%`;
        precipitation.innerHTML = `${data.current.precip_mm}mm`;
        wind.innerHTML = `${data.current.wind_kph}kmh`;
        visibility.innerHTML = `${data.current.vis_km}KM`;
        day1.innerHTML = `
                <span>${data.forecast.forecastday[0].date}</span>
                <img src="${data.forecast.forecastday[0].day.condition.icon}" width="">
                <span>${data.forecast.forecastday[0].day.avgtemp_c}°</span>`
        day2.innerHTML = `
                <span>${data.forecast.forecastday[1].date}</span>
                <img src="${data.forecast.forecastday[1].day.condition.icon}">
                <span>${data.forecast.forecastday[1].day.avgtemp_c}°</span>`
        day3.innerHTML = `
                <span>${data.forecast.forecastday[2].date}</span>
                <img src="${data.forecast.forecastday[2].day.condition.icon}">
                <span>${data.forecast.forecastday[2].day.avgtemp_c}°</span>`
    })
}