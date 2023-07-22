import React from "react";
// import SidePanel from "../../components/panel/SidePanel";
// import Products from "../../components/products/Products";
import { linkMenu } from "../../utils/const";
import { NavLink, Outlet } from "react-router-dom";
import SocialMedia from "../../components/footer/SocialMedia";
import HeaderNav from "../../components/nav/HeaderNav";

const Dashboard = () => {
  return (
    <main className="bg-white">
      <div className="container">
        <div className="min-h-screen flex space-x-4">
          <div className="w-[350px] h-screen bg-slate-200 sticky top-0 font-poppins text-white ring-1 ring-slate-300 ring-inset">
            <div className="min-h-screen flex flex-col justify-between items-center">
              <div className="w-full flex flex-col">
                <HeaderNav />
                <div className="py-5">
                  <p></p>
                  <ul className="flex flex-col space-y-2 text-gray-700 px-5">
                    {linkMenu.map((items) => {
                      return (
                        <NavLink
                          key={items.id}
                          to={items.link}
                          className={({ isActive }) => {
                            return `px-2 py-2 ${
                              isActive
                                ? " border-y-2 border-slate-300"
                                : " border-y-2 border-transparent"
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

          <div className="w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
