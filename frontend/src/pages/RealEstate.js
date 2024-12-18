import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaGlobeAmericas, FaLongArrowAltLeft } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { MdWeb } from "react-icons/md";
import { FaLaptop, FaHome, FaExchangeAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { BsBarChartFill } from "react-icons/bs";
import { IoIdCardSharp } from "react-icons/io5";
import SEOComponent from "../Components/SEOComponent";

const features = [
  {
    icon: [
      <FaLaptop className="text-4xl text-yellow-400" />,
      <HiUserGroup className="text-4xl text-yellow-400" />,
    ],
    title: [
      "Responsive and Mobile-Optimized Designs:",
      "Lead Management Devices:",
    ],
    descriptions: [
      "Guaranteeing your site looks and works completely across all gadgets-- desktop computers, tablet computers, and smart devices.",
      "Ensuring a seamless user experience on all screen sizes and devices.",
    ],
  },
  {
    icon: [
      <FaHome className="text-4xl text-yellow-400" />,
      <BsBarChartFill className="text-4xl text-yellow-400" />,
    ],
    title: [
      "Advanced Residential Or Commercial Property Browse Performance:",
      "SEO-Friendly Framework:",
    ],
    descriptions: [
      "Customized search options that enable users to filter buildings by location, price, type, facilities, and more.",
      "Constructed with search engine optimization (SEARCH ENGINE OPTIMIZATION) ideal techniques to help you rank higher on search engines and drive organic traffic.",
    ],
  },
  {
    icon: [
      <FaExchangeAlt className="text-4xl text-yellow-400" />,
      <IoIdCardSharp className="text-4xl text-yellow-400" />,
    ],
    title: ["Assimilation with MLS and IDX:", "High-Security Requirements:"],
    descriptions: [
      "Smooth combination with Multiple Listing Service (MLS) and Internet Data Exchange (IDX) feeds to present real-time building listings.",
      "Advanced safety and security features to protect customer information and ensure risk-free transactions.",
    ],
  },
];

const services = [
  {
    img: "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513018/image_3_lawiaz.png",
    title: "Improved Customer Experience:",
    description: `Offer a seamless and interesting customer experience that maintains visitors on your website longer.`,
  },
  {
    img: "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513018/image_4_ozybgp.png",
    title: "List Building and Conversion:",
    description: `Use effective devices and functions to bring in and transform even more leads.`,
  },
  {
    img: "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513032/Mask_group_d2wswy.png",
    title: "Increased Presence:",
    description: `With an SEO-optimized website, you can accomplish higher exposure in search engine results.`,
  },
  {
    img: "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513018/image_3_lawiaz.png",
    title: "Improved Customer Experience:",
    description: `Offer a seamless and interesting 
customer experience that maintains 
visitors on your website longer.`,
  },
  {
    img: "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513018/image_4_ozybgp.png",
    title: "Data Safety and Compliance:",
    description: `Our sites abide by the current safety 
criteria to protect sensitive customer 
data.`,
  },
  {
    img: "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513032/Mask_group_d2wswy.png",
    title: "Future-Ready Solutions:",
    description: `We develop websites that are not only 
functional today but likewise versatile 
to future technological developments 
in the realty sector`,
  },
];

const RealEstate = () => {
  const [descriptionIndices, setDescriptionIndices] = useState([0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDescriptionIndices((prevIndices) =>
        prevIndices.map(
          (index, i) => (index + 1) % features[i].descriptions.length
        )
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-[70px] font-pop">
      <div>
        <SEOComponent
          title="Maxify-Realstate"
          description="Maxify Web Solutions offers digital marketing services in Noida and Delhi NCR. We help businesses grow with AI-powered marketing strategies."
          keywords="Home, Digital Marketing, Noida, Delhi NCR, Maxify Web Solutions"
        />
      </div>
      <div className="flex flex-col md:flex-row md:space-x-4 mt-8 w-[100%] mx-auto md:w-[90%] lg:w-[90%]">
        {/* Left Side - Hidden in Mobile View */}
        <div className="flex w-full md:w-1/2 justify-start items-center relative p-2">
          <img
            src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513021/image_5_oifij8.png"
            alt="Left Side"
            className="w-[80%] object-cover h-[90%] rounded-xl mx-auto overflow-hidden"
          />
        </div>
        {/* Right Side - Visible in Mobile View */}
        <div className="w-full md:w-1/2 py-4 md:p-8 sm:px-3  mt-4">
          <p className="md:text-xl sm:text-center md:text-left text-[#f8b948] font-[700] font-manrope">
            Real-estate Industries{" "}
          </p>
          <h1 className="md:text-4xl sm:text-3xl font-bold md:mt-4 mb-2 sm:text-center md:text-left font-manrope">
            <span className="text-black">
              Real Estate Website Development by Maxify Solution
            </span>
          </h1>
          <p className="sm:text-base md:text-xl text-justify  text-gray-600 mb-6">
            In the vibrant and ever-evolving real estate field, having a durable
            online visibility is no longer optional-- it's a need. At Maxify
            Remedy, we specialize in real estate website development and realty
            website growth that satisfies the one-of-a-kind demands of realty
            agents, residential or commercial property programmers, and broker
            agent firms. Our objective is to create aesthetically appealing,
            feature-rich, and easy-to-use internet sites that not only draw in
            possible purchasers but also drive involvement and conversions. With
            our proficiency in real estate website development, you can boost
            your property company to brand-new heights, leveraging the most
            up-to-date internet innovation to attract attention in an open
            market.
          </p>
          <a href="https://wa.me/917428309119" target="_blank">
            <button
              className="mt-8 rounded-full flex items-center relative px-8 py-2 text-white bg-[#f9c461] isolation-auto z-10 border-2 border-[#f8b948]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[#f8b948] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-white"
            >
              Contact Now
            </button>
          </a>
        </div>
      </div>

      {/* 2nd */}
      <div className="bg-realestate py-4">
        <div className="flex flex-col lg:flex-row md:space-x-4 w-[100%] mx-auto md:w-[90%] lg:w-[90%]">
          {/* Right Side - Visible in Mobile View */}
          <div className="w-full lg:w-1/2 py-4 md:p-8 sm:px-3 space-y-4">
            <h3 className="sm:text-3xl md:text-5xl font-bold mt-4 mb-2 sm:text-center md:text-left font-sans">
              <span className="text-gray-700">
                Why Select Maxify Solution for Real Estate Website Development?
              </span>
            </h3>
            <div className="md:flex justify-between bg-white rounded-xl p-3 sm:hidden lg:w-[800px] z-[5] relative">
              <div className="text-gray-400 font-[500] flex items-center text-xl gap-4">
                <span>
                  <IoSearch className="text-3xl text-gray-400" />
                </span>
                <span>Real Estate Website </span>
              </div>
              <div className="text-gray-400 font-[500] flex items-center text-xl gap-5">
                <span>
                  <FaGlobeAmericas className="text-2xl text-gray-400" />
                </span>
                <span>Location </span>
                <span>
                  <FaAngleDown className="text-xl text-gray-400" />
                </span>
                <button className="bg-[#f8b948] px-6 py-2 text-white rounded-lg ">
                  Find
                </button>
              </div>
            </div>
            <p className="sm:text-sm md:text-base text-justify  text-gray-600 mb-6">
              Particularly in the realty market, our approach is
              customer-centric, focusing on delivering customized options that
              satisfy the distinctive demands of each client. We recognize the
              complexities of the property market and produce internet sites
              that are more than simply electronic business cards; they are
              thorough tools for list building, client engagement, and
              organization development.
            </p>
          </div>
          {/* Left Side */}
          <div className="flex w-full lg:w-1/2 justify-start items-center p-2 relative">
            <div className="bg-white p-6 flex items-center absolute right-[20%] top-4 gap-2 rounded-lg">
              <div className="h-10 w-10 bg-[#f8b948] text-white rounded-xl flex justify-center items-center text-2xl">
                <MdWeb />
              </div>
              <div>
                <h3 className="text-xl font-[500] text-gray-600">
                  Opportunity Inc.
                </h3>
                <p className="text-gray-400 text-sm">Sofware Developer</p>
              </div>
            </div>
            <img
              src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513024/image_bf7suu.png"
              alt="Left Side"
              className=" object-cover mt-[100px] h-auto rounded-xl mx-auto overflow-hidden"
            />
            <img
              src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513016/image_1_vk4vrd.png"
              alt="Left Side"
              className=" object-cover mb-[100px] h-auto rounded-xl mx-auto overflow-hidden"
            />
          </div>
        </div>
      </div>

      {/* section 3 */}
      <div className="flex flex-col lg:flex-row items-center w-[100%] mx-auto md:w-[90%] lg:w-[90%]  px-4 py-8 gap-6">
        <div className=" lg:w-[30%] flex flex-col justify-center items-center px-4 text-3xl md:text-[38px] md:leading-[56px]">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-blue-600">Key Features</span>
          </h3>
          <h2 className=" text-center mb-2  font-semibold">
            of Our <span className="text-blue-600"> Real Estate </span>Website
          </h2>
          <h3 className="font-[500] text-center ">Development Providers:</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:w-[70%] px-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg sm:min-h-[250px] md:min-h-[300px] shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex justify-center mb-4">
                {feature.icon[descriptionIndices[index]]}
              </div>
              <h4 className="text-sm font-semibold text-center mb-4">
                {feature.title[descriptionIndices[index]]}
              </h4>
              <p className="text-gray-600 text-center text-[12px] flex items-center justify-center">
                {feature.descriptions[descriptionIndices[index]]}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 4th */}
      <div className="h-auto p-2 md:p-8 bg-realestate">
        <div className=" mx-auto rounded-lg overflow-hidden relative">
          <p className="text-lg md:text-xl font-semibold md:font-bold text-center text-[#F8B948]">
            Comprehensive
          </p>
          <h3 className="text-3xl font-bold text-center py-2  text-[black]">
            Real Estate Web Growth Solutions
          </h3>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            speed={500}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper relative"
          >
            <SwiperSlide>
              <div className="flex flex-col md:flex-row mt-2 items-center">
                <div className="md:w-1/2  flex justify-center items-center">
                  <img
                    src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513017/image_2_stmled.png"
                    alt="Real Estate"
                    className=" inset-0"
                  />
                </div>
                <div className="md:w-1/2 p-2 md:p-6 space-y-3">
                  <h2 className="text-2xl font-semibold lg:w-full text-[#F8B948] mb-4 sm:text-center md:text-left">
                    1. Custom Real Estate Website Development and Design
                  </h2>
                  <p className="text-gray-600 mb-4 text-justify text-sm md:text-base">
                    A strong online presence starts with a well-designed
                    internet site. At Maxify Solution, we create customized real
                    estate website development solutions and property internet
                    sites that are not just visually attractive but also
                    extremely useful. Each internet site is tailored to show the
                    distinct branding of our customers while supplying a smooth
                    customer experience.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-3 text-sm md:text-base text-justify">
                    <li>
                      Visual Allure and Branding: Distinct and appealing website
                      layouts that reflect your brand identity and attract
                      potential clients.
                    </li>
                    <li>
                      Easy Use Navigating: User-friendly and easy-to-navigate
                      sites that enhance customer experience and lower bounce
                      prices.
                    </li>
                    <li>
                      Interactive Residential Or Commercial Property Maps:
                      Assimilation of interactive maps that enable individuals
                      to check out residential or commercial properties by area,
                      improving customer engagement.
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col md:flex-row mt-2 items-center">
                <div className="md:w-1/2  flex justify-center items-center">
                  <img
                    src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513025/image-1_hozzdq.png"
                    alt="Real Estate"
                    className=" inset-0"
                  />
                </div>
                <div className="md:w-1/2 p-2 md:p-6 space-y-3">
                  <h2 className="text-2xl font-semibold lg:w-full text-[#F8B948] mb-4 sm:text-center md:text-left">
                    2. Real Estate CRM Integration for Effective Website
                    Development
                  </h2>
                  <p className="text-gray-600 mb-4 text-justify text-sm md:text-base">
                    Client Partnership Management (CRM) is essential for any
                    real estate company. Our real estate website development
                    solutions include CRM integration, enabling you to handle
                    leads, track client communications, and enhance sales
                    processes.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-3 text-sm md:text-base text-justify">
                    <li>
                      Central Lead Monitoring: Effectively handle leads from
                      multiple resources and automate follow-ups
                    </li>
                    <li>
                      Automated Advertising And Marketing Campaigns: Run
                      automated e-mail marketing campaigns to nurture leads and
                      keep customersE
                    </li>
                    <li>
                      Customer Interaction: Streamline communication with
                      possible clients through incorporated messaging and
                      notification systems.
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col md:flex-row mt-2 items-center">
                <div className="md:w-1/2  flex justify-center items-center">
                  <img
                    src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513027/image-2_mvsrvr.png"
                    alt="Real Estate"
                    className=" inset-0"
                  />
                </div>
                <div className="md:w-1/2 p-2 md:p-6 space-y-3">
                  <h2 className="text-2xl font-semibold lg:w-full text-[#F8B948] mb-4 sm:text-center md:text-left">
                    3. Building Management System (PMS) for Real Estate Website
                    Development
                  </h2>
                  <p className="text-gray-600 mb-4 text-justify text-sm md:text-base">
                    A durable Property Administration System (PMS) can
                    considerably improve home monitoring procedures. We offer
                    PMS services that integrate flawlessly with your website,
                    enabling much better building management and client service.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-3 text-sm md:text-base text-justify">
                    <li>
                      Comprehensive Property Listings: Manage residential
                      property listings successfully with functions such as bulk
                      uploads, automated updates, and indepth residential
                      property infoE
                    </li>
                    <li>
                      Tenant and Proprietor Portals: Dedicated portals for
                      lessees and property owners for streamlined communication
                      and solution management
                    </li>
                    <li>
                      Upkeep Request Management: Streamlined maintenance request
                      handling, enhancing renter fulfillment and functional
                      efficiency.
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col md:flex-row mt-2 items-center">
                <div className="md:w-1/2  flex justify-center items-center">
                  <img
                    src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513030/image-3_sdka5a.png"
                    alt="Real Estate"
                    className=" inset-0"
                  />
                </div>
                <div className="md:w-1/2 p-2 md:p-6 space-y-3">
                  <h2 className="text-2xl font-semibold lg:w-full text-[#F8B948] mb-4 sm:text-center md:text-left">
                    4. Real Estate Mobile App Development and Integration
                  </h2>
                  <p className="text-gray-600 mb-4 text-justify text-sm md:text-base">
                    In today s mobile-first globe, a devoted real estate website
                    development approach must include mobile applications to
                    boost engagement. We concentrate on property mobile app
                    advancement that allows customers to search properties,
                    schedule, and get in touch with agents on the go.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-3 text-sm md:text-base text-justify">
                    <li>
                      Property Browse and Filters: Advanced search and filtering
                      choices for discovering buildings swiftlyE
                    </li>
                    <li>
                      Press Notices: Notify users of brand-new listings, cost
                      adjustments, and upcoming open residences with press
                      noticesE
                    </li>
                    <li>
                      Online Tours: Integrate digital scenic tours to supply a
                      sensible residential or commercial property viewing
                      experience from anywhere.
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col md:flex-row mt-2 items-center">
                <div className="md:w-1/2  flex justify-center items-center">
                  <img
                    src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513029/image-4_g5cwsy.png"
                    alt="Real Estate"
                    className=" inset-0"
                  />
                </div>
                <div className="md:w-1/2 p-2 md:p-6 space-y-3">
                  <h2 className="text-2xl font-semibold lg:w-full text-[#F8B948] mb-4 sm:text-center md:text-left">
                    5. IDX and MLS Integration for Real Estate Website
                    Development
                  </h2>
                  <p className="text-gray-600 mb-4 text-justify text-sm md:text-base">
                    For real estate sites, incorporating IDX (Net Information
                    Exchange) and MLS (Several Listing Solution) is crucial for
                    showing updated and accurate building listings. Our real
                    estate website development solutions include seamless IDX
                    and MLS assimilation to maintain your website presence.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-3 text-sm md:text-base text-justify">
                    <li>
                      Real-Time Property Listings: Automatically upgrade
                      residential or commercial property listings from MLS in
                      real-timeE
                    </li>
                    <li>
                      Lead Capture and Conversion: Use residential property data
                      to catch leads and drive conversionsE
                    </li>
                    <li>
                      Personalized Display Options: Dressmaker home listing
                      shows to fit your brand name and individual experience
                      goals.
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col md:flex-row mt-2 items-center">
                <div className="md:w-1/2  flex justify-center items-center">
                  <img
                    src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513031/image-5_ssrw6c.png"
                    alt="Real Estate"
                    className=" inset-0"
                  />
                </div>
                <div className="md:w-1/2 p-2 md:p-6 space-y-3">
                  <h2 className="text-2xl font-semibold lg:w-[100%] text-[#F8B948] mb-4 sm:text-center md:text-left">
                    6. Virtual Tours and 3D Property Visualization in Real
                    Estate Website Development
                  </h2>
                  <p className="text-gray-600 mb-4 text-justify text-sm md:text-base">
                    Providing prospective purchasers with immersive online
                    excursions and 3D building visualization can greatly improve
                    customer experience. We incorporate advanced tools that
                    permit top-quality, interactive residential or commercial
                    property tours.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-3 text-sm md:text-base text-justify">
                    <li>
                      360-Degree Online Tours: Permit individuals to take a
                      360-degree tour of homes without leaving their homes
                    </li>
                    <li>
                      3D Layout: Give comprehensive 3D floor plans to aid
                      customers in imagining the space better
                    </li>
                    <li>
                      Increased Truth (AR) Includes: Make use of AR to
                      demonstrate how homes can look with different furniture
                      layouts or remodelings
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <div className="absolute bottom-4 right-[100px]">
              <div className="swiper-button-prev-custom">
                <FaLongArrowAltRight
                  size={34}
                  className="text-3xl sm:none md:block text-white bg-[#ffcb66] transform rotate-180 hover:shadow-lg p-2 rounded-lg"
                />
              </div>
            </div>
            <div className="absolute bottom-4 right-2">
              <div className="swiper-button-next-custom">
                <FaLongArrowAltLeft
                  size={34}
                  className="text-3xl sm:none md:block text-white bg-[#ffcb66] transform rotate-180 hover:shadow-lg p-2 rounded-lg"
                />
              </div>
            </div>
          </Swiper>
        </div>
      </div>

      {/* 5th */}
      <div className="flex flex-col md:flex-row md:space-x-4 mt-8 w-[100%] mx-auto md:w-[90%] lg:w-[90%]">
        {" "}
        {/* Left Side - Hidden in Mobile View */}
        <div className="flex w-full md:w-1/2 sm:h-[350px] md:h-auto justify-center relative px-2">
          <img
            src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513015/Group_164554_pzaekb.png"
            alt="Left Side"
            className="md:w-[80%] sm:w-full"
          />
        </div>
        {/* Right Side - Visible in Mobile View */}
        <div className="w-full md:w-1/2 flex flex-col justify-around p-4 md:p-4 sm:px-3">
          <h3 className="text-2xl md:text-3xl font-bold text-[#F8B948] text-center mt-4 mb-2">
            <span className="text-black font-[400]">
              {" "}
              Advanced Technologies We Make Use Of in{" "}
            </span>{" "}
            <br />
            Real Estate Website Development
          </h3>
          <div className=" border p-6 space-y-4">
            <p className="sm:text-sm md:text-base text-justify  text-gray-600 leading-8">
              At Maxify Option, we utilize the latest innovations to provide
              phenomenal real estate website development options.
            </p>
            <ul className="sm:text-sm md:text-base text-justify  text-gray-600 leading-8 list-disc space-y-4 px-6">
              <li>
                Artificial Intelligence (AI) and Machine Learning (ML): Execute
                AI-driven chatbots for instant consumer support and personalized
                individual experiences.
              </li>
              <li>
                Blockchain Innovation: Make certain safe and clear building
                transactions using blockchain modern technology.
              </li>
              <li>
                Cloud Solutions: Scalable cloud-based options for residential or
                commercial property data management and very easy access to
                information.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/*  */}
      {/* Slider */}
      <div className="bg-img">
        <div className="w-full max-w-6xl mx-auto py-12 px-4 relative">
          <h2 className="sm:text-3xl lg:text-5xl font-bold text-center">
            <span className="text-[#ffbf00]"> Benefits of Partnering with</span>{" "}
            Maxify Solution for Real Estate Website Development
          </h2>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            speed={500}
            slidesPerGroup={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
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
                <div
                  className={`bg-white shadow-lg rounded-xl min-h-[320px] flex flex-col justify-end slider-card bg-slide relative overflow-hidden ${
                    index === 1 || index === 4
                      ? "translate-y-[-20px]"
                      : "translate-y-[20px]"
                  } transition-transform duration-300`}
                >
                  <img
                    src={service.img}
                    className="min-h-[100%] w-[100%] object-cover absolute"
                    alt="maxify websolution"
                  />
                  <div className="text-white z-10 px-3">
                    <h2 className="text-[16px] font-semibold mb-4">
                      {service.title}
                    </h2>
                    <p className=" mb-6 text-[14px] leading-6 text-justify">
                      {service.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="next absolute  top-[50%] right-[-30px] transform">
            <FaLongArrowAltRight
              size={34}
              className="text-3xl sm:none md:block text-[#ea6f2e] border border-[#ea6f2e] hover:shadow-lg p-2 rounded-full"
            />
          </div>
          <div className="prev absolute  top-[50%] left-[-30px]">
            <FaLongArrowAltRight
              size={34}
              className="text-3xl  sm:none md:block text-[#ea6f2e] border border-[#ea6f2e] transform rotate-180 hover:shadow-lg p-2 rounded-full"
            />
          </div>
        </div>
      </div>
      {/*  */}
      <section className="w-full md:w-[90%] mx-auto px-4 py-6 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
            <span className="text-yellow-400">Maxify Solution:</span> You're
            Relied On Companion
          </h3>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-center mb-12">
            in Real Estate Website Development
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 relative">
              <div className="bg-[#37937e] rounded-tr-[100px] rounded-bl-[100px] p-4 md:p-8">
                <img
                  src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513022/image_6_sa9jil.png"
                  alt="Real estate website development"
                  width={500}
                  height={300}
                  className="rounded-tr-[80px] rounded-bl-[80px] object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-gray-700 sm:text-sm md:text-lg border p-4 text-justify">
                At Maxify Remedy, we are dedicated to offering innovative and
                detailed real estate website development services that equip
                realty experts to be successful in the electronic age. Whether
                you are a property agent seeking to enhance your online
                visibility, a building programmer wishing to display your latest
                tasks, or a broker agent company seeking to enhance procedures,
                we have the proficiency and experience to bring your vision to
                life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* last section */}
      <div className="bg-[#87beb2] rounded-lg px-4 md:w-[90%] mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 w-full mb-6 md:mb-0   md:px-10">
          <h2 className="sm:text-3xl md:text-5xl font-bold text-white mb-4 p-2">
            Get In Touch With Us Today
          </h2>
          <p className="text-white sm:text-base md:text-2xl mb-6 text-justify p-2">
            All set to transform your property service with a powerful and
            interesting website? Contact Maxify Remedy today to find out more
            regarding our real estate website development services and just how
            we can help you achieve your digital objectives in the competitive
            real estate market.
          </p>
          <form className="flex sm:w-full md:w-[50%] bg-white p-2 rounded-lg">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-grow px-4 py-2 sm:text-sm md:text-base rounded-l-md focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-[#2334de] text-white px-2 py-1 md:px-6 md:py-2 rounded-r-md hover:bg-blue-700 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="md:w-1/3">
          <div className=" rounded-lg p-4 relative">
            <img
              src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513022/image_7_ubi61u.png"
              alt="Hand holding smartphone"
              className="w-full h-auto rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstate;
