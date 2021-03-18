import express from 'express';
import { requestCurrentLocation } from './router-controller';
import { requestWeather } from './router-controller';

export const router = express.Router();

// Returns current location data on startup
router.get('/weather', requestCurrentLocation);
// Returns weather data when a search query is sent
router.get('/weather/:loc', requestWeather);