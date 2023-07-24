import React from "react";

const HeaderNav = () => {
  return (
    <div className="relative bg-transparent mb-10">
      <div className="absolute w-full h-[120px] bg-gradient-to-r from-[#40128B] to-[#9336B4] skew-y-[-3deg] top-[-15px]"></div>
      <div className="relative">
        <p className="px-2 pb-2 text-[12px]">
          <span className="text-orange-500">mobile</span>
          <span>store</span>
        </p>
        <p className="text-[22px] text-center font-semibold">Admin</p>
        <p className="text-center text-[14px]">Panel</p>
      </div>
    </div>
  );
};

export default HeaderNav;
