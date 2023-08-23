"use client";
import Link from "next/link";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { status } = useSession();
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex justify-between flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="ml-3 text-xl">Next Auth</span>
          </Link>
          {status === "authenticated" ? (
            <button
              onClick={() => signOut()}
              className="inline-flex items-center bg-black text-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 rounded text-base mt-4 md:mt-0"
            >
              Sign Out
            </button>
          ) : (
            <div className="space-x-6">
            <button
              onClick={() => signIn("google")}
              className="inline-flex items-center bg-black text-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 rounded text-base mt-4 md:mt-0"
            >
              Sign In
            </button>
            <Link
            href="/EmailLogin"
            className="inline-flex items-center bg-black text-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 rounded text-base mt-4 md:mt-0"
          >
            Email Login
          </Link>
          </div>
          )}
        </div>
      </header>
    </div>
  );
}
