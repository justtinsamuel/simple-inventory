// Import Used Tech
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import inventoryRoutes from "./routes/inventoryRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/inventory", inventoryRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(`MongoDB Connected`);
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.error(err));
