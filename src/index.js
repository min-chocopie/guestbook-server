import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';


let count = 0;

dotenv.config();
const port = process.env.PORT || 8080;

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World');
})

app.get('/api/count', (req, res) => {
  count++;
  res.json({ result: count });
})

app.get('/api/count/current', (req, res) => {
  res.json({ result: count });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
