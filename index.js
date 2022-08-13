import express from "express";
import dotenv from "dotenv";
import http from "http";
import api from "./routers/index.js";
import { ErrorHandler, handleError } from "./helpers/error.js";
import logger from "morgan"

dotenv.config({
    path: "./config/.env",
});

const app = express();
app.use(logger('dev'));

app.use(express.json());
app.use(api);


app.use((err, req, res, next) => {

    if (err.constructor === ErrorHandler) {
        handleError(err, res)        
    }
    else {
        handleError(new ErrorHandler(500, 'Internal Server Error'), res)
    }
})



const server = http.createServer(app);

server.listen(process.env.PORT || 3000, () => {
    console.log(server.address());
});

export default server;