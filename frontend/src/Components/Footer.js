import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-[#070707] text-white py-10 mt-4 md:mt-[-270px] md:pt-[300px]">
      <div className="md:container sm:px-2 md:px-0 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold mb-4">Address</h3>
          <p className="text-[13px] mb-1 text-[#d4d4d4]">
            F02, D42 Red Fm Road Sector 2 Block D Noida, Uttar Pradesh 201301
          </p>
          <p className="text-[13px] mb-1 text-[#d4d4d4]">+91 8905054141</p>
          <p className="text-[13px] mb-1 text-[#d4d4d4]">
            support@maxifysolution.com
          </p>
          <div className="flex space-x-4 mt-4">
            <div className="bg-white text-black p-2">
              <FaFacebookF size={18} />
            </div>
            <div className="bg-white text-black p-2">
              <FaXTwitter size={18} />
            </div>
            <div className="bg-white text-black p-2">
              <FaInstagram size={18} />
            </div>
            <div className="bg-white text-black p-2">
              <IoLogoYoutube size={18} />
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul>
            <li className="text-[13px] mb-1 text-[#d4d4d4]">
              <Link to="/app">App Development</Link>
            </li>
            <li className="text-[13px] mb-1 text-[#d4d4d4]">
              <Link to="/web">Web Development</Link>
            </li>
            <li className="text-[13px] mb-1 text-[#d4d4d4]">
              <Link to="/digitalmarketing">Digital Marketing</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Explore</h3>
          <ul>
            <li className="text-[13px] mb-1 text-[#d4d4d4]">
              <Link href="/about">About</Link>
            </li>
            <li className="text-[13px] mb-1 text-[#d4d4d4]">
              <Link to="/services">Services</Link>
            </li>
            <li className="text-[13px] mb-1 text-[#d4d4d4]">
              <Link to="/conservation">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Projects</h3>
          <div>
            <img src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512492/Group_1_iq6pv3.webp" alt="img" />
          </div>
        </div>
      </div>
      <div className="container mx-auto border-t border-white mt-4 p-4 flex justify-between">
        <p className="text-[14px]">© 2024 Maxify Web. All rights reserved.</p>
        <div className="flex space-x-4 text-[14px]">
          <Link to="/">Terms & Conditions</Link>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
