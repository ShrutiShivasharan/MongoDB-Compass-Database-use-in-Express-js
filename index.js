import dotenv from 'dotenv'
import express from 'express'
import connectDB from './config/db.js';
import userRouter from './routes/user.router.js'

const app = express();
dotenv.config();
connectDB();

app.use(express.json());

const PORT = process.env.PORT || 8001;

//route
app.use('/users',userRouter);

//start server
app.listen(PORT, ()=> {
    console.log("server is running on : localhost:"+`${PORT}`);
})









