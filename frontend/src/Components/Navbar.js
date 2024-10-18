import React, { useState } from "react";
import { FaBars, FaPhone } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../Assets/image 1.png";
import img1 from "../Assets/navbar icon 1/image 588254511.png";
import icon1 from "../Assets/navbar icon 1/_x31_77_x2C__frontend_x2C__interface_x2C__mobile_x2C__phone_x2C__developer.png";
import icon2 from "../Assets/navbar icon 1/Group 1171275282.png";
import icon3 from "../Assets/navbar icon 1/Group 1171275284.png";
import icon4 from "../Assets/navbar icon 1/Group 1171275285.png";
import icon5 from "../Assets/navbar icon 1/Group 1171275292.png";
import icon6 from "../Assets/navbar icon 1/Group 1171275296.png";
import icon7 from "../Assets/navbar icon 1/Group-1.png";
import icon8 from "../Assets/navbar icon 1/Group.png";
import in1 from "../Assets/navbar icon 2/Group 1171275300.png";
import in2 from "../Assets/navbar icon 2/Group 1171275302.png";
import in3 from "../Assets/navbar icon 2/Group 1171275304.png";
import in4 from "../Assets/navbar icon 2/image 588254512.png";
import in5 from "../Assets/navbar icon 2/Vector-1.png";
import in6 from "../Assets/navbar icon 2/Vector.png";

