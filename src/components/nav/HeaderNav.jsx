import React from "react";

const HeaderNav = () => {
  return (
    <div className="pt-1 pb-5 w-full bg-gradient-to-r from-[#40128B] to-[#9336B4]">
      <p className="px-2 pb-2 text-[12px]">
        <span className="text-orange-500">mobile</span>
        <span>store</span>
      </p>
      <p className="text-[22px] text-center font-semibold">Admin</p>
      <p className="text-center text-[14px]">Panel</p>
    </div>
  );
};

export default HeaderNav;
