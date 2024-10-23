import express from 'express';

import configExpress from './config/express'


const app = express();

configExpress(app);
//routes(app);

export default app;
