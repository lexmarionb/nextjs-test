// Components
import Box from "@mui/material/Box";
import Link from '@/components/Link';

// Types
import type { Category } from "@/types"

export default async function CategoriesBoxes() {
    const response = await fetch("https://dummyjson.com/products/categories")
    const categories: Category[] = await response.json() ?? []

    return (
        <Box>
            <h2 className="font-bold">Product Categories</h2>
            <hr className="mb-2" />
            <ul className="flex flex-wrap gap-2 list-disc list-inside mx-auto">
                {categories.length && categories.map(category => (
                    <li key={category.slug} className="basis-48 grow">
                        <Link href={`/${category.slug}`}>
                            {category.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </Box>
    )
}