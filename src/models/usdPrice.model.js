import mongoose from "moongose";
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
