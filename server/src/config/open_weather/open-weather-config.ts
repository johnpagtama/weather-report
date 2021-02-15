export const owm = {
    base: 'https://api.openweathermap.org/data/2.5/',
    weather: 'weather?q=',
    forecast: 'forecast?q=',
    units: '&units=imperial',
    app_id: '&APPID=',
    key: process.env.WEATHER_KEY
};