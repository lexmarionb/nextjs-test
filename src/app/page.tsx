// Components
import Layout from "@/components/Layout";
import SearchInput from "@/components/search/Input";
import Product from "@/components/search/Product";
import CategoriesBoxes from "@/components/categories/Boxes";
import CategoriesList from "@/components/categories/List";

export default function Home() {
  return (
    <Layout>
        <div className="max-w-10/12 w-full py-4 mx-auto">
            <SearchInput />
        </div>
        <div className="mb-10 mt-10">
            <Product
                list={<CategoriesList />}
                boxes={<CategoriesBoxes />}
            />
        </div>
    </Layout>
  );
}
