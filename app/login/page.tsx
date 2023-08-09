import React from "react";

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

import SignInGoogle from "@/components/auth/SignInGoogle";
import BasicLayout from "@/components/animatedLayouts.tsx/BasicLayout";

const page = async () => {
  // Checks for authentication
  const session = await getServerSession(authOptions);
  if (session) redirect("/");

  return (
    <BasicLayout
      Tag="div"
      style={
        "flex flex-col items-center justify-center gap-2 max-w-7xl mx-auto w-full h-full p-4"
      }
    >
      <h1>Signup/Login</h1>

      <div>
        <SignInGoogle />
      </div>
    </BasicLayout>
  );
};

export default page;
