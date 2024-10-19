import React, { useEffect, useState } from "react";
import img1 from "../Assets/Healthcare/image 350.png";
import img2 from "../Assets/Healthcare/image 351.png";
import img3 from "../Assets/Healthcare/Container (11).webp";
import img4 from "../Assets/Healthcare/image.png";
import img5 from "../Assets/Healthcare/Vector.png";
import img6 from "../Assets/Healthcare/image (1).png";
import img7 from "../Assets/Healthcare/image (2).png";
import img8 from "../Assets/Healthcare/image (3).png";
import img9 from "../Assets/Healthcare/image (4).png";
import img10 from "../Assets/Healthcare/Mask group.png";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
const benifits = [
  {
    title: "Enhanced Individual Experience:",
    text: "By creating user-friendly and appealing electronic systems, we assist healthcare providers in supplying phenomenal patient experiences.",
  },
  {
    title: "Enhanced Individual Experience:",
    text: "Advanced Medical Care",
  },
  {
    title: "Enhanced Individual Experience:",
    text: "Comprehensive Heart Care",
  },
];
const Healthcare = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % benifits.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const currentService = benifits[index];

  if (!currentService) {
    return null;
  }
  return (
    <div className="mt-[70px]">
      <div className="flex flex-col md:flex-row md:space-x-4 mt-8 w-[100%] mx-auto md:w-[90%] lg:w-[90%]">
        {/* Right Side - Visible in Mobile View */}
        <div className="w-full md:w-1/2 py-4 md:p-8 sm:px-3">
          <h1 className="text-3xl md:text-5xl font-bold mt-4 mb-2 sm:text-center md:text-left">
            <span className="text-black  md:leading-[60px]">
              Healthcare Web Development Solutions By{" "}
            </span>
            <span className=" font-medium  leading-[60px]">
              {" "}
              Maxify Solution
            </span>
          </h1>
          <p className="sm:text-base md:text-xl text-justify  text-gray-600 mb-6 ">
            In the fast-evolving landscape of healthcare, the combination of
            electronic technology is no longer an option—it's a necessity. At
            Maxify Option, we understand the distinct difficulties dealt with by
            healthcare providers, healthcare facilities, clinics, and wellness
            tech firms in delivering outstanding client treatment while
            remaining compliant with laws. Our healthcare web development and
            growth solutions are designed to create easy-to-use, safe, secure,
            and durable platforms that boost patient engagement, improve
            operations, and drive growth for healthcare companies.
          </p>

          <button
            className="mt-8 rounded-full flex items-center justify-between gap-5 relative px-2 py-2 font-[500] text-black bg-gray-200 isolation-auto z-10
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
          >
            Get Your Design
            <span className=" bg-white rounded-full p-2 transform -rotate-[45deg]">
              <GoArrowRight />
            </span>
          </button>
        </div>

        {/* Left Side - Hidden in Mobile View */}
        <div className="flex w-full md:w-1/2 justify-start items-center relative p-2">
          <img
            src={img1}
            alt="Left Side"
            className="w-[80%] object-cover h-[90%] rounded-xl mx-auto overflow-hidden"
          />
        </div>
      </div>

      {/* second section */}
      <div class="w-[100%] mx-auto md:w-[90%] lg:w-[90%] lg:p-6 mt-5">
        <h1 class="text-3xl lg:text-6xl md:leading-[70px] font-bold text-center md:mb-4">
          Why Select Maxify Solution for <br />
          <span class="text-blue-600">Healthcare Internet Development?</span>
        </h1>
        <div class="flex flex-col lg:flex-row items-center justify-between md:mt-2 space-x-4">
          <div class="md:w-1/2 mb-6 md:mb-0 mt-6 px-6">
            <img src={img2} alt="Healthcare icons" class="rounded-lg" />
          </div>
          <div class="md:w-1/2 px-6">
            <ul class="list-disc text-justify text-sm md:text-base space-y-3">
              <li class=" text-zinc-800">
                <strong>Patient-Centric Designs:</strong> Prioritizing customer
                experience to ensure simplicity of access and engagement for
                people.
              </li>
              <li class=" text-zinc-800">
                <strong>Governing Compliance:</strong> Complying with all
                pertinent medical care laws such as HIPAA, GDPR, and various
                other data protection regulations.
              </li>
              <li class=" text-zinc-800">
                <strong>Safe and Scalable Platforms:</strong> Developing
                websites and applications that are safe and secure, scalable,
                and enhanced for efficiency.
              </li>
              <li class=" text-zinc-800">
                <strong>Cutting-Edge Innovation:</strong> Leveraging the most
                up-to-date in healthcare web development technologies to use
                innovative functionalities like telemedicine, e-prescriptions,
                and AI-driven analytics.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* 3rd section */}
      <div className="flex flex-col lg:flex-row items-center sm:p-2 md:p-6 bg-background rounded-lg sm:w-full md:w-[90%] mx-auto">
        <div className="lg:w-1/2 p-2 md:p-4">
          <img
            src={img3}
            alt="Team meeting"
            className="rounded-lg h-full w-auto object-cover"
          />
        </div>
        <div className="lg:w-1/2 py-4 px-4 md:px-10">
          <h2 className="text-sm text-[#6C6A72]">Healthcare Services</h2>
          <h3 className=" font-semibold text-lg text-[#2334DE] text-justify">
            Our Comprehensive Healthcare Web Development Services
          </h3>
          <p className="mt-4 text-sm text-justify leading-6 text-[#6C6A72]">
            1. Custom Health Care Web Site Development A well-designed,
            user-friendly website is essential for any kind of doctor. Our
            custom-made healthcare web development solutions ensure that your
            internet site is not simply a digital presence but a powerful device
            for individual acquisition, interaction, and retention.
          </p>
          <ul className=" text-sm text-justify leading-6 text-[#6C6A72] list-disc">
            <li>
              Receptive and Mobile-Optimized Designs: We develop internet sites
              that supply a seamless individual experience across all
              devices—desktop computers, tablet computers, and smartphones.
            </li>
            <li>
              SEO-Friendly Style: Our web development technique consists of SEO
              ideal practices to ensure your internet site ranks high up on
              search engines, attracting more natural traffic.
            </li>
            <li>
              Integrated Client Portals: We create safe and secure personal
              websites that permit simple access to medical records,
              consultation organizing, and online consultations, improving
              person comfort and fulfillment.
            </li>
            <li>
              Multi-Language Assistance: Dealing with diverse person
              demographics by using multi-language support on your healthcare
              web development website.
            </li>
          </ul>
        </div>
      </div>
      {/* 4th section */}
      <div class="flex flex-col lg:flex-row items-center justify-between mt-2 space-x-4 sm:w-full md:w-[90%] mx-auto">
        <div class="lg:w-1/2 px-6">
          <h2 className="md:text-5xl sm:text-2xl font-bold text-center md:text-left">
            Advanced Technologies We Make Use Of in Healthcare Web Development
          </h2>
          <p className="text-sm md:text-base leading-7 text-zinc-500 py-3  text-justify">
            At Maxify Solution, we leverage the current technological
            innovations to provide advanced healthcare web development services.
          </p>
          <ul class="list-disc text-justify text-sm space-y-3 px-6">
            <li class=" text-zinc-500">
              <strong>Patient-Centric Designs:</strong> Prioritizing customer
              experience to ensure simplicity of access and engagement for
              people.
            </li>
            <li class=" text-zinc-500">
              <strong>Governing Compliance:</strong> Complying with all
              pertinent medical care laws such as HIPAA, GDPR, and various other
              data protection regulations.
            </li>
            <li class=" text-zinc-500">
              <strong>Safe and Scalable Platforms:</strong> Developing websites
              and applications that are safe and secure, scalable, and enhanced
              for efficiency.
            </li>
            <li class=" text-zinc-500">
              <strong>Cutting-Edge Innovation:</strong> Leveraging the most
              up-to-date in healthcare web development technologies to use
              innovative functionalities like telemedicine, e-prescriptions, and
              AI-driven analytics.
            </li>
          </ul>
        </div>

        <div class="lg:w-1/2 mb-6 md:mb-0 mt-6 px-6 relative sm:h-[320px] md:h-[300px] w-full">
          <img
            src={img5}
            alt="Healthcare icons"
            class=" absolute sm:w-[80%] lg:w-[65%] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <img
            src={img4}
            alt="Healthcare icons"
            class=" absolute sm:w-[80%] lg:w-[65%] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>

      {/* 6th */}
      <div class="flex flex-col lg:flex-row items-center justify-between space-x-4 sm:w-full md:w-[90%] mx-auto mt-10 p-6">
        <div class="lg:w-1/2 relative sm:h-[320px] md:h-[400px] w-full">
          <img
            src={img6}
            alt="Left Side"
            className=" object-cover h-full w-full rounded-xl mx-auto overflow-hidden"
          />
        </div>
        <div class="lg:w-1/2 relative sm:h-[320px] md:h-[300px] w-full">
          <div className="flex gap-1 justify-between items-start">
            <div className="md:w-[70%] w-full">
              <h2 className="sm:text-3xl text-center md:text-left md:text-4xl font-bold">
                Key Advantages of Partnering with{" "}
                <span className="text-[#2334DE]"> Maxify Service</span>
              </h2>
              <Link to="/contact">
              <button
                className="mt-8 sm:mb-4 md:mb-0 py-3 text-[14px] font-[300] px-6 rounded-lg relative text-[white] bg-[#2334DE] isolation-auto z-10 border-2 border-[#2334DE]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[white] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-[#2334DE]"
              >
                Get Started
              </button>
              </Link>
            </div>
            <div className="w-[30%] py-4 space-y-2 flex-col items-end sm:hidden md:flex">
              <img src={img7} className="h-[100px]" alt="" />
              <img src={img8} className="h-[100px]" alt="" />
            </div>
          </div>
          <div className="shadow-md bg-white p-4">
            <p className="text-sm md:text-base text-gray-600">
              <span className="font-[600] text-sm md:text-base">{benifits[index].title}</span>{" "}
              {benifits[index].text}
            </p>
          </div>
        </div>
      </div>

      {/* 7th */}
      <div class="flex flex-col lg:flex-row items-center justify-between sm:w-full md:w-[90%] mx-auto mt-10 p-4 md:p-6">
        <div class="md:w-1/2 mb-6 md:mb-0 mt-6 md:px-6">
          <img src={img9} alt="Healthcare icons" class="rounded-lg" />
        </div>
        <div class="md:w-1/2 md:px-6">
        <h2 className="text-3xl md:text-4xl text-center md:text-left font-bold py-2 leading-10"><span className="text-[#2334DE]">Maxify Option:</span> Your Trusted Partner in Healthcare Web Growth</h2>
          <p class="list-disc text-justify text-sm md:text-base space-y-3 text-gray-500 leading-7">
            At Maxify Option, we are committed to supplying healthcare web
            development services that not only fulfill the present needs of the
            sector but also prepare healthcare companies for future
            difficulties. Whether you are a medical facility wanting to improve
            your electronic presence, a clinic wishing to provide telemedicine
            services, or a health-tech startup with a one-of-a-kind idea, we
            have the experience and expertise to transform your vision into
            reality.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center bg-white md:py-12 px-6 md:px-16">
      {/* Left Section: Image */}
      <div className="relative md:w-1/2 w-full flex justify-center items-center md:rounded-l-lg">
        <img
          src={img10}
          alt="Contact Us"
          className="rounded-lg md:rounded-none w-full h-auto object-cover"
        />
      </div>

      {/* Right Section: Text Content */}
      <div className="bg-blue-600 md:w-1/2 w-full p-8 md:rounded-r-lg text-white">
      
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Contact Us Today</h2>
        <p className="md:text-lg leading-relaxed sm:text-base text-justify">
          Ready to transform your medical care experiment into advanced digital
          remedies? Call Maxify Remedy today to learn more about how our
          healthcare web development services can aid you in accomplishing your
          objectives and staying ahead in this rapidly advancing market.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Healthcare;
