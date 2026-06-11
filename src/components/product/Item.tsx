// Components
import Link from "@/components/Link";
import Image from "next/image";
import { Box } from "@mui/material";

// Utilities
import { slugify } from "@/utils/string";

// Types
import type { Product } from "@/types";
type Props = {
    product: Product;
}

export default function ProductItem({ product }: Props) {
    return (
        <Link
            key={product.id}
            className="border p-4 rounded"
            href={`${product.category}/${slugify(product.title)}`}
        >
            <Box>
                <Box className="h-48 w-full max-w-48 mb-2 relative mx-auto">
                    <Image
                        src={product.thumbnail}
                        alt={product.title}
                        fill
                        sizes="contain"
                        loading="eager"
                    />
                </Box>
            </Box>
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-gray-600">${product.price}</p>
        </Link>
    )
}