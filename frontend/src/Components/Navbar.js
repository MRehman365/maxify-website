import React, { useState } from "react";
import { FaBars, FaPhone } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from '../Assets/image 1.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="bg-black text-white sm:p-4 md:p-5 fixed top-0 z-50 w-full">
      <div className=" mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} className="h-[50px] w-auto" alt="" />
        </div>

        {/* Main Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="hover:text-gray-400 transition duration-300">
            Home
          </Link>

          {/* Dropdown for Services */}
          <div className="relative group">
          <p className="bg-[#a656f7] text-white px-1 text-[10px] absolute right-0 top-[-12px] rounded-sm">New</p>
            <Link
              to="/servise"
              className="flex items-center hover:text-gray-400 transition duration-300"
            >
              Services <MdExpandMore className="ml-1" />
            </Link>
            {/* <div className="absolute left-0 hidden group-hover:flex flex-col bg-white text-black mt-2 rounded shadow-lg w-48">
              <a href="#" className="px-4 py-2 hover:bg-gray-100">
                Service 1
              </a>
              <a href="#" className="px-4 py-2 hover:bg-gray-100">
                Service 2
              </a>
              <a href="#" className="px-4 py-2 hover:bg-gray-100">
                Service 3
              </a>
            </div> */}
          </div>

          {/* Dropdown for Industries */}
          <div className="relative group">
          <Link
              to="/seo"
              className="flex items-center hover:text-gray-400 transition duration-300"
            >
              Industries <MdExpandMore className="ml-1" />
            </Link>
            {/* <div className="absolute left-0 hidden group-hover:flex flex-col bg-white text-black mt-2 rounded shadow-lg w-48">
              <a href="#" className="px-4 py-2 hover:bg-gray-100">
                Industry 1
              </a>
              <a href="#" className="px-4 py-2 hover:bg-gray-100">
                Industry 2
              </a>
            </div> */}
          </div>

          {/* Dropdown for Success Stories */}
          <div className="relative group">
          <p className="bg-[#38e382] text-white px-1 text-[10px] absolute right-0 top-[-12px] rounded-sm">Exclusive</p>
            <Link
              to="/contact"
              className="flex items-center hover:text-gray-400 transition duration-300"
            >
              Success Stories <MdExpandMore className="ml-1" />
            </Link>
            {/* <div className="absolute left-0 hidden group-hover:flex flex-col bg-white text-black mt-2 rounded shadow-lg w-48">
              <a href="#" className="px-4 py-2 hover:bg-gray-100">
                Service 1
              </a>
              <a href="#" className="px-4 py-2 hover:bg-gray-100">
                Service 2
              </a>
              <a href="#" className="px-4 py-2 hover:bg-gray-100">
                Service 3
              </a>
            </div> */}
          </div>
          <div className="relative group">
            <Link
              to="/conservation"
              className="flex items-center hover:text-gray-400 transition duration-300"
            >
              About us <MdExpandMore className="ml-1" />
            </Link>
            {/* <div className="absolute left-0 hidden group-hover:flex flex-col bg-white text-black mt-2 rounded shadow-lg w-48">
              <a href="#" className="px-4 py-2 hover:bg-gray-100">
                Service 1
              </a>
              <a href="#" className="px-4 py-2 hover:bg-gray-100">
                Service 2
              </a>
              <a href="#" className="px-4 py-2 hover:bg-gray-100">
                Service 3
              </a>
            </div> */}
          </div>
        </div>

        {/* Contact and Quote Button */}
        <div className="hidden md:flex space-x-4 items-center">
          <button className="bg-gradient-to-r from-purple-500 to-[#2334DE] px-4 py-2 rounded-sm hover:from-purple-600 hover:to-[#2334DE] transition duration-300">
            Get A Quote
          </button>
          <div className="flex items-center">
            <FaPhone className="mr-2 bg-[#2334DE] rounded-full text-white h-[35px] w-[35px] leading-[16px] p-2 text-[12px]" />
            <div>
              <p className="text-[11px]">Call Any Time</p>
              <p className="text-[13px] font-semibold">+91 89050 54141</p>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white mt-4">
          <div className="flex flex-col space-y-4">
            <a href="#" className="block">
              Home
            </a>

            {/* Mobile Dropdown for Services */}
            <div>
              <Link to=""
                className="flex items-center justify-between w-full"
                onClick={() => toggleDropdown("services")}
              >
                Services{" "}
                <MdExpandMore
                  className={`ml-1 transform ${
                    activeDropdown === "services" ? "rotate-180" : ""
                  }`}
                />
              </Link>
            </div>

            {/* Mobile Dropdown for Industries */}
            <div>
              <Link
                className="flex items-center justify-between w-full"
                onClick={() => toggleDropdown("industries")}
              >
                Industries{" "}
                <MdExpandMore
                  className={`ml-1 transform ${
                    activeDropdown === "industries" ? "rotate-180" : ""
                  }`}
                />
              </Link>
            </div>

            {/* Mobile Dropdown for Success Stories */}
            <div>
              <Link
                className="flex items-center justify-between w-full"
                onClick={() => toggleDropdown("success")}
              >
                Success Stories{" "}
                <MdExpandMore
                  className={`ml-1 transform ${
                    activeDropdown === "success" ? "rotate-180" : ""
                  }`}
                />
              </Link>
            </div>

            <Link to="" className="block">
              About Us
            </Link>

            <button className="bg-gradient-to-r from-purple-500 to-[#2334DE] px-4 py-2 rounded-lg">
              Get A Quote
            </button>
            <div className="flex items-center justify-center">
              <FaPhone />
              <span className="ml-2">+91 89050 54141</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
