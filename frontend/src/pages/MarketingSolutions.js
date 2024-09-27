import React, { useState } from "react";
import img2 from "../Assets/image 339.png";
import img3 from "../Assets/image 340.png";
import img4 from "../Assets/image 341.png";
import img5 from "../Assets/image 342.png";
import img6 from "../Assets/m1.png";
import img7 from "../Assets/m2.png";
import { HiUserGroup } from "react-icons/hi";
import { FaCheckCircle, FaFileAlt, FaHandHoldingHeart } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

const MarketingSolutions = () => {
  const progressData = [
    {
      percentage: "88",
      title: "Completed Project",
    },
    {
      percentage: "98",
      title: "Fincial Skill",
    },
    {
      percentage: "98",
      title: "Relaible & Hardworking",
    },
  ];
  const steps = [
    {
      title: "Enhanced Consumer Involvement",
      description:
        "Interactive 3D material and experiences captivate target markets and encourage longer involvement.",
      side: "right",
    },
    {
      title: "Improved Item Visualization",
      description:
        "3D versions and computer animations assist customers in better recognizing your product or services.",
      side: "left",
    },
    {
      title: "Greater Conversion Fees",
      description:
        "Engaging 3D visuals can bring about greater conversion rates and enhanced sales.",
      side: "right",
    },
    {
      title: "Brand Distinction",
      description:
        "Stick Out from the competition with one-of-a-kind and cutting-edge 3D advertising and marketing techniques.",
      side: "left",
    },
    {
      title: "Future-Ready Advertising and Marketing",
      description:
        "Remain ahead of the curve with cutting-edge 3D and AR/VR solutions.",
      side: "right",
    },
  ];
  const [currentIndex1, setCurrentIndex1] = useState(0);
  return (
    <div className="mt-14">
      {/* 1st section */}
      <div className="flex lg:flex-row sm:flex-col-reverse sm:w-[100%] md:w-[90%] mx-auto py-7 border-t-[2px] border-black">
        <div className="lg:w-1/2 sm:w-full items-start flex flex-col p-6">
          <img src={img2} alt="img2" />
          <div className="py-4 space-y-4 w-full">
            {progressData.map((percentages, index) => (
              <div key={index} className="w-full max-w-lg mb-6">
                <div className="flex justify-between mb-1">
                  <p className="text-sm text-[#41246d]">{percentages.title}</p>
                  <span className="text-sm font-semibold">
                    {percentages.percentage}%
                  </span>
                </div>
                <div className="relative w-full h-[3px] bg-gray-200 rounded-full">
                  <div
                    className="absolute top-0 left-0 h-[3px] rounded-full bg-[#41246d]"
                    style={{ width: `${percentages.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-row bg-background rounded-lg ">
            <div className="flex-1 p-4">
              <div className="flex items-center mb-2">
                <div>
                  <HiUserGroup size={25} className="text-[#2334DE]" />
                </div>
                <h2 className="text-[15px] ml-1 font-bold">
                  Experience and Technology:
                </h2>
              </div>
              <p className="text-[12px] text-justify">
                Our group of knowledgeable 3D designers and animators brings
                creativity and technical competence to every job.
              </p>
            </div>
            <div className="flex-1 p-4">
              <div className="flex items-center mb-2">
                <div>
                  <FaHandHoldingHeart size={25} className="text-[#2334DE]" />
                </div>{" "}
                <h2 className="text-[15px] ml-1 font-bold">
                  Customized Solutions:
                </h2>
              </div>
              <p className="text-[12px] text-justify">
                We understand that every business is distinct, and we produce
                tailored 3D versions and advertising and marketing options that
                line up with your goals.
              </p>
            </div>
          </div>

          <div className="text-center mt-4">
            {/* <button
              className="ml-2 text-base rounded-full relative px-8 py-2 text-[#2334DE] bg-none isolation-auto z-10 border-2 border-[#2334DE]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[#2334DE] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-white"
            >
              MORE ABOUT US
            </button> */}
          </div>
        </div>
        <div className="lg:w-1/2 sm:w-full flex flex-col gap-4 p-6 ">
          <h3 className="text-[#2334DE] text-center font-semibold md:text-[35px] sm:text-[1px] ">
            Advanced 3D Modeling and 3D Advertising And Marketing Solutions
          </h3>
          <p className="text-sm text-justify">
            In the digital period, companies are constantly seeking innovative
            means to involve their audience and attract attention to the market.
            At Maxify Solution, we offer sophisticated online 3D modeling and 3D
            advertising and marketing services to assist organizations create
            immersive, interactive, and impactful experiences. As a leading 3D
            Advertising and marketing Firm, we utilize the power of 3D
            technology to change your digital visibility and increase
            engagement.
          </p>
          <img className="rounded-xl" src={img3} alt="" />
        </div>
      </div>
      {/* 2nd section */}

      <div className="flex flex-col lg:flex-row items-center justify-between bg-white md:py-12 sm:py-0">
        {/* Image Section */}
        <div className="lg:w-1/2 w-full flex justify-center relative">
          <div className="">
            <img
              src={img5}
              alt="3D Modeling"
              className="rounded-lg shadow-md sm:h-[20rem] md:h-full"
            />
            <img
              src={img4}
              alt="3D Overlay"
              className="absolute top-[15%] left-0 w-[50%] border-4 border-white rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 w-full px-6 mt-10 lg:mt-0">
          <h3 className="text-sm text-gray-500 font-semibold mb-4">
            Our 3D Services
          </h3>
          <h2 className="text-[#0F0F0F] md:text-[25px] sm:text-[18px] font-normal mb-6">
            <span className="text-[#2334DE]"> Maxify </span>Option offers a
            large variety of
            <span> </span>
            <span className="text-[#2334DE] underline">
              3D services to deal with numerous company demands
            </span>
            . Our services consist of:
          </h2>

          <div>
            <h4 className="text-xl font-bold mb-4">1. Online 3D Modeling</h4>
            <p className="text-gray-600 mb-4">
              3D modeling is the structure of any type of 3D project, enabling
              you to visualize complicated principles and concepts genuinely.
              Our on-the-internet 3D modeling services are made to produce
              spectacular and exact 3D versions that enhance your electronic
              possessions.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>
                Product Modeling: Premium 3D designs of items for shopping,
                advertising, and advertising purposes.
              </li>
              <li>
                Building Modeling: Detailed 3D models of genuine estate,
                architecture, and interior design projects.
              </li>
              <li>
                Personality Modeling: Realistic and elegant 3D character designs
                for video games, animations, and virtual reality applications.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* 3rd section */}

      <div>
        <section className="bg-gradient-to-r from-[#f5f5f5] to-[#e0e0ff] sm:p-2 md:p-8 mt-4">
          <div className="w-[100%] mx-auto md:w-[90%] lg:w-[90%]">
            {/* First Section: Left Content, Right Image */}
            <div className="flex flex-col lg:flex-row justify-between items-center">
              {/* Left Content */}
              <div className="lg:w-1/2 text-center lg:text-left">
                <p className="text3d font-bold text-xl">Our 3D</p>
                <h1 className="m-s-h mt-2 sm:text-[20px] md:text-[36px] font-semibold">
                  Advancement Refine
                </h1>
                <p className="text-[#504E4E] sm:text-sm md:text-base mt-4 sm:mx-5 lg:mx-0 text-justify">
                  At Maxify Remedy, we adhere to an organized and client-focused
                  technique to guarantee that every 3D project delivers the
                  desired results.
                </p>
              </div>

              {/* Right Image */}
              <div className="lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0">
                <div className="relative inline-block rounded-full p-[4px] bg-gradient-to-r from-[#b300ff] to-[#2334DE]">
                  <img
                    src={img7} // replace with actual image
                    alt="SMO Icon"
                    className="rounded-full w-full h-full block"
                  />
                </div>
              </div>
            </div>

            {/* Second Section: Left Image, Right Content */}
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center mt-8">
              {/* Left Image */}
              <div className="lg:w-1/2 flex justify-center py-2 lg:justify-start">
                <img
                  src={img6} // replace with actual image
                  alt="Social Media Icons"
                  className="h-[50%] w-auto rounded-full border-r-[4px] border-[#2334DE]"
                />
              </div>

              {/* Right Content */}
              <div className="lg:w-1/2 text-center lg:text-left mt-6 lg:mt-0">
                <h1 className="m-s-h mt-2 sm:text-[20px] md:text-[36px] font-semibold">
                  Step 1: Discovery and Preparation
                </h1>
                <p className="text-[#504E4E] sm:text-sm md:text-base mt-4 sm:mx-5 lg:mx-0 text-justify">
                  We start by learning more about your target audience, job
                  requirements, and organizational goals. This step involves
                  conceptualizing sessions, principle growth, and creating a
                  task roadmap.
                </p>
              </div>
            </div>
            <div className="flex justify-end mt-8">
              <button className="bg-gradient-to-l from-[#077EEC] to-[#BD21FC] text-white py-2 px-6 rounded-full hover:bg-[#2334DE] transition duration-300">
                MORE ABOUT US
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* 4rth section */}

      <div className="bg-white sm:p-2 md:p-8 flex sm:flex-col lg:flex-row items-center mt-10 w-[90%] mx-auto">
        <div className="lg:w-1/2 space-y-5 sm:flex md:block justify-center flex-col items-center sm:text-center md:text-left">
          <h3 className="text-[#2334DE] uppercase tracking-wider mb-2">
            Consulting Excellence
          </h3>
          <h1 className="text-3xl md:text-[38px] sm:text-[25px] leading-12 yantramanav-bold font-bold mb-4">
            Benefits of <br />
            <span className="text-[#2334DE]">3D Solutions </span>
            for Your Company
          </h1>
          <ul className="space-y-4 mb-8">
            {steps.map((step) => (
              <li
                key={step.id}
                className="flex items-center sm:text-sm text-gray-800 cursor-pointer"
              >
                <FaCheckCircle className="text-[#2334DE] mr-4" />
                {step.title}
              </li>
            ))}
          </ul>
          <button
            className="mt-8 flex items-center relative px-8 py-2 text-[#2334DE] rounded-md bg-white isolation-auto z-10 border-2 border-[#2334DE]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[#2334DE] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-white"
          >
            Learn More{" "}
            <span className="ml-2">
              <GoArrowRight />
            </span>
          </button>
        </div>
        <div className="lg:w-1/2 mt-6">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300"></div>

            {steps.map((step, index) => (
              <div key={index} className="mb-6 flex w-full">
                {/* Left Side Content */}
                <div
                  className={`w-1/2 ${
                    step.side === "right" ? "text-right pr-8" : "text-left"
                  }`}
                >
                  {step.side === "left" && (
                    <div className="bg-[#f3f6fd] p-2">
                      <h3 className="font-semibold  text-[14px] text-center">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-[12px] text-justify mt-2">
                        {step.description}
                      </p>
                    </div>
                  )}
                </div>

                {/* Step Number */}
                <div className="relative flex justify-center w-12">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#f3f6fd] text-[#2334DE] font-bold rounded-full">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* Right Side Content */}
                <div
                  className={`w-1/2 ${
                    step.side === "left" ? "text-right pr-8" : "text-left"
                  }`}
                >
                  {step.side === "right" && (
                    <div className="bg-[#f3f6fd] p-2">
                      <h3 className="font-semibold text-[14px] text-center">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-[12px] text-justify mt-2">
                        {step.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingSolutions;
