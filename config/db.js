import mongoose from "mongoose";

const connectDB = async () => {

    try{
        const con = await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log(`MongoDB Connected : ${con.connection.host}`)
    }catch(err){
        console.error("MongoDB connection Error", err)
        process.exit(1);
    }
}

export default connectDB;