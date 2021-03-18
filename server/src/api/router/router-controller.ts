import { NextFunction, Request, Response } from 'express';
import { ip } from '../../config/ipify/ipify-config';
import { owm } from '../../config/open_weather/open-weather-config';
import { location } from './location/location-service';
import { weather } from './weather/weather-service';
import { forecast } from './forecast/forecast-service';

export const requestWeather = async (req: Request, res: Response, next: NextFunction) => {
    const loc: string = req.params['loc'];
    const weatherUrl: string = `${owm.base}${owm.weather}${loc}${owm.units}${owm.app_id}${owm.key}`;
    const forecastUrl: string = `${owm.base}${owm.forecast}${loc}${owm.units}${owm.app_id}${owm.key}`;
    
    try {
        res.json([await weather(weatherUrl), await forecast(forecastUrl)]);
    } catch (error) {
        next(error);
    }
}

export const requestCurrentLocation = async (req: Request, res: Response, next: NextFunction) => {
    const currentLocUrl: string = `${ip.base}${ip.key}`;
    
    try {
        res.json(await location(currentLocUrl));
    } catch (error) {
        next(error);
    }
}