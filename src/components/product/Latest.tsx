// Modules
import { useState, useEffect } from "react";

// Components
import { Box } from "@mui/material";
import ProductItem from "@/components/product/Item";

// Types
import type { Product } from "@/types";

export default function ProductLatest() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products?sortBy=id&order=desc&limit=4")
            .then((res) => res.json())
            .then(data => setProducts(data.products))
            .catch((err) => console.error("Failed to fetch latest products:", err));
    }, [])

    return (
        <Box>
            <h2 className="mt-10 font-bold text-2xl">Latest Products</h2>
            <hr className="mb-5" />
            <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </Box>
        </Box>
    )
}