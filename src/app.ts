import express from 'express';
import type { Express, Request, Response, NextFunction } from 'express';

const PORT: number = 3000;

const app: Express = express();

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log('middle ware 1');
  setTimeout((): void => {
    next();
    console.log('wait 1 sec');
  }, 1000);
});
app.use('/', (req: Request, res: Response): void => {
  console.log('middle ware 2');
  res.status(200).send('Hello! express');
});

app.listen(PORT, () => {
  console.log(`${PORT}...🚀`);
});
