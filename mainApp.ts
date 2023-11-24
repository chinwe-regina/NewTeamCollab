import { Application, Response, Request } from "express";



export const mainApp = (app: Application)=>{
  try{
    app.use("/api/v2");
    app.get("/", (req: Request, res: Response) =>{
      try{
        return res.status(200).json({
          message: "Entry to my server is Succesfull"
        });
      }catch (error){
        return res.status(404).json({
          message: "Error",
        });
      }
    })
  }catch(error){
    console.log(error)
  }
}
