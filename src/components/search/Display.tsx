// Modules
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

// Components
import { Box } from "@mui/material";
import Link from "@/components/Link";


// Types
import type { Product } from "@/types";
import ProductGrid from "@/components/product/Grid";
type Props = {
    search: string | null
}

export default function ProductDisplay({ search }: Props) {
    const searchParams = useSearchParams();
    const limit = 8;
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState<Product[]>([]);
    const page = searchParams.get("page") || 1;
    const skip = (Number(page) - 1) * limit;
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const sortBy = searchParams.get("sortBy") || "title";
        const order = searchParams.get("order") || "asc";

        setLoading(true);

        if (search) {
            fetch(`https://dummyjson.com/products/search?q=${search}&limit=${limit}&skip=${skip}&sortBy=${sortBy}&order=${order}`)
                .then(res => res.json())
                .then(data => {
                    setProducts(data.products);
                    setTotal(data.total);
                    setLoading(false);
                })
                .catch(err => {
                    console.error("Error searching products:", err);
                    setProducts([]);
                    setLoading(false);
                });
        } else {
            fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}&sortBy=${sortBy}&order=${order}`)
                .then(res => res.json())
                .then(data => {
                    setProducts(data.products);
                    setTotal(data.total);
                    setLoading(false);
                })
                .catch(err => {
                    console.error("Error fetching products:", err);
                    setProducts([]);
                    setLoading(false);
                });
        }
    }, [search, searchParams, skip]);

    return (
        <Box>
            <Box className="flex gap-2 items-center mt-5 mb-2">
                <Link
                    href="/"
                    className="font-bold text-2xl"
                >
                    &larr;
                </Link>
                <h2 className="mt-2 font-bold text-2xl">Found {total} products with <em>&quot;{search}&quot;</em></h2>
            </Box>
            <hr className="mb-5" />
            <ProductGrid loading={loading} products={products} limit={limit} skip={skip} total={total} />
        </Box>
    )
}