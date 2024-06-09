import UsdPrice from "../models/usdPrice.model.js";

export const getUsdPrice = async (req, res) => {
  const usdPrice = await UsdPrice.find();
  res.json(usdPrice);
};

export const createUsdPrice = async (req, res) => {
  const { usdPrice } = req.body;
  try {
    const newUsdPrice = new UsdPrice({
      usdPrice,
    });

    const savedUsdPrice = await newUsdPrice.save();
    res.json(savedUsdPrice);
  } catch (error) {
    console.error(error);
  }
};

export const deleteUsdPrice = async (req, res) => {
    try {
      const usdPrice = await UsdPrice.findByIdAndDelete(req.params.id);
      if (!usdPrice) return res.status(404).json({ message: "Product not found" });
      res.json(usdPrice);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };