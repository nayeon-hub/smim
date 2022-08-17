import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('Hello'));

const PORT = 4000;

const handleListening = () =>
  console.log(`✅ server Listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
