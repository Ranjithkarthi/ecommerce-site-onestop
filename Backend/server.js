import express from "express"
import cors from "cors"
import 'dotenv/config'
import connectDb from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js"
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";


const app = express()
const port = process.env.PORT || 4000;
connectDb()
connectCloudinary()
//middlewares
app.use(express.json()) 

// app.use(cors())
// Configure CORS to allow only the frontend URL
app.use(cors({
  origin: "https://onestop-frontend.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,  // Set to true if the frontend includes cookies or authentication headers
}));
  
//Api End points

app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter )

app.get("/",(req,res)=>{
    res.send("API Working")
})


app.listen(port,()=>{
    console.log(`app is listening at the port: ${port}`);
})
