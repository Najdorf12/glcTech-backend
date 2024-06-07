import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
    },
    description2: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
    },
    date: {
      type: Date,
      dafault: Date.now,
    },
    image: {
      public_id: String,
      secure_url: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", productSchema);
