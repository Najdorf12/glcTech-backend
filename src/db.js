import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("conexion a mongo exitosa")
  } catch (error) {
    console.log(error);
  }
};