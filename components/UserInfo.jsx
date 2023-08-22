"use client";

import React from "react";
import SignInButton from "./SignInButton";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function UserInfo() {
  const { status, data: session } = useSession();
  if (status === "authenticated") {
    return (
      <div className="flex items-center space-x-4">
        <Image src={session?.user?.image} width={60} height={60} />
        <div>
          <h1>Name: {session?.user?.name} </h1>
          <h2>Email: {session?.user?.email} </h2>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <SignInButton />
      </div>
    );
  }
}
