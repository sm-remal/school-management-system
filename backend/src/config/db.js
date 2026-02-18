import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const dbConnect = await mongoose.connect(process.env.MONGO_URI);
    
    console.log(`MongoDB Connected Successfully`.bgBlue.bold);
  } catch (error) {
    console.error(`Error: ${error.message}`.bgRed.bold);
    process.exit(1);
  }
};

export default connectDB;