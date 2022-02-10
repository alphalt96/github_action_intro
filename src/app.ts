import * as express from 'express';
import './core';
import { userRouter } from './routers';
import * as bodyParser from 'body-parser';

export const app = express();

app.use(bodyParser.json())
app.use(userRouter);
