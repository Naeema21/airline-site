import mongoose from "mongoose";

export const connectMongoDB = async () => {
  
  const URL = 'mongodb+srv://daveallen9871:lrZrI8mZ91a5bfva@cluster0.lahwti8.mongodb.net/'
  try {
    await mongoose.connect(URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
  }
};
