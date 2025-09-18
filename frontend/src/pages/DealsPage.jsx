import React, { useState, useEffect } from "react";

const mockDeals = [
    { id: 1, title: "50% Off Shoes", description: "Get half off all shoes today only!", price: "$49.99" },
    { id: 2, title: "Buy 1 Get 1 Free T-Shirts", description: "Mix and match any t-shirts.", price: "$19.99" },
    { id: 3, title: "Clearance: Jackets", description: "Up to 70% off select jackets.", price: "$29.99" },
];

const DealsPage = () => {
    const [deals, setDeals] = useState([]);

    useEffect(() => {
        // Simulate fetching deals
        setTimeout(() => setDeals(mockDeals), 800);
    }, []);

    return (
        <div style={{ padding: "2rem" }}>
            <h1>🔥 Hot Deals</h1>
            {deals.length === 0 ? (
                <p>Loading deals...</p>
            ) : (
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {deals.map((deal) => (
                        <li key={deal.id} style={{ marginBottom: "1.5rem", border: "1px solid #eee", borderRadius: 8, padding: "1rem" }}>
                            <h2>{deal.title}</h2>
                            <p>{deal.description}</p>
                            <strong>{deal.price}</strong>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DealsPage;
