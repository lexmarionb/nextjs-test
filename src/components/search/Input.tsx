"use client";

// Modules
import React, { useState} from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

// Components
import { Button, TextField, IconButton, InputAdornment } from "@mui/material";
import { Clear } from "@mui/icons-material";

export default function SearchInput() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [search, setSearch] = useState(searchParams.get("q") || "");

    const handleSearch = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()

        const params = new URLSearchParams(searchParams.toString());

        if (search) {
            params.set("q", search);
        } else {
            params.delete("q")
        }

        if (params.has('page')) params.delete('page');
        if (params.has('sortBy')) params.delete('sortBy');
        if (params.has('order')) params.delete('order');

        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    }

    return (
        <form className="flex w-full gap-1 justify-between" onSubmit={handleSearch}>
            <TextField
                className="flex-1"
                placeholder="Search a product..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                slotProps={{
                    input: {
                        endAdornment: search && (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="clear text"
                                    onClick={() => setSearch("")}
                                    edge="end"
                                >
                                    <Clear />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }
                }}
            />
            <Button className="flex-none w-20" variant="contained" type="submit">Search</Button>
        </form>
    )
}