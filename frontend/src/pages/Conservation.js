import React from "react";
import img1 from "../Assets/image (7).png";
import img2 from "../Assets/image (5).png";
import img3 from "../Assets/image (6).png";
import img4 from "../Assets/Group 427320839.png";
import img5 from "../Assets/Group 427320840.png";
import img6 from "../Assets/Group 427320841.png";
import img7 from "../Assets/image (311).png";
import img8 from "../Assets/image (8).png";
import img9 from "../Assets/Rectangle 4601.png";
import img10 from "../Assets/Group.png";
import img11 from "../Assets/image (9).png";
import img12 from "../Assets/blog post img.png";
import img13 from "../Assets/blog post img (1).png";
import img14 from "../Assets/blog post img (2).png";
import img15 from "../Assets/Group 164461.png";
import { BsTelephoneFill } from "react-icons/bs";
import { BsArrowUpRight } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { FiArrowUpRight } from "react-icons/fi";
import { IoMail } from "react-icons/io5";
const Conservation = () => {
  return (
    <div className="mt-[70px]">
      <div className="flex flex-col lg:flex-row sm:p-2 md:p-6 bg-background rounded-lg h-full  sm:w-full md:w-[90%] lg:w-[80%] mx-auto">
        <div className="lg:w-[35%] sm:w-full p-4">
          <img
            src={img1}
            alt="Team meeting"
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
        <div className="lg:w-[65%] py-5 px-2 flex flex-col justify-around h-{100%} ">
          {/* <h2 className="text-lg text-[#6C6A72]">Who We Are:</h2> */}
          <h3 className=" font-semibold sm:text-4xl md:text-5xl">
            <span className="text-[#2334DE] font-bold">
              Let’s Start a Conversation:{" "}
            </span>
            We’re Here to Help Your Business Thrive
          </h3>
          <p className="mt-4 text-base leading-9 text-justify text-[#6C6A72]">
            At Maxify Solutions, we believe that great partnerships start with a
            simple conversation. Whether you’re ready to elevate your digital
            presence, optimize your website, or launch a targeted marketing
            campaign, we’re here to assist you every step of the way. Contact Us
            today to explore how our expertise in Digital Marketing, Website
            Development, SEO, SMO, and PPC Ads can help your business achieve
            new heights.
          </p>
          <div className=" md:flex justify-end gap-5">
            <p className="flex items-center gap-1 text-[#6C6A72]">
              <span className="bg-[#e2e2fa] text-[#2334DE] rounded-full h-10 w-10 flex items-center justify-center">
                <BsTelephoneFill />
              </span>{" "}
              +91 742 830 9119
            </p>
            <p className="flex items-center gap-1 text-[#6C6A72]">
              <span className="bg-[#e2e2fa] text-[#2334DE] rounded-full h-10 w-10 flex items-center justify-center">
                <BiLogoTelegram />
              </span>{" "}
              support@maxifysolution.com
            </p>
          </div>
        </div>
      </div>

      {/* section */}
      <div className="bg-con">
        <div className="mt-10 px-6 sm:w-full md:w-[90%] lg:w-[80%] mx-auto">
          {/* Title */}
          <h2 className="text-center text-[#2334DE] text-4xl font-bold mb-8">
            Why Reach Out To Maxify Solutions?
          </h2>

          {/* First Row */}
          <div className="flex flex-col lg:flex-row items-center gap-6 mb-6 border">
            {/* Text Content (60%) */}
            <div className="lg:w-[70%] bg-whiterounded-lg shadow-md flex bg-white">
              <div className="p-4">
                <h3 className="text-[#2334DE] font-semibold text-xl mb-2">
                  Customized Solutions For Every Business
                </h3>
                <p className="text-gray-600 text-sm leading-7">
                  At Maxify Solutions, we take the time to understand your
                  unique challenges and goals. Our team of experts will work
                  closely with you to create customized strategies that deliver
                  measurable results. Reach Us today to discover how we can
                  tailor our services to meet your specific needs.
                </p>
                <div className="h-10 w-10 bg-[#F26B01] text-[white] text-base flex justify-center items-center rounded-full">
                  <BsArrowUpRight />
                </div>
              </div>
              <img
                src={img2}
                alt="How to Reach Us"
                className="  h-[230px] sm:hidden md:block w-auto"
              />
            </div>

            {/* Image (40%) */}
            <div className="lg:w-[30%] sm:w-full bg-white p-6 rounded-lg shadow-md h-[100%]">
              <h3 className="text-[#2334DE] font-semibold text-xl mb-2">
                Expert Guidance from Industry Leaders
              </h3>
              <p className="text-gray-600 text-sm">
                Maxify Solutions has established itself as a leader in the
                digital marketing and web development industry.
              </p>
              <div className="h-10 w-10 mt-2 bg-[black] text-[white] text-base flex justify-center items-center rounded-full">
                <BsArrowUpRight />
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-6 mb-6">
            {/* Image (40%) */}
            <div className="lg:w-[30%] sm:w-full bg-white p-6 rounded-lg h-auto shadow-md">
              <h3 className="text-[#2334DE] font-semibold text-xl mb-2">
                Quick and Easy Communication
              </h3>
              <p className="text-gray-600 text-sm">
                We value your time and understand the importance of quick and
                efficient communication.
              </p>
              <div className="h-10 w-10 mt-2 bg-[black] text-[white] text-base flex justify-center items-center rounded-full">
                <BsArrowUpRight />
              </div>
            </div>

            {/* Text Content (60%) */}
            <div className="lg:w-[70%] sm:w-full bg-whiterounded-lg shadow-md flex justify-between bg-white">
              <div className="p-4">
                <h3 className="text-[#2334DE] font-semibold text-xl mb-2">
                  How to Reach Us:
                </h3>
                <p className="text-gray-600 text-sm leading-7">
                   Multiple Channels, One Goal—Your Success{" "}
                </p>
                <div className="h-10 w-10 mt-2 bg-[black] text-[white] text-base flex justify-center items-center rounded-full">
                  <BsArrowUpRight />
                </div>
              </div>
              <img
                src={img3}
                alt="How to Reach Us"
                className="  h-[200px] sm:hidden md:block w-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3rd */}
      <div className="flex flex-col md:flex-row items-center p-3 bg-background rounded-lg mx-auto sm:w-full md:w-[94%] lg:w-[80%]">
        {/* Left side content */}
        <div className="md:w-1/2">
          {/* <span className="text-sm bg-[#e5e5ff] text-[#2334DE] rounded px-3 py-1">
            Why
          </span> */}
          <h1 className="sm:text-4xl md:text-6xl font-semibold text-[black] mt-4">
            Customized Solutions for Every Business
          </h1>
          <p className="mt-4 text-base text-gray-500 leading-7 text-justify">
            At Maxify Solutions, we take the time to understand your unique
            challenges and goals. Our team of experts will work closely with you
            to create customized strategies that deliver measurable results.
            Reach Us today to discover how we can tailor our services to meet
            your specific needs.
          </p>
          <button
            className="mt-8 py-2 text-sm md:text-[14px] font-[300] px-6 rounded-full relative text-[white] bg-[black] isolation-auto z-10 border-2 border-[black]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[white] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-[black]"
          >
            Learn More
          </button>
        </div>

        {/* Right side with video */}
        <div className="md:w-1/2 mt-6 md:mt-0 relative flex sm:justify-center md:justify-end">
          <img src={img4} alt="" className="sm:w-full md:w-[70%]" />
        </div>
      </div>

      {/* 4th */}
      <div className="flex flex-col-reverse md:flex-row items-center p-3 bg-background rounded-lg mx-auto sm:w-full md:w-[94%] lg:w-[80%]">
        {/* Right side with video */}
        <div className="md:w-1/2 mt-6 md:mt-0 relative flex sm:justify-center md:justify-start">
          <img src={img5} alt="" className="sm:w-full md:w-[70%]" />
        </div>
        {/* Left side content */}
        <div className="md:w-1/2">
          {/* <span className="text-sm bg-[#e5e5ff] text-[black] rounded px-3 py-1">
            Why
          </span> */}
          <h1 className="sm:text-4xl md:text-6xl font-semibold text-[black] mt-4">
            Expert Guidance from Industry Leaders
          </h1>
          <p className="mt-4 text-base text-gray-500 leading-7 text-justify">
            Maxify Solutions has established itself as a leader in the digital
            marketing and web development industry. Our team of seasoned
            professionals is here to provide you with the expert guidance you
            need to succeed online. Whether you’re looking for advice on SEO,
            SMO, or PPC Ads, or need a comprehensive digital strategy, Send Your
            Enquiry to us, and we’ll provide the answers you’re looking for.{" "}
          </p>
          <button
            className="mt-8 py-2 text-sm md:text-[14px] font-[300] px-6 rounded-full relative text-[white] bg-[black] isolation-auto z-10 border-2 border-[black]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[white] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-[black]"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* 5th */}
      <div className="flex flex-col md:flex-row items-center p-3 bg-background rounded-lg mx-auto sm:w-full md:w-[94%] lg:w-[80%]">
        {/* Left side content */}
        <div className="md:w-1/2">
          {/* <span className="text-sm bg-[#e5e5ff] text-[#2334DE] rounded px-3 py-1">
            Why
          </span> */}
          <h1 className="sm:text-4xl md:text-6xl font-semibold text-[black] mt-4">
            Quick and Easy Communication
          </h1>
          <p className="mt-4 text-base text-gray-500 leading-7 text-justify">
            We value your time and understand the importance of quick and
            efficient communication. That’s why we’ve made it easy for you to
            Email Us or Send Your Enquiry through our user-friendly contact
            form. Our team is committed to responding to your queries promptly,
            ensuring that you get the support you need when you need it.{" "}
          </p>
          <button
            className="mt-8 py-2 text-sm md:text-[14px] font-[300] px-6 rounded-full relative text-[white] bg-[black] isolation-auto z-10 border-2 border-[black]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[white] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-[black]"
          >
            Learn More
          </button>
        </div>

        {/* Right side with video */}
        <div className="md:w-1/2 mt-6 md:mt-0 relative flex sm:justify-center md:justify-end">
          <img src={img6} alt="" className="sm:w-full md:w-[70%]" />
        </div>
      </div>

      {/*  */}
      <section className="bg-gradient-to-r from-[#edd6fb] to-[#adadff] p-8 mt-4">
        <div className="w-[100%] mx-auto md:w-[90%] lg:w-[80%]">
          {/* First Section: Left Content, Right Image */}
          <div className="flex flex-col lg:flex-row justify-between items-center">
            {/* Left Content */}
            <div className="lg:w-1/2 text-center lg:text-left flex flex-col items-center">
              <h1 className="text-5xl md:text-left font-semibold text-[#2334DE] mt-2">
                Contact Us via Phone
              </h1>
              <p className="text-[#504E4E] text-sm mt-4 leading-7">
                Prefer to speak with us directly? If you give us a call, one of
                our helpful staff members will be pleased to help you. We’re
                here to answer your questions, discuss your project, and help
                you explore the best solutions for your business.
              </p>
              <div className="text-end lg:text-left mt-8">
                <button className="bg-gradient-to-l relative from-[#077EEC] to-[#BD21FC] text-white py-2 px-8 rounded-full hover:bg-[#2334DE] transition duration-300">
                  <span className="absolute -left-2 h-9 w-9 rounded-full flex justify-center items-center bottom-1 bg-[white] text-[#2e40ff]">
                    <BsTelephoneFill />
                  </span>
                  +91 742 830 9119
                </button>
              </div>
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
            <div className="lg:w-1/2 py-3 flex justify-center lg:justify-start">
              <img
                src={img8} // replace with actual image
                alt="Social Media Icons"
                className="h-[70%] w-auto rounded-full border-r-[4px] border-[#2334DE]"
              />
            </div>

            {/* Right Content */}
            <div className="lg:w-1/2 text-center lg:text-left mt-6 lg:mt-0 flex flex-col items-center">
              <h1 className="text-5xl md:text-left font-semibold text-[#2334DE] mt-2">
                Email Us for Detailed Inquiries
              </h1>
              <p className="text-[#504E4E] text-sm mt-4 leading-7">
                Please email us if you have more specific questions or if you
                would rather communicate by letter. Whether you have questions
                about our services, need a quote, or want to discuss a potential
                collaboration, our team is ready to provide you with the
                information you need.
              </p>

              <div className="text-end lg:text-left mt-8">
                <button className="bg-gradient-to-l relative from-[#077EEC] to-[#BD21FC] text-white py-2 px-8 rounded-full hover:bg-[#2334DE] transition duration-300">
                  <span className="absolute -left-2 h-9 w-9 rounded-full flex justify-center items-center bottom-1 bg-[white] text-[#2e40ff]">
                    <IoMail />
                  </span>
                  support@maxifysolution.com
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <div className="bg-white p-6 rounded-lg flex flex-col lg:flex-row items-center mx-auto sm:w-full md:w-[90%] lg:w-[80%]">
        <div className="lg:w-1/2  flex sm:justify-center lg:justify-start">
          <img
            undefinedhidden="true"
            alt="Customer support team"
            src={img10}
            className=""
          />
        </div>
        <div className="lg:w-1/2 lg:pr-6">
          <h2 className="text-5xl font-bold text-[#2334DE] mb-4">
            Send Your Enquiry Online
          </h2>
          <p className="text-[#504E4E] text-sm leading-7 mb-6">
            Our online contact form is a convenient way to Send Your Enquiry
            directly to us. Simply fill out the form with your details, and
            we’ll get back to you as soon as possible. Whether you’re interested
            in Website Development, SEO, SMO, PPC Ads, or any of our other
            services, we’re here to help.
          </p>
        </div>
      </div>
      {/*  */}
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-6 mx-auto sm:w-full md:w-[90%] lg:w-[80%]">
        {/* Left Side: Image */}
        <div className="w-full md:w-3/5 flex justify-start mb-6 md:mb-0">
          <div className="relative">
            <img src={img9} alt="Checklist" className="rounded-lg" />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white h-[60px] w-[60px] flex justify-center items-center rounded-full shadow-lg">
                <button className="text-[#2334DE] text-base">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-2/5 bg-white p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-[#635AD9] mb-4">
            Get In Touch
          </h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 bg-blue-50 rounded-lg outline-none focus:ring-2 focus:ring-[#635AD9]"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 bg-blue-50 rounded-lg outline-none focus:ring-2 focus:ring-[#635AD9]"
            />
            <textarea
              placeholder="Write Message . . ."
              className="w-full p-3 bg-blue-50 rounded-lg outline-none focus:ring-2 focus:ring-[#635AD9]"
              rows="4"
            ></textarea>
          </div>
          <div className="flex items-center space-x-3 mt-4">
            <button className="bg-blue-100 px-4 py-2 rounded-full text-[#635AD9] font-semibold flex items-center">
              SEND MESSAGE
            </button>
            <div className="bg-[#635AD9] p-2 rounded-full text-white">
              <FiArrowUpRight className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-map">
        <div className="bg-[#635AD9] text-white text-[300] text-[12px] relative w-[280px] p-3 md:left-[60%] shadow-lg">
          <h2 className="text-sm font-semibold mb-4">Visit Our Office</h2>
          <p className=" mb-4">
            If you’re in the area and would like to meet us in person, we
            welcome you to visit our office. Let’s discuss your project over a
            cup of coffee and explore how we can work together to achieve your
            business goals.
          </p>
          <div className="flex items-center">
            <FiMapPin className="mr-2 " />
            <span className=" text-[12px]">
              F02, D42 Red Fm Road Sector 2 Block D Noida, Uttar Pradesh 201301
            </span>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="mt-8 p-2 text-white relative mx-auto sm:w-full md:w-[90%] lg:w-[80%]">
        <img src={img11} alt="" className="w-full h-auto" />
        <div
          className=" md:absolute p-6 sm:w-[100%] md:w-[60%] h-auto right-0 bottom-0 bg-gradient-to-tl to-[#430243] from-[black]"
          style={{ borderRadius: "20px 0px 20px 0px" }}
        >
          <h3 className="text-lg font-[600] mb-2">
            Our Commitment to You: Excellence in Every Interaction
          </h3>
          <p className="text-sm">
            At Maxify Solutions, our commitment to excellence extends beyond the
            services we offer. Our goal is to deliver outstanding customer
            service at every point of contact. When you Contact Us, you can
            expect:
          </p>
        </div>
      </div>

      {/* 2nd last */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-4 mx-auto sm:w-full md:w-[90%] lg:w-[80%]">
        <div className=" rounded-lg shadow-lg  flex-1">
          <img
            undefinedhidden="true"
            alt="Chat GPT"
            src={img12}
            className="rounded-t-lg object-cover w-full"
          />
          <div className="p-3">
            <h3 className="text-lg font-semibold mt-4 mb-3">Prompt Responses:</h3>
            <p className="text-sm">
              We know your time is valuable. So we make it a priority to respond
              to your inquiries quickly and efficiently.
            </p>
          </div>
        </div>
        <div className=" rounded-lg shadow-lg flex-1">
          <img
            undefinedhidden="true"
            alt="Clear Communication"
            src={img13}
            className="rounded-t-lg  object-cover w-full"
          />
          <div  className="p-3">
          <h3 className="text-lg font-semibold mt-4 mb-3">
            Clear Communication:
          </h3>
          <p className="text-sm">
            We’re here to make your experience as seamless as possible. We’ll
            provide clear, straightforward answers to your questions and keep
            you informed every step of the way.
          </p>
          </div>
        </div>
        <div className=" rounded-lg shadow-lg flex-1">
          <img
            undefinedhidden="true"
            alt="Dedicated Support"
            src={img14}
            className="rounded-t-lg  object-cover w-full"
          />
          <div  className="p-3">
          <h3 className="text-lg font-semibold mt-4 mb-3">Dedicated Support:</h3>
          <p className="text-sm">
            Our team is passionate about helping your business succeed. When you
            reach us, you’ll be connected with professionals who are dedicated
            to understanding your needs and delivering the best possible
            solutions.
          </p>
          </div>
        </div>
      </div>

          {/*  */}
          <div className=" p-6 rounded-lg flex flex-col lg:flex-row items-center mx-auto sm:w-full md:w-[90%] lg:w-[80%]">
      
        <div className="lg:w-1/2 lg:pr-6">
          <h2 className="text-5xl font-bold  mb-4">
          Ready to Take the Next Step? <span className="text-[#2334DE]"> Contact Us Today!</span>
          </h2>
          <p className="text-[#504E4E] text-sm leading-7 mb-6">
          One step will get you started on the path to digital success. Reach Us today, and let’s start working together to create a powerful online presence for your business. Whether you’re just starting out or looking to take your existing digital strategy to the next level, Maxify Solutions is here to help. Send Your Enquiry or Email Us now, and let’s begin a partnership that drives results.
          </p>
        </div>
        <div className="lg:w-1/2  flex sm:justify-center lg:justify-end">
          <img
            undefinedhidden="true"
            alt="Customer support team"
            src={img15}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Conservation;
