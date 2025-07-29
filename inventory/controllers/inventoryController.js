import Inventory from "../models/Inventory.js";

export const getAll = async (req, res) => {
  const items = await Inventory.find();
  res.json(items);
};

export const create = async (req, res) => {
  const item = new Inventory(req.body);
  await item.save();
  res.status(201).json(item);
};

export const update = async (req, res) => {
  try {
    const item = await Inventory.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const remove = async (req, res) => {
  try {
    const item = await Inventory.findByIdAndDelete(req.params.id);

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json({ message: "Item deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
