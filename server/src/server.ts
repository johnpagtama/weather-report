import express, { Express } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import 'dotenv/config';
import { corsOptions } from './config/cors/cors.options' 
import { router } from './api/router/router-index';

const app: Express = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(helmet());
app.use('/api/router', router);

export default app;