import React, { useMemo, useState } from "react";

// Tijdelijke demo-data (mag je later vervangen)
const DEMO_PRODUCTS = [
  { id: "p1", title: "Basic White T-Shirt", category: "Apparel", price: 9.99 },
  {
    id: "p2",
    title: "Running Shoes Pro 2",
    category: "Footwear",
    price: 79.95,
  },
  {
    id: "p3",
    title: "Noise Cancelling Headphones",
    category: "Electronics",
    price: 129.0,
  },
  { id: "p4", title: "Blue Hoodie", category: "Apparel", price: 39.5 },
  {
    id: "p5",
    title: "Phone Case Transparent",
    category: "Accessories",
    price: 12.0,
  },
];

export default function MiniSearch({ items = DEMO_PRODUCTS }) {
  const [q, setQ] = useState("");

  // Simpele case-insensitive filter op title + category
  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return [];
    return items.filter(
      (p) =>
        p.title.toLowerCase().includes(term) ||
        (p.category || "").toLowerCase().includes(term)
    );
  }, [q, items]);

  return (
    <div className="max-w-md">
      <label htmlFor="mini-search" className="block mb-1 text-sm font-medium">
        Search products
      </label>
      <input
        id="mini-search"
        type="search"
        placeholder="Type to search…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        className="w-full rounded border px-3 py-2"
      />

      {/* Resultaten */}
      {q && (
        <div className="mt-3 rounded border">
          {results.length === 0 ? (
            <div className="px-3 py-2 text-sm text-gray-600">No results</div>
          ) : (
            results.map((p) => (
              <div
                key={p.id}
                className="flex items-center justify-between px-3 py-2 border-b last:border-b-0"
              >
                <div>
                  <div className="font-medium">{p.title}</div>
                  <div className="text-sm text-gray-600">{p.category}</div>
                </div>
                <div className="text-sm">€{Number(p.price).toFixed(2)}</div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
