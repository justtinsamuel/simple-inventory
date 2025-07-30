"use client";
import { useState } from "react";
import AddItemForm from "@/components/AddItemForm";

type Item = {
  id: string;
  name: string;
  category: string;
  stock: number;
  price: number;
};

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);

  const handleAddItem = (item: Item) => {
    setItems([...items, item]);
  };

  const handleDelete = (id: string) => {
    const updated = items.filter((item) => item.id !== id);
    setItems(updated);
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-6">
          Inventory Management
        </h1>

        <div className="bg-white rounded-xl shadow p-4">
          <AddItemForm onAdd={handleAddItem} />

          {items.length === 0 ? (
            <p className="text-gray-500 mt-4">Belum ada barang ditambahkan.</p>
          ) : (
            <div className="overflow-x-auto mt-6">
              <table className="min-w-full border text-black text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border px-3 py-2 text-left">No</th>
                    <th className="border px-3 py-2 text-left">Nama</th>
                    <th className="border px-3 py-2 text-left">Kategori</th>
                    <th className="border px-3 py-2 text-center">Stok</th>
                    <th className="border px-3 py-2 text-right">Harga</th>
                    <th className="border px-3 py-2 text-right">Total</th>
                    <th className="border px-3 py-2 text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr key={item.id}>
                      <td className="border px-3 py-2 text-center">
                        {index + 1}
                      </td>
                      <td className="border px-3 py-2">{item.name}</td>
                      <td className="border px-3 py-2">{item.category}</td>
                      <td className="border px-3 py-2 text-center">
                        {item.stock}
                      </td>
                      <td className="border px-3 py-2 text-right">
                        Rp{item.price.toLocaleString("id-ID")}
                      </td>
                      <td className="border px-3 py-2 text-right">
                        Rp{(item.stock * item.price).toLocaleString("id-ID")}
                      </td>
                      <td className="border px-3 py-2 text-center">
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="text-red-600 hover:underline"
                        >
                          Hapus
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
