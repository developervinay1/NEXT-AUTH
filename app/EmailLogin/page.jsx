"use client"

import Link from "next/link";
import React , {useState} from "react";

export default function EmailLogin() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const loginUser = (e) => {
        e.preventDefault();
        
        console.log(email, password)
    }
  return (
    <div>
      <div className="flex items-center justify-center min-h-[70vh]">
        <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
          <h3 className="text-2xl font-bold text-center">
            Login to your account
          </h3>
          <form action="">
            <div className="mt-4">
              <div>
                <label className="block" htmlFor="email">
                  Email
                  <label>
                    <input
                    onChange={(e) =>  setEmail(e.target.value)}
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </label>
                </label>
              </div>
              <div className="mt-4">
                <label className="block">
                  Password
                  <label>
                    <input
                    onChange={(e) =>  setPassword(e.target.value)}
                      type="password"
                      placeholder="Password"
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </label>
                </label>
              </div>
              <div className="flex items-baseline justify-between">
                <button onClick={loginUser} className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                  Login
                </button>
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </a>
              </div>
              <div className="flex items-baseline justify-center border-t-2 py-2 mt-4">
                <Link href="/EmailRegister" className="text-sm text-black hover:underline pt-4 text-center">
                  Don't have an account ? <span className="text-blue-600 underline"> Register Now </span> 
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
