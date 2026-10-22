import express, { Request, Response } from 'express';
import cors from 'cors';
import apirouter from './routers'
import { requestLogger } from './middlewares/logger.middleware';
import { globalErrorHandler } from './middlewares/errorHandler.middleware';

const app = express();

app.use(cors());
app.use(express.json());

app.use(requestLogger);

app.use('/api/v1', apirouter)

app.use((_req, res) => {
  res.status(404).json({ success: false, error: 'Ruta no encontrada.' });
});

app.use(globalErrorHandler);


export default app;