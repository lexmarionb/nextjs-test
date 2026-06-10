"use client";

// Modules
import { useSearchParams } from "next/navigation";
import React, { useMemo } from "react";

// Components
import { Box } from "@mui/material";
import SearchDisplay from "@/components/search/Display";
import ProductLatest from "@/components/product/Latest";

// Types
type Props = {
    list: React.ReactNode
    boxes: React.ReactNode
}

export default function SearchProduct({ list, boxes }: Props) {
    const searchParams = useSearchParams();
    const search = useMemo<string | null>(() => {
        return searchParams.get("q") ?? null;
    }, [searchParams]);

    return (
        <Box>
            {search && <SearchDisplay search={search} />}
            <Box className="mt-5">
                {search && search?.length ? list : (
                    <Box>
                        <ProductLatest />
                        {boxes}
                    </Box>
                )}
            </Box>
        </Box>
    )
}