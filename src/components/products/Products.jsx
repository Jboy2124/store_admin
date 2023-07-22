import React from "react";
import ProductEntryPanel from "../panel/ProductEntryPanel";

const Products = () => {
  return (
    <section className="bg-slate-200 ring-1 ring-slate-300 ring-inset font-poppins">
      <div className="min-h-screen">
        <div className="w-full bg-slate-300 p-2">Products</div>
        <div className="px-5 my-5">
          <ProductEntryPanel />
        </div>
      </div>
    </section>
  );
};

export default Products;
