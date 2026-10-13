const display = document.getElementById("display");
const btn = document.getElementById("get-weather-btn");
const loca = document.getElementById("location");

const getWeatherUrl = 'https://weather-proxy.freecodecamp.rocks/api/city/';

btn.addEventListener("click", () => {
    console.log(loca.value);
    if (loca.value === "") return;
    showWeather(loca.value);
})

let getWeather = async city => {
    try {
        const res = await fetch(`${getWeatherUrl}${city}`);
        if (!res.ok) throw new Error();
        return await res.json();
    } catch (error) {
        console.error(error);
        alert("Something went wrong, please try again later");
    }
}

let showWeather = async city => {
    try {
        const data = await getWeather(city);
        if (data) {
            // console.log(data)
            const {weather, main, visibility, wind, name} = data;
            display.innerHTML = `
      <h1 id="location">${name ?? "N/A"}</h1>
      <img id="weather-icon" src="${weather?.[0]?.icon ?? 'N/A'}" alt="${weather?.[0]?.description ?? "N/A"}"/>
      <span id="weather-main">${weather?.[0].main ?? "N/A"}</span>
      <span id="main-temperature">${main?.temp ?? "N/A"}°C</span>
      <span id="feels-like">Feels like: ${main?.feels_like ?? "N/A"}°C</span>
      <span id="humidity">Humidity: ${main?.humidity ?? "N/A"}%</span>
      <span id="wind">Wind: ${wind?.speed ?? "N/A"} km/h</span>
      <span id="wind-gust">Gust: ${wind?.gust ?? "N/A"} km/h</span>
      `
        }
    } catch (error) {
        console.error(error);
        alert("Something went wrong, please try again later");
    }

}