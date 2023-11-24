import mongoose from "mongoose"

const URl: string ="mongodb://127.0.01:27017"

export const dbConfig =async ()=>{
    try{
        await mongoose.connect(URL);
        console.log("db connected");
        
    } catch (error) {
        console.log(error);
      }
}