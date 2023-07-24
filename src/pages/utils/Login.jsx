import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../endpoints/handlers/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const [login, { data: auth = [] }] = useLoginMutation();
  const navigate = useNavigate();

  function handleLogin(data) {
    login(data);
  }

  useEffect(() => {
    if (auth?.id === undefined) {
    } else {
      console.log(auth?.id);
      sessionStorage.setItem("id", auth?.id);
      setTimeout(() => {
        navigate("/dashboard");
      }, 200);
    }
  }, [handleLogin]);

  return (
    <main className="bg-slate-200 font-poppins text-white text-[12px] ring-1 ring-slate-300">
      <div className="container">
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="min-h-screen flex justify-center items-center">
            <div className="relative w-[350px] h-[450px] bg-slate-200 ring-1 ring-slate-300 ring-inherit shadow-2xl overflow-hidden">
              <div className="absolute w-full h-[150px] bg-gradient-to-r from-[#40128B] to-[#9336B4] skew-y-[-3deg] top-[-20px]"></div>
              <p className="relative px-2 py-1">
                <span className="text-orange-500">mobile</span>store
              </p>
              <div className="relative w-full mt-5">
                <p className="text-center text-[22px]">Login</p>
                <p className="text-center">
                  Please use you email & password to login
                </p>
                <div className="mt-20">
                  <div className="flex flex-col px-10">
                    <label htmlFor="email" className="text-gray-500">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      autoComplete="false"
                      className="px-2 py-2 text-[13px] text-gray-700 outline-none bg-slate-100 ring-1 ring-slate-300 ring-inset"
                      {...register("email", { required: true })}
                    />
                  </div>
                  <div className="flex flex-col px-10 mt-5">
                    <label htmlFor="password" className="text-gray-500">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Password"
                      autoComplete="false"
                      className="px-2 py-2 text-[13px] text-gray-700 outline-none bg-slate-100 ring-1 ring-slate-300 ring-inset"
                      {...register("password", { required: true })}
                    />
                  </div>
                  <div className="text-center mt-10">
                    <button
                      type="submit"
                      className="px-16 py-2 bg-orange-600 text-white text-[13px] hover:bg-orange-500 active:scale-90 transition-all duration-300"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
