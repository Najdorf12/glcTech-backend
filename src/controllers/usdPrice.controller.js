import UsdPrice from "../models/usdPrice.model.js";

export const getUsdPrice = async (req, res) => {
  try {
    await UsdPrice.deleteMany({ usdPrice: null });
    const usdPrice = await UsdPrice.find();
    res.json(usdPrice);
  } catch (error) {
    console.error(error);
    return res.status(404).json({ message: "Price not found" });
  }
};

export const createUsdPrice = async (req, res) => {
  const { usdPrice } = req.body;
  try {
    if (usdPrice !== null) {
      const newUsdPrice = new UsdPrice({
        usdPrice,
      });
      const savedUsdPrice = await newUsdPrice.save();
      res.json(savedUsdPrice);
    }
  } catch (error) {
    console.error(error);
    return res.status(404).json({ message: "Price is null. Try again" });
  }
};

export const deleteUsdPrice = async (req, res) => {
  try {
    const usdPrice = await UsdPrice.findByIdAndDelete(req.params.id);
    if (!usdPrice) return res.status(404).json({ message: "Price not found" });
    res.json(usdPrice);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
