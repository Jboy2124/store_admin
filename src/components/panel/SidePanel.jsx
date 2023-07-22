import React from "react";
import { linkMenu } from "../../utils/const";
import { NavLink } from "react-router-dom";
import SocialMedia from "../footer/SocialMedia";
import HeaderNav from "../nav/HeaderNav";

const SidePanel = () => {
  return (
    <div className="w-[350px] h-screen bg-slate-200 sticky top-0 font-poppins text-white ring-1 ring-slate-300 ring-inset">
      <div className="min-h-screen flex flex-col justify-between items-center">
        <div className="w-full flex flex-col">
          <HeaderNav />
          <div className="py-5">
            <p></p>
            <ul className="flex flex-col space-y-2 text-gray-700 px-2">
              {linkMenu.map((items) => {
                return (
                  <NavLink
                    key={items.id}
                    to={items.link}
                    className={({ isActive }) => {
                      return `px-5 py-2 ${
                        isActive
                          ? "rounded-full bg-gradient-to-r from-[#40128B] via-[#9336B4] to-[#40128B] text-white"
                          : ""
                      }`;
                    }}
                  >
                    {items.name}
                  </NavLink>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="py-5">
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
