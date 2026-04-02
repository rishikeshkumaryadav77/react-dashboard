import React, { useState } from "react";
import { IoMdHeart } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const ToggleFun = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="bg-white ">
        <nav className="max-w-[1400px] mx-auto flex justify-between md:h-[14vh] h-[12vh] px-10 items-center fixed top-0 right-0 left-0 bg-white z-50">
          {/* logo */}
          <a href="" className="text-3xl font-bold">
            Gr<span className="text-orange-400">O</span>cify
          </a>

          {/* middle side navbar */}
          <ul className="md:flex items-center font-semibold gap-2 text-zinc-800 tracking-wider hidden">
            <li>
              <a
                href=""
                className="text-orange-500 tracking-wider hover:text-zinc-800"
              >
                Home
              </a>
            </li>
            <li>
              <a href="" className="tracking-wider hover:text-orange-500">
                {" "}
                About Us
              </a>
            </li>
            <li>
              <a href="" className="tracking-wider hover:text-orange-500">
                Process
              </a>
            </li>
            <li>
              <a href="" className="tracking-wider hover:text-orange-500">
                Contact Us
              </a>
            </li>
          </ul>

          {/* right navbar */}
          <div className="flex items-center gap-2">
            <div className="md:flex items-center border-2 border-orange-500 rounded-full p-1 hidden">
              <input
                className="focus:outline-none px-2 flex-1 h-[5vh]"
                type="text"
                id="search"
                name="search"
                placeholder="search..."
                autoComplete="off"
              />
              <button className="flex justify-center items-center h-10 w-10 rounded-full bg-gradient-to-b from-zinc-500 to-orange-500 text-xl  text-white">
                <CiSearch />
              </button>
            </div>
            <a href="" className="text-zinc-800 text-2xl">
              <IoMdHeart />
            </a>
            <a href="" className="text-zinc-800 text-2xl">
              <RiShoppingBag4Fill />
            </a>
            {/* hamburger */}
            <button
              type="button"
              className="text-zinc-800 text-2xl font-bold md:hidden"
              onClick={ToggleFun}
            >
              {toggle ? <RxCross2 /> : <RxHamburgerMenu />}
            </button>
          </div>
          {/* mobile */}
          <ul
            className={`flex flex-col items-center gap-y-10 bg-orange-500/15 backdrop-blur-2xl p-10 rounded-2xl -left-full font-semibold transition-all duration-300 text-zinc-800 tracking-wider md:hidden absolute top-25 ${
              toggle ? "left-1/2" : "-left-full"
            } transform -translate-x-1/2`}
          >
            <li>
              <a
                href=""
                className="text-orange-500 tracking-wider hover:text-zinc-800"
              >
                Home
              </a>
            </li>
            <li>
              <a href="" className="tracking-wider hover:text-orange-500">
                About Us
              </a>
            </li>
            <li>
              <a href="" className="tracking-wider hover:text-orange-500">
                Process
              </a>
            </li>
            <li>
              <a href="" className="tracking-wider hover:text-orange-500">
                Contact Us
              </a>
            </li>
            <li className="flex items-center border-2 border-orange-500 rounded-full p-1 md:hidden">
              <input
                className="focus:outline-none px-2 flex-1 h-[5vh]"
                type="text"
                id="search"
                name="search"
                placeholder="search..."
                autoComplete="off"
              />
              <button className="flex justify-center items-center h-10 w-10 rounded-full bg-gradient-to-b from-white to-black text-xl  text-white font-bold">
                <CiSearch />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
