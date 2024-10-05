function searchweather() {
        const city = document.getElementById("city").value;

        fetch(`http://api.weatherapi.com/v1/forecast.json?key=f38c9c665dfc402a866165914240210&q=${city}&days=7&aqi=no&alerts=no`)
                .then(res => res.json())
                .then(data => {
                        addValues(data)
                })
}

function getweatherbyLatitude(position) {
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=f38c9c665dfc402a866165914240210&q=${position.coords.latitude},${position.coords.longitude}&days=7&aqi=no&alerts=no`)
                .then(res => res.json())
                .then(data => {
                        addValues(data)
                })
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getweatherbyLatitude);
  } else { 
    alert("Geolocation is not supported by this browser.")
  }
}


function addValues(data){
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

        addhourdata(data)
        adddailydata(data)
}

function addhourdata(data) {
        let hour1 = document.getElementById("hour1");
        let hour2 = document.getElementById("hour2");
        let hour3 = document.getElementById("hour3");
        let hour4 = document.getElementById("hour4");

        for (let i = 0; i < data.forecast.forecastday[0].hour.length; i++) {
                if (data.forecast.forecastday[0].hour[i].time.substring(11, 13) == data.current.last_updated.substring(11, 13)) {
                        hour1.innerHTML = `<span>${data.forecast.forecastday[0].hour[i+1].time.substring(11)}</span>
                                        <img src="${data.forecast.forecastday[0].hour[i+1].condition.icon}" width="110">
                                        <span>${data.forecast.forecastday[0].hour[i+1].condition.text}</span><br>
                                        <span>${data.forecast.forecastday[0].hour[i+1].temp_c}°</span>`

                        hour2.innerHTML = `<span>${data.forecast.forecastday[0].hour[i+2].time.substring(11)}</span>
                                        <img src="${data.forecast.forecastday[0].hour[i+2].condition.icon}" width="110">
                                        <span>${data.forecast.forecastday[0].hour[i+2].condition.text}</span><br>
                                        <span>${data.forecast.forecastday[0].hour[i+2].temp_c}°</span>`

                        hour3.innerHTML = `<span>${data.forecast.forecastday[0].hour[i+3].time.substring(11)}</span>
                                        <img src="${data.forecast.forecastday[0].hour[i+3].condition.icon}" width="110">
                                        <span>${data.forecast.forecastday[0].hour[i+3].condition.text}</span><br>
                                        <span>${data.forecast.forecastday[0].hour[i+3].temp_c}°</span>`

                        hour4.innerHTML = `<span>${data.forecast.forecastday[0].hour[i+4].time.substring(11)}</span>
                                        <img src="${data.forecast.forecastday[0].hour[i+4].condition.icon}" width="110">
                                        <span>${data.forecast.forecastday[0].hour[i+4].condition.text}</span><br>
                                        <span>${data.forecast.forecastday[0].hour[i+4].temp_c}°</span>`
                }
        }
}



function adddailydata(data) {
        let day1 = document.getElementById("day1");
        let day2 = document.getElementById("day2");

        day1.innerHTML = `<span>${data.forecast.forecastday[1].date}</span>
                        <img src="${data.forecast.forecastday[1].day.condition.icon}" width="110">
                        <span>${data.forecast.forecastday[1].day.condition.text}</span><br>
                        <span class = "mt-2">${data.forecast.forecastday[1].day.avgtemp_c}°</span>`

        day2.innerHTML = `<span>${data.forecast.forecastday[2].date}</span>
                        <img src="${data.forecast.forecastday[2].day.condition.icon}" width="110">
                        <span>${data.forecast.forecastday[2].day.condition.text}</span><br>
                        <span>${data.forecast.forecastday[2].day.avgtemp_c}°</span>`
}