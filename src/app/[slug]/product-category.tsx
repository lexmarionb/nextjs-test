// Components
import { Box } from "@mui/material";
import Link from "@/components/Link";
import ProductGrid from "@/components/product/Grid";
import { Suspense } from "react";
import ProductLoading from "@/components/product/Loading";

// Utilities
import { capitalize } from "@/utils/string";

// Types
import type { Product, PropsWSearchParams } from "@/types";
type Props = PropsWSearchParams & {
    category: string
}

export async function ProductCategory({ category, searchParams }: Props) {
    const limit = 8;
    const params = await searchParams;
    const page = Number(params.page ?? 1);
    const skip = (page - 1) * limit;
    const sortBy = (params.sortBy ?? "title") as string;
    const order = (params.order ?? "asc") as string;
    const response = await fetch(`https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}&sortBy=${sortBy}&order=${order}`)
    const json: Record<string, number | Product[]> = await response.json();
    const products = json.products as Product[];
    const total = json.total as number;
    const title = capitalize(category.replaceAll(/\-/g, ' '));

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
            <Suspense fallback={<ProductLoading limit={limit} />}>
                <ProductGrid products={products} limit={limit} skip={skip} total={total} />
            </Suspense>
        </Box>
    )
}