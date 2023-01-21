import { PrismaClient } from '@prisma/client';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';


const prisma = new PrismaClient();

dotenv.config();
const port = process.env.PORT || 8080;

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World');
})

app.get('/api/signup', (req, res) => {
  console.log(req);
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
