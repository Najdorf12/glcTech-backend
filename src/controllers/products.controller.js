import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

 export const createProduct = async (req, res) => {
  const { name, description, category, price } = req.body;
  try {
    const newProduct = new Product({
      name,
      description,
      price,
      category
    });
    
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
    res.json(product);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
};

export const getProductByCategory = async (req, res) => {
  const category = req.params.categoryName;
  const products = await Product.find();
  const productsFilter = products.filter(
    (product) => product.category === category
  );
  if (!productsFilter)
    return res.status(404).json({ message: "Product not found" });
  res.json(productsFilter);
};
