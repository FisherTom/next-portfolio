import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useRouter } from "next/router";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkCol, setLinkCol] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/brewlog" ||
      router.asPath === "/mushi" ||
      router.asPath === "/games" ||
      router.asPath === "/portfolio"
    ) {
      setNavBg("transparent");
      setLinkCol("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkCol("#1f2937");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className="fixed w-full h-20 shadow-xl z-[100] "
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            style={
              linkCol === "#ecf0f3"
                ? {
                    filter:
                      "invert(100%) sepia(0%) saturate(0%) hue-rotate(303deg) brightness(104%) contrast(102%)",
                  }
                : {}
            }
            src="/../public/assests/logo.png"
            alt="/"
            width="60"
            height="60"
          />
        </Link>
        <div>
          <ul style={{ color: `${linkCol}` }} className="hidden md:flex">
            <Link scroll={false} href="/#home">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link scroll={false} href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link scroll={false} href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link scroll={false} href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link scroll={false} href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div
            style={{ color: `${linkCol}` }}
            onClick={handleNav}
            className=" md:hidden"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? "md:hidden fixed right-0 top-0 w-full h-screen bg-black/70 "
            : " "
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[70%] sm-[60%] md-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 w-[70%] sm-[60%] md-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
          }
        >
          <div className="">
            <div className="flex w-full items-center justify-between">
              <Image
                src="/../public/assests/logo.png"
                alt="/"
                width="80"
                height="10"
              />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-400 my-4">
              <p className="w-[85%] md:w-[90%] py-4 ">Please Give Me A Job!</p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link scroll={false} href="/#home">
                <li
                  onClick={() => {
                    setNav(false);
                  }}
                  className="py-4 text-sm"
                >
                  Home
                </li>
              </Link>
              <Link scroll={false} href="/#about">
                <li
                  onClick={() => {
                    setNav(false);
                  }}
                  className="py-4 text-sm"
                >
                  About
                </li>
              </Link>
              <Link scroll={false} href="/#skills">
                <li
                  onClick={() => {
                    setNav(false);
                  }}
                  className="py-4 text-sm"
                >
                  Skills
                </li>
              </Link>
              <Link scroll={false} href="/#projects">
                <li
                  onClick={() => {
                    setNav(false);
                  }}
                  className="py-4 text-sm"
                >
                  Projects
                </li>
              </Link>
              <Link scroll={false} href="/#contact">
                <li
                  onClick={() => {
                    setNav(false);
                  }}
                  className="py-4 text-sm"
                >
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Lets Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaInstagram />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
