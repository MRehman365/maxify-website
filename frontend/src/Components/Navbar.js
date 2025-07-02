import React, { useState } from "react";
import { FaBars, FaTimes, FaPhone } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";
import { Link } from "react-router-dom";
import NewsLatter from "./NewsLatter";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handlenavClick = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const handleNavToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = () => {
    setActiveDropdown(null);
  };

  const handleMouseEnter = () => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout); // Prevent the dropdown from closing immediately when hovering
    setActiveDropdown("services");
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null); // Close dropdown after a delay
    }, 300); // Adjust the delay time (300ms in this case)
    setDropdownTimeout(timeout);
  };

  const handleMouseEnterIn = () => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout); // Prevent the dropdown from closing immediately when hovering
    setActiveDropdown("industries");
  };

  const handleMouseLeaveIn = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null); // Close dropdown after a delay
    }, 300); // Adjust the delay time (300ms in this case)
    setDropdownTimeout(timeout);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  return (
    <nav className="bg-black text-white sm:p-3 md:p-5 fixed top-0 z-50 w-full">
      <div className="mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center mr-2">
            <img
              src="https://i.ibb.co/nsLpJJNx/image-1.png"
              className="h-[40px] w-auto"
              alt="Logo"
            />
          </div>
        </Link>

        {/* Main Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            to="/"
            onClick={handleNavClick}
            className="hover:text-gray-400 transition duration-300"
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div className="group">
            <div
              className="flex relative items-center hover:text-gray-400 transition duration-300 cursor-pointer "
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/services" onClick={handleNavClick}>
                Services
              </Link>
              <MdExpandMore className="ml-1" />
            </div>
            {activeDropdown === "services" && (
              <div
                className="absolute left-0 w-full top-[70px] mt-2 flex gap-3 bg-[#c4d7ff] text-black p-6 shadow-lg"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div>
                  <img
                    src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512793/image_588254511_s0ehnn.png"
                    alt="img"
                    className="h-auto w-[800px]"
                  />
                </div>
                <div>
                  <h2 className="text-4xl font-semibold mb-1 leading-9">
                    Services <br />
                    Empowering your business with expert solutions.
                  </h2>
                  <div className="grid grid-cols-4 gap-4">
                    <Link
                      to="/web-development-company-in-noida"
                      onClick={handleNavClick}
                      className="p-2 bg-white  text-gray-800 hover:bg-[#1AD079] hover:text-white hover:shadow-lg transition duration-300 rounded-lg flex gap-2"
                    >
                      <div className="h-auto w-[100px] mt-2">
                        <img
                          src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512810/Group_1171275282_uif7lm.png"
                          alt="product"
                          className=""
                        />
                      </div>
                      <div className="">
                        <h4 className="font-semibold text-lg">
                          Web Development
                        </h4>
                        <p className="text-[11px] ">
                          Delivering responsive and dynamic websites tailored to
                          your business needs, ensuring seamless user
                          experiences and optimal performance.
                        </p>
                      </div>
                    </Link>
                    <Link
                      to="/app-development-company-in-noida"
                      onClick={handleNavClick}
                      className="p-2 bg-white text-gray-800 hover:bg-[#1AD079] hover:text-white hover:shadow-lg transition flex duration-300 rounded-lg"
                    >
                      <div className="h-auto w-[100px] mt-2">
                        <img
                          src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512809/_x31_77_x2C__frontend_x2C__interface_x2C__mobile_x2C__phone_x2C__developer_te3dhz.png"
                          alt="maxify websolution"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">
                          App Development
                        </h4>
                        <p className="text-[11px] ">
                          Custom mobile app solutions for Android and iOS,
                          designed to enhance engagement and drive business
                          growth.
                        </p>
                      </div>
                    </Link>
                    <Link
                      onClick={handleNavClick}
                      to="/graphic"
                      className="p-2 bg-white text-gray-800 hover:bg-[#1AD079] hover:text-white hover:shadow-lg transition duration-300 flex rounded-lg"
                    >
                      <div className="h-auto w-[100px] mt-2">
                        <img
                          src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512792/Group_thna7x.png"
                          alt="maxify websolution"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">
                          Graphic Design
                        </h4>
                        <p className="text-[11px] ">
                          Creative design solutions, from logos to marketing
                          collateral, ensuring your brand stands out with
                          professional visuals.
                        </p>
                      </div>
                    </Link>
                    <Link
                      onClick={handleNavClick}
                      to="/3d-modeling-agency-in-noida"
                      className="p-2 bg-white text-gray-800 hover:bg-[#1AD079] hover:text-white hover:shadow-lg transition duration-300 flex rounded-lg"
                    >
                      <div className="h-auto w-[100px] mt-2">
                        <img
                          src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512821/Group_1171275285_kj87kb.png"
                          alt="maxify websolution"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">3D Modeling</h4>
                        <p className="text-[11px] ">
                          Innovative 3D modeling and animations that bring your
                          ideas to life, perfect for presentations, product
                          demos, and more.
                        </p>
                      </div>
                    </Link>

                    {/* Second Row of 4 Boxes */}
                    <Link
                      onClick={handleNavClick}
                      to="/seo-company-in-noida"
                      className="p-2 bg-white text-gray-800 hover:bg-[#1AD079] hover:text-white hover:shadow-lg transition duration-300 flex rounded-lg"
                    >
                      <div className="h-auto w-[100px] mt-2">
                        <img
                          src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512810/Group_1171275284_gzfz45.png"
                          alt="maxify websolution"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">SEO</h4>
                        <p className="text-[11px] ">
                          Enhancing your brand’s presence on social platforms
                          with creative and engaging content to drive
                          interaction and growth.
                        </p>
                      </div>
                    </Link>
                    <Link
                      onClick={handleNavClick}
                      to="/digital-marketing-agency-noida"
                      className="p-2 bg-white text-gray-800 hover:bg-[#1AD079] hover:text-white hover:shadow-lg transition duration-300 flex rounded-lg"
                    >
                      <div className="h-auto w-[100px] mt-2">
                        <img
                          src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512791/Group_1171275296_t6d3ot.png"
                          alt="maxify websolution"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">
                          Digital Marketing
                        </h4>
                        <p className="text-[11px] ">
                          Comprehensive strategies combining SEO, PPC, and
                          content marketing to boost your online presence and
                          conversions.
                        </p>
                      </div>
                    </Link>
                    <Link
                      onClick={handleNavClick}
                      to="/social-media-agency-in-noida"
                      className="p-2 bg-white text-gray-800 hover:bg-[#1AD079] hover:text-white hover:shadow-lg transition duration-300 flex rounded-lg"
                    >
                      <div className="h-auto w-[100px] mt-2">
                        <img
                          src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512792/Group-1_ukuldn.png"
                          alt="maxify websolution"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">SMO</h4>
                        <p className="text-[11px] ">
                          Enhancing your brand’s presence on social platforms
                          with creative and engaging content to drive
                          interaction and growth.
                        </p>
                      </div>
                    </Link>
                    <Link
                      onClick={handleNavClick}
                      to="/hrms-software-development-company-in-noida"
                      className="p-2 bg-white text-gray-800 hover:bg-[#1AD079] hover:text-white hover:shadow-lg transition duration-300 flex rounded-lg"
                    >
                      <div className="h-auto w-[100px] mt-2">
                        <img
                          src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512791/Group_1171275292_fy8jmy.png"
                          alt="maxify websolution"
                        />
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
            )}
          </div>

          {/* Industries Dropdown */}
          <div className="group">
            <div
              className="flex items-center hover:text-gray-400 transition duration-300 cursor-pointer"
              onMouseEnter={handleMouseEnterIn}
              onMouseLeave={handleMouseLeaveIn} // Toggle Industries dropdown
            >
              Industries
              <MdExpandMore className="ml-1" />
            </div>
            {activeDropdown === "industries" && (
              <div
                className="absolute left-0 w-full top-[70px] mt-2 flex gap-3 bg-[#c4d7ff] text-black p-6 shadow-lg"
                onMouseEnter={handleMouseEnterIn}
                onMouseLeave={handleMouseLeaveIn}
              >
                <div>
                  <img
                    src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512825/image_588254512_ozjavx.png"
                    alt="industries-img"
                    className="h-auto w-[800px]"
                  />
                </div>
                <div>
                  <div className="grid grid-cols-3 gap-4">
                    <Link
                      onClick={handleNavClick}
                      to="/healthcare"
                      className="p-2 bg-white text-gray-800 hover:bg-[#1AD079] hover:text-white hover:shadow-lg transition duration-300 rounded-lg flex gap-2"
                    >
                      <div className="h-auto w-[100px] mt-2">
                        <img
                          src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512823/Group_1171275300_toremg.png"
                          alt="Icon 1"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Healthcare</h4>
                        <p className="text-[11px]">
                          Our health care solutions focus on enhancing patient
                          engagement through secure portals, telemedicine apps,
                          and management systems that streamline operations
                          while ensuring compliance with health regulations.
                        </p>
                      </div>
                    </Link>
                    <Link
                      onClick={handleNavClick}
                      to="/education"
                      className="p-2 bg-white text-gray-800 hover:bg-[#1AD079] hover:text-white hover:shadow-lg transition duration-300 rounded-lg flex gap-2"
                    >
                      <div className="h-auto w-[100px] mt-2">
                        <img
                          src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512824/Group_1171275302_mktyz0.png"
                          alt="Icon 2"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Education</h4>
                        <p className="text-[11px]">
                          Our education technology services offer online
                          learning platforms, student management systems, and
                          engaging e-learning tools to facilitate effective
                          teaching and learning experiences.
                        </p>
                      </div>
                    </Link>
                    <Link
                      onClick={handleNavClick}
                      to="/realestate"
                      className="p-2 bg-white text-gray-800 hover:bg-[#1AD079] hover:text-white hover:shadow-lg transition duration-300 rounded-lg flex gap-2"
                    >
                      <div className="h-auto w-[100px] mt-2">
                        <img
                          src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512824/Group_1171275304_pqkqy7.png"
                          alt="Icon 3"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Real Estate</h4>
                        <p className="text-[11px]">
                          We create tailored solutions for real estate
                          businesses, including property listing websites and
                          CRM systems, enabling efficient management of
                          listings, leads, and client interactions.
                        </p>
                      </div>
                    </Link>

                    {/* Second Row of 3 Boxes */}
                    <Link
                      onClick={handleNavClick}
                      to="/banking"
                      className="p-2 bg-white text-gray-800 hover:bg-[#1AD079] hover:text-white hover:shadow-lg transition duration-300 rounded-lg flex gap-2"
                    >
                      <div className="h-auto w-[100px] mt-2">
                        <img
                          src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512826/Vector-1_oaxx9k.png"
                          alt="Icon 4"
                        />
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
                      onClick={handleNavClick}
                      to="/ecommerces"
                      className="p-2 bg-white text-gray-800 hover:bg-[#1AD079] hover:text-white hover:shadow-lg transition duration-300 rounded-lg flex gap-2"
                    >
                      <div className="h-auto w-[100px] mt-2">
                        <img
                          src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512826/Vector_k4qu9s.png"
                          alt="Icon 5"
                        />
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
            )}
          </div>

          <Link
            to="/contact"
            onClick={handleNavClick}
            className="hover:text-gray-400 transition duration-300"
          >
            Contact
          </Link>
          <Link
            to="/about"
            onClick={handleNavClick}
            className="hover:text-gray-400 transition duration-300"
          >
            About Us
          </Link>
        </div>

        {/* Contact and Quote Button */}
        <div className="hidden md:flex space-x-4 items-center">
          <div>
            <button
              className="bg-gradient-to-r from-purple-500 to-[#2334DE] px-4 py-2 rounded-sm hover:from-purple-600 hover:to-[#2334DE] transition duration-300"
              onClick={openModal}
            >
              Get A Quote
            </button>

            {isModalVisible && <NewsLatter onClose={closeModal} />}
          </div>
          <div className="flex items-center">
            <FaPhone className="mr-2 bg-[#2334DE] rounded-full text-white h-[35px] w-[35px] leading-[16px] p-2 text-[12px]" />
            <div>
              <p className="text-[11px]">Call Any Time</p>
              <p className="text-[13px] font-semibold">+91 7428 309 119</p>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={handleNavToggle}>
          {isOpen ? <FaTimes /> : <FaBars />}{" "}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 overflow-scroll h-full w-full bg-black text-white transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col  text-lg p-4">
          <div className="flex justify-between sticky top-0 bg-black py-2">
            <Link to="/">
              <div className="flex items-center mr-2">
                <img
                  src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512504/image_1_uazqcb.png"
                  className="h-[40px] w-auto"
                  onClick={handlenavClick}
                  alt="Logo"
                />
              </div>
            </Link>
            <button className=" text-2xl" onClick={handleNavToggle}>
              {isOpen ? <FaTimes /> : <FaBars />}{" "}
            </button>
          </div>
          <Link
            to="/"
            onClick={handlenavClick}
            className="block border-b-[1px] py-4"
          >
            Home
          </Link>

          {/* Main Menu: Services */}
          <div className="">
            <button
              className="flex items-center justify-between w-full border-b-[1px] py-4"
              onClick={() => toggleDropdown("services")}
            >
              <Link to="/services" onClick={handlenavClick}>
                {" "}
                <span>Services</span>
              </Link>
              <MdExpandMore
                className={`ml-1 transform ${
                  activeDropdown === "services" ? "rotate-180" : ""
                }`}
              />
            </button>
            {activeDropdown === "services" && (
              <div className="grid grid-cols-1 gap-[0.6rem] mt-2 bg-gray-800 p-3 rounded-md">
                <Link
                  to="/web-development-company-in-noida"
                  onClick={handlenavClick}
                  className="flex items-center text-white hover:shadow-lg transition duration-300 rounded-lg"
                >
                  <img
                    src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512810/Group_1171275282_uif7lm.png"
                    alt="Web Development"
                    className="h-[2rem] w-[2rem] mr-4"
                  />
                  <div>
                    <h4 className="font-[500] text-base">Web Development</h4>
                    <p className="text-[12px] leading-4">
                      Delivering responsive and dynamic websites tailored to
                      your business needs.
                    </p>
                  </div>
                </Link>
                <Link
                  to="/app-development-company-in-noida"
                  onClick={handlenavClick}
                  className="flex items-center text-white hover:shadow-lg transition duration-300 rounded-lg"
                >
                  <img
                    src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512809/_x31_77_x2C__frontend_x2C__interface_x2C__mobile_x2C__phone_x2C__developer_te3dhz.png"
                    alt="App Development"
                    className="h-[2rem] w-[2rem] mr-4 nav-icon"
                  />
                  <div>
                    <h4 className="font-[500] text-base">App Development</h4>
                    <p className="text-[12px] leading-4">
                      Custom mobile app solutions for Android and iOS.
                    </p>
                  </div>
                </Link>
                <Link
                  to="/graphic"
                  onClick={handlenavClick}
                  className="flex items-center text-white hover:shadow-lg transition duration-300 rounded-lg"
                >
                  <img
                    src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512792/Group_thna7x.png"
                    alt="Graphic Design"
                    className="h-[2rem] w-[2rem] mr-4 nav-icon"
                  />
                  <div>
                    <h4 className="font-[500] text-base">Graphic Design</h4>
                    <p className="text-[12px] leading-4">
                      Creative design solutions to make your brand stand out.
                    </p>
                  </div>
                </Link>
                <Link
                  to="/3d-modeling-agency-in-noida"
                  onClick={handlenavClick}
                  className="flex items-center text-white hover:shadow-lg transition duration-300 rounded-lg"
                >
                  <img
                    src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512821/Group_1171275285_kj87kb.png"
                    alt="3D Modeling"
                    className="h-[2rem] w-[2rem] mr-4"
                  />
                  <div>
                    <h4 className="font-[500] text-base">3D Modeling</h4>
                    <p className="text-[12px] leading-4">
                      Transforming ideas into realistic 3D designs for various
                      industries.
                    </p>
                  </div>
                </Link>
                <Link
                  to="/seo-company-in-noida"
                  onClick={handlenavClick}
                  className="flex items-center text-white hover:shadow-lg transition duration-300 rounded-lg"
                >
                  <img
                    src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512810/Group_1171275284_gzfz45.png"
                    alt="SEO"
                    className="h-[2rem] w-[2rem] mr-4 nav-icon"
                  />
                  <div>
                    <h4 className="font-[500] text-base">SEO</h4>
                    <p className="text-[12px] leading-4">
                      Boosting website visibility and driving organic traffic.
                    </p>
                  </div>
                </Link>
                <Link
                  to="/digital-marketing-agency-noida"
                  onClick={handlenavClick}
                  className="flex items-center text-white hover:shadow-lg transition duration-300 rounded-lg"
                >
                  <img
                    src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512791/Group_1171275296_t6d3ot.png"
                    alt="Digital Marketing"
                    className="h-[2rem] w-[2rem] mr-4"
                  />
                  <div>
                    <h4 className="font-[500] text-base">Digital Marketing</h4>
                    <p className="text-[12px] leading-4">
                      Crafting tailored strategies for online brand growth.
                    </p>
                  </div>
                </Link>
                <Link
                  to="/social-media-agency-in-noida"
                  onClick={handlenavClick}
                  className="flex items-center text-white hover:shadow-lg transition duration-300 rounded-lg"
                >
                  <img
                    src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512792/Group-1_ukuldn.png"
                    alt="SMO"
                    className="h-[2rem] w-[2rem] mr-4 nav-icon"
                  />
                  <div>
                    <h4 className="font-[500] text-base">SMO</h4>
                    <p className="text-[12px] leading-4">
                      Maximizing social media presence for enhanced engagement.
                    </p>
                  </div>
                </Link>
                <Link
                  to="/hrms-software-development-company-in-noida"
                  onClick={handlenavClick}
                  className="flex items-center text-white hover:shadow-lg transition duration-300 rounded-lg"
                >
                  <img
                    src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512791/Group_1171275292_fy8jmy.png"
                    alt="HRMS"
                    className="h-[2rem] w-[2rem] mr-4 nav-icon"
                  />
                  <div>
                    <h4 className="font-[500] text-base">HRMS</h4>
                    <p className="text-[12px] leading-4">
                      Streamlining HR operations with modern management systems.
                    </p>
                  </div>
                </Link>

                {/* Add more submenu links for Services here */}
              </div>
            )}
          </div>

          {/* Main Menu: Industries */}
          <div>
            <button
              className="flex items-center justify-between w-full border-b-[1px] py-4"
              onClick={() => toggleDropdown("industries")}
            >
              <span>Industries</span>
              <MdExpandMore
                className={`ml-1 transform ${
                  activeDropdown === "industries" ? "rotate-180" : ""
                }`}
              />
            </button>
            {activeDropdown === "industries" && (
              <div className="grid grid-cols-1 gap-4 mt-2 bg-gray-800 p-3 rounded-md">
                <Link
                  to="/healthcare"
                  onClick={handlenavClick}
                  className="flex items-center text-white hover:shadow-lg transition duration-300 rounded-lg"
                >
                  <img
                    src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512823/Group_1171275300_toremg.png"
                    alt="HRMS"
                    className="h-[2rem] w-[2rem] mr-4 nav-icon"
                  />
                  <div>
                    <h4 className="font-[500] text-base">Healthcare</h4>
                    <p className="text-[12px] leading-4">
                      Our health care solutions focus on enhancing patient
                      engagement through secure portals
                    </p>
                  </div>
                </Link>
                <Link
                  to="/education"
                  onClick={handlenavClick}
                  className="flex items-center text-white hover:shadow-lg transition duration-300 rounded-lg"
                >
                  <img
                    src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512823/Group_1171275300_toremg.png"
                    alt="HRMS"
                    className="h-[2rem] w-[2rem] mr-4 nav-icon"
                  />
                  <div>
                    <h4 className="font-[500] text-base">Education</h4>
                    <p className="text-[12px] leading-4">
                      Our education technology services offer online learning
                      platforms
                    </p>
                  </div>
                </Link>
                <Link
                  to="/realestate"
                  onClick={handlenavClick}
                  className="flex items-center text-white hover:shadow-lg transition duration-300 rounded-lg"
                >
                  <img
                    src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512824/Group_1171275304_pqkqy7.png"
                    alt="realestate"
                    className="h-[2rem] w-[2rem] mr-4 nav-icon"
                  />
                  <div>
                    <h4 className="font-[500] text-base">Real Estate</h4>
                    <p className="text-[12px] leading-4">
                      We create tailored solutions for real estate businesses
                    </p>
                  </div>
                </Link>
                <Link
                  to="/banking"
                  onClick={handlenavClick}
                  className="flex items-center text-white hover:shadow-lg transition duration-300 rounded-lg"
                >
                  <img
                    src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512826/Vector-1_oaxx9k.png"
                    alt="realestate"
                    className="h-[2rem] w-[2rem] mr-4 nav-icon"
                  />
                  <div>
                    <h4 className="font-[500] text-base">Banking</h4>
                    <p className="text-[12px] leading-4">
                      We develop secure banking solutions, including mobile
                      banking apps and online platforms
                    </p>
                  </div>
                </Link>
                <Link
                  to="/ecommerces"
                  onClick={handlenavClick}
                  className="flex items-center text-white hover:shadow-lg transition duration-300 rounded-lg"
                >
                  <img
                    src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512826/Vector_k4qu9s.png"
                    alt="realestate"
                    className="h-[2rem] w-[2rem] mr-4 nav-icon"
                  />
                  <div>
                    <h4 className="font-[500] text-base">E-Commerce</h4>
                    <p className="text-[12px] leading-4">
                      We develop robust e-commerce platforms that provide
                      seamless shopping experiences
                    </p>
                  </div>
                </Link>
                {/* Add more submenu links for Industries here */}
              </div>
            )}
          </div>

          {/* Main Menu: Contact */}
          <Link
            to="/contact"
            onClick={handlenavClick}
            className="block border-b-[1px] py-4"
          >
            Contact
          </Link>

          {/* Main Menu: About Us */}
          <Link to="/about" onClick={handlenavClick} className="block  py-4">
            About Us
          </Link>

          {/* Get a Quote Button */}
          <div>
            <button
              className="bg-gradient-to-r from-purple-500 to-[#2334DE] px-4 py-2 rounded-sm hover:from-purple-600 hover:to-[#2334DE] transition duration-300"
              onClick={openModal}
            >
              Get A Quote
            </button>
            {isModalVisible && <NewsLatter onClose={closeModal} />}
          </div>

          {/* Contact Info */}
          <div className="flex items-center justify-left mt-4">
            <FaPhone />
            <span className="ml-2">+91 7428 309 119</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
