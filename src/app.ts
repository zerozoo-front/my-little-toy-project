import express from 'express';
import type { Express, Request, Response, NextFunction } from 'express';

const PORT: number = 3000;

const app: Express = express();

declare global {
  namespace Express {
    interface Request {
      myProps?: any;
      requestedAt?: Date;
    }
  }
}
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log('middle ware 1');
  req.myProps = 'ss';
  next();
});
app.use('/', (req: Request, res: Response): void => {
  console.log('middle ware 2', req.myProps);

  res.status(200).send('Hello! express');
});

app.listen(PORT, () => {
  console.log(`${PORT}...🚀`);
});
