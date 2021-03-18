import axios from 'axios';

export const forecast = (forecastUrl: string) => axios.get(forecastUrl).then((res) =>
    // Creates an array for 5 day forecast and initializes it with null values
    // Stores data from list into each index
    new Array(5).fill(null).map((_, i: number) => res.data.list.map((f: any) => ({
        // Gets date
        date: `${new Date(f.dt_txt).getDate()}`,
        // Gets day
        day: `${['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date(f.dt_txt).getDay()]}`,
        desc: f.weather[0].description,
        icon: f.weather[0].icon,
        temp: f.main.temp
    // Slice creates a new array for each day (each array starts at 0:00 and increases by increments of 3) ex. [0:00, 3:00, 6:00, 9:00, 12:00, 15:00, 18:00, 21:00]
    // Map returns the 4th index of the array (12:00 PM)
    })).slice(i * 8, (i + 1) * 8)).map((i: any) => i[4]));