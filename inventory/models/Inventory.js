import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema({
  name: String,
  category: String,
  stock: Number,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Inventory', inventorySchema);