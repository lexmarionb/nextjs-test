// Components
import Layout from "@/components/Layout";
import SearchInput from "@/components/search/Input";
import Product from "@/components/search/Product";

// Types
import type { SearchParams } from "@/types";

export default function Home({ searchParams }: { searchParams: SearchParams }) {
  return (
    <Layout>
        <div className="max-w-10/12 w-full py-4 mx-auto">
            <SearchInput />
        </div>
        <div className="mb-10 mt-10">
            <Product searchParams={searchParams} />
        </div>
    </Layout>
  );
}
