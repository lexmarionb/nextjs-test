// Module
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="container mx-auto px-2.5 lg:px-8">
            {children}
        </div>
    )
}