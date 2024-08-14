import mongoose from "mongoose";
import logger from "./loggerConfig.mjs";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        logger.info('MongoDB connected successfully');
    } catch (err) {
        logger.error('Error connecting to MongoDB:', err.message);
        process.exit(1);
    }
}

export default connectDB;