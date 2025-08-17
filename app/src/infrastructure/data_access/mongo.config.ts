import mongoose from "mongoose";

export const connectDb = async (uri: string) => {
  await mongoose
    .connect(uri)
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((ex: unknown) => {
      console.error("Connection failed", ex);
    });
};