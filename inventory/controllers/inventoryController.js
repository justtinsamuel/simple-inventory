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
  const item = await Inventory.findByIdAndUpdate(req.params.id, req.body, {
    new: res.json(item),
  });
};

export const remove = async (res, req) => {
    await Inventory.findByIdAndDelete(req.params.id);
    res.status(205).end();
}