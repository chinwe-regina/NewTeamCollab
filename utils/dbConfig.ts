import mongoose from "mongoose"

const URl: string ="mongodb://127.0.0.1:27017/todoDB"

export const dbConfig =async ()=>{
    try{
        await mongoose.connect(URL);
        console.log("db connected");
        
    } catch (error) {
        console.log(error);
      }
}