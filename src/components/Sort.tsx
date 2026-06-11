// Modules
import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// Components
import { Select, MenuItem } from "@mui/material";

export default function Sort() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const sortBy = searchParams.get("sortBy");
    const order = searchParams.get("order");
    const finalSort = sortBy && order ? `${sortBy}|${order}` : "title|asc";
    const [sort, setSort] = useState(finalSort);

    const handleSort = (sortValue: string) => {
        const [sortBy, order] = sortValue.split("|");
        const params = new URLSearchParams(searchParams.toString());

        params.set("sortBy", sortBy);
        params.set("order", order);

        setSort(sortValue);
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    }

    return (
        <Select
            className="w-40"
            value={sort}
            onChange={e => handleSort(e.target.value)}
        >
            <MenuItem value="title|asc">&uarr; Title</MenuItem>
            <MenuItem value="title|desc">&darr; Title</MenuItem>
            <MenuItem value="price|asc">&uarr; Price</MenuItem>
            <MenuItem value="price|desc">&darr; Price</MenuItem>
            <MenuItem value="rating|asc">&uarr; Rating</MenuItem>
            <MenuItem value="rating|desc">&darr; Rating</MenuItem>
        </Select>
    )
}