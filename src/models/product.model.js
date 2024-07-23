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
    procesador: {
      typer: String,
    },
    pantalla: {
      typer: String,
    },
    bateria: {
      typer: String,
    },
    youtube: {
      type: String,
    },
    image: {
      public_id: String,
      secure_url: String,
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
