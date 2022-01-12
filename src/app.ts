import express from 'express';
import type { Express, Request, Response } from 'express';

const PORT: number = 3000;

const app: Express = express();
app.use('/', (req: Request, res: Response): void => {
  res.status(200).send('Hello! express');
});

app.listen(PORT, () => {
  console.log(`${PORT}...🚀`);
});
