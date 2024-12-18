import React, { useState } from "react";
import { BiX } from "react-icons/bi";
import { IoMailOpenOutline } from "react-icons/io5";

const NewsLatter = ({ onClose }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription here
    console.log("Subscribing email:", email);
    onClose();
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full md:w-[60%] lg:w-[40%] relative">
        <button
          onClick={onClose}
          className="absolute right-2 top-2 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close"
        >
          <BiX className="h-6 w-6" />
        </button>
        <div className="p-6">
          <div className="flex justify-center mb-6">
            <IoMailOpenOutline className="h-40 w-40 text-[#2334DE]" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-center mb-2 text-black">
            Subscribe To Our Newsletter
          </h3>
          <p className="text-center text-sm md:text-base text-gray-500 mb-6">
            Join our subscribers list to get the latest news, updates and
            special offers delivered directly in your inbox.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-2 md:gap-0 "
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 text-gray-950 px-4 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-gray-300 focus:border-[1px]"
            />
            <button
              className=" px-6 py-2 rounded-sm relative text-[white] bg-[#2334DE] isolation-auto z-10 border-2 border-[#2334DE]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[white] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-[#2334DE]"
            >
              Subcribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLatter;
