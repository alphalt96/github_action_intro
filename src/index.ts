import * as express from 'express';
import './core';
import { userRouter } from './routers';
import * as bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json())
app.use(userRouter);

app.listen(8000, () => {
    console.info('Server running on port', 8000);
});
