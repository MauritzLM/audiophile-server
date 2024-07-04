// express, app, cors, routes, bodyparser
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

const app: Express = express();

import router from "./routes/index";
import cors from 'cors';
// bodyparser

const corsOptions = {
    origin: 'https://audiophile-website-gamma.vercel.app/',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

// Enable the use of request body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.json());

// routes
app.use('/', router);

export default app;