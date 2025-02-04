import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-[#070707] text-white py-10 mt-4 md:mt-[-270px] md:pt-[300px] p-8">
    <div className="max-w-8xl sm:px-2 md:px-0 mx-auto grid grid-cols-1 md:grid-cols-4 justify-self-end w-full">
      <div>
        <h3 className="font-semibold mb-4">Address</h3>
        <p className="text-sm mb-1 text-[#d4d4d4]">
          F02, D34 Red Fm Road Sector 2 Block D Noida, Uttar Pradesh 201301
        </p>
        <p className="text-sm mb-1 text-[#d4d4d4]">+91 7428 309 119</p>
        <p className="text-sm mb-1 text-[#d4d4d4]">
          support@maxifysolution.com
        </p>
      </div>
      <div className="hidden md:block">
        <h3 className="font-semibold mb-4">Services</h3>
        <ul>
          {[
            { name: 'App Development', href: '/app-development-company-in-noida' },
            { name: 'Web Development', href: '/web-development-company-in-noida' },
            { name: 'Digital Marketing', href: '/digital-marketing-agency-noida' },
            { name: 'Graphic Design', href: '/graphic' },
            { name: '3D Modeling', href: '/3d-modeling-agency-in-noida' },
            { name: 'SEO', href: '/seo-company-in-noida' },
            { name: 'SMO', href: '/social-media-agency-in-noida' },
            { name: 'HRMS', href: '/hrms-software-development-company-in-noida' },
          ].map((service) => (
            <li key={service.name} className="text-sm mb-1 text-[#d4d4d4] hover:text-white transition-colors">
              <Link to={service.href}>{service.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden md:block">
        <h3 className="font-semibold mb-4">Explore</h3>
        <ul>
          {[
            { name: 'About', href: '/about' },
            { name: 'Tools', href: '/services' },
            { name: 'Contact', href: '/conservation' },
            { name: 'Check SEO', href: '/conservation' },
          ].map((item) => (
            <li key={item.name} className="text-sm mb-1 text-[#d4d4d4] hover:text-white transition-colors">
              <Link to={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="sm:flex md:hidden gap-[100px]">
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul>
            <li className="text-sm mb-1 text-[#d4d4d4]">
              <Link href="/app-development-company-in-noida">App Development</Link>
            </li>
            <li className="text-sm mb-1 text-[#d4d4d4]">
              <Link href="/web-development-company-in-noida">Web Development</Link>
            </li>
            <li className="text-sm mb-1 text-[#d4d4d4]">
              <Link href="/digital-marketing-agency-noida">Digital Marketing</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Explore</h3>
          <ul>
            <li className="text-sm mb-1 text-[#d4d4d4]">
              <Link href="/about">About</Link>
            </li>
            <li className="text-sm mb-1 text-[#d4d4d4]">
              <Link href="/services">Services</Link>
            </li>
            <li className="text-sm mb-1 text-[#d4d4d4]">
              <Link href="/conservation">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="md:block">
        <h3 className="font-semibold mb-4">Connect With Us</h3>
        <div className="flex space-x-4 mb-6">
          {[
            { icon: FaFacebookF, href: 'https://www.facebook.com/share/1mfTEGhKUJXTNJZQ/' },
            { icon: FaLinkedinIn, href: 'https://www.linkedin.com/company/themaxify/' },
            { icon: FaInstagram, href: 'https://www.instagram.com/maxifywebsolutions/profilecard/?igsh=MXZranE1enVrOXZrMA==' },
            { icon: IoLogoYoutube, href: '#' },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black p-2 hover:bg-gray-200 transition-colors"
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>
        <div className="rounded-lg">
          <h4 className="text-sm font-semibold mb-2">Subscribe to Our Newsletter</h4>
          <form
            className="flex flex-col md:flex-row gap-2 md:gap-0 "
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 text-gray-950 px-4 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-gray-300 focus:border-[1px]"
            />
            <button
              className=" px-6 py-2 rounded-sm relative text-[white] bg-[#2334DE] isolation-auto z-10 border-2 border-[#2334DE]"
            >
              Subcribe
            </button>
          </form>
        </div>
      </div>
    </div>
    <div className="md:container mx-auto border-t border-white mt-4 p-4 flex flex-col sm:flex-row justify-between items-center">
      <p className="text-[14px]">© 2024 Maxify Web. All rights reserved.</p>
      <div className="flex space-x-4 text-[14px] mt-4 sm:mt-0">
        <Link href="/" className="hover:text-gray-300 transition-colors">Terms & Conditions</Link>
        <Link href="/" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
