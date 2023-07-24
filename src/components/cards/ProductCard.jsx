import React from "react";

const ProductCard = (props) => {
  const { image, sku, brand, model, desc, color, rom, ram, qty, price } = props;
  return (
    <div className="w-[380px] h-[120px] bg-slate-200 ring-1 ring-slate-300 ring-inset shadow-sm hover:shadow-2xl duration-300">
      <div className="flex justify-start items-start p-2">
        <div className="w-[100px] h-[80px]">
          <img
            src={`http://localhost:8000/${image}`}
            alt="prod image"
            className="rounded-l hover:scale-x-[4.0] hover:scale-y-[4.0] duration-300 overflow-hidden"
          />
        </div>
        <div className="w-full h-[103px] bg-blue-200 rounded-r px-2 py-2 text-[10px] font-poppins">
          <div className="flex justify-start items-start">
            <div className="w-full">
              <p>
                SKU: <span className="font-semibold">{sku}</span>
              </p>
              <p>
                Brand: <span className="font-semibold">{brand}</span>
              </p>
              <p>
                Model: <span className="font-semibold">{model}</span>
              </p>

              <p>
                Desc: <span className="font-semibold">{desc}</span>
              </p>
              <p>
                Color: <span className="font-semibold">{color}</span>
              </p>
            </div>
            <div className="w-[150px]">
              <p>
                ROM: <span className="font-semibold">{rom}</span>
              </p>
              <p>
                RAM: <span className="font-semibold">{ram}</span>
              </p>
              <p>
                Qty: <span className="font-semibold">{qty}</span>
              </p>
              <p>
                Price: <span className="font-semibold">{price}</span>
              </p>
              <button className="px-2 py-[2px] ring-1 ring-slate-400 rounded bg-slate-200">
                . . .
              </button>
            </div>
          </div>
          {/* <p>
            SKU: <span className="font-semibold">{sku}</span>
          </p>
          <p>
            Brand: <span className="font-semibold">{brand}</span>
          </p>
          <p>
            Model: <span className="font-semibold">{model}</span>
          </p>

          <p>
            Desc: <span className="font-semibold">{desc}</span>
          </p>
          <p>
            Color: <span className="font-semibold">{color}</span>
          </p>
          <p>
            ROM: <span className="font-semibold">{rom}</span>
          </p>
          <p>
            RAM: <span className="font-semibold">{ram}</span>
          </p>
          <p>
            Qty: <span className="font-semibold">{qty}</span>
          </p>
          <p>
            Price: <span className="font-semibold">{price}</span>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
