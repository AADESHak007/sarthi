// connection.js
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connectDB = async () => {
    try {
        // const uri = process.env.MONGO_URI;
        // // console.log('MongoDB URI:', uri);
        // if (!uri) {
        //     throw new Error('MONGO_URI is not defined in the environment variables');
        // }
        const dbname ='sarthi' ;// put your own db name or create a env
        await mongoose.connect(`${process.env.MONGO_URI}/${dbname}`, {
        });
        console.log('MongoDB connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDB;
