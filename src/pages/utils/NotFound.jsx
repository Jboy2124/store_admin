import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <main className="bg-slate-200 text-gray-600 font-poppins">
      <div className="min-h-screen flex justify-center items-center">
        <div className="flex justify-evenly items-center">
          <span className="text-[70px] px-5">404</span>
          <div className="flex flex-col justify-start px-5">
            <span className="text-[25px]">Page not found</span>
            <p className="text-[13px]">
              Navigate to{" "}
              <span
                className=" cursor-pointer underline underline-offset-4 text-orange-600"
                onClick={() => navigate("/")}
              >
                Dashboard
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
