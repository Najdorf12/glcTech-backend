import Product from "../models/product.model.js";
import { uploadImage, deleteImage } from "../libs/cloudinary.js";
import fs from "fs-extra";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  const {
    name,
    description,
    description2,
    category,
    price,
    camara,
    procesador,
    pantalla,
    bateria,
    youtube,
    image,
  } = req.body;
  
  console.log(req.body)

  try {
    const newProduct = new Product({
      name,
      description,
      description2,
      category,
      price,
      camara,
      procesador,
      pantalla,
      bateria,
      youtube,
      image,
    });

    /*    if (req?.files?.image) {
      const result = await uploadImage(req.files?.image.tempFilePath);
      newProduct.image = {
        public_id: result?.public_id,
        secure_url: result?.secure_url,
      };
      await fs.unlink(req.files?.image.tempFilePath);
    } */

    const savedProduct = await newProduct.save();
    res.json(savedProduct);
  } catch (error) {
    console.error(error);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    await deleteImage(product?.image?.public_id);
    res.json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

export const getProductByCategory = async (req, res) => {
  const category = req.params.categoryName;
  try {
    const products = await Product.find();
    const productsFilter = products.filter(
      (product) => product.category === category
    );
    if (!productsFilter)
      return res.status(404).json({ message: "Product not found" });
    res.json(productsFilter);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
};

export const getProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  try {
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
