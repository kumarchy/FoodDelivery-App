import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB=async ()=>{

  try {
    const dbURI = process.env.MONGODB_URI; 
    if (!dbURI) {
      throw new Error("MONGODB_URI is not defined in .env file");
    }
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  }catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); 
  }
}
