import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js'
import path from "path"

dotenv.config()
const app = express();
const PORT = process.env.PORT 

const __dirname = path.resolve()

app.use(express.json()); // Middleware to parse json data from client (req.body)
app.use("/api/products",productRoutes)

if(process.env.NODE_ENV ==="production"){
  app.use(express.static(path.join(__dirname,'/frontend/dist'))) 
  
  app.get("",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"))
  })
}

// console.log(process.env.MONGO_URI) 
// Port activation for listening
app.listen(PORT, () => {
    connectDB()
    console.log(`Server started at http://localhost:${PORT}`)
})

