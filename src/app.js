import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import fileUpload from "express-fileupload";

import authRoutes from "./routes/auth.routes.js";
import productsRoutes from "./routes/products.routes.js";
import dinamicImagesRoutes from "./routes/dinamicImages.routes.js";
import usdPriceRoutes from "./routes/usdPrice.routes.js";

const app = express();
app.use(cors({/*  http://localhost:5173  https://www.grupolacomunidad.com.ar*/
    origin:"https://www.grupolacomunidad.com.ar",
    credentials: true,
}));

app.use(morgan("dev"));
app.use(express.json());

app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : './uploads'
}));

app.use(cookieParser()); 

app.use("/api/auth", authRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/dinamicImages", dinamicImagesRoutes);
app.use("/api/usdprice", usdPriceRoutes);


export default app;