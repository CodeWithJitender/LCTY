import React from "react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaArrowRight,
} from "react-icons/fa";
import Arrow from "./Arrow";
const logo = "logo.png";
const profileImage = "sample.png";

function Header() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about-us" },
    { name: "Programs", path: "/programs" },
    { name: "Prospective clients", path: "/prospective-clients" },
    { name: "Our team", path: "/our-team" },
    { name: "Community partners", path: "/community-partners" },
    // { name: "Locations", path: "/locations" },
  ];
 const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const Overlay = ({ children, onClose, side, btnSide }) => (
    <div className="fixed inset-0 p-3 bg-[#ffffffb2]">
      <div
        className={`md:fixed ${side} w-full primary-bg-2 md:w-[500px] p-6 rounded-xl  text-white z-50`}
      >
        <button
          onClick={onClose}
          className={`absolute top-8 md:top-4 ${btnSide} text-2xl flex items-center gap-2 nav-t`}
        >
          <span className="font-archivo">Close</span>

          <i
            class="fal fa-times primary-text-2 bg-white secondary-text-1 rounded-full w-10 h-10"
            style={{ lineHeight: "40px" }}
          ></i>
        </button>
        {children}
      </div>
    </div>
  );

  return (
    <header  className="w-full bg-white z-40 relative">
      <div className="flex justify-between items-center px-6 py-4">
        <button
          onClick={() => setMenuOpen(true)}
          className="primary-bg-2 text-xl text-white rounded-full p-3"
        >
          <FaBars />
        </button>
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-24 mx-auto" />
        </Link>
        <button
          onClick={() => setSearchOpen(true)}
          className="primary-bg-2 text-xl text-white rounded-full p-3"
        >
          <FaSearch />
        </button>
      </div>

      {menuOpen && (
        <Overlay
          onClose={() => setMenuOpen(false)}
          className="primary-bg-1"
          side={"left-4"}
          btnSide={"right-4"}
        >
          <div className="">
            <nav className="mt-20 space-y-7 nav-t font-archivo ">
              {navLinks.map(({ name, path }) => (
                <Link
                  key={path}
                  to={path}
                  className="block hover:underline"
                  onClick={() => setMenuOpen(false)}
                >
                  {name}
                </Link>
              ))}
            </nav>
            <div className="flex gap-4 mt-10 justify-between items-center nav-t">
              <Link className="">Location</Link>
              <div className="flex gap-2 secondary-text-1">
                <a
                  href=""
                  target="_blank"
                  className="bg-white flex justify-center items-center rounded-full  nav-t w-10 h-10"
                >
                  {" "}
                  <FaLinkedin className="" />
                </a>
                <a
                  href=""
                  target="_blank"
                  className="bg-white flex justify-center items-center rounded-full  nav-t w-10 h-10"
                >
                  {" "}
                  <FaInstagram className="" />
                </a>
                <a
                  href=""
                  target="_blank"
                  className="bg-white flex justify-center items-center rounded-full  nav-t w-10 h-10"
                >
                  {" "}
                  <FaFacebook className="" />
                </a>
              </div>
            </div>
            <div className="mt-6 h-60 relative">
              <img
                src={profileImage}
                alt="Contact"
                className="rounded-lg w-full h-full object-cover"
              />
              <Link
                to="/contact-us"
                className="flex items-center mt-2 text-white  justify-between absolute bottom-0 w-full max-w-[100%] p-2 font-archivo font- nav-t"
                onClick={() => setMenuOpen(false)}
              >
                <span>Contact us</span> <Arrow />
              </Link>
            </div>
          </div>
        </Overlay>
      )}

      {searchOpen && (
        <Overlay
          onClose={() => setSearchOpen(false)}
          side={"right-4"}
          btnSide={"light-4"}
        >
          <div className="mt-16">
            <div className="flex items-center bg-white overflow-hidden rounded-[10px] p-2">
              <input
                type="text"
                placeholder="Physical Therapy"
                className="flex-1 px-4 py-2 text-black outline-none "
              />
              <button className="px-3 rounded-full secondary-bg-1 text-white w-10 h-10 flex justify-center items-center nav-t">
                <FaSearch />
              </button>
            </div>

            <h2 className="mt-6 text-lg font-semibold font-archivo text-center">
              Popular programs
            </h2>
            <div className=" gap-4 mt-4 overflow-x-auto grid grid-cols-2">
              {["Physical Therapy", "Music Therapy"].map((program, idx) => (
                <div
                  key={idx}
                  className="relative text-black rounded-lg overflow-hidden  flex-shrink-0"
                >
                  <img
                    src={profileImage}
                    alt={program}
                    className="w-full h-[300px] object-cover"
                  />
                  <div className="p-2 flex absolute bottom-0 w-full justify-between items-end font-archivo ">
                    <h3 className="text-sm font-bold text-white">{program}</h3>
                    <Arrow />
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/programs"
              className="block mt-4 text-white text-end"
              onClick={() => setSearchOpen(false)}
            >
              View more ↗
            </Link>
          </div>
        </Overlay>
      )}
    </header>
  );
}

export default Header;
