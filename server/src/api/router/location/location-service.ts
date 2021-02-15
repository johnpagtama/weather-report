import { NextFunction, Request, Response } from 'express';
import axios from 'axios';
import 'dotenv/config';
import { ip } from '../../../config/ipify/ipify-config';

export const getLocation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { data } = await axios.get(`${ip.base}${ip.key}`);

        res.json(data);
    } catch (error) {
        next(error);
    }
}