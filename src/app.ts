// express, app, cors, routes, bodyparser
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

const app: Express = express();

import router from "./routes/index";
import cors from 'cors';
// bodyparser

const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

// Enable the use of request body parsing middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }))

app.use(express.json());

// routes
app.use('/', router);

export default app;