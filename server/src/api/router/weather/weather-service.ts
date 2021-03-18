import axios from 'axios';

export const weather = (weatherUrl: string) => axios.get(weatherUrl).then((res) => ({
        city: res.data.name,
        country: res.data.sys.country,
        desc: res.data.weather[0].description,
        humidity: res.data.main.humidity,
        icon: res.data.weather[0].icon,
        pressure: res.data.main.pressure,
        sunrise: res.data.sys.sunrise,
        sunset: res.data.sys.sunset,
        temp: res.data.main.temp,
        temp_max: res.data.main.temp_max,
        temp_min: res.data.main.temp_min,
        visibility: res.data.visibility,
        // Gets cardinal direction
        wind_direction: `${['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'][Math.round(((res.data.wind.deg / 22.5) + 0.5) % 16)]}`,
        wind_speed: res.data.wind.speed
    })
);