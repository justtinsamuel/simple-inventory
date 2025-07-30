"use client";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddItemForm({ onAdd }: { onAdd: (item: any) => void }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !category) {
      alert("Nama dan Kategori wajib diisi!");
      return;
    }
    if (stock < 0 || price < 0) {
      alert("Stock dan Harga harus lebih dari 0!");
      return;
    }

    const newItem = {
        id: uuidv4(),
        name,
        category,
        stock,
        price,
    }

    onAdd(newItem);

    // Reset form
    setName("");
    setCategory("");
    setStock(0);
    setPrice(0);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-6">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Nama Barang
        </label>
        <input
          type="text"
          placeholder="Masukkan nama barang"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full text-gray-800 placeholder-gray-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Kategori
        </label>
        <input
          type="text"
          placeholder="Masukkan kategori"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full text-gray-800 placeholder-gray-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Jumlah Stok
        </label>
        <input
          type="number"
          placeholder="Contoh: 10"
          value={stock}
          onChange={(e) => setStock(Number(e.target.value))}
          className="border border-gray-300 p-2 rounded w-full text-gray-800 placeholder-gray-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Harga Satuan
        </label>
        <input
          type="number"
          placeholder="Contoh: 5000"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="border border-gray-300 p-2 rounded w-full text-gray-800 placeholder-gray-500"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Tambah Barang
      </button>
    </form>
  );
}
