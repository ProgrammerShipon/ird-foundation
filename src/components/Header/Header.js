"use client";
import Image from "next/image";
import Link from "next/link";
import logoImg from "../../assets/logo.png";
import Box from "../regular/Carts/Box";
import { supportIcon } from "../utils/icon-svg";
import NavItems from "./NavItems";

export default function Header() {
  return (
    <header className="min-h-full bodyHeight">
      <Box className="!px-[13px] h-full flex items-center justify-between flex-col">
        {/* logo */}
        <figure>
          <Image className="w-[73px]" src={logoImg} alt="dua ruqyah logo" />
        </figure>

        {/* nav items */}
        <NavItems />

        {/* support */}
        <button className="w-16 h-16 bg-primary text-white inline-block rounded-xl">
          {supportIcon}
        </button>
      </Box>
    </header>
  );
}
