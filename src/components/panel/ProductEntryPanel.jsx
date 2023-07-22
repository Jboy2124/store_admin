import React from "react";
import { useForm } from "react-hook-form";
import { useAddProductMutation } from "../../endpoints/handlers/products";

const ProductEntryPanel = () => {
  const { register, handleSubmit, reset } = useForm();
  const [addProduct] = useAddProductMutation();

  function submitProduct(data) {
    addProduct(data);
    reset();
  }

  return (
    <div className="h-[40vh] bg-slate-300 font-poppins text-[14px]">
      <form onSubmit={handleSubmit(submitProduct)}>
        <div className="flex justify-evenly items-start py-5">
          <div className="w-full space-y-3">
            <div className="px-10 flex flex-col">
              <label htmlFor="sku" className="text-[12px]">
                SKU/Serial
              </label>
              <input
                id="sku"
                name="sku"
                type="text"
                placeholder="SKU"
                className="w-full outline-none px-2 py-[6px] bg-slate-200"
                {...register("sku")}
              />
            </div>
            <div className="px-10 flex flex-col">
              <label htmlFor="brand" className="text-[12px]">
                Brand
              </label>
              <input
                id="brand"
                name="brand"
                type="text"
                placeholder="Brand"
                className="w-full outline-none px-2 py-[6px] bg-slate-200"
                {...register("brand")}
              />
            </div>
            <div className="px-10 flex flex-col">
              <label htmlFor="model" className="text-[12px]">
                Model
              </label>
              <input
                id="model"
                name="model"
                type="text"
                placeholder="Model"
                className="w-full outline-none px-2 py-[6px] bg-slate-200"
                {...register("model")}
              />
            </div>
            <div className="px-10 flex flex-col">
              <label htmlFor="desc" className="text-[12px]">
                Description
              </label>
              <input
                id="desc"
                name="desc"
                type="text"
                placeholder="Description"
                className="w-full outline-none px-2 py-[6px] bg-slate-200"
                {...register("desc")}
              />
            </div>
          </div>
          <div className="w-full space-y-3">
            <div className="px-10 flex flex-col">
              <label htmlFor="color" className="text-[12px]">
                Color
              </label>
              <input
                id="color"
                name="color"
                type="text"
                placeholder="Color"
                className="w-full outline-none px-2 py-[6px] bg-slate-200"
                {...register("color")}
              />
            </div>
            <div className="flex justify-evenly items-center">
              <div className="px-10 flex flex-col">
                <label htmlFor="rom" className="text-[12px]">
                  ROM
                </label>
                <input
                  id="rom"
                  name="ram"
                  type="text"
                  placeholder="ROM"
                  className="w-full outline-none px-2 py-[6px] bg-slate-200"
                  {...register("rom")}
                />
              </div>
              <div className="px-10 flex flex-col">
                <label htmlFor="ram" className="text-[12px]">
                  RAM
                </label>
                <input
                  id="ram"
                  name="ram"
                  type="text"
                  placeholder="ROM"
                  className="w-full outline-none px-2 py-[6px] bg-slate-200"
                  {...register("ram")}
                />
              </div>
            </div>
            {/* <div className="flex justify-evenly items-center">
              <div className="px-10 flex flex-col">
                <label htmlFor="qty" className="text-[12px]">
                  Quantity
                </label>
                <input
                  id="qty"
                  name="qty"
                  type="text"
                  placeholder="Quantity"
                  className="w-full outline-none px-2 py-[6px] bg-slate-200"
                  {...register("qty")}
                />
              </div>
              <div className="px-10 flex flex-col">
                <label htmlFor="price" className="text-[12px]">
                  Price
                </label>
                <input
                  id="price"
                  name="price"
                  type="text"
                  placeholder="Price"
                  className="w-full outline-none px-2 py-[6px] bg-slate-200"
                  {...register("price")}
                />
              </div>
            </div> */}
            <div className="text-center pt-5 px-10">
              <button
                type="submit"
                className="w-full py-2 text-white bg-orange-600 hover:bg-orange-700 active:scale-90 transition-all duration-300"
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductEntryPanel;
