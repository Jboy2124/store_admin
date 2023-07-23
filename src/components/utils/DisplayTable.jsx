import React, { useState } from "react";

const DisplayTable = ({ data }) => {
  return (
    <div>
      <table className="table-fixed w-full font-poppins text-gray-700 text-[12px]">
        <thead className="bg-primary border-b-4 border-gray-500 font-poppins text-[12px]">
          <tr>
            {data.cols.map((col, index) => {
              return (
                <th
                  key={index}
                  className={`py-2 tracking-wide ${
                    col === "Brand" || col === "Model"
                      ? "text-start"
                      : "text-center"
                  }`}
                >
                  {col}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.data &&
            data.data.map((items, index) => {
              return (
                <tr key={index} className="hover:bg-gray-300">
                  {data.actual.map((col, index) => {
                    return (
                      <td
                        key={index}
                        className={`${
                          col === "brand" || col === "model"
                            ? "text-start"
                            : "text-center"
                        } py-[6px] text-[12px] font-poppins border-b-2`}
                      >
                        {/* {items?.[col]} */}
                        {col === "image" ? (
                          <div className=" w-20 h-36">
                            <img
                              src={`http://localhost:8000/${items?.[col]}`}
                              alt="pics"
                            />
                          </div>
                        ) : (
                          items?.[col]
                        )}
                      </td>
                    );
                  })}
                  {/* <td className="text-center py-[6px] text-[14px] font-poppins border-b-2">
                    <div className="flex justify-center items-center space-x-4">
                      <button
                        className="px-5 py-[6px] bg-secondary text-white rounded"
                        // onClick={() => handleDelete(items.id)}
                      >
                        Delete
                      </button>
                      <button
                        className="px-5 py-[6px] ring-1 ring-primary ring-inset text-primary rounded"
                        // onClick={() => handleView(items.id)}
                      >
                        Details
                      </button>
                      <button className="px-5 py-[6px] ring-1 ring-primary ring-inset text-primary rounded">
                        Print
                      </button>
                    </div>
                  </td> */}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayTable;
