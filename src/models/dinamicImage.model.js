import mongoose from "mongoose";

const dinamicImageSchema = new mongoose.Schema({
  images: {
    facebook: {
      public_id: { type: String, required: false },
      secure_url: { type: String, required: false },
    },
    instagram: {
      public_id: { type: String, required: false },
      secure_url: { type: String, required: false },
    },
    tiktok: {
      public_id: { type: String, required: false },
      secure_url: { type: String, required: false },
    },
    youtube: {
      public_id: { type: String, required: false },
      secure_url: { type: String, required: false },
    },
    google: {
      public_id: { type: String, required: false },
      secure_url: { type: String, required: false },
    },
  },
});

export default mongoose.model("DinamicImage", dinamicImageSchema);
