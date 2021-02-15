import app from './server';

const port = Number(process.env.SERVER_PORT || 5000);
app.listen(port, () => console.log(`Connection established on port: ${port}`));