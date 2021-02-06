import app from './server';
import 'dotenv/config';

const port = Number(process.env.SERVER_PORT || 5000);
app.listen(port, () => console.log(`Connection established on port: ${port}`));