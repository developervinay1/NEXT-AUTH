"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function EmailSignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const signUpUser = async (e) => {
    e.preventDefault();

    // console.log(name, email, password)

    try {
      const userExistReq = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = userExistReq.json();

      if (user) {
        alert("User Already Exists");
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
      } else {
        console.log("User Registeration Failed");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="flex items-center justify-center min-h-[70vh]">
        <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
          <h3 className="text-2xl font-bold text-center">
            Create Your Account
          </h3>
          <form>
            <div className="mt-4">
              <div>
                <label className="block" htmlFor="email">
                  Name
                  <label>
                    <input
                      onChange={(e) => setName(e.target.value)}
                      type="email"
                      placeholder="Name"
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </label>
                </label>
              </div>
              <div>
                <label className="block" htmlFor="email">
                  Email
                  <label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
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
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      placeholder="Password"
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </label>
                </label>
              </div>
              <div className="flex items-baseline justify-center">
                <button
                  onClick={signUpUser}
                  className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                >
                  Create Account
                </button>
              </div>
              <div className="flex items-baseline justify-center border-t-2 py-2 mt-4">
                <Link
                  href="/EmailLogin"
                  className="text-sm text-black hover:underline pt-4 text-center"
                >
                  Already have an account ?{" "}
                  <span className="text-blue-600 underline"> Login Now </span>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
