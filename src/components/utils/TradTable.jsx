import React, { useEffect, useState } from "react";
import { useLazyProductImageQuery } from "../../endpoints/handlers/products";

const TradTable = ({ data }) => {
  const [getImage, setGetImage] = useState("");
  const [productImage, { data: image }] = useLazyProductImageQuery();

  useEffect(() => {
    console.log(data.data[0]?.image);
    //     if (!data.data[0]?.image) productImage(data.data[0]?.image);
  }, [data]);

  return (
    <div>
      <table className="table-fixed w-full font-poppins text-gray-700 text-[12px]">
        <thead className="bg-primary border-b-4 border-gray-500 font-poppins text-[12px]">
          <tr>
            {data.cols.map((col, index) => {
              return (
                <th key={index} className={`py-2 tracking-wide text-center `}>
                  {col}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.data.map((items, index) => {
            return (
              <tr key={index} className="hover:bg-gray-300 text-center">
                <td className="py-[6px] text-[12px] font-poppins border-b-2">
                  {setGetImage(items.image)}
                </td>
                <td className="py-[6px] text-[12px] font-poppins border-b-2">
                  {items.sku}
                </td>
                <td className="py-[6px] text-[12px] font-poppins border-b-2">
                  {items.brand}
                </td>
                <td className="py-[6px] text-[12px] font-poppins border-b-2">
                  {items.model}
                </td>
                <td className="py-[6px] text-[12px] font-poppins border-b-2">
                  {items.color}
                </td>
                <td className="py-[6px] text-[12px] font-poppins border-b-2">
                  {items.rom}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TradTable;
