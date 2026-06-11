// Components
import { Box } from "@mui/material";
import Link from "@/components/Link";
import {Suspense} from "react";
import ProductGrid from "@/components/product/Grid";
import ProductLoading from "@/components/product/Loading";

// Types
import type { Product, PropsWSearchParams } from "@/types";

export default async function ProductDisplay({ searchParams }: PropsWSearchParams) {
    const limit = 8;
    const params = await searchParams;
    const page = Number(params.page ?? 1);
    const skip = (page - 1) * limit;
    const sortBy = (params.sortBy ?? "title") as string;
    const order = (params.order ?? "asc") as string;
    const search = (params.q ?? null) as string | null;
    let products: Product[];
    let total: number;

    if (search) {
        const response = await fetch(`https://dummyjson.com/products/search?q=${search}&limit=${limit}&skip=${skip}&sortBy=${sortBy}&order=${order}`)
        const json: Record<string, number | Product[]> = await response.json();
        products = json.products as Product[];
        total = json.total as number;
    } else {
        const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}&sortBy=${sortBy}&order=${order}`)
        const json: Record<string, number | Product[]> = await response.json();
        products = json.products as Product[];
        total = json.total as number;
    }

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
            <Suspense fallback={<ProductLoading limit={limit} />}>
                <ProductGrid products={products} limit={limit} skip={skip} total={total} />
            </Suspense>
        </Box>
    )
}