console.clear()
import express, { Application } from "express"
import cors from "cors"
import mongoose from "mongoose"

const URL: string = "mongodb://127.0.0.1:27017/DragDropTask";
const app: Application = express();
const Port = 2299;

app.use(express.json());
app.use(cors());


app.listen(Port, async ()=>{
    await mongoose.connect(URL).then((res)=>{
        console.log("DataBase Connected to Port", Port)
    })
})