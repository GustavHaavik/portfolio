"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] bg-[rgba(29,29,31,0.9)] border-b border-[#2c2c2f]">
      <div className="flex justify-center items-center w-full h-full px-2 2xl:px-16">
        {/* <Image src="/next.svg" alt="Logo" width={125} height={50} /> */}

        <div  >
          <ul className="hidden md:flex text-[#f1f1f1]">
            <Link href="/" scroll={false}>
              <li className="ml-10 text-sm uppercase hover:border-b hover:text-[#90b3f4]">Hjem</li>
            </Link>
            <Link href="#about_me" scroll={false}>
              <li className="ml-10 text-sm uppercase hover:border-b hover:text-[#90b3f4]">Om mig</li>
            </Link>
            <Link href="#projects" scroll={false}>
              <li className="ml-10 text-sm uppercase hover:border-b hover:text-[#90b3f4]">Projekter</li>
            </Link>
            <Link href="/" scroll={false}>
              <li className="ml-10 text-sm uppercase hover:border-b hover:text-[#90b3f4]">
                Kontakt
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full itmes-center justify-between">
              <Image src="/next.svg" alt="Logo" width="87" height="35" />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w.[90%] py-4">
                Lad mig hjælpe med at udvikle din virksomhed
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm">Hjem</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Om mig</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Projekter</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Kontakt</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Føj mig til dit netværk
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
