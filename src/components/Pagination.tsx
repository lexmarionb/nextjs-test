// Modules
import { usePathname, useSearchParams } from "next/navigation";

// Components
import Box from "@mui/material/Box";
import Link from "@/components/Link";

// Utilities
import { createBoundedCenterRange } from "@/utils/number";

// Types
type Props = {
    limit: number
    skip: number
    total: number
}

export default function Pagination({ limit, skip, total }: Props) {
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams.toString());
    const pathname = usePathname();
    const current = (skip / limit) + 1;
    const padding = 2;
    const totalPages = Math.ceil(total / limit);
    const pageNumbers = createBoundedCenterRange(current, padding, 1, totalPages);

    if (params.has('page')) params.delete('page');

    return (
        <Box className="flex justify-center my-4">
            {current <= 1 ? (
                <Box
                    className="px-3 py-1 rounded bg-gray-200 text-white"
                >
                    &lt;
                </Box>
            ) : (
                <Link
                    href={`${pathname}?${params.size ? `${params.toString()}&` : ''}page=${skip / limit}`}
                    className="block px-3 py-1 rounded bg-gray-200 text-gray-700"
                >
                    &lt;
                </Link>
            )}
            {pageNumbers.map(pageNum => (
                <Box
                    key={pageNum}
                    className="mx-1"
                >
                    {current === pageNum ? (
                        <Box
                            className="px-3 py-1 rounded bg-blue-500 text-white"
                        >
                            {pageNum}
                        </Box>
                    ) : (
                        <Link
                            href={`${pathname}?${params.size ? `${params.toString()}&` : ''}page=${pageNum}`}
                            className="block px-3 py-1 rounded bg-gray-200 text-gray-700"
                        >
                            {pageNum}
                        </Link>
                    )}
                </Box>
            ))}
            {skip + limit >= total ? (
                <Box
                    className="px-3 py-1 rounded bg-gray-200 text-white"
                >
                    &gt;
                </Box>
            ) : (
                <Link
                    href={`${pathname}?${params.size ? `${params.toString()}&` : ''}page=${current + 1}`}
                    className="block px-3 py-1 rounded bg-gray-200 text-gray-700"
                >
                    &gt;
                </Link>
            )}
        </Box>
    )
}