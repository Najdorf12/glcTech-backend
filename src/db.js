import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://agustinmorro:ZPkTh67XbR9RfNBA@glctechdb.hu0tozu.mongodb.net/?retryWrites=true&w=majority&appName=glctechdb");
    console.log("conexion a mongo exitosa")
  } catch (error) {
    console.log(error);
  }
};