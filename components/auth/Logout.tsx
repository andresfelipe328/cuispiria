"use client";

import React from "react";
import { signOut } from "next-auth/react";

const Logout = () => {
  const handleLogout = async () => {
    signOut();
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-dark rounded-md shadow-small px-5 py-2 h-fit hover:shadow-medium transition-all duration-200 ease-in-out"
    >
      <small className="text-main font-title">logout</small>
    </button>
  );
};

export default Logout;
