import React, { useEffect, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { MdNoiseAware } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { TbCirclesRelation } from "react-icons/tb";
import { GoPlusCircle } from "react-icons/go";
import { FiMinusCircle } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";
import { IoPricetagsOutline } from "react-icons/io5";
import { FaPlus, FaMinus, FaAward } from "react-icons/fa";
import { Link } from "react-router-dom";
import PricingCard from "../Components/PricingCard";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // You may need this for the autoplay feature
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";


const plans = [
  { title: 'Experienced Team', description: 'Our team of SMO experts has years of experience in the industry, working with a diverse range of clients across various sectors. We stay up to date on the newest social media trends and analytics to keep your brand ahead of the competition.' },
  { title: 'Customized Solutions', description: 'We understand that every business is unique. That’s why we offer customized SMO solutions that cater to your specific needs and objectives. Whether you’re a small business or a large enterprise, we have the expertise to help you succeed.' },
  { title: 'Proven Track Record', description: 'Our proven track record speaks for itself. We have supported numerous companies in India and beyond in achieving their social media goals, resulting in increased traffic, higher engagement, and improved ROI.' },
  { title: 'Testing and Quality Assurance', description: 'We offer affordable SMO packages that deliver value for money. Our transparent pricing ensures you know exactly what you’re paying for, with no hidden costs or surprises.' },
];
const SMO = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleAccordion = (index) => {
    setOpenItem(openItem === index ? null : index);
  };
  const [hoveredStep, setHoveredStep] = useState(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mt-[60px] font-space">
      <div className="header-smo text-white text-center flex flex-col items-center p-2 sm:py-[70px] md:py-[120px] justify-center font-space">
        <h1 className="sm:text-3xl md:text-6xl font-bold mb-4">
          Elevate Your Online Presence
        </h1>
        <h2 className="sm:text-3xl md:text-6xl font-bold mb-4">
          With SMO Services In India
        </h2>
        <p className="sm:text-[17px] md:text-[20px] mb-6 md:max-w-[800px]">
          In today’s digital age, where social media platforms have become the
          epicenter of communication, marketing, and customer engagement, Social
          Media Optimization (SMO) plays a crucial role in enhancing your
          brand's online visibility and reputation. At Maxify Web Solutions, we
          specialize in providing top-notch SMO services in India, helping
          businesses harness the power of social media to drive growth and
          success.
        </p>
        <a href="https://wa.me/917428309119" target="blank">
        <button
          className="mt-8 rounded-full flex items-center relative px-5 py-2 text-[#2334DE] bg-white isolation-auto z-10 border-2 border-[#2334DE]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[#2334DE] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-white"
        >
          Read More{" "}
          <span className="ml-2">
            <GoArrowRight />
          </span>
        </button>
        </a>
      </div>
      {/* 2nd section */}
      <div class="p-6 flex flex-col items-center max-w-[1200px] mx-auto text-center mt-10">
        <span class="bg-[#e7effe] px-2 py-0 text-[#1351d8] rounded mb-3">
          Latest Service
        </span>
        <h1 class="sm:text-3xl md:text-5xl font-bold mb-4 mt-4">
          Why SMO Is Essential For Your{" "}
          <span class="text-[#1351d8] border-[2px] px-5 border-[#1351d8] rounded-full">
            Business
          </span>
        </h1>
        <p class="sm:text-lg md:text-xl mb-6 text-[#1351d8]">
          Social Media Optimization is the process of optimizing your social
          media profiles and content to increase brand awareness, attract more
          visitors, and engage with your target audience effectively. Unlike
          traditional marketing, SMO leverages the viral nature of social media
          platforms to spread your brand message quickly and efficiently.
        </p>
        <h2 class="sm:text-2xl md:text-4xl font-bold mb-2 mt-4 border-[2px] px-6 py-2 border-[#1351d8] rounded-full text-[#1351d8]">
          Key Benefits Of SMO:
        </h2>
      </div>
      {/* section 3 */}
      <div className="flex flex-col md:flex-row justify-between sm:p-3 md:p-6 bg-background rounded-lg bg-[#f4f7fb]">
        <div className="flex items-start space-x-4 p-4 hover:bg-white">
          <div>
            <div className="h-[60px] w-[60px] rounded-md bg-[#e7eefe] flex justify-center items-start">
              <img src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1731335943/Overlay_dztrgm.png" alt="logo" />
            </div>
            <li className="text-sm md:text-base text-justify text-gray-600">
            <span >Enhanced Brand Awareness:</span>
            <span>
              SMO helps in creating a strong online presence, making your brand
              more recognizable and trustworthy.
            </span>
            </li>
          </div>
        </div>
        <div className="flex items-start space-x-4 p-4 hover:bg-white">
          <div >
            <div className="h-[60px] w-[60px] rounded-md bg-[#e7eefe] flex justify-center items-center">
            <img src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1731335942/Overlay_1_npzunk.png" alt="logo" />
            </div>
            <li className="text-sm md:text-base text-justify text-gray-600 mt-3">
            <span >Increased Traffic: </span>
            <span >
              By optimizing your social media profiles and content, SMO drives
              more traffic to your website, improving your search engine
              rankings.
            </span>
            </li>
          </div>
        </div>
        <div className="flex items-start space-x-4 p-4 hover:bg-white">
          <div className="">
            <div className="h-[60px] w-[60px] rounded-md bg-[#e7eefe] flex justify-center items-center">
            <img src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1731335943/Overlay_2_hus38k.png" alt="logo" />
            </div>
            <li className="text-sm md:text-base text-justify text-gray-600 mt-3">
            <span >Better Engagement:</span>
            <span >
              SMO enables you to connect with your audience on a personal level,
              fostering loyalty and long-term relationships.
            </span>
            </li>
          </div>
        </div>
        <div className="flex items-start space-x-4 p-4 hover:bg-white">
          <div>
            <div className="h-[60px] w-[60px] rounded-md bg-[#e7eefe] flex justify-center items-center">
            <img src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1731335943/Overlay_3_piks45.png" alt="logo" />
            </div>
            <li className="text-sm md:text-base text-justify text-gray-600 mt-3">
            <span >Cost-Effective Marketing:</span>
            <span >
              SMO is a budget-friendly marketing strategy that delivers high
              returns on investment by reaching a larger audience with minimal
              costs.
            </span>
            </li>
          </div>
        </div>
      </div>

      {/* section 4 */}
      <section className="flex flex-col md:flex-row bg-white p-6 md:p-12">
        {/* Left side - Text content */}
        <div className="md:w-1/2 space-y-4 flex flex-col justify-between md:min-h-[300px]">
          <div>
            <span className="inline-block bg-blue-100 text-[#2334DE] font-semibold py-1 px-3 mb-4 rounded-lg">
              About Us
            </span>
            <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 mt-4">
              Our SMO <br /> Services{" "}
              <span className="text-[#2334DE] border-[2px] border-[#2334DE] px-4 rounded-full">
                in India
              </span>
            </h1>
            <p className="text-gray-600 mt-5 text-justify">
              At Maxify Solution, we offer a comprehensive range of SMO services
              tailored to meet the unique needs of your business. Our team of
              professionals uses modern technologies and strategies to improve
              your social media presence, providing maximum visibility and
              conversation.
            </p>
          </div>
          <a href="https://wa.me/917428309119" target="blank">
            <button className="mb-[100px] inline-flex items-center bg-transparent text-[#2334DE] border border-[#2334DE] py-2 px-4 rounded-full hover:bg-[#2334DE] hover:text-white transition-all">
              Read More <span className="ml-2">→</span>
            </button>
         </a>
        </div>

        <div className="md:w-1/2 grid items-center grid-cols-2 gap-4  md:mt-0">
          <img
            src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512491/about-three.png_h1p8fm.webp"
            alt="Laptop"
            className="col-span-1 row-span-2 "
          />

          <img
            src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512488/about-three-2.png_axadi4.png"
            alt="Phone"
            className="col-span-1 "
          />

          <img
            src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512488/about-three-3.png_m3k1ml.png"
            alt="Social Media Icons"
            className="col-span-1 "
          />
        </div>
      </section>

      {/* section 5 */}
      <div className="bg-[#f4f7fb] relative max-h-fit">
      <div className="absolute top-1/2 left-[10%] transform -translate-y-1/2 z-10 hidden md:block">
        <FaArrowAltCircleLeft className="text-[#2334DE] cursor-pointer swiper-button-prev" />
      </div>
      <div className="absolute top-1/2 right-[10%] transform -translate-y-1/2 z-10 hidden md:block">
        <FaArrowAltCircleRight className="text-[#2334DE] cursor-pointer swiper-button-next" />
      </div>
      <Swiper pagination={{ clickable: true }} modules={[Navigation]}  
      onDurationChange={0}  
      speed={500}
      autoplay={true}
      navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}>
      {/* Left Side Slide */}
      <SwiperSlide>
  <div className="flex flex-col md:flex-row bg-[#f4f7fb] lg:px-[150px]">
    {/* Left Side Content */}
    <div className="w-full md:w-1/2 p-6">
      <button className="bg-blue-100 text-[#2334DE] text-sm px-2 py-1 rounded-md mb-4">
        Ask Question
      </button>
      <h1 className="text-3xl lg:text-5xl font-bold mt-4 mb-4">
        Social Media <br /> Profile{" "}
        <span className="text-[#2334DE]">Optimization</span>
      </h1>
      <p className="text-gray-600 mt-4 text-justify">
        Your social media profiles are the first impression potential
        customers have of your brand. We optimize your profiles on platforms
        like Facebook, Instagram, Twitter, LinkedIn, and more, ensuring they
        are complete, professional, and aligned with your brand identity.
      </p>
      <div className="mt-6 rounded-lg p-4 flex items-center">
        <div className="bg-white p-7 border-l-[4px] border-[#2334DE] rounded relative">
          <div className="bg-[#2334DE] p-3 absolute rounded-full  top-[25%] left-[-25px]">
            <FaAward className="text-white text-2xl" />
          </div>
          <p className="text-3xl font-semibold ml-4">Winning Award</p>
        </div>
      </div>
    </div>

    {/* Right Side Accordion */}
    <div className="w-full md:w-1/2 p-6 my-auto">
      <div className="border-b border-gray-200 py-4 transition duration-300 ease-in-out bg-white mt-4 px-2 rounded-md">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleAccordion(1)}
        >
          <h2 className="text-base md:text-lg font-semibold">
            Keyword Integration:
          </h2>
          {openItem === 1 ? <FiMinusCircle className="text-blue-500" /> : <GoPlusCircle />}
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            openItem === 1 ? "max-h-screen bg-white p-4 rounded-lg mt-2" : "max-h-0"
          }`}
        >
          {openItem === 1 && (
            <div className="text-gray-600 text-sm md:text-base">
            At Maxify Web Solutions, we optimize your website for search engines through strategic keyword integration. Our experts identify relevant keywords and incorporate them into your website's content, meta tags, and headings.
            </div>
          )}
        </div>
      </div>

      {/* Additional Accordion Items */}
      <div className="border-b border-gray-200 py-4 transition duration-300 ease-in-out bg-white mt-4 px-2 rounded-md">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleAccordion(2)}
        >
          <h2 className="sm:text-base md:text-lg font-semibold">
            How Do You Manage Consulting Effectively?
          </h2>
          {openItem === 2 ? <FiMinusCircle className="text-blue-500" /> : <GoPlusCircle />}
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            openItem === 2 ? "max-h-screen bg-white p-4 rounded-lg mt-2" : "max-h-0"
          }`}
        >
          {openItem === 2 && (
            <div className="text-gray-600 text-sm md:text-base">
            Maxify Web Solutions' consulting management system streamlines your digital projects through efficient client communication, project planning, and time management.
            </div>
          )}
        </div>
      </div>

      <div className="py-4 transition duration-300 ease-in-out bg-white mt-4 px-2 rounded-md">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleAccordion(3)}
        >
          <h2 className="sm:text-base md:text-lg font-semibold">
            Bio And Description:
          </h2>
          {openItem === 3 ? <FiMinusCircle className="text-blue-500" /> : <GoPlusCircle />}
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            openItem === 3 ? "max-h-screen bg-white p-4 rounded-lg mt-2" : "max-h-0"
          }`}
        >
          {openItem === 3 && (
            <div className="text-gray-600 text-sm md:text-base">
            Maxify Web Solutions Pvt Ltd is a leading digital agency providing end-to-end solutions to propel your business online. We empower your brand to thrive in the digital landscape.
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>
      <SwiperSlide>
  <div className="flex flex-col md:flex-row bg-[#f4f7fb] lg:px-[150px]">
    {/* Left Side Content */}
    <div className="w-full md:w-1/2 p-6">
      <button className="bg-blue-100 text-[#2334DE] text-sm px-2 py-1 rounded-md mb-4">
        Ask Question
      </button>
      <h1 className="text-3xl lg:text-5xl font-bold mt-4 mb-4">
      Custom Content: Creation{" "}


        <span className="text-[#2334DE]">Optimization</span>
      </h1>
      <p className="text-gray-600 mt-4 text-justify">
      Content is king in the world of social media. Our creative skills generate 
 required and shareable content that connects with your audience and 
promotes your business.
      </p>
      <div className="mt-6 rounded-lg p-4 flex items-center">
        <div className="bg-white p-7 border-l-[4px] border-[#2334DE] rounded relative">
          <div className="bg-[#2334DE] p-3 absolute rounded-full  top-[25%] left-[-25px]">
            <FaAward className="text-white text-2xl" />
          </div>
          <p className="text-3xl font-semibold ml-4">Winning Award</p>
        </div>
      </div>
    </div>

    {/* Right Side Accordion */}
    <div className="w-full md:w-1/2 p-6 my-auto">
      <div className="border-b border-gray-200 py-4 transition duration-300 ease-in-out bg-white mt-4 px-2 rounded-md">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleAccordion(1)}
        >
          <h2 className="text-base md:text-lg font-semibold">
          Custom Content:
          </h2>
          {openItem === 1 ? <FiMinusCircle className="text-blue-500" /> : <GoPlusCircle />}
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            openItem === 1 ? "max-h-screen bg-white p-4 rounded-lg mt-2" : "max-h-0"
          }`}
        >
          {openItem === 1 && (
            <li className="text-gray-600 text-sm md:text-base">
            Our team crafts compelling content tailored to your audience's needs. At Maxify Web Solutions, we help tell your brand story through customized content solutions.
            </li>
          )}
        </div>
      </div>

      {/* Additional Accordion Items */}
      <div className="border-b border-gray-200 py-4 transition duration-300 ease-in-out bg-white mt-4 px-2 rounded-md">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleAccordion(2)}
        >
          <h2 className="sm:text-base md:text-lg font-semibold">
          Content Scheduling:
          </h2>
          {openItem === 2 ? <FiMinusCircle className="text-blue-500" /> : <GoPlusCircle />}
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            openItem === 2 ? "max-h-screen bg-white p-4 rounded-lg mt-2" : "max-h-0"
          }`}
        >
          {openItem === 2 && (
            <div className="text-gray-600 text-sm md:text-base">
            Maxify Web Solutions' content calendar helps you organize your content strategy. We schedule and regularly update your content to keep your audience engaged.
            </div>
          )}
        </div>
      </div>

      <div className="py-4 transition duration-300 ease-in-out bg-white mt-4 px-2 rounded-md">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleAccordion(3)}
        >
          <h2 className="sm:text-base md:text-lg font-semibold">
          Hashtag Strategy:
          </h2>
          {openItem === 3 ? <FiMinusCircle className="text-blue-500" /> : <GoPlusCircle />}
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            openItem === 3 ? "max-h-screen bg-white p-4 rounded-lg mt-2" : "max-h-0"
          }`}
        >
          {openItem === 3 && (
            <div className="text-gray-600 text-sm md:text-base">
            Amplify your social media presence with our hashtag strategy. We identify relevant hashtags and integrate them into your posts to maximize visibility.
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>
      <SwiperSlide>
  <div className="flex flex-col md:flex-row bg-[#f4f7fb] lg:px-[150px]">
    {/* Left Side Content */}
    <div className="w-full md:w-1/2 p-6">
      <button className="bg-blue-100 text-[#2334DE] text-sm px-2 py-1 rounded-md mb-4">
        Ask Question
      </button>
      <h1 className="text-3xl lg:text-5xl font-bold mt-4 mb-4">
      Social Media 
      Campaign {" "}


        <span className="text-[#2334DE]">Management</span>
      </h1>
      <p className="text-gray-600 mt-4 text-justify">
      Effective social media campaigns can drive significant traffic and 
 engagement. We create and manage specific promotions that meet up 
with your business goals and produce measurable outcomes.
      </p>
      <div className="mt-6 rounded-lg p-4 flex items-center">
        <div className="bg-white p-7 border-l-[4px] border-[#2334DE] rounded relative">
          <div className="bg-[#2334DE] p-3 absolute rounded-full  top-[25%] left-[-25px]">
            <FaAward className="text-white text-2xl" />
          </div>
          <p className="text-3xl font-semibold ml-4">Winning Award</p>
        </div>
      </div>
    </div>

    {/* Right Side Accordion */}
    <div className="w-full md:w-1/2 p-6 my-auto">
      <div className="border-b border-gray-200 py-4 transition duration-300 ease-in-out bg-white mt-4 px-2 rounded-md">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleAccordion(1)}
        >
          <h2 className="text-base md:text-lg font-semibold">
          Campaign Strategy:
          </h2>
          {openItem === 1 ? <FiMinusCircle className="text-blue-500" /> : <GoPlusCircle />}
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            openItem === 1 ? "max-h-screen bg-white p-4 rounded-lg mt-2" : "max-h-0"
          }`}
        >
          {openItem === 1 && (
            <li className="text-gray-600 text-sm md:text-base">
            Our campaign strategy is centered on providing data-driven, effective digital marketing solutions that are customized to meet your particular business objectives. To increase reach and brand visibility, we combine site development, app design, graphic design, and SEO best practices with targeted ad campaigns and engaging content creation. By analyzing customer preferences and market trends, we develop strategies that boost engagement, produce results, and guarantee a strong online presence—all of which help your company expand in the competitive digital market of today.
            </li>
          )}
        </div>
      </div>

      {/* Additional Accordion Items */}
      <div className="border-b border-gray-200 py-4 transition duration-300 ease-in-out bg-white mt-4 px-2 rounded-md">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleAccordion(2)}
        >
          <h2 className="sm:text-base md:text-lg font-semibold">
          Ad Management:
          </h2>
          {openItem === 2 ? <FiMinusCircle className="text-blue-500" /> : <GoPlusCircle />}
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            openItem === 2 ? "max-h-screen bg-white p-4 rounded-lg mt-2" : "max-h-0"
          }`}
        >
          {openItem === 2 && (
            <div className="text-gray-600 text-sm md:text-base">
            To optimize your digital reach and return on investment, Maxify Web Solutions PVT. LTD. provides full-service ad management services. Our team creates targeted advertising campaigns on Google, Facebook, Instagram, and other platforms by utilizing data-driven tactics and creative optimization. To make sure your advertisements reach the appropriate people and generate significant engagement for your company, we take care of everything from setup and audience targeting to continuous management and performance analysis.
            </div>
          )}
        </div>
      </div>

      <div className="py-4 transition duration-300 ease-in-out bg-white mt-4 px-2 rounded-md">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleAccordion(3)}
        >
          <h2 className="sm:text-base md:text-lg font-semibold">
          Performance Tracking:
          </h2>
          {openItem === 3 ? <FiMinusCircle className="text-blue-500" /> : <GoPlusCircle />}
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            openItem === 3 ? "max-h-screen bg-white p-4 rounded-lg mt-2" : "max-h-0"
          }`}
        >
          {openItem === 3 && (
            <div className="text-gray-600 text-sm md:text-base">
            At Maxify Web Solutions, we think that results should be based on data. Using our performance tracking tools, you can keep an eye on the status of your project in real time, guaranteeing accountability, openness, and provable progress. We keep you updated at every stage, from digital marketing measurements to website analytics, assisting you in optimizing strategies and maximizing impact.
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>
      <SwiperSlide>
  <div className="flex flex-col md:flex-row bg-[#f4f7fb] lg:px-[150px]">
    {/* Left Side Content */}
    <div className="w-full md:w-1/2 p-6">
      <button className="bg-blue-100 text-[#2334DE] text-sm px-2 py-1 rounded-md mb-4">
        Ask Question
      </button>
      <h1 className="text-3xl lg:text-5xl font-bold mt-4 mb-4">
      Community Building 
and 


        <span className="text-[#2334DE]">
        Engagement</span>
      </h1>
      <p className="text-gray-600 mt-4 text-justify">
      Building a loyal community around your brand is key to long-term 
 success. We help you foster meaningful relationships with your audience 
through active engagement and interaction.
      </p>
      <div className="mt-6 rounded-lg p-4 flex items-center">
        <div className="bg-white p-7 border-l-[4px] border-[#2334DE] rounded relative">
          <div className="bg-[#2334DE] p-3 absolute rounded-full  top-[25%] left-[-25px]">
            <FaAward className="text-white text-2xl" />
          </div>
          <p className="text-3xl font-semibold ml-4">Winning Award</p>
        </div>
      </div>
    </div>

    {/* Right Side Accordion */}
    <div className="w-full md:w-1/2 p-6 my-auto">
      <div className="border-b border-gray-200 py-4 transition duration-300 ease-in-out bg-white mt-4 px-2 rounded-md">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleAccordion(1)}
        >
          <h2 className="text-base md:text-lg font-semibold">
          Audience Interaction:
          </h2>
          {openItem === 1 ? <FiMinusCircle className="text-blue-500" /> : <GoPlusCircle />}
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            openItem === 1 ? "max-h-screen bg-white p-4 rounded-lg mt-2" : "max-h-0"
          }`}
        >
          {openItem === 1 && (
            <li className="text-gray-600 text-sm md:text-base">
            At Maxify Web Solutions, we foster meaningful interactions with your audience and address their queries promptly. Our customer support solutions prioritize your needs.
            </li>
          )}
        </div>
      </div>

      {/* Additional Accordion Items */}
      <div className="border-b border-gray-200 py-4 transition duration-300 ease-in-out bg-white mt-4 px-2 rounded-md">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleAccordion(2)}
        >
          <h2 className="sm:text-base md:text-lg font-semibold">
          Community Growth:
          </h2>
          {openItem === 2 ? <FiMinusCircle className="text-blue-500" /> : <GoPlusCircle />}
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            openItem === 2 ? "max-h-screen bg-white p-4 rounded-lg mt-2" : "max-h-0"
          }`}
        >
          {openItem === 2 && (
            <div className="text-gray-600 text-sm md:text-base">
            We nurture community growth through engaging content, events, and campaigns. Maxify Web Solutions helps you build a loyal following and expand your online presence.
            </div>
          )}
        </div>
      </div>

      <div className="py-4 transition duration-300 ease-in-out bg-white mt-4 px-2 rounded-md">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleAccordion(3)}
        >
          <h2 className="sm:text-base md:text-lg font-semibold">
          Influencer Collaboration:
          </h2>
          {openItem === 3 ? <FiMinusCircle className="text-blue-500" /> : <GoPlusCircle />}
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            openItem === 3 ? "max-h-screen bg-white p-4 rounded-lg mt-2" : "max-h-0"
          }`}
        >
          {openItem === 3 && (
            <div className="text-gray-600 text-sm md:text-base">
            Partner with influential voices in your industry through our strategic collaborations. Maxify Web Solutions identifies and connects you with relevant influencers to elevate your brand.
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>

    </Swiper>
    </div>

      {/* section 6 */}
      <div className="flex flex-col md:flex-row items-center sm:p-3 md:p-8 bg-background md:w-[94%] lg:w-[80%] mx-auto">
        <div className="md:w-1/2 w-full">
          <span className=" bg-[#ddddfd] px-3 py-1 text-sm font-bold text-[#2334DE] rounded mb-4">
            Why CHOOSE US
          </span>
          <h3 className="text-3xl md:text-5xl mt-8  font-bold">
            For SMO <br /> Services{" "}
            <span className="text-[#2334DE]">in India?</span>
          </h3>
          <ul className="space-y-4 text-sm  w-fit py-6">
        {plans.map((step, index) => (
          <li
            key={index}
            className="flex items-center text-base text-gray-700 cursor-pointer w-fit"
            onMouseEnter={() => setHoveredStep(index)}
            onMouseLeave={() => setHoveredStep(null)}
          >
            {hoveredStep === index ? (
              <div className="flex items-left space-x-4 min-h-[150px]  flex-col">
              <div className="flex items-center">
                  <FaCheckCircle className="text-[#2334DE] mr-4" />
                <span> {step.title}</span> 
                </div>
                <span className="text-gray-800">{step.description}</span>
              </div>
            ) : (
              hoveredStep === null && (
                <div className="flex items-center">
                  <FaCheckCircle className="text-[#2334DE] mr-4" />
                <span> {step.title}</span> 
                </div>
              )
            )}
          </li>
        ))}
      </ul>
      <a href="https://wa.me/917428309119" target="blank">
          <button
            className="mt-8 rounded-full flex items-center relative px-8 py-2 text-[#2334DE] bg-white isolation-auto z-10 border-2 border-[#2334DE]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[#2334DE] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-white"
          >
            Learn More{" "}
            <span className="ml-2">
              <GoArrowRight />
            </span>
          </button>
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img
            alt="Laptop displaying SMO services"
            src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512526/why-chose-us-two.png_1_nanin6.png"
          />
        </div>
      </div>
      {/* price section  */}
      <div>
        <section className="bg-white">
          <div className="py-8 px-20 mx-auto lg:py-16 md:px-20 sm:px-2">
            <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
              <div>
                <span className="mb-4 px-6 py-1 rounded-md text-4xl tracking-tight bg-[#dde7fa] font-semibold text-[#2334DE]">
                  SMO Packages
                </span>
              </div>
            </div>
            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
              {/* Starter Plan */}
              <PricingCard
                title="Basic"
                price="RS-19999 / $249"
                index={1}
                color="bg-[#2334DE]"
                features={[
                  "Setting Goals",
                  "Account Management – 2 (FB & IG)",
                  "Hashtag Research",
                  "Content Strategy Creation",
                  "Facebook Management",
                ]}
                features2={[
                  "Page Creation",
                  "Facebook Cover",
                  "Profile Pic Creation",
                  "Page Optimization",
                  "Posting Per Week – 3",
                  "Page Monitoring",
                  "Call To Action Button Creation",
                  "Instagram Management",
                  "Engagement Strategy",
                  "IGTV Upload (Video provided by Client)",
                ]}
              />
              {/* Company Plan */}
              <PricingCard
                title="Advanced"
                price="RS-29999  / $379"
                index={2}
                color="bg-black"
                features={[
                  "Setting Goals",
                  "Account Management – 3",
                  "Hashtag Research",
                  "Content Strategy Creation",
                  "Facebook Management",
                ]}
                features2={[
                  "Page Creation",
                  "Facebook Cover",
                  "Profile Pic Creation",
                  "Page Optimization",
                  "Posting Per Week – 6",
                  "Page Monitoring",
                  "Call To Action Button Creation",
                  "Instagram Management",
                  "Engagement Strategy",
                  "IGTV Upload (Video provided by Client)",
                  "Facebook Story Creation",
                  "Video Posting (Provide By Client)",
                ]}
              />
              {/* Enterprise Plan */}
              <PricingCard
                title="Enterpriser"
                price="RS-39999 / $499"
                index={3}
                color="bg-[#2334DE]"
                features={[
                  "Setting Goals",
                  "Account Management – 6",
                  "Hashtag Research",
                  "Content Strategy Creation",
                  "Facebook Management",
                ]}
                features2={[
                  "Page Creation",
                  "Facebook Cover",
                  "Profile Pic Creation",
                  "Page Optimization",
                  "Posting Per Week – 10",
                  "Page Monitoring",
                  "Posting Sharing in Groups",
                  "Instagram Management",
                  "Engagement Strategy",
                  "IGTV Upload (Video provided by Client)",
                  "Facebook Story Creation",
                  "Video Posting (Provide By Client)",
                  "LinkedIn Management",
                  "Thumbnail, Keywords Research"
                ]}
              />
            </div>
          </div>
        </section>
      </div>

      {/* Section * */}
      <div className="pt-10 mt-10">
        <div className=" text-center">
          <span className="inline-block px-4 py-1 text-sm font-medium text-[#2334DE] bg-blue-100 rounded-full mb-4">
            In The Digital Age
          </span>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
            Having a strong social media <br className="hidden md:block" />
            presence is{" "}
            <span className="text-[#2334DE]">no longer optional</span>
          </h1>
        </div>

        {/* Middle Section with Linear Gradient Background */}
        <div
          className=" mt-8 py-10"
          style={{
            background: "linear-gradient(to bottom, white 50%, #2334DE 50%)",
          }}
        >
          <div className="md:w-[90%] lg:w-[80%] mx-auto  flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/2 flex justify-end">
              <img
                src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512505/Image_13_txhljf.png"
                alt="Team Working"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0 p-5 rounded-lg text-gray-600 bg-white">
              <p className="text-sm text-justify md:text-lg">
                It’s essential. As the leading SMO services company in India,
                Maxify web solution is committed to helping you build and
                maintain a powerful online presence that drives growth and
                success. Whether you’re looking to enhance your brand awareness,
                engage with your audience, or increase website traffic, our
                expert team is here to help.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section with Solid Blue Background */}
        <div className="bg-[#2334DE] text-white text-center py-6">
          <p className="text-base md:text-lg font-semibold">
            Contact us today to learn more about our SMO services and how we can
            help your business thrive in the competitive digital landscape.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SMO;
