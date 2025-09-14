import React, { useMemo, useState } from "react";
import { DEMO_PRODUCTS } from "../data/products";

const ProductPage = () => {
  const [q, setQ] = useState("");

  // Filter products
  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return [];
    return DEMO_PRODUCTS.filter(
      (p) =>
        p.title.toLowerCase().includes(term) ||
        (p.category || "").toLowerCase().includes(term)
    );
  }, [q]);

  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold">Product Page</h1>

      {/* search */}
      <input
        type="search"
        placeholder="Search products…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        className="w-full max-w-md rounded border px-3 py-2"
      />

      {/* Results */}
      {q && (
        <>
          {results.length > 0 && (
            <div className="mt-2 text-sm text-gray-600">
              {results.length} results
            </div>
          )}
          <div className="mt-1 max-w-md rounded border">
            {results.slice(0, 5).length === 0 ? (
              <div className="px-3 py-2 text-sm text-gray-600">No results</div>
            ) : (
              results.slice(0, 5).map((p) => (
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
        </>
      )}
    </div>
  );
};

export default ProductPage;
