"use client";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

export default function Main() {
  var hour = new Date().getHours();
  var greeting = "";

  if (hour >= 5 && hour < 11) greeting = "🌄 God morgen";
  else if (hour >= 11 && hour < 17) greeting = "👋 God eftermiddag";
  else if (hour >= 17 && hour < 23) greeting = "🌆 God aften";
  else if (hour === 23 || hour < 5) greeting = "🦉 Sikke en natteugle";

  return (
    <div className="w-full h-screen text-center text-[#f1f1f1]">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1>
            <span id="greeting">{greeting}</span>
            <br></br>
            Jeg er <u className="text-orange-300">Gustav</u>,<br></br>
            Software Udvikler
          </h1>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-6">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/gustavhaavik/"
            >
              <div className="rounded-full shadow-lg p-6 cursor-pointer bg-[#f1f1f1] hover:scale-110 ease-in duration-300">
                <FaLinkedinIn color="#2c2c2f" />
              </div>{" "}
            </Link>

            <Link target="_blank" href="https://github.com/gustavhaavik">
              <div className="rounded-full shadow-lg p-6 cursor-pointer bg-[#f1f1f1] hover:scale-110 ease-in duration-300">
                <FaGithub color="#2c2c2f" />
              </div>
            </Link>
            <Link target="_blank" href="mailto:gkhaavik@gmail.com?subject=ContactMe">
              <div className="rounded-full shadow-lg p-6 cursor-pointer bg-[#f1f1f1] hover:scale-110 ease-in duration-300">
                <AiOutlineMail color="#2c2c2f" />
              </div>
            </Link>
            <Link target="_black" href="/Contact">
              <div className="rounded-full shadow-lg p-6 cursor-pointer bg-[#f1f1f1] hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill color="#2c2c2f" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
