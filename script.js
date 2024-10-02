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

    fetch(`http://api.weatherapi.com/v1/forecast.json?key=ab3f7950032d4d2992c153243240709=${city}`)
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
        console.log(data);
    })
}