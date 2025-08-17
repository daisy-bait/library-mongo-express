import mongoose from "mongoose";

export const connectDb = async (uri) => {
  await mongoose
    .connect(uri)
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((ex) => {
      console.error("Connection failed", ex);
    });
};
