"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const login = () => {
    const router = useRouter(); 
  async function handlelogin(userInfo) {
    const newUserInfo = {
      email: userInfo.get("email"),
      password: userInfo.get("password"),
    };
    // calling next auth service
    // singIn from next-auth return : error : '...' || null , status : 200,400 , ok : true:false
    const res = await signIn("credentials", {
      redirect: false,
      ...newUserInfo,
    });
    console.log("response in login component :", res);
    if(res.ok){
        router.push('/todo-list')
    }
  }
  return (
    <div className="h-screen w-screen flex items-center">
      <div className="w-full">
        <div className="pl-40">
          <Image
            src={"/assets/icons/logo.svg"}
            width={150}
            height={100}
          ></Image>
        </div>
        <div className="pl-40 w-full flex relative">
          <div className="w-1/2  flex justify-center items-center">
            <div className="w-[65%]">
              <form className="w-full " action={handlelogin}>
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                  >
                    Login
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border-2 border-gray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-5 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-blue-500"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="mb-5">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="bg-gray-50 border-2 border-gray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-5 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 justify-center outline-blue-500"
                    placeholder="Password"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 duration-150"
                >
                  Login
                </button>
              </form>
              <div className="my-2 mb-10">
                <label
                  htmlFor="remember"
                  className="ms-2 text-sm text-slate-700 "
                >
                  Didn't have account yet?{" "}
                </label>
                <Link href={"/register"} className="text-blue-600 text-sm">
                  {" "}
                  Register
                </Link>
              </div>
              <div className="flex text-gray">
                <div className="mt-4 flex items-center justify-between w-full">
                  <span className="border-b w-[45%] lg:w-[37%]"></span>
                  <div className="text-sm text-center text-gray-500 ">
                    Continue With
                  </div>
                  <span className="border-b w-[45%] lg:w-[37%]"></span>
                </div>
              </div>
              <div className="w-full rounded-md py-2.5 flex justify-center mt-8 border-2 text-gray cursor-pointer border-gray hover:bg-slate-200 transition duration-500 hover:text-gray">
                <span className="text-sm ">Google</span>
              </div>
            </div>
          </div>
          <span className="absolute -bottom-10 text-sm text-gray">
            © 2024 My office . All Rights Reserved
          </span>
          <div className="w-1/2 pl-16">
            <Image
              src={"/assets/icons/login.svg"}
              width={350}
              height={200}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
