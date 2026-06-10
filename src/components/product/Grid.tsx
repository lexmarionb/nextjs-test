// Components
import { Box, Skeleton } from "@mui/material";
import Sort from "@/components/Sort";
import ProductItem from "@/components/product/Item";
import Pagination from "@/components/Pagination";

// Types
import type { Product } from "@/types";
type Props = {
    loading: boolean
    products: Product[]
    limit: number
    skip: number
    total: number
}

export default function ProductGrid({ loading, products, limit, skip, total }: Props) {
    return (
        <Box>
            {loading ? (
                <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-12">
                    {Array.from({ length: limit }, (_, i) => (
                        <Skeleton key={i} variant="rounded" width="100%" height={314} className="p-4" />
                    ))}
                </Box>
            ) : (
                <>
                    {products.length > 0 ? (
                        <>
                            {products.length &&
                                <Box className="flex justify-end mb-4">
                                    <Sort />
                                </Box>
                            }
                            <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {products.map((product) => (
                                    <ProductItem key={product.id} product={product} />
                                ))}
                            </Box>
                            {products.length && <Pagination limit={limit} skip={skip} total={total} />}
                        </>
                    ) : (
                        <p>No products found.</p>
                    )}
                </>
            )}
        </Box>
    )
}