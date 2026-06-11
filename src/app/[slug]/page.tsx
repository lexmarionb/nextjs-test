// Components
import Layout from "@/components/Layout";
import { ProductCategory } from "@/app/[slug]/product-category";

// Types
import type { PropsWSearchParams } from "@/types";
type Props = PropsWSearchParams & {
    params: Promise<{ slug: string }>
}

export default async function Category({ params, searchParams }: Props) {
    const { slug } = await params;

    return (
        <Layout>
            <ProductCategory category={slug} searchParams={searchParams} />
        </Layout>
    )
}