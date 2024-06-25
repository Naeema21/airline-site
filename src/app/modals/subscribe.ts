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

const subscribeModal =
  mongoose.models.subscribe || mongoose.model("subscribe", subscribe);

const Contact = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const contactModal =
  mongoose.models.contact || mongoose.model("contact", Contact);

export { subscribeModal, contactModal };
