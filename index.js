import express from "express"
import mongoose from "mongoose"
import { PORT ,mongoDBURL} from "./config.js"
import bookRoutes from "./routes/bookRoutes.js" 
import { Book } from "./models/bookModel.js";
  

const app = express();

//MiddleWare for parsing request body
app.use(express.json());

app.get("/" , (req,res) => {
res.status(201).send("Get request");
return res.status(234).send("Welcome to MERN stack tutorial")
})

app.use('/books',bookRoutes)

mongoose.connect(mongoDBURL)
.then(() => {
console.log("App connected to database ")
app.listen(PORT , () => {
    console.log(`SERVER started ...`)
})
})
.catch((err) => {
console.log(err.message)
})