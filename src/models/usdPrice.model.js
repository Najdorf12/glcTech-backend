import mongoose from "mongoose";

const usdPriceSchema = new mongoose.Schema(
  {
    usdPrice: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("UsdPrice", usdPriceSchema);
