// Types
import { Box, Skeleton } from "@mui/material";

type Props = {
    limit: number
}

export default function ProductLoading({ limit }: Props) {
    return (
        <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-12">
            {Array.from({ length: limit }, (_, i) => (
                <Skeleton key={i} variant="rounded" width="100%" height={314} className="p-4" />
            ))}
        </Box>
    )
}