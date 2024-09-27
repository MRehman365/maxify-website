import React, { useState, useEffect } from "react";
import img1 from "../Assets/1.webp";
import img2 from "../Assets/3.webp";
import img3 from "../Assets/2.webp";
import img4 from "../Assets/4.webp";
import img5 from "../Assets/5.webp";
import img6 from "../Assets/6.webp";
import img7 from "../Assets/7.webp";
import img8 from "../Assets/divide6-1.jpg.png";
import img9 from "../Assets/Path 4 (1).png"

import { Link } from "react-router-dom";
import { MdImportantDevices } from "react-icons/md";
import { AiOutlineSolution } from "react-icons/ai";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import { MdWeb } from "react-icons/md";
import { FaDigitalOcean } from "react-icons/fa";
import { TbSeo } from "react-icons/tb";
import { MdContentPasteSearch } from "react-icons/md";
import { IoMdPlay } from "react-icons/io";
import { IoIosPlay } from "react-icons/io";
import {
  FaHandHoldingMedical,
  FaStethoscope,
  FaHeartbeat,
} from "react-icons/fa";
import { LuFocus } from "react-icons/lu";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdSupportAgent } from "react-icons/md";
import { GoCodeReview } from "react-icons/go";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const services = [
  {
    title: "Custom software development.",
    description: `Standard software solutions were sometimes unable to meet
the demands of the modern business environment. That is
when Maxify Solutions comes in. We are not just another
website development company in Noida we are your partner
for developing custom software to match your specific
requirements. Our experienced developers work together
with you to understand your business goals and issues,
resulting in software that improves productivity and
increases revenue.`,
    icon: <FaLongArrowAltRight size={17} className="text-[#2334DE]" />,
    icon2: <MdDeveloperMode />,
  },
  {
    title: "Web Design & Development",
    description: `Your website is your company's online presence, and first
impressions are important. At Maxify Solutions, we design
websites that are both visually appealing and highly
functional. As a leading website development company in
Noida, we provide a broad variety of services, including
custom web design and responsive development. Our goal is
to create a site that looks beneficial and works easily on any
device.`,
    icon: <FaLongArrowAltRight size={17} className="text-[#2334DE]" />,
    icon2: <MdWeb />,
  },
  {
    title: "Digital marketing.",
    description: `In an era where online presence is important, Maxify
Solutions stands out as a leading digital marketing services
provider in Noida. We provide a broad range of digital
marketing services to help you connect with your target
audience. Whether you want search engine optimization
(SEO), pay per click (PPC) advertising, social media
management, or content marketing, we have the experience
to drive traffic, generate leads, and increase conversions.`,
    icon: <FaLongArrowAltRight size={17} className="text-[#2334DE]" />,
    icon2: <FaDigitalOcean />,
  },
  {
    title: "SEO Optimization",
    description: `Maximize your visibility and drive traffic with our expert SEO services...`,
    icon: <FaLongArrowAltRight size={17} className="text-[#2334DE]" />,
    icon2: <TbSeo />,
  },
  {
    title: "Content Creation",
    description: `Engage your audience with high-quality content tailored to your brand...`,
    icon: <FaLongArrowAltRight size={17} className="text-[#2334DE]" />,
    icon2: <MdContentPasteSearch />,
  },
];

const sections = {
  softwareDevelopment: {
    heading: "Custom Software Development",
    points: [
      {
        number: "01",
        title: "Deep Customization",
        description:
          "Tailored software solutions that perfectly align with your specific business processes and needs.",
      },
      {
        number: "02",
        title: "Agile Development",
        description:
          "Faster project delivery with flexibility to adapt to changing requirements.",
      },
      {
        number: "03",
        title: "Comprehensive Support",
        description:
          "Extensive testing and ongoing post-launch support to ensure long-term success and scalability.",
      },
    ],
  },
  digitalMarketing: {
    heading: "Digital Marketing",
    points: [
      {
        number: "01",
        title: "SEO Optimization",
        description:
          "Improve your search engine ranking with our tailored SEO strategies.",
      },
      {
        number: "02",
        title: "Social Media Marketing",
        description:
          "Engage with your audience through targeted social media campaigns.",
      },
      {
        number: "03",
        title: "Content Creation",
        description:
          "Create compelling content that resonates with your target audience.",
      },
    ],
  },
  webDevelopment: {
    heading: "Web Development",
    points: [
      {
        number: "01",
        title: "Responsive Design",
        description:
          "Build websites that look great on all devices with responsive design.",
      },
      {
        number: "02",
        title: "E-commerce Solutions",
        description:
          "Develop robust e-commerce platforms to boost your online sales.",
      },
      {
        number: "03",
        title: "Custom Web Applications",
        description:
          "Create custom web applications tailored to your business needs.",
      },
    ],
  },
  itConsulting: {
    heading: "IT Consulting",
    points: [
      {
        number: "01",
        title: "Expert Guidance",
        description:
          "Receive expert advice to optimize your IT infrastructure.",
      },
      {
        number: "02",
        title: "Strategic Planning",
        description:
          "Develop IT strategies that align with your business goals.",
      },
      {
        number: "03",
        title: "Risk Management",
        description:
          "Identify and mitigate IT risks to ensure business continuity.",
      },
    ],
  },
};

const sectionKeys = Object.keys(sections);

const benifits = [
  {
    text: "Prominent Healthcare Services",
    icon: <FaHandHoldingMedical size={30} className="text-[#2334DE]" />,
  },
  {
    text: "Advanced Medical Care",
    icon: <FaStethoscope size={30} className="text-[#2334DE]" />,
  },
  {
    text: "Comprehensive Heart Care",
    icon: <FaHeartbeat size={30} className="text-[#2334DE]" />,
  },
];
const Home = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSectionIndex(
        (prevIndex) => (prevIndex + 1) % sectionKeys.length
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const { heading, points } = sections[sectionKeys[currentSectionIndex]];

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentSectionIndex(
  //       (prevIndex) => (prevIndex + 1) % sectionKeys.length
  //     );
  //   }, 2000);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % benifits.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Ensure the index is within bounds
  const currentService = benifits[index];

  if (!currentService) {
    return null; // Return nothing if service is undefined
  }
  return (
    <div className="mt-[80px]">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-2 bg-background">
        <div className="sm:w-full lg:w-1/2 sm:p-2 md:p-4 sm:mt-9 md:mt-0">
        <img src={img9} className="absolute top-0 left-0 -z-20 sm:hidden lg:block" alt="" />
        <div className="bg-[#2334DE] uppercase text-white tracking-wider md:mb-4 text-[10px] mt-8 flex text-center w-32 px-2 py-[2px] justify-between">
            <span>IT SOLUTION </span>
            <span className="w-10 mt-[6px]">
              <hr />
            </span>
          </div>
          <h2 className="text-6xl md:text-5xl sm:text-4xl mt-3 md:mt-9 font-semibold text-black">
            Welcome To
          </h2>
          <h1 className="text-6xl md:text-5xl sm:text-4xl md:mt-2  font-semibold text-[#2334DE]">
            Maxify Solutions
          </h1>
          <p className="md:text-3xl sm:text-lg mt-4 font-semibold text-black">
            Your Partner For Digital Transformation
          </p>
          <Link to="/app">
          <button  className="mt-8 py-3 text-[14px] font-[300] px-5 rounded-sm relative text-[white] bg-[#2334DE] isolation-auto z-10 border-2 border-[#2334DE]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[white] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-[#2334DE]">
            Get Started Now
          </button>
          </Link>
        </div>
        <div className="sm:w-full lg:w-1/2 mt-0 flex items-center justify-center relative sm:h-[400px] md:h-[600px]">
          <div className="h-[65%] w-[65%] overflow-hidden rounded-lg relative z-10">
            <img
              src={img1}
              alt="Person using a tablet"
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
          <div className="bg-gradient-to-r from-[#2334DE] to-[#101763] sm:p-[80px] md:p-[130px] rounded-lg absolute top-0 right-0 z-0"></div>
          <div className="bg-gradient-to-r from-[#2334DE] to-[#101763] sm:p-[80px] md:p-[130px] rounded-lg absolute bottom-0 left-0 z-0"></div>
        </div>
      </div>

      {/* second section */}
      <div className="bg-img">
      <div className="flex flex-col md:flex-row md:space-x-4 mt-8 w-[100%] mx-auto md:w-[90%]">
        {/* Left Side - Hidden in Mobile View */}
        <div className="flex w-full md:w-1/2 justify-end relative px-2">
          <div className="flex justify-center items-center gap-3 p-6 bg-[#2334DE] absolute rounded-md top-20 sm:left-2 md:left-10 text-white">
            <FaPeopleGroup size={30} />
            <p className="text-center text-sm">
              Years of
              <br />
              experience
            </p>
          </div>
          <img
            src={img5}
            alt="Left Side"
            className="h-auto right-2 bottom-0 w-[40%] absolute"
          />
          <img
            src={img2}
            alt="Left Side"
            className="w-[80%] object-cover h-auto"
          />
        </div>

        {/* Right Side - Visible in Mobile View */}
        <div className="w-full md:w-1/2 p-4 md:p-8 sm:px-3 md:px-[50px]">
          <p className="text-[18px] font-[500] text-[gray]">
            <span className="text-[#2334DE]">//</span> Get to Now
          </p>
          <h1 className="text-2xl md:text-4xl font-bold mb-4 mt-4">
            Maxify Solutions
          </h1>
          <p className="text-sm text-justify  text-gray-600 mb-6">
            is a trustworthy partner for navigating the difficult realm of
            digital transformation. Based in Noida, we specialize in helping
            businesses like yours succeed and grow with the use of technology.
            Whether you're looking for a reputable website development company
            in Noida or a digital marketing services provider in Noida, we have
            you covered. Our broad solutions are customized to your requirements
            and offer visible outcomes. Allow us to help you take your company
            to the next level with our unique solutions.
          </p>

          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 mb-6">
            <div className="flex-1 flex gap-3 items-center text-left p-4 rounded-md">
              <div>
                <MdImportantDevices className="text-[30px] text-[#2334DE]" />
              </div>
              <p className="font-semibold lg:text-[16px] md:text-[16px]">
                Custom software development.
              </p>
            </div>
            <div className="flex-1 flex gap-3 items-center text-left p-4 rounded-md">
              <div>
                <AiOutlineSolution className="text-[30px] text-[#2334DE]" />
              </div>
              <p className="font-semibold lg:text-[16px] md:text-[16px]">
                Marketing Solution
              </p>
            </div>
          </div>
          <p className="text-justify font-semibold text-sm">
            Maxify Solutions - Improve Your Business with Innovative Technology
            Solutions.
          </p>
          <div className="flex mt-8">
            <div className="w-1/2 flex items-center">
              <MdOutlinePhoneInTalk
                size={22}
                className="bg-[#f3f3f3] text-[#2334DE] size-[40px] p-2 rounded-full"
              />
              <div>
                <p className=" text-[12px] text-gray-400 font-semibold">
                  Call us anytime
                </p>
                <p className="text-[14px] font-bold">+9999 5555 333</p>
              </div>
            </div>
            <div className="w-1/2 flex justify-center">
            <Link to="/smo">
              <button className=" px-6 py-2 rounded-sm relative text-[white] bg-[#2334DE] isolation-auto z-10 border-2 border-[#2334DE]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[white] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-[#2334DE]">
                Explore now
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Slider */}
      <div className="bg-img">
      <div className="w-full max-w-6xl mx-auto py-12 px-4 relative">
        <p className=" text-[17px] font-semibold text-center text-[gray] mb-5">
          <span className="text-[#2334DE]">//</span> What We’re Offering
        </p>
        <h2 className="text-4xl font-bold text-center">
          Services we’re offering to <br />
          our customers
        </h2>
        <Swiper
          slidesPerView={1} // Default slides per view for small screens
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              // At 768px (md screen) and above
              slidesPerView: 2,
            },
            1024: {
              // At 1024px and above (lg screen)
              slidesPerView: 3,
            },
          }}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg rounded-lg p-8 min-h-[300px] flex flex-col justify-around slider-card bg-slide">
                <div>
                  <h2 className="text-[15px] font-semibold mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-6 text-[10px] text-justify">
                    {service.description}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <button className="text-[#2334DE] font-medium flex items-center space-x-6">
                    <span
                      style={{ boxShadow: "0px 0px 10px gray" }}
                      className="p-3 rounded-full"
                    >
                      {service.icon}
                    </span>
                    <span className="text-[#aaaaaa]">Read More</span>
                  </button>
                </div>
                <div
                  className="absolute bottom-0 slider-card-bottom right-0 transition-all pl-[20px] text-[30px] pt-[20px] pr-[10px] pb-[10px] bg-[#f3f3f3] text-[#2334DE]"
                  style={{ borderRadius: "100% 0% 0% 0%" }}
                >
                  {service.icon2}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="next absolute top-[50%] right-[-30px] transform">
          <FaLongArrowAltRight
            size={34}
            className="text-3xl sm:none md:block text-[#2334DE] hover:shadow-lg p-2 rounded-full"
          />
        </div>
        <div className="prev absolute  top-[50%] left-[-30px]">
          <FaLongArrowAltRight
            size={34}
            className="text-3xl  sm:none md:block text-[#2334DE] transform rotate-180 hover:shadow-lg p-2 rounded-full"
          />
        </div>
        <div className="flex justify-center gap-2 flex-wrap mt-12">
          <p className="sm:text-sm md:text-base text-center font-[500] bg-[#f3f3f3] p-3">
            Trust the experts for all your{" "}
            <span className="font-semibold">Web Development & Design</span>{" "}
            needs.
          </p>
          <button className=" px-6 py-2 rounded-sm relative text-[white] bg-[#2334DE] isolation-auto z-10 border-2 border-[#2334DE]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[white] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-[#2334DE]">
            Explore now
          </button>
        </div>
      </div>
      </div>

      {/*  */}
      <div className="">
        <div className="sm:hidden md:w-[45%] md:flex justify-end">
          {/* <IoMdPlay size={14} className="bg-[red] text-white h-[80px] w-[80px]"/> */}
          <IoIosPlay
            size={20}
            className="bg-[red] text-white h-[80px] w-[80px]"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center bg-black text-white py-12 sm:px-3 md:px-0 relative">
          <div className="md:w-1/2  min-h-[400px] md:px-5">
            <h3 className="text-[#2334DE]">
              // <span className="text-white"> What We Offer!</span>
            </h3>
            <h1 className="text-4xl md:text-3xl font-bold mt-4">{heading}</h1>
            <div className="mt-8 space-y-8">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                <div>
                  <div className="bg-[#2334DE] text-white h-10 w-10 flex items-center justify-center rounded-full">
                    {point.number}
                  </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{point.title}</h4>
                    <p className="text-gray-400 text-sm">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:h-[600px] flex justify-center mt-8 md:mt-0 lg:absolute">
            <div className=" lg:absolute sm:w-full md:w-[55%] right-[00px] top-[-30px]">
              <img
                src={img8}
                alt={`${heading} Illustration`}
                className="w-full md:w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Company benifits */}
      <div className="bg-img">
      <div className="flex flex-col md:flex-row md:space-x-4 mt-8 w-[100%] mx-auto md:w-[90%]">
        {/* Left Side - Hidden in Mobile View */}
        <div className="flex w-full md:w-1/2 justify-center items-center company-bg relative gap-3">
          <div className="flex flex-col gap-3">
            <img
              src={img4}
              alt={`${heading} Illustration`}
              className="sm:h-[200px] md:h-[250px] sm:w-[150px] rounded-lg object-cover md:w-[200px]"
            />
            <img
              src={img6}
              alt={`${heading} Illustration`}
              className="sm:h-[200px] md:h-[250px] sm:w-[150px] md:w-[200px]"
            />
          </div>
          <div>
            <img
              src={img7}
              alt={`${heading} Illustration`}
              className="sm:h-[200px] md:h-[300px] sm:w-[150px] rounded-lg object-cover md:w-[200px]"
            />
          </div>
        </div>

        {/* Right Side - Visible in Mobile View */}
        <div className="w-full md:w-1/2 p-4 md:p-8 sm:px-3 md:px-[30px] flex flex-col md:gap-8 justify-center">
          <p className="text-[16px] font-[500] text-[gray]">
            <span className="text-[#ff0000]">//</span> Company Benifits
          </p>
          <h1 className="text-2xl md:text-4xl font-bold mb-1">
            Industry Solutions and Expertise.
          </h1>
          <p className="text-sm text-justify  text-gray-600 mb-6">
            Maxify Solutions provides services across all aspects of industries,
            supporting businesses in Noida and beyond to achieve their goals
            through customized solutions along with skilled assistance.
          </p>

          <div className="flex justify-between shadow-md p-4 mb-6 border-t-[1px] border-r-[1px] border-l-[3px] border-l-[#2334DE] bg-white">
            <p className="font-semibold">{benifits[index].text}</p>
            {benifits[index].icon}
          </div>

          <div className="mt-8">
            <button className=" px-6 py-2  relative text-[white] bg-[#2334DE] isolation-auto z-10 border-2 border-[#2334DE]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[white] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-[#2334DE]">
              Explore now
            </button>
          </div>
        </div>
      </div>
      </div>

      {/* last section */}
      <div className="bg-img">
      <div className="flex flex-col md:flex-row md:space-x-4 mt-8 w-[100%] mx-auto md:w-[90%]">
        {/* Left Side - Hidden in Mobile View */}
        <div className="w-full md:w-1/2 justify-center items-center relative sm:hidden lg:flex">
          <img
            src={img3}
            alt="Left Side"
            className="w-[70%] object-cover h-[90%] rounded-lg"
          />
        </div>

        {/* Right Side - Visible in Mobile View */}
        <div className="w-full md:w-full lg:w-1/2 p-4 md:p-8 sm:px-3 md:px-[30px]">
          <span className="text-[12px] font-[500] px-4 py-0 bg-[#2334DE] text-white">
            Why ------
          </span>
          <h1 className="text-2xl md:text-3xl font-bold mb-1">
            Why Should You Choose Maxify Solutions?
          </h1>
          <p className="text-sm text-justify  text-gray-600 mb-6 leading-7">
            Experienced Team: Our team of experts has years of experience in
            technology and business strategy. We re dedicated to providing new
            solutions that will help your company succeed.
          </p>

          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 mb-6">
            <div className="flex-1 flex gap-3 items-start text-left p-4 rounded-md bg-white">
              <div>
                <LuFocus className="text-[30px] text-[#2334DE]" />
              </div>
              <div>
                <h3 className="text-sm font-[500] text-black">
                  Client-Focused Approach:
                </h3>
                <p className="text-[10px] text-justify">
                  We focus on your success. We work closely with you to
                  understand your goals and modify our services to meet your
                  particular needs.
                </p>
              </div>
            </div>
            <div className="flex-1 flex gap-3 items-start text-left p-4 rounded-md bg-white">
              <div>
                <BsGraphUpArrow className="text-[30px] text-[#2334DE]" />
              </div>
              <div>
                <h3 className="text-sm font-[500] text-black">
                  Proven Success:
                </h3>
                <p className="text-[10px] text-justify">
                  We take interest in our track record of offering high-quality
                  solutions resulting in measurable outcomes. Our primary goal
                  is to increase the value of your company.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 mb-6">
            <div className="flex-1 flex gap-3 items-start text-left p-4 rounded-md bg-white">
              <div>
                <MdSupportAgent className="text-[30px] text-[#2334DE]" />
              </div>
              <div>
                <h3 className="text-sm font-[500] text-black">
                  Ongoing Support:
                </h3>
                <p className="text-[10px]  text-justify">
                  Our dedication to your success does not end when we offer our
                  services. We provide ongoing support and maintenance to ensure
                  that your solutions operate at their best.
                </p>
              </div>
            </div>
            <div className="flex-1 flex gap-3 items-start text-left p-4 rounded-md bg-white">
              <div>
                <GoCodeReview className="text-[30px] text-[#2334DE]" />
              </div>
              <div>
                <h3 className="text-sm font-[500] text-black">
                  Innovative Solutions:
                </h3>
                <p className="text-[10px] text-justify">
                  We stay on top of trends by providing modern technology that
                  keeps you successful in your business.
                </p>
              </div>
            </div>
          </div>
          <div className="flex mt-8">
            <button className=" px-6 py-2 rounded-sm relative text-[white] bg-[#2334DE] isolation-auto z-10 border-2 border-[#2334DE]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[white] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-[#2334DE]">
              Explore now
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
