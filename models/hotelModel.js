import mongoose from "mongoose";
const { Schema } = mongoose;

const HotelModel = new Schema({
  questions: {
    type: Array,
    default: [],
  },
  answers: {
    type: Array,
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Hotel", HotelModel);
