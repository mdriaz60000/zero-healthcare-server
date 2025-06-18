import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";

import globalErrorHandler from "./app/middleware/globalErrorHandler";
import  httpStatus  from 'http-status';
import router from "./app/routes";


const app: Application = express();
app.use(cors());
app.use(express.json());


app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "zero healthcare server is running",
  });
});

app.use("/api/v1", router)


app.use( globalErrorHandler)

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: "API NOT FOUND!",
        error: {
            path: req.originalUrl,
            message: "Your requested path is not found!"
        }
    })
})



export default app;