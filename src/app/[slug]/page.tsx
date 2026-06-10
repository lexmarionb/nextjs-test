// Components
import Layout from "@/components/Layout";
import { ProductCategory } from "@/app/[slug]/product-category";

// Types
type Props = {
    params: Promise<{ slug: string }>
}

export default async function Category({ params }: Props) {
    const { slug } = await params;

    return (
        <Layout>
            <ProductCategory category={slug} />
        </Layout>
    )
}