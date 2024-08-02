import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    description2: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    camara: {
      type: String,
      required: true,
    },
    procesador: {
      type: String,
    },
    pantalla: {
      type: String,
    },
    bateria: {
      type: String,
    },
    youtube: {
      type: String,
    },
    image: {
      public_id: String,
      secure_url: String,
    },
    images: {
      type: [String],
    },
    date: {
      type: Date,
      dafault: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", productSchema);
