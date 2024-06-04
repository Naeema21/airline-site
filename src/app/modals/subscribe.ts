import mongoose, { Schema } from "mongoose";

const subscribe = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const subscribeModal = mongoose.models.subscribe || mongoose.model("subscribe", subscribe);

export default subscribeModal;
