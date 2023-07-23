import React from "react";
import ProductEntryPanel from "../panel/ProductEntryPanel";
import DisplayTable from "../utils/DisplayTable";
import { useProductsQuery } from "../../endpoints/handlers/products";
import TradTable from "../utils/TradTable";

const Products = () => {
  const { data = [] } = useProductsQuery();

  const tableLayout = {
    cols: ["Image", "SKU", "Brand", "Model", "Color", "ROM/RAM"], //(header value) --> this will display on header
    actual: ["image", "sku", "brand", "model", "color", "rom"], //(actual value) --> this is the actual value to be displayed, (database column)
    data: data, //(actual data) --> this is the actual response.data from the api
  };

  return (
    <section className="bg-slate-200 ring-1 ring-slate-300 ring-inset font-poppins">
      <div className="min-h-screen">
        <div className="w-full bg-slate-300 p-2">Products</div>
        <div className="px-5 my-5">
          <ProductEntryPanel />
        </div>
        <DisplayTable data={tableLayout} />
        {/* <TradTable data={tableLayout} /> */}
      </div>
    </section>
  );
};

export default Products;
