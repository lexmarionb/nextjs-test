"use client";

// Modules
import { useEffect, useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";

// Components
import { Box } from "@mui/material";
import Link from "@/components/Link";

// Utilities
import { capitalize } from "@/utils/string";

// Types
import type {Product} from "@/types";
import ProductGrid from "@/components/product/Grid";
type Props = {
    category: string
}

export function ProductCategory({ category }: Props) {
    const searchParams = useSearchParams();
    const limit = 8;
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState<Product[]>([]);
    const page = searchParams.get("page") || 1;
    const skip = (Number(page) - 1) * limit;
    const [total, setTotal] = useState(0);

    const title = useMemo(() => {
        return capitalize(category.replaceAll(/\-/g, ' '));
    }, [category]);

    useEffect(() => {
        const sortBy = searchParams.get("sortBy") || "title";
        const order = searchParams.get("order") || "asc";

        setLoading(true);
        fetch(`https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}&sortBy=${sortBy}&order=${order}`)
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
    }, [category, searchParams, skip]);

    return (
        <Box>
            <Box className="flex gap-2 items-center mt-5 mb-2">
                <Link
                    href="/"
                    className="font-bold text-2xl"
                >
                    &larr;
                </Link>
                <h1 className="font-bold text-2xl mt-2">{title}</h1>
            </Box>
            <hr className="mb-5" />
            <ProductGrid loading={loading} products={products} limit={limit} skip={skip} total={total} />
        </Box>
    )
}