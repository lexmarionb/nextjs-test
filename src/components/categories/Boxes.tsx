// Components
import { Box } from '@mui/material';
import Link from '@/components/Link';

// Types
import type { Category } from "@/types"

export default async function CategoriesBoxes() {
    const response = await fetch("https://dummyjson.com/products/categories")
    const categories: Category[] = await response.json() ?? []

    return (
        <Box>
            <h2 className="mt-10 font-bold text-2xl">Product Categories</h2>
            <hr className="mb-5" />
            <Box className="flex flex-wrap gap-x-2 gap-y-6">
                {categories.length && categories.map(category => (
                    <Link href={`/${category.slug}`} className="flex flex-col justify-center items-center gap-2 w-48 grow" key={category.slug}>
                        <Box className="px-2 py-1 bg-gray-200 rounded w-full h-40"></Box>
                        <Box>{category.name}</Box>
                    </Link>
                ))}
            </Box>
        </Box>
    )
}