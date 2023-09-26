import Layout from "@/components/common/Layout.js";
import Home from "../components/pagesComponents/Home.js";

export default function Index() {
  return (
    <Layout
      title="POLPO"
      metaDescription="POLPO Semplicemente Pesce - Bar Trattoria Vivace a Milano by Viviana Varese"
    >
      <Home />
    </Layout>
  );
}
