"use client";
import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image
      className="hidden md:block cursor-pointer"
      src="/images/logo.svg"
      alt="Logo Image"
      height="100"
      width="100"
    />
  );
};

export default Logo;
