import express, { Request, Response } from "express"
import sql from "./db"
const app = express()

app.get('/', (req: Request, res: Response) => {
    
})

app.listen(process.env.PORT || 5000, () => {
    console.log("Running")
})