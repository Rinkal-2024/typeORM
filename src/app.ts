import "reflect-metadata";
import express from "express";
import dotenv from 'dotenv'
dotenv.config();
import { AppDataSource } from "./config/database";
import userRouter from './routes/userRoutes'

const app = express();
app.use(express.json());
const PORT = 8000;

app.get('/' , function(req, res){
    res.send("Hello World");
})

app.use("/api/auth", userRouter);


AppDataSource.initialize()
.then(async () => {
    app.listen(PORT, () => {
      console.log("Server is running on http://localhost:" + PORT);
    });
    console.log("Data Source has been initialized!");
  })
.catch((error) => console.log(error));


