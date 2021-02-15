import express from 'express';
import { getLocation } from './location/location-service';
import { getWeather } from './weather/weather-service';
import { getForecast } from './forecast/forecast-service';

export const router = express.Router();

// Uncomment later
// router.get('/location', getLocation);
// Uncomment later
router.get('/weather', getWeather);
// Uncomment later
// router.get('/forecast', getForecast);
