import express from "express";
import morgan from "morgan";
import cors from "cors";

import productsRoutes from "./routes/products.routes.js";

const app = express();
app.use(cors({
    origin:"http://localhost:5173",
    credentials: true,
}))
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/products", productsRoutes);


export default app;