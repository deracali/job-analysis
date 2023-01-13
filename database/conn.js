import mongoose from "mongoose";

mongoose.set("strictQuery", true);

export default async function connect() {
  await mongoose.connect(process.env.MONGO_URL);

  console.log("connected");
}
