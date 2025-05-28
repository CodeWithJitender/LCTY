import React from 'react'
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import ButtonPrimary from "./ButtonPrimary";
function Footer() {
  return (
      <footer className="primary-bg-2 text-white md:px-6 py-10 w-full">
      <div className="container-xxl">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row  lg:justify-between gap-10 lg:gap-0">
          {/* Logo Section */}
          <div className="text-center lg:text-left">
            <img
              src="logo-footer.png"
              alt="Logo"
              className="max-h-[250px] mb-2 m-auto"
            />
          </div>

          {/* Nav Links */}
          <div className=" flex flex-col justify-between">
            <nav className="flex flex-wrap justify-center gap-4 lg:gap-6 text-[18px] font-medium text-white font-archivo w-full">
              <Link to="/">Home</Link>
              <Link to="/">About us</Link>
              <Link to="/">Programs</Link>
              <Link to="/">Prospective clients</Link>
              <Link to="/">Our team</Link>
              <Link to="/">Community partners</Link>
              <Link to="/">Locations</Link>
            </nav>
            {/* Bottom Section */}
            <div className="mt-10 text-center">
              {/* Socials */}
              <div className="mb-6 flex justify-center gap-4">
                <a
                  href="#"
                  className="secondary-bg-1 text-white p-2 rounded-full nav-t hover:scale-110 hover:bg-[#ffafcc] transition"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  className="secondary-bg-1 text-white p-2 rounded-full nav-t hover:scale-110 hover:bg-[#ffafcc] transition"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="secondary-bg-1 text-white p-2 rounded-full nav-t hover:scale-110 hover:bg-[#ffafcc] transition"
                >
                  <FaFacebook />
                </a>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-8 text-[18px] font-medium  font-archivo w-full">
                <a className="text-white">Call: 561 494 4499</a>
                <a className="text-white">
                  Email: info@littlechampstherapy.com
                </a>
                <a className="text-white">
                  <strong>Fax:</strong> 561 705 7501
                </a>
              </div>
            </div>
          </div>

          {/* Register Button */}
          {/* <button className="bg-[#FCF9FF] text-[#FF96FF] border-2 border-[#FFAFCC] px-6 py-3 rounded-full font-bold text-base hover:bg-[#FFAFCC] hover:text-white transition">
          Register Now
        </button> */}
          <div className="text-center lg:text-left">
            <ButtonPrimary link="/" text="Register Now" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