import {
  FiCode,
  FiSmartphone,
  FiImage,
  FiLayers,
  FiGlobe,
  FiTarget,
  FiUsers,
  FiBriefcase,
} from "react-icons/fi"; // Importing some icons for the services

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="bg-black text-white sm:p-4 md:p-5 fixed top-0 z-50 w-full">
      <div className="mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} className="h-[50px] w-auto" alt="Logo" />
        </div>

        {/* Main Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="hover:text-gray-400 transition duration-300">
            Home
          </Link>

          {/* Dropdown for Services */}
          <div className=" group">
            <div className="flex relative items-center hover:text-gray-400 transition duration-300 cursor-pointer">
              Services <MdExpandMore className="ml-1" />
            </div>
            {/* Hover Dropdown Content */}
            <div className="absolute left-0 w-full top-[40px] mt-2 hidden group-hover:flex gap-3  bg-[#c4d7ff] text-black p-6 shadow-lg">
              <div>
                <img src={img1} alt="img" className="h-auto w-[800px]" />
              </div>
              <div>
                <h2 className="text-4xl font-semibold mb-1 leading-9">
                  Services <br />
                  Empowering your business with expert solutions.
                </h2>
                <div className="grid grid-cols-4 gap-4">
                  {/* First Row of 4 Boxes */}
                  <Link
                    to="/web"
                    className="p-2 bg-white  text-gray-800 hover:bg-[#1AD079] hover:text-white hover:shadow-lg transition duration-300 rounded-lg flex gap-2"
                  >
                    <div className="h-auto w-[100px] mt-2">
                      <img src={icon2} alt="" className="" />
                    </div>
                    <div className="">
                      <h4 className="font-semibold text-lg">Web Development</h4>
                      <p className="text-[11px] ">
                        Delivering responsive and dynamic websites tailored to
                        your business needs, ensuring seamless user experiences
                        and optimal performance.
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/app"
                    className="p-2 bg-white text-gray-800 hover:bg-[#1AD079] hover:text-white hover:shadow-lg transition flex duration-300 rounded-lg"
                  >
                    <div className="h-auto w-[100px] mt-2">
                      <img src={icon1} alt="" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">App Development</h4>
                      <p className="text-[11px] ">
                        Custom mobile app solutions for Android and iOS,
                        designed to enhance engagement and drive business
                        growth.
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/graphic"
                    className="p-2 bg-white text-gray-800 hover:bg-[#1AD079] hover:text-white hover:shadow-lg transition duration-300 flex rounded-lg"
                  >
                    <div className="h-auto w-[100px] mt-2">
                      <img src={icon8} alt="" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Graphic Design</h4>
                      <p className="text-[11px] ">
                        Creative design solutions, from logos to marketing
                        collateral, ensuring your brand stands out with
                        professional visuals.
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/marketingsolutions"
                    className="p-2 bg-white text-gray-800 hover:bg-[#1AD079] hover:text-white hover:shadow-lg transition duration-300 flex rounded-lg"
                  >
                    <div className="h-auto w-[100px] mt-2">
                      <img src={icon4} alt="" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">3D Modeling</h4>
                      <p className="text-[11px] ">
                        Innovative 3D modeling and animations that bring your
                        ideas to life, perfect for presentations, product demos,
                        and more.
                      </p>
                    </div>
                  </Link>

                  {/* Second Row of 4 Boxes */}
                  <Link
                    to="/seo"
                    className="p-2 bg-white text-gray-800 hover:bg-[#1AD079] hover:text-white hover:shadow-lg transition duration-300 flex rounded-lg"
                  >
                    <div className="h-auto w-[100px] mt-2">
                      <img src={icon3} alt="" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">SEO</h4>
                      <p className="text-[11px] ">
                        Enhancing your brand’s presence on social platforms with
                        creative and engaging content to drive interaction and
                        growth.
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/digitalmarketing"
                    className="p-2 bg-white text-gray-800 hover:bg-[#1AD079] hover:text-white hover:shadow-lg transition duration-300 flex rounded-lg"
                  >
                    <div className="h-auto w-[100px] mt-2">
                      <img src={icon6} alt="" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">
                        Digital Marketing
                      </h4>
                      <p className="text-[11px] ">
                        Comprehensive strategies combining SEO, PPC, and content
                        marketing to boost your online presence and conversions.
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/smo"
                    className="p-2 bg-white text-gray-800 hover:bg-[#1AD079] hover:text-white hover:shadow-lg transition duration-300 flex rounded-lg"
                  >
                    <div className="h-auto w-[100px] mt-2">
                      <img src={icon7} alt="" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">SMO</h4>
                      <p className="text-[11px] ">
                        Enhancing your brand’s presence on social platforms with
                        creative and engaging content to drive interaction and
                        growth.
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/hrms"
                    className="p-2 bg-white text-gray-800 hover:bg-[#1AD079] hover:text-white hover:shadow-lg transition duration-300 flex rounded-lg"
                  >
                    <div className="h-auto w-[100px] mt-2">
                      <img src={icon5} alt="" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">HRMS</h4>
                      <p className="text-[11px] ">
                        Streamline HR processes with custom HRMS solutions,
                        enhancing efficiency in recruitment, payroll, and
                        employee management.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Dropdown for Industries */}
          <div className="group">
            <div className="flex items-center hover:text-gray-400 transition duration-300 cursor-pointer">
              Industries <MdExpandMore className="ml-1" />
            </div>
            {/* Hover Dropdown Content */}
            <div className="absolute left-0 w-full top-[40px] mt-2 hidden group-hover:flex gap-3 bg-[#c4d7ff] text-black p-6 shadow-lg">
              <div>
                <img
                  src={in4}
                  alt="industries-img"
                  className="h-auto w-[800px]"
                />
              </div>
              <div>
                <div className="grid grid-cols-3 gap-4">
                  {/* First Row of 3 Boxes */}
                  <Link
                    to="/healthcare"
                    className="p-2 bg-white text-gray-800 hover:bg-[#1AD079] hover:text-white hover:shadow-lg transition duration-300 rounded-lg flex gap-2"
                  >
                    <div className="h-auto w-[100px] mt-2">
                      <img src={in1} alt="Icon 1" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Healthcare</h4>
                      <p className="text-[11px]">
                        Our health care solutions focus on enhancing patient
                        engagement through secure portals, telemedicine apps,
                        and management systems that streamline operations while
                        ensuring compliance with health regulations.
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/education"
                    className="p-2 bg-white text-gray-800 hover:bg-[#1AD079] hover:text-white hover:shadow-lg transition duration-300 rounded-lg flex gap-2"
                  >
                    <div className="h-auto w-[100px] mt-2">
                      <img src={in2} alt="Icon 2" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Education</h4>
                      <p className="text-[11px]">
                        Our education technology services offer online learning
                        platforms, student management systems, and engaging
                        e-learning tools to facilitate effective teaching and
                        learning experiences.
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/realestate"
                    className="p-2 bg-white text-gray-800 hover:bg-[#1AD079] hover:text-white hover:shadow-lg transition duration-300 rounded-lg flex gap-2"
                  >
                    <div className="h-auto w-[100px] mt-2">
                      <img src={in3} alt="Icon 3" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Real Estate</h4>
                      <p className="text-[11px]">
                        We create tailored solutions for real estate businesses,
                        including property listing websites and CRM systems,
                        enabling efficient management of listings, leads, and
                        client interactions.
                      </p>
                    </div>
                  </Link>

                  {/* Second Row of 3 Boxes */}
                  <Link
                    to="/banking"
                    className="p-2 bg-white text-gray-800 hover:bg-[#1AD079] hover:text-white hover:shadow-lg transition duration-300 rounded-lg flex gap-2"
                  >
                    <div className="h-auto w-[100px] mt-2">
                      <img src={in5} alt="Icon 4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Banking</h4>
                      <p className="text-[11px]">
                        We develop secure banking solutions, including mobile
                        banking apps and online platforms, ensuring
                        user-friendly interfaces and robust security measures
                        for financial transactions.
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/ecommerces"
                    className="p-2 bg-white text-gray-800 hover:bg-[#1AD079] hover:text-white hover:shadow-lg transition duration-300 rounded-lg flex gap-2"
                  >
                    <div className="h-auto w-[100px] mt-2">
                      <img src={in6} alt="Icon 5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">E-Commerce</h4>
                      <p className="text-[11px]">
                        We develop robust e-commerce platforms that provide
                        seamless shopping experiences, integrating payment
                        gateways, inventory management, and user-friendly
                        interfaces to drive sales and customer satisfaction
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link
            to="/conservation"
            className="hover:text-gray-400 transition duration-300"
          >
            Contact
          </Link>
          <Link
            to="/about"
            className="hover:text-gray-400 transition duration-300"
          >
            About Us
          </Link>
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
      <Link to="/" className="block">
        Home
      </Link>

      {/* Mobile Dropdown for Services */}
      <div>
        <button
          className="flex items-center justify-between w-full"
          onClick={() => toggleDropdown("services")}
        >
          Services{" "}
          <MdExpandMore
            className={`ml-1 transform ${
              activeDropdown === "services" ? "rotate-180" : ""
            }`}
          />
        </button>
        {activeDropdown === "services" && (
          <div className="grid grid-cols-1 gap-4 mt-2 bg-gray-800 p-3 rounded-md h-[30vh] overflow-scroll">
            {/* Service 1 */}
            <Link
              to="/web"
              className="p-2 bg-white text-gray-800 hover:bg-[#1AD079] hover:text-white hover:shadow-lg transition duration-300 rounded-lg flex gap-2"
            >
              <div className="h-auto w-[60px]">
                <img src={icon2} alt="Web Development" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Web Development</h4>
                <p className="text-[12px]">
                  Delivering responsive and dynamic websites tailored to your business needs.
                </p>
              </div>
            </Link>
            {/* Service 2 */}
            <Link
              to="/app"
              className="p-2 bg-white text-gray-800 hover:bg-[#1AD079] hover:text-white hover:shadow-lg transition duration-300 rounded-lg flex gap-2"
            >
              <div className="h-auto w-[60px]">
                <img src={icon1} alt="App Development" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">App Development</h4>
                <p className="text-[12px]">
                  Custom mobile app solutions for Android and iOS.
                </p>
              </div>
            </Link>
            {/* Service 3 */}
            <Link
              to="/graphic"
              className="p-2 bg-white text-gray-800 hover:bg-[#1AD079] hover:text-white hover:shadow-lg transition duration-300 rounded-lg flex gap-2"
            >
              <div className="h-auto w-[60px]">
                <img src={icon8} alt="Graphic Design" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Graphic Design</h4>
                <p className="text-[12px]">
                  Creative design solutions to make your brand stand out.
                </p>
              </div>
            </Link>
            {/* Service 4 */}
            <Link
              to="/marketingsolutions"
              className="p-2 bg-white text-gray-800 hover:bg-[#1AD079] hover:text-white hover:shadow-lg transition duration-300 rounded-lg flex gap-2"
            >
              <div className="h-auto w-[60px]">
                <img src={icon4} alt="Marketing Solutions" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Marketing Solutions</h4>
                <p className="text-[12px]">
                  Strategic digital marketing to boost your online presence.
                </p>
              </div>
            </Link>
            <Link
                    to="/marketingsolutions"
                    className="p-2 bg-white text-gray-800 hover:bg-[#1AD079] hover:text-white hover:shadow-lg transition duration-300 flex rounded-lg"
                  >
                    <div className="h-auto w-[100px] mt-2">
                      <img src={icon4} alt="" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">3D Modeling</h4>
                      <p className="text-[11px] ">
                        Innovative 3D modeling and animations that bring your
                        ideas to life, perfect for presentations, product demos,
                        and more.
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/seo"
                    className="p-2 bg-white text-gray-800 hover:bg-[#1AD079] hover:text-white hover:shadow-lg transition duration-300 flex rounded-lg"
                  >
                    <div className="h-auto w-[100px] mt-2">
                      <img src={icon3} alt="" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">SEO</h4>
                      <p className="text-[11px] ">
                        Enhancing your brand’s presence on social platforms with
                        creative and engaging content to drive interaction and
                        growth.
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/smo"
                    className="p-2 bg-white text-gray-800 hover:bg-[#1AD079] hover:text-white hover:shadow-lg transition duration-300 flex rounded-lg"
                  >
                    <div className="h-auto w-[100px] mt-2">
                      <img src={icon7} alt="" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">SMO</h4>
                      <p className="text-[11px] ">
                        Enhancing your brand’s presence on social platforms with
                        creative and engaging content to drive interaction and
                        growth.
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/hrms"
                    className="p-2 bg-white text-gray-800 hover:bg-[#1AD079] hover:text-white hover:shadow-lg transition duration-300 flex rounded-lg"
                  >
                    <div className="h-auto w-[100px] mt-2">
                      <img src={icon5} alt="" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">HRMS</h4>
                      <p className="text-[11px] ">
                        Streamline HR processes with custom HRMS solutions,
                        enhancing efficiency in recruitment, payroll, and
                        employee management.
                      </p>
                    </div>
                  </Link>
          </div>
        )}
      </div>

      {/* Mobile Dropdown for Industries */}
      <div className="">
        <button
          className="flex items-center justify-between w-full"
          onClick={() => toggleDropdown("industries")}
        >
          Industries{" "}
          <MdExpandMore
            className={`ml-1 transform ${
              activeDropdown === "industries" ? "rotate-180" : ""
            }`}
          />
        </button>
        {activeDropdown === "industries" && (
          <div className="grid grid-cols-1 gap-4 mt-2 bg-gray-800 p-3 rounded-md h-[40vh] overflow-scroll">
            {/* Industry 1 */}
            <Link
              to="/healthcare"
              className="p-2 bg-white text-gray-800 hover:bg-[#1AD079] hover:text-white hover:shadow-lg transition duration-300 rounded-lg flex gap-2"
            >
              <div className="h-auto w-[60px]">
                <img src={in1} alt="Healthcare" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Healthcare</h4>
                <p className="text-[12px]">
                  Solutions for enhancing patient engagement through telemedicine apps and more.
                </p>
              </div>
            </Link>
            {/* Industry 2 */}
            <Link
              to="/education"
              className="p-2 bg-white text-gray-800 hover:bg-[#1AD079] hover:text-white hover:shadow-lg transition duration-300 rounded-lg flex gap-2"
            >
              <div className="h-auto w-[60px]">
                <img src={in2} alt="Education" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Education</h4>
                <p className="text-[12px]">
                  E-learning platforms and tools to facilitate teaching and learning.
                </p>
              </div>
            </Link>
            {/* Industry 3 */}
            <Link
              to="/realestate"
              className="p-2 bg-white text-gray-800 hover:bg-[#1AD079] hover:text-white hover:shadow-lg transition duration-300 rounded-lg flex gap-2"
            >
              <div className="h-auto w-[60px]">
                <img src={in3} alt="Real Estate" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Real Estate</h4>
                <p className="text-[12px]">
                  Tailored solutions for managing property listings and CRM systems.
                </p>
              </div>
            </Link>
            {/* Industry 4 */}
            <Link
                    to="/banking"
                    className="p-2 bg-white text-gray-800 hover:bg-[#1AD079] hover:text-white hover:shadow-lg transition duration-300 rounded-lg flex gap-2"
                  >
                    <div className="h-auto w-[100px] mt-2">
                      <img src={in5} alt="Icon 4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Banking</h4>
                      <p className="text-[11px]">
                        We develop secure banking solutions, including mobile
                        banking apps and online platforms, ensuring
                        user-friendly interfaces and robust security measures
                        for financial transactions.
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/ecommerces"
                    className="p-2 bg-white text-gray-800 hover:bg-[#1AD079] hover:text-white hover:shadow-lg transition duration-300 rounded-lg flex gap-2"
                  >
                    <div className="h-auto w-[100px] mt-2">
                      <img src={in6} alt="Icon 5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">E-Commerce</h4>
                      <p className="text-[11px]">
                        We develop robust e-commerce platforms that provide
                        seamless shopping experiences, integrating payment
                        gateways, inventory management, and user-friendly
                        interfaces to drive sales and customer satisfaction
                      </p>
                    </div>
                  </Link>
          </div>
        )}
      </div>

      <Link to="/conservation" className="block">
        Contact
      </Link>
      <Link to="/about" className="block">
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
