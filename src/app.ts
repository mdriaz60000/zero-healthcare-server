import express, { Application, Request, Response } from "express";
import cors from "cors";
import { userRouter } from "./app/modules/user/user.routes";


const app: Application = express();
app.use(cors());
app.use(express.json());

 app.use("/api/v1", userRouter)

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "zero healthcare server is running",
  });
});



export default app;