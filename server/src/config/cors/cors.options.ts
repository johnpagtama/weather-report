import 'dotenv/config';

export const corsOptions = { origin: `http://localhost:${Number(process.env.SERVER_PORT || 5000)}` };