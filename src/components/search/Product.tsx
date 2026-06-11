// Components
import { Box } from "@mui/material";
import SearchDisplay from "@/components/search/Display";
import ProductLatest from "@/components/product/Latest";
import CategoriesBoxes from "@/components/categories/Boxes";
import CategoriesList from "@/components/categories/List";

// Types
import { PropsWSearchParams } from "@/types";

export default async function SearchProduct({ searchParams }: PropsWSearchParams) {
    const params = await searchParams;
    const search = (params.q ?? null) as string | null;

    return (
        <Box>
            {search && <SearchDisplay searchParams={searchParams} />}
            <Box className="mt-5">
                {search && search?.length ? <CategoriesList /> : (
                    <Box>
                        <ProductLatest />
                        <CategoriesBoxes />
                    </Box>
                )}
            </Box>
        </Box>
    )
}