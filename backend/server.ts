import "express-async-errors";
import express, { NextFunction, Request, Response } from 'express';
import { routes } from './src/routes';
import { AppError } from "./src/error/appError";

const app = express();

app.use(express.json());

app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof AppError) {
        return response.status(err.statusCode).json({
            status: "Error",
            message: err.message
        })
    }

    return response.status(500).json({
        status: "Error",
        message: `Internal Server Error - ${err.message}`
    })

})
 
app.listen(3333, () => {
    console.log('Server Running on Port: 3333')
})