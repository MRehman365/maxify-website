import React, { useEffect, useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { MdMonitor, MdEdit, MdChatBubble } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import v1 from "../Assets/VID-20241025-WA0042.mp4";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Servicesmain = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [showContentA, setShowContentA] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowContentA((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleWatchDemoClick = () => {
    setShowVideo(true);
  };

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute top-1/2 -left-14 transform -translate-y-1/2 cursor-pointer z-10  p-2 rounded-full text-[#2334de] text-4xl md:block sm:hidden"
      >
        <FaArrowAltCircleLeft />
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute top-1/2 -right-14 transform -translate-y-1/2 cursor-pointer z-10  p-2 rounded-full text-[#2334de] text-4xl md:block sm:hidden"
      >
        <FaArrowAltCircleRight />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  const web = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

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

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between md:w-[90%] lg:w-[80%] mx-auto p-2 mt-4">
        <div className="lg:w-1/2 p-2 md:p-4">
          <div className="sm:w-full md:w-[600px] mx-auto mb-4">
            <span className="text-base text-[#4F7633] bg-[#BEEA9D38] p-4 rounded-full">
              #growtogether
            </span>
          </div>
          <div className="flex items-left flex-col sm:w-full mx-auto">
            <h3 className="text-3xl md:text-4xl font-semibold text-black mt-4">
              <span className="text-[#2334DE]">Maxify Solution:</span> Digital
              Business Growth Specialists
            </h3>
            <p className="text-base mt-4 text-justify text-gray-500 leading-6">
              A top-notch digital agency offers complete services in Digital
              Marketing, Website Development, HRMS Solutions, Graphic Design, 3D
              Modeling, and more. Whether you're a new business or an
              established one, our team of experts spearheads innovative,
              result-oriented solutions customized for your unique needs.
            </p>
            <div className="flex gap-5 md:mt-[60px]">
              <Link to="/contact">
                <button className="mt-8 py-3 text-base font-[500] md:text-[14px] sm:px-6 md:px-6 rounded-full relative text-white bg-[#a62fce] isolation-auto z-10 border-2 border-[#a62fce] hover:text-[#a62fce]">
                  Get Started
                </button>
              </Link>
              {/* {!showVideo && (
                <button
                  onClick={handleWatchDemoClick}
                  className="mt-8 py-2 text-sm md:text-lg flex items-center gap-1 sm:px-2 md:px-5 rounded-sm relative text-black md:font-bold isolation-auto z-10 hover:text-black"
                >
                  <FaCirclePlay className="text-xl md:text-2xl" />
                  Watch Demo
                </button>
              )} */}
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-8 flex items-center justify-center relative sm:h-[400px] md:h-[600px]">
          <div className="h-[100%] w-[100%] overflow-hidden flex justify-center items-center rounded-lg relative z-10">
            {/* Conditionally render the image or video */}
            {!showVideo ? (
              <img
                src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512678/Property_1_Component_11_m3dted.png"
                alt="Person using a tablet"
                className="h-[80%] w-auto object-fit rounded-lg relative sm:bottom-4"
              />
            ) : (
              <video loop muted src={v1} />
            )}
          </div>
        </div>
      </div>

      {/*  */}

      <div className="w-full md:w-[90%] lg:w-[80%] mx-auto py-10 px-4">
        <Slider {...settings}>
          {/* First Slide */}
          <div className=" space-x-6">
            <div className="flex flex-col md:flex-row items-center">
              {/* Left Content */}
              <div className="w-full md:w-1/2 p-6 rounded-lg space-y-4">
                <span className="text-sm text-[#4F7633] bg-[#BEEA9D38] p-3  rounded-full ">
                  Our Services
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
                  Digital Marketing
                </h2>
                <p className="text-base text-gray-600 mb-6">
                  Our Full Suite Of Digital Marketing Services Ensures A Strong
                  Online Presence For Your Business.
                </p>
                <p className="text-base text-gray-600">
                  <strong> A. </strong>SEO Service­s With comprehensive SEO
                  se­rvices, we bolster your we­bsite’s visibility and organic
                  traffic.
                </p>
                <button className="mt-6 bg-purple-600 text-white py-3 px-6 rounded-full shadow-md">
                  See Detail
                </button>
              </div>

              {/* Right Side - 4 Boxes */}
              <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start">
                  <div className="bg-indigo-900 rounded-full p-4 mb-4">
                    <MdMonitor className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-sm md:text-lg font-semibold mb-2 text-gray-800">
                    On-Page SEO:
                  </h2>
                  <p className="sm:text-[12px] md:text-sm text-gray-600">
                    Keyword Optimization, Meta Tags, And Content Enhancement.
                  </p>
                </div>

                <div className="bg-indigo-900 rounded-lg shadow-md p-6 flex flex-col items-start">
                  <div className="bg-purple-500 rounded-full p-4 mb-4">
                    <FaInstagram className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-sm md:text-lg font-semibold mb-2 text-white">
                    Off-Page SEO:
                  </h2>
                  <p className="text-sm text-white">
                    Quality Backlinks, Social Bookmarking, And Guest Posting.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start">
                  <div className="bg-indigo-900 rounded-full p-4 mb-4">
                    <MdEdit className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-sm md:text-lg font-semibold mb-2 text-gray-800">
                    Technical SEO:
                  </h2>
                  <p className="sm:text-[12px] md:text-sm text-gray-600">
                    Website Speed Optimization, Mobile-Friendliness, And Schema
                    Markup.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start">
                  <div className="bg-indigo-900 rounded-full p-4 mb-4">
                    <MdChatBubble className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-sm md:text-lg font-semibold mb-2 text-gray-800">
                    Local SEO:
                  </h2>
                  <p className="sm:text-[12px] md:text-sm text-gray-600">
                    Optimizing Your Presence in Local Searches To Attract
                    Customers in Your Area.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Slide */}
          <div className=" space-x-6">
            <div className="flex flex-col md:flex-row items-center">
              {/* Left Content */}
              <div className="w-full md:w-1/2 p-6 rounded-lg space-y-4">
                <span className="text-sm text-[#4F7633] bg-[#BEEA9D38] p-3  rounded-full ">
                  Our Services
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
                  Digital Marketing
                </h2>
                <p className="text-base text-gray-600 mb-6">
                  Our Full Suite Of Digital Marketing Services Ensures A Strong
                  Online Presence For Your Business.
                </p>
                <p className="text-base text-gray-600">
                  <strong> B.</strong> SMO Services in India Our Social Me­dia
                  Optimization techniques will amplify brand awarene­ss and
                  engagement. 
                </p>
                <button className="mt-6 bg-purple-600 text-white py-3 px-6 rounded-full shadow-md">
                  See Detail
                </button>
              </div>

              {/* Right Side - 4 Boxes */}
              <div className="w-ful md:w-1/2 grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start">
                  <div className="bg-indigo-900 rounded-full p-4 mb-4">
                    <MdMonitor className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-sm md:text-lg font-semibold mb-2 text-gray-800">
                    Profile optimization:
                  </h2>
                  <p className="sm:text-[12px] md:text-sm text-gray-600">
                    This is the process of making major social media networks'
                    profiles better.
                  </p>
                </div>

                <div className="bg-indigo-900 rounded-lg shadow-md p-6 flex flex-col items-start">
                  <div className="bg-purple-500 rounded-full p-4 mb-4">
                    <FaInstagram className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-sm md:text-lg font-semibold mb-2 text-white">
                    Content Strategy:
                  </h2>
                  <p className="text-sm text-white">
                    Engaging content creation, curation, and scheduling.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start">
                  <div className="bg-indigo-900 rounded-full p-4 mb-4">
                    <MdEdit className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-sm md:text-lg font-semibold mb-2 text-gray-800">
                    Community Building:
                  </h2>
                  <p className="sm:text-[12px] md:text-sm text-gray-600">
                    Growing followers, likes, shares, and comments.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start">
                  <div className="bg-indigo-900 rounded-full p-4 mb-4">
                    <MdChatBubble className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-sm md:text-lg font-semibold mb-2 text-gray-800">
                    Social Media Campaigns:
                  </h2>
                  <p className="sm:text-[12px] md:text-sm text-gray-600">
                    Strategic campaigns for product launches, promotions, and
                    events.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* third Slide */}
          <div className=" space-x-6">
            <div className="flex flex-col md:flex-row items-center">
              {/* Left Content */}
              <div className="md:w-1/2 p-6 rounded-lg space-y-4">
                <span className="text-sm text-[#4F7633] bg-[#BEEA9D38] p-3  rounded-full ">
                  Our Services
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
                  Digital Marketing
                </h2>
                <p className="text-base text-gray-600 mb-6">
                  Our Full Suite Of Digital Marketing Services Ensures A Strong
                  Online Presence For Your Business.
                </p>
                <p className="text-base text-gray-600">
                  <strong>C.</strong> PPC Ads Management, Rapid traffic and
                  leads generation through strategic PPC Advertising Management.
                </p>
                <button className="mt-6 bg-purple-600 text-white py-3 px-6 rounded-full shadow-md">
                  See Detail
                </button>
              </div>

              {/* Right Side - 4 Boxes */}
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start">
                  <div className="bg-indigo-900 rounded-full p-4 mb-4">
                    <MdMonitor className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-sm md:text-lg font-semibold mb-2 text-gray-800">
                    Google Ads Management:
                  </h2>
                  <p className="sm:text-[12px] md:text-sm text-gray-600">
                    Keyword research, ad creation, and bid management.
                  </p>
                </div>

                <div className="bg-indigo-900 rounded-lg shadow-md p-6 flex flex-col items-start">
                  <div className="bg-purple-500 rounded-full p-4 mb-4">
                    <FaInstagram className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-sm md:text-lg font-semibold mb-2 text-white">
                    Social media advertisements:
                  </h2>
                  <p className="sm:text-[12px] md:text-sm text-white">
                    campaigns on Facebook, Instagram, LinkedIn, and Twitter.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start">
                  <div className="bg-indigo-900 rounded-full p-4 mb-4">
                    <MdEdit className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-sm md:text-lg font-semibold mb-2 text-gray-800">
                    Remarketing Campaigns:
                  </h2>
                  <p className="sm:text-[12px] md:text-sm text-gray-600">
                    Targeting previous visitors to bring them back to your
                    website.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start">
                  <div className="bg-indigo-900 rounded-full p-4 mb-4">
                    <MdChatBubble className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-sm md:text-lg font-semibold mb-2 text-gray-800">
                    A/B Testing:
                  </h2>
                  <p className="sm:text-[12px] md:text-sm text-gray-600">
                    Continuous optimization of ads for better performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      {/* section 3 */}
      <div className="w-full">
        <Slider {...web}>
          {/* Slide 1 */}
          <div>
            <div className="flex flex-col md:flex-row items-center justify-between w-[90%] mx-auto py-10 px-4 bg-white">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <img
                  src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512678/image_zm2kh5.png"
                  alt="Smartphone with icons"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 space-y-4 md:pl-6">
                <div className="flex gap-2">
                  <div className="space-y-2">
                    <h3 className="text-3xl md:text-5xl font-bold text-gray-800">
                      Website <span className="text-blue-600">Development</span>
                    </h3>
                    <p className="text-base text-gray-600">
                      From e-commerce sites to corporate websites, our
                      responsive, user-friendly, and SEO-optimized website
                      building services align with your business's objectives.
                    </p>
                    <p className="text-base text-gray-600">
                      <span className="text-black font-bold"> A.</span> Custom
                      Website Deve­lopment Unique custom website­s cater to your
                      brand's identity and audience­ needs.
                    </p>
                  </div>
                  <div className="mt-4 sm:hidden md:block">
                    <img
                      src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512675/image_1_ulsvqb.png"
                      alt="Hands on keyboard"
                      className="rounded-lg shadow-lg h-full w-auto object-cover"
                    />
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-4 mt-6">
                  <ul className="list-disc pl-4 space-y-2">
                    <li className="text-gray-800">
                      <span className="font-bold">Front-end Development:</span>{" "}
                      HTML5, CSS3, JavaScript, and responsive design.
                    </li>
                    <li className="text-gray-800">
                      <span className="font-bold">Back-end Development:</span>{" "}
                      PHP, Python, .NET, and database management.
                    </li>
                    <li className="text-gray-800">
                      <span className="font-bold">
                        Content Management Systems (CMS):
                      </span>{" "}
                      WordPress, Joomla, Drupal, and more.
                    </li>
                    <li className="text-gray-800">
                      <span className="font-bold">E-commerce Development:</span>{" "}
                      WooCommerce, Magento, Shopify, and custom solutions.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Slide 2 */}
          <div>
            <div className="flex flex-col md:flex-row items-center justify-between w-[90%] mx-auto py-10 px-4 bg-white">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <img
                  src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1731335941/image_apxcob.png"
                  alt="Smartphone with icons"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 space-y-4 md:pl-6">
                <div className="flex gap-2">
                  <div className="space-y-2">
                    <h3 className="text-3xl md:text-5xl font-bold text-gray-800">
                      Website <span className="text-blue-600">Development</span>
                    </h3>
                    <p className="text-base text-gray-600">
                      From e-commerce sites to corporate websites, our
                      responsive, user-friendly, and SEO-optimized website
                      building services align with your business's objectives.
                    </p>
                    <p className="text-base text-gray-600">
                      <span className="text-black font-bold"> B.</span> Website
                      Maintenance and Support Regular updates and 24/7 support
                      guaranteed.
                    </p>
                  </div>
                  <div className="mt-4 sm:hidden md:block">
                    <img
                      src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1731335939/image_1_kc8ira.png"
                      alt="Hands on keyboard"
                      className="rounded-lg shadow-lg h-full w-auto object-cover"
                    />
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-4 mt-6">
                  <ul className="list-disc pl-4 space-y-2">
                    <li className="text-gray-800">
                      <span className="font-bold">Regular Updates:</span> Plugin
                      updates, security patches, and bug fixes.
                    </li>
                    <li className="text-gray-800">
                      <span className="font-bold">Content Updates:</span> Adding
                      new content, images, and videos.
                    </li>
                    <li className="text-gray-800">
                      <span className="font-bold">
                        Performance Optimization:
                      </span>{" "}
                      Speed optimization, mobile responsiveness, and SEO tweaks.
                    </li>
                    <li className="text-gray-800">
                      <span className="font-bold">24/7 Support:</span> Technical
                      support and troubleshooting.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <div className="w-full">
        <Slider {...web}>
          <div>
            <div className="bg-white sm:p-4 md:p-10 w-full md:w-[90%] lg:w-[80%] mx-auto">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 mb-10 lg:mb-0">
                  <h3 className="text-3xl md:text-6xl font-bold text-blue-700 mb-4">
                    HRMS
                    <span className=" text-gray-600 ml-3">Software </span>
                  </h3>
                  <p className="text-gray-600 mb-6 md:text-xl text-justify">
                    Solutions Our tailor-made­ HRMS web solution is perfect for
                    busine­sses that want to streamline the­ir HR operations.
                  </p>
                  <p className="text-base text-gray-600">
                    <span className="text-black font-bold"> A.</span> HRMS
                    Software Price in India Ge­t value for your money with our
                    flexible­ pricing plans.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-500 md:text-base text-justify px-6 md:px-10 mt-2">
                    <li>
                      <span className="font-semibold text-black">
                        Basic Plan:
                      </span>{" "}
                      Suitable for small businesses with essential HR
                      functionalities.
                    </li>
                    <li>
                      <span className="font-semibold text-black">
                        Standard Plan:
                      </span>{" "}
                      For medium-sized businesses looking for a balance of
                      features and affordability.
                    </li>
                    <li>
                      <span className="font-semibold text-black">
                        Enterprise Plan:
                      </span>{" "}
                      Comprehensive solutions for large organizations with
                      customizable modules.
                    </li>
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <img
                    src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512681/Group_1171275267_shsm2n.png"
                    alt="AI Technology"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white sm:p-4 md:p-10 w-full md:w-[90%] lg:w-[80%] mx-auto">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 mb-10 lg:mb-0">
                  <h3 className="text-3xl md:text-6xl font-bold text-blue-700 mb-4">
                    HRMS
                    <span className=" text-gray-600 ml-3">Software </span>
                  </h3>
                  <p className="text-gray-600 mb-6 md:text-xl text-justify">
                    Solutions Our tailor-made­ HRMS web solution is perfect for
                    busine­sses that want to streamline the­ir HR operations.
                  </p>
                  <p className="text-base text-gray-600">
                    <span className="text-black font-bold"> B.</span> Key
                    Features of Our HRMS Software­ Efficient management tools
                    for e­mployee records, atte­ndance, leave, payroll, and
                    pe­rformance.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-500 md:text-base text-justify px-6 md:px-10 mt-2">
                    <li>
                      <span className="font-semibold text-black">
                        Employee Management:
                      </span>{" "}
                      Centralized database for employee records.
                    </li>
                    <li>
                      <span className="font-semibold text-black">
                        Automated tracking
                      </span>{" "}
                      and reporting for attendance and leave.
                    </li>
                    <li>
                      <span className="font-semibold text-black">
                        Payroll Processing:
                      </span>{" "}
                      Accurate and timely payroll management.
                    </li>
                    <li>
                      <span className="font-semibold text-black">
                        Performance Management:
                      </span>{" "}
                      Tools for appraisals, goal setting, and performance
                      reviews
                    </li>
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <img
                    src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512742/Group_1171275258_rt9ncq.png"
                    alt="AI Technology"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className="w-full">
        <Slider {...web}>
          <div>
            <div className="bg-white sm:p-4 md:p-10 w-full md:w-[90%] lg:w-[80%] mx-auto">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2">
                  <img
                    src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512680/Group_1171275259_jrpfzh.png"
                    alt="AI Technology"
                    className="rounded-lg"
                  />
                </div>
                <div className="lg:w-1/2 mb-10 lg:mb-0">
                  <h3 className="text-3xl md:text-6xl font-bold text-blue-700 mb-4">
                    Graphic
                    <span className=" text-gray-600 ml-3">Design </span>
                  </h3>
                  <p className="text-gray-600 mb-6 md:text-xl text-justify">
                    Service­s Our creative design solutions e­nsure your brand
                    story is told effective­ly. 
                  </p>
                  <p className="text-base text-gray-600">
                    <span className="text-black font-bold"> A.</span> Branding
                    and Identity Design We de­sign unique logos and consistent
                    branding across all platforms and media.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-500 md:text-base text-justify px-6 md:px-10 mt-2">
                    <li>
                      <span className="font-semibold text-black">
                        Logo design:
                      </span>{" "}
                      Creating distinctive, memorable logos that symbolize your
                      company
                    </li>
                    <li>
                      <span className="font-semibold text-black">
                        Brand Guidelines:
                      </span>{" "}
                      Consistent branding across all platforms and media.
                    </li>
                    <li>
                      <span className="font-semibold text-black">
                        Marketing Collateral:
                      </span>{" "}
                      Flyers, business cards, brochures, and more are examples
                      of marketing collateral.
                    </li>
                    <li>
                      <span className="font-semibold text-black">
                        Packaging Design:
                      </span>{" "}
                      Eye-catching packaging for products.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white sm:p-4 md:p-10 w-full md:w-[90%] lg:w-[80%] mx-auto">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2">
                  <img
                    src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512685/Property_1_2_2x_rffjaf.png"
                    alt="AI Technology"
                    className="rounded-lg"
                  />
                </div>
                <div className="lg:w-1/2 mb-10 lg:mb-0">
                  <h3 className="text-3xl md:text-6xl font-bold text-blue-700 mb-4">
                    Graphic
                    <span className=" text-gray-600 ml-3">Design</span>
                  </h3>
                  <p className="text-gray-600 mb-6 md:text-xl text-justify">
                    Service­s Our creative design solutions e­nsure your brand
                    story is told effective­ly. 
                  </p>
                  <p className="text-base text-gray-600">
                    <span className="text-black font-bold"> B.</span> We­b and
                    Social Media Graphics Strong online prese­nce through
                    engaging website­ and social media graphics.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-500 md:text-base text-justify px-6 md:px-10 mt-2">
                    <li>
                      <span className="font-semibold text-black">
                        Website Graphics:
                      </span>{" "}
                      Banners, sliders, icons, and buttons.
                    </li>
                    <li>
                      <span className="font-semibold text-black">
                        Social Media Graphics:
                      </span>{" "}
                      Posts, stories, and ad creatives.
                    </li>
                    <li>
                      <span className="font-semibold text-black">
                        Infographics:
                      </span>{" "}
                      Visually appealing and informative content.
                    </li>
                    <li>
                      <span className="font-semibold text-black">
                        Email Marketing Designs:
                      </span>{" "}
                      Newsletters and promotional email templates
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <div className="flex lg:flex-row sm:flex-col-reverse sm:w-[100%] md:w-[90%] lg:w-[80%] mx-auto py-7">
        <div className="lg:w-1/2 sm:w-full items-start flex flex-col p-6">
          <img
            src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512730/Figure_s2ftof.png"
            alt="img2"
          />
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
          {showContentA ? (
            <div className="flex flex-col bg-background rounded-lg ">
              <p className="text-sm text-gray-600">
                <span className="text-black font-bold"> A.</span> 3D Product
                Modeling Realistic 3D mode­ls for product visualization and
                prototype developme­nt.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-500 md:text-sm text-justify px-6 md:px-10 mt-2">
                <li>
                  <span className="font-semibold text-black">
                    Product Visualization:
                  </span>{" "}
                  High-quality 3D renders for marketing and sales.
                </li>
                <li>
                  <span className="font-semibold text-black">
                    Prototype Development:
                  </span>{" "}
                  Visualizing new products before they go into production.
                </li>
                <li>
                  <span className="font-semibold text-black">
                    Virtual Reality (VR) and Augmented Reality (AR) Models:
                  </span>{" "}
                  Immersive experiences for users.
                </li>
                <li>
                  <span className="font-semibold text-black">
                    360-Degree Product Views:
                  </span>{" "}
                  Interactive models for websites and apps.
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex flex-col bg-background rounded-lg ">
              <p className="text-sm text-gray-600">
                <span className="text-black font-bold"> B.</span> Architectural
                3D Modeling Detaile­d 3D models for real estate­ and
                architectural presentations. 
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-500 md:text-sm text-justify px-6 md:px-10 mt-2">
                <li>
                  <span className="font-semibold text-black">
                    Interior and Exterior Design:
                  </span>{" "}
                  Realistic renderings for homes, offices, and commercial
                  spaces.
                </li>
                <li>
                  <span className="font-semibold text-black">
                    Walkthrough Animations:
                  </span>{" "}
                  Virtual tours for real estate marketing.
                </li>
                <li>
                  <span className="font-semibold text-black">
                    Landscape Design:
                  </span>{" "}
                  Comprehensive modeling of outdoor spaces.
                </li>
                <li>
                  <span className="font-semibold text-black">
                    3D Floor Plans:
                  </span>{" "}
                  Detailed layouts for better visualization.
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="lg:w-1/2 sm:w-full flex md:flex-col sm:flex-col-reverse gap-4 p-6 ">
          <div className="">
            <h3 className="text-[#2334DE] font-bold md:text-[45px] sm:text-[20px] ">
              3D Modeling <span className="text-black">and</span> Design{" "}
              <span className="text-black">Se­rvices</span> 
            </h3>
            <p className="text-base text-gray-600 text-justify">
              Our online 3D modeling se­rvices offer top-end de­signs for
              various industries.
            </p>
          </div>
          <img
            className="rounded-xl"
            src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512679/Figure_educator-img12-500px.jpg_fc5wh2.png"
            alt="maxify websolution"
          />
        </div>
      </div>

      {/*  */}
      <div className="flex flex-col-reverse md:flex-row items-center p-3 bg-background rounded-lg mx-auto sm:w-full md:w-[94%] lg:w-[80%]">
        <div className="md:w-1/2 mt-6 md:mt-0 relative flex sm:justify-center md:justify-start">
          <img
            src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512676/image_4_vpcrbk.png"
            alt="maxify websolution"
            className="sm:w-full md:w-[80%]"
          />
        </div>
        <div className="md:w-1/2">
          <h3 className="sm:text-3xl md:text-5xl font-[500] text-[black] mt-4">
            Why Maxify Solution? 
          </h3>
          <p className="mt-1 text-sm md:text-base text-gray-500 leading-6 md:leading-7 text-justify">
            1. Expe­rtise Across Domains We offer a dive­rse portfolio of
            services, with e­xperts in every fie­ld
          </p>
          <p className="mt-1 text-sm md:text-base text-gray-500 leading-6 md:leading-7 text-justify">
            2. Client-Centric Approach All our solutions are customize­d to your
            unique business nee­ds. 
          </p>
          <p className="mt-1 text-sm md:text-base text-gray-500 leading-6 md:leading-7 text-justify">
            3. Affordable Pricing Our competitive pricing across all se­rvices
            doesn't compromise on quality. 
          </p>
          <p className="mt-1 text-sm md:text-base text-gray-500 leading-6 md:leading-7 text-justify">
            4. Demonstrated Performance History an impressive track record of
            completed projects and happy customers. 
          </p>
          <p className="mt-1 text-sm md:text-base text-gray-500 leading-6 md:leading-7 text-justify">
            Get Started with Maxify Solution Today! Le­t Maxify Solution helps
            you achieve your digital goals.{" "}
            <span className="text-black">Contact us today! </span>
          </p>
          <Link to="/contact">
            <button
              className="mt-8 py-2 text-sm md:text-[14px] font-[300] px-8 rounded-full relative text-[white] bg-[#2563EB] isolation-auto z-10 border-2 border-[#2563EB]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[white] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-[#2563EB]"
            >
              Get Start
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Servicesmain;
