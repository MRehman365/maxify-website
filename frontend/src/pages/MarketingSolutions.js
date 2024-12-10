import React, { useEffect, useState } from "react";
import { HiUserGroup } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import {
  FaCheckCircle,
  FaFileAlt,
  FaHandHoldingHeart,
  FaPlay,
} from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { BsArrowUpRight, BsPersonHearts } from "react-icons/bs";
import { Link } from "react-router-dom";

const titlesAndDescriptions = [
  {
    title1: 'Experience and Technology',
    description1: 'Our group of knowledgeable 3D designers and animators brings creativity and technical competence to every job.',
    title2: 'Customized Solutions',
    description2: 'We understand that every business is distinct, and we produce tailored 3D versions and marketing options that align with your goals.'
  },
  {
    title1: 'Comprehensive Solution',
    description1: 'Offering end-to-end solutions tailored to meet unique project needs with expertise and precision.',
    title2: 'Client-Centric Technique',
    description2: 'A dedicated focus on client requirements ensures personalized, impactful 3D solutions for every project.'
  }
];

const MarketingSolutions = () => {
  const [activeSection, setActiveSection] = useState(
    "comprehensiveProficiency"
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titlesAndDescriptions.length);
    }, 1000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const { title1, description1, title2, description2 } = titlesAndDescriptions[currentIndex];

  // Function to set the active section
  const handleSetActive = (section) => {
    setActiveSection(section);
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

  const contentArray = [
    {
      title: "1. Online 3D Modeling",
      description: "3D modeling is the structure of any type of 3D project, enabling you to visualize complicated principles and concepts genuinely.",
      imageUrl: "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512512/image_342_ulz1o4.png",
      overlayUrl: "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512518/image_341_vlimrl.png",
      list: [
        "Product Modeling: Premium 3D designs of items for shopping, advertising, and advertising purposes.",
        "Building Modeling: Detailed 3D models of real estate, architecture, and interior design projects.",
        "Character Modeling: Realistic and elegant 3D character designs for video games, animations, and virtual reality applications.",
      ],
    },
    {
      title: "2. 3D Making and Visualization",
      description: "3D making and visualization bring your principles to life with photorealistic photos and animations. We offer high-quality 3D-making solutions to display your designs and items in the most effective possible lighth",
      imageUrl: "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1731335992/WhatsApp_Image_2024-10-27_at_10.44.51_PM_nuubdk.jpg",
      altimageUrl:"3d house architecture design",
      overlayUrl: "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1731335978/WhatsApp_Image_2024-10-27_at_10.44.51_PM_4_m8awty.jpg",
      altoverlayUrl:"3d design architecture",
      list: [
        "Photorealistic Rendering: Ultra-realistic renderings for advertising, advertising, and product demonstration",
        "Exterior And Interior Visualization: Thorough 3D visuals of genuine estate, design, and interior decoration task.",
        "360-Degree Sights: Interactive 360-degree views and panoramas for an immersive user experience.",
      ],
    },
    {
      title: "3. 3D Animation and Motion Graphics",
      description: "3D computer animation is an effective tool to inform your brand name's tale engagingly and dynamically. Our 3D computer animation solutions cover everything from concept advancement to last manufacturing.",
      imageUrl: "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1731335966/WhatsApp_Image_2024-10-27_at_10.44.51_PM_1_xaor2f.jpg",
      altimageUrl1:"professional 3d design software",
      overlayUrl: "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1731335983/WhatsApp_Image_2024-10-27_at_10.44.51_PM_5_yiwt5c.jpg",
      altoverlayUrl:"expert team for 3d design works",
      list: [
        "Item Animations: Engaging computer animations that show the features and benefits of your product.",
        "Explainer Videos: 3D computer-animated explainer video clips to streamline complicated principles and boost understanding.",
        "Architectural Walkthroughs: Digital walkthroughs of residential or commercial properties and architectural layouts to offer an immersive experience.",
      ],
    },
    {
      title: "4. Digital and Enhanc ed Fact ( VR/ AR) Solutions",
      description: "Online and Augmented Facts are transforming the means organizations interact with their consumers. We create customized virtual reality and AR experiences to boost your brand name and astound your target market.",
      imageUrl: "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1731335969/WhatsApp_Image_2024-10-27_at_10.44.51_PM_2_mtzp3e.jpg",
      altimageUrl1:"3D advertising and marketing services",

      overlayUrl: "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1731335988/WhatsApp_Image_2024-10-27_at_10.44.51_PM_6_kl79pi.jpg",
      altoverlayUrl:"3d advertising company in noida",
      list: [
        "Online Tours: Interactive digital excursions genuine estate, friendliness, and event place.",
        "AR Product Visualization: Increased Reality options for product visualization and client involvement.",
        "VR Training Simulations: Immersive virtual reality simulations for training education and learning purposes.",
      ],
    },
    {
      title: "5. 3D Mark eting Solutions",
      description: "Maxify Service uses specialized 3D marketing solutions to aid organizations stand apart in a congested digital landscape. Our 3D advertising and marketing solutions are designed to enhance brand exposure, drive involvement, and enhance conversion.",
      imageUrl: "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1731335973/WhatsApp_Image_2024-10-27_at_10.44.51_PM_3_ar3zm6.jpg",
      altimageUrl1:"3d models for branding ",
      overlayUrl: "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1731335988/WhatsApp_Image_2024-10-27_at_10.44.51_PM_7_dnubgq.jpg",
      altoverlayUrl:"3d designs creation",
      list: [
        "3D Ad Creatives: Eye-catching 3D advertisements for electronic advertising and marketing campaign.",
        "3D Social Media Site Material: Compelling 3D visuals and computer animations for social media site systems like Instagram, Facebook, and LinkedIn.",
        "Interactive 3D Material: Interactive 3D web content for websites, touchdown pages, and digital marketing campaigns.",
      ],
    },
  ];

  const [currentContent, setCurrentContent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent((prevIndex) => (prevIndex + 1) % contentArray.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [contentArray.length]);

  const { title, description, imageUrl, overlayUrl, altimageUrl1,altoverlayUrl, list } = contentArray[currentContent];

  const DataArray = [
    {
      datatitle: "Step 1: Discovery and Preparation",
      datadescription:
        "We start by learning more about your target audience, job requirements, and organizational goals. This step involves conceptualizing sessions, principle growth, and creating a task roadmap.",
      dataimage: "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1731335937/Group_1171275263_yyuanz.png",
      altdataimage:"marketing strategy for 3d",
    },
    {
      datatitle: "Step 2: 3D Modeling and Design",
      datadescription:
        "Our gifted 3D developers and modelers bring your ideas to life by developing in-depth 3D models that record the essence of your vision. This phase consists of modeling, texturing, and shading.",
      dataimage: "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1731335934/Group_1171275264_fucgmo.png",
      altdataimage:"3d modeling app sculpt & draw",
    },
    {
      datatitle: "Step 3: Making and Animation",
      datadescription:
        "Once the 3D designs are completed, we proceed with rendering and animation. We utilize advanced rendering software applications and techniques to develop topquality visuals and animations.",
      dataimage: "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1731335935/Group_1171275265_aje1ue.png",
      altdataimage:"3d caracter creation",
    },
    {
      datatitle: "Step 4: Testimonial and Modification",
      datadescription:
        "We offer multiple rounds of revisions to ensure that the final product aligns with your assumptions and objectives. Your responses are critical at this phase, and we function very closely with you to make any kind of needed adjustments.",
      dataimage: "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1731335930/Group_1171275266_ohsat6.png",
      altdataimage:"custom 3d designing",
    },
    {
      datatitle: "Step 5: Shipment and Implementation",
      datadescription:
        "Upon final approval, we supply the last files in the required styles, ready for use throughout different systems and advertising channels.",
      dataimage: "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1731335927/Group_1171275267_kx0xgg.png",
      altdataimage:"easy to implementation",
    },
  ];

  const [current3d, setCurrent3d] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent3d((prevIndex) => (prevIndex + 1) % DataArray.length);
    }, 1000); 
    return () => clearInterval(interval);
  }, [DataArray.length]);
  

  const { datatitle, datadescription, dataimage, altdataimage } = DataArray[current3d];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mt-14 font-pop">
      {/* 1st section */}
      <div className="flex lg:flex-row sm:flex-col-reverse sm:w-[100%] md:w-[90%] mx-auto py-7 border-t-[2px] border-black font-Mulish">
        <div className="lg:w-1/2 sm:w-full items-start flex flex-col p-2 md:p-6">
          <img src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512509/image_339_uw22ph.png" 
          alt="3d modeling and 3d advertising company in noida" />
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
          <div className="flex flex-row bg-background rounded-lg sm:h-[27vh]">
      <div className="flex-1 p-4">
        <div className="flex items-center mb-2">
          <div>
            <HiUserGroup size={25} className="text-[#2334DE]" />
          </div>
          <h2 className="text-[15px] ml-1 font-bold font-Mulish">
            {title1}:
          </h2>
        </div>
        <p className="text-[12px] text-justify">
          {description1}
        </p>
      </div>
      <div className="flex-1 p-4">
        <div className="flex items-center mb-2">
          <div>
            <FaHandHoldingHeart size={25} className="text-[#2334DE]" />
          </div>
          <h2 className="text-[15px] ml-1 font-bold font-Mulish">
            {title2}:
          </h2>
        </div>
        <p className="text-[12px] text-justify">
          {description2}
        </p>
      </div>
    </div>
    <div className="flex justify-end w-full">
    <div className="h-10 w-10 bg-[#2334DE] text-[white] text-base flex justify-center items-center rounded-full">
                  <BsArrowUpRight />
                </div>
                </div>
        </div>
        <div className="lg:w-1/2 sm:w-full flex md:flex-col sm:flex-col-reverse gap-4 p-2 md:p-6 ">
          <div className="">
            <h3 className="text-[#2334DE] text-center font-bold lg:font-[900] md:text-[32px] sm:text-[20px] ">
              Advanced 3D Modeling and 3D Advertising And Marketing Solutions
            </h3>
            <p className="text-sm text-justify">
              In the digital period, companies are constantly seeking innovative
              means to involve their audience and attract attention to the
              market. At Maxify Solution, we offer sophisticated online 3D
              modeling and 3D advertising and marketing services to assist
              organizations create immersive, interactive, and impactful
              experiences. As a leading 3D Advertising and marketing Firm, we
              utilize the power of 3D technology to change your digital
              visibility and increase engagement.
            </p>
          </div>
          <img className="rounded-xl" src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512517/image_340_jvipgf.png" 
          alt="3d modeling services" />
        </div>
      </div>
      {/* 2nd section */}

      <div className="flex flex-col lg:flex-row items-center justify-between bg-white md:p-12 sm:py-0">
      {/* Image Section */}
      <div className="lg:w-1/2 w-full flex justify-center relative">
        <div className="px-10">
          <img
            src={imageUrl}
            alt={altimageUrl1}
            className="rounded-lg shadow-md sm:h-[20rem] md:h-full"
          />
          <img
            src={overlayUrl}
            alt={ altoverlayUrl}
            className="absolute top-[50%] left-0 w-[40%] transform -translate-y-1/2 border-4 border-white rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="lg:w-1/2 w-full px-6 mt-10 lg:mt-0">
        <h3 className="text-lg text-gray-500 mb-4">
          Our 3D Services
        </h3>
        <h2 className="text-[#0F0F0F] md:text-[22px] sm:text-[18px] font-normal mb-6 font-manrope">
          <span className="text-[#2334DE]"> Maxify </span>Option offers a
          large variety of
          <span className="text-[#2334DE]">
            3D services to deal with numerous company demands
          </span>.
        </h2>
        
        <div className="font-dm text-justify md:px-10">
          <h4 className="text-lg md:text-xl text-gray-600 font-bold mb-4">{title}</h4>
          <p className="text-gray-500 text-sm md:text-lg mb-4">{description}</p>
          <ul className="list-disc text-sm md:text-lg list-inside text-gray-500">
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
      {/* 3rd section */}

      <div>
        <section className="bg-gradient-to-r from-[#f5f5f5] to-[#e0e0ff] sm:p-2 md:p-8 mt-4">
          <div className="w-[100%] mx-auto md:w-[90%] lg:w-[80%]">
            {/* First Section: Left Content, Right Image */}
            <div className="flex flex-col lg:flex-row justify-between gap-4 items-center">
              {/* Left Content */}
              <div className="lg:w-1/2 text-center lg:text-left">
                <p className="text3d font-semibold text-2xl">Our 3D</p>
                <h1 className="m-s-h mt-2 sm:text-[20px] md:text-4xl font-bold font-manrope">
                  Advancement Refine
                </h1>
                <p className="text-[#504E4E] sm:text-sm md:text-base mt-4 sm:mx-5 lg:mx-0 text-justify md:pr-6">
                  At Maxify Remedy, we adhere to an organized and client-focused
                  technique to guarantee that every 3D project delivers the
                  desired results.
                </p>
              </div>

              {/* Right Image */}
              <div className="lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0">
                <div className="relative inline-block rounded-full p-[8px] bg-gradient-to-r  w-auto h-[50%] from-[#b300ff] to-[#2334DE]">
                  <img
                    src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512520/m2_efsmxt.png"
                    alt="d3 design services in delhi ncr"
                    className="rounded-full w-full h-[full] block"
                  />
                </div>
              </div>
            </div>

            {/* Second Section: Left Image, Right Content */}
            <div className="flex flex-col-reverse lg:flex-row justify-between gap-4 items-center mt-8">
      {/* Left Image */}
      <div className="lg:w-1/2 flex justify-center py-2 lg:justify-start">
        <img
          src={dataimage}
          alt={altdataimage}
          className="h-[50%] w-auto rounded-full"
        />
      </div>

      {/* Right Content */}
      <div className="lg:w-1/2 text-center lg:text-left mt-6 lg:mt-0 md:px-6">
        <h1 className="m-s-h mt-2 sm:text-[20px] md:text-3xl sm:font-bold md:font-[900] font-manrope">
          {datatitle}
        </h1>
        <p className="text-[#504E4E] sm:text-sm md:text-base mt-4 sm:mx-5 lg:mx-0 text-justify ">
        {datadescription}
        </p>
      </div>
    </div>
            <div className="flex justify-end mt-8">
            <Link to='/about'>
              <button className="bg-gradient-to-l from-[#077EEC] to-[#BD21FC] text-white py-3 px-6 rounded-full hover:bg-[#2334DE] transition duration-300">
                MORE ABOUT US
              </button>
              </Link>
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
          <h1 className="text-3xl md:text-[38px] sm:text-[25px] leading-12 yantramanav-bold font-bold mb-4 font-yan">
            Benefits of <br />
            <span className="text-[#2334DE]">3D Solutions </span>
            for Your Company
          </h1>
          <ul className="space-y-4 mb-8 font-dm">
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
          <a href="https://wa.me/917428309119" target="blank">
          <button
            className="mt-8 flex items-center relative px-8 py-2 text-[#2334DE] rounded-full bg-white isolation-auto z-10 border-2 border-[#2334DE]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[#2334DE] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-white"
          >
            Learn More{" "}
            <span className="ml-2">
              <GoArrowRight />
            </span>
          </button>
          </a>
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
      {/* 5th section */}

      <div className="flex flex-col md:flex-row items-center p-3 bg-background rounded-lg mx-auto sm:w-full md:w-[94%] lg:w-[90%] gap-10">
        {/* Left side content */}
        <div className="md:w-1/2 md:px-8">
          <span className="text-sm bg-[#e5e5ff] text-[#2334DE] rounded px-3 py-1">
            Industries We Serve
          </span>
          <h3 className=" font-semibold text-[#27477D] quicksand-Quicksand mt-4 font-manrope">
            <span className="text-4xl">Our 3D solutions </span>
            <span className="text-xl">
              are <br />
              tailored to fulfill the requirements <br /> of numerous
              industries,
            </span>
          </h3>

          <h3 className="text-[#888C92] roboto-bold mt-5 text-[18px]">
            Consisting of :
          </h3>

          <ul className="text-[#888C92] roboto-regular space-y-3 mt-2 text-[17px] list-disc">
            <li>Realty and Architecture</li>
            <li>Shopping and Retail</li>
            <li>Health care and Education and learning</li>
            <li>Pc gaming and Amusement</li>
            <li>Automotive and Production</li>
          </ul>
          <a href="https://wa.me/917428309119" target="blank">
          <button
            className="mt-8 py-2 text-sm md:text-[14px] font-[300] sm:px-6 md:px-6 rounded-full relative text-[white] bg-[#2334DE] isolation-auto z-10 border-2 border-[#2334DE]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[white] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-[#2334DE]"
          >
            Learn More
          </button>
          </a>
        </div>

        {/* Right side with video */}
        <div className="md:w-1/2 mt-6 md:mt-0 relative flex justify-end">
          <div className=" relative">
            <img className="" src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512518/image_349_oi57o4.png" 
            alt="best companies for 3d animation" />

            <div
              className="absolute bottom-0 text-[60px] bg-[#f9f9f9] px-5 text-[#2334DE]"
              style={{ borderRadius: "0px 20px 0px 0px" }}
            >
              <img src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512519/imgwatch_eico7g.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* 6th section */}

      <div className="flex flex-col md:flex-row md:space-x-4 mt-8 w-[100%] mx-auto md:w-[90%] lg:w-[90%]">
        {" "}
        {/* Left Side - Hidden in Mobile View */}
        <div className="flex w-full md:w-1/2 sm:h-[300px] md:h-auto justify-center relative px-2">
          <img src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512524/m3_qv91vf.png" 
          alt="3d animation companies in noida" className="md:w-[80%] sm:w-full" />
        </div>
        {/* Right Side - Visible in Mobile View */}
        <div className="w-full md:w-1/2 p-4 md:p-4 sm:px-3 flex flex-col justify-around">
          <h1 className="sm:text-2xl md:text-4xl text-center font-semibold mt-4 mb-2 font-manrope">
            Why
            <span className="text-[#2334DE]">
              {" "}
              Buy 3D Services with <br /> Maxify{" "}
            </span>
            Service ?.
          </h1>
          <p className="sm:text-[1rem] md:text-[18px] text-justify  text-gray-600 mb-6 border p-4 leading-8">
            Purchasing 3D services with Maxify Service supplies numerous
            advantages:
            <ul className="text-base space-y-3 list-disc ml-5">
              <li>
                Comprehensive Proficiency: Our group has years of experience in
                providing top-notch 3D options.
              </li>
              <li>
                Personalized Solutions: We offer tailored 3D services to match
                your one-of-a-kind company demands.
              </li>
              <li>
                Premium Deliverables: We utilize the most up-to-date innovation
                to provide top-notch 3D visuals and animations.
              </li>
              <li>
                Affordable Rates: Our 3D services are competitively priced to
                supply maximum worth for your investment.
              </li>
            </ul>
          </p>
          <div>
          <Link to='/about'>
            <button className="bg-gradient-to-l from-[#077EEC] to-[#BD21FC] text-white py-3 px-4 rounded-full hover:bg-[#2334DE] transition duration-300">
              MORE ABOUT US
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* 7nt section */}

      <div className="w-[90%] mx-auto">
        <div className="mbg flex flex-col lg:flex-row lg:justify-between bg-white md:py-10 sm:py-10 px-6  md:gap-10 w-[90%]">
          {/* Left Side Section */}
          <div className="lg:w-[40%] w-full">
            <h2 className="md:text-5xl sm:text-2xl font-semibold text-gray-800 mb-6 leading-tight">
              Why Buy <span className="text-[#2334DE]">3D Services</span> with{" "}
              <span className="text-[#2334DE]">Maxify Service?</span>
            </h2>
            <p className="text-gray-500 text-lg mb-6">
              Purchasing 3D services with Maxify Service supplies numerous
              advantages:
            </p>
            {/* Image with play button */}
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512522/m4_bvcyl7.png"
                alt="best it company in delhi ncr for 3d"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute hidden md:top-1/2 transform -translate-y-1/2 md:right-8 sm:right-0 top-[30%] w-12 h-12 bg-[#2334DE] rounded-full flex items-center justify-center shadow-lg">
                <button className="text-white text-xl  font-bold">▶</button>
              </div>
            </div>
          </div>

          {/* Right Side Section */}
          <div className="lg:w-[40%] w-full mt-10 lg:mt-0 flex flex-col items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
              {/* Comprehensive Proficiency */}
              <div
                className={`p-6 rounded-3xl cursor-pointer relative md:-top-10 ${
                  activeSection === "comprehensiveProficiency"
                    ? "bg-[#2334DE] text-white"
                    : " text-gray-800"
                }`}
                onClick={() => handleSetActive("comprehensiveProficiency")}
              >
                <div className=" items-center mb-4">
                  <div
                    className={`w-10 h-10 rounded-full items-center justify-center ${
                      activeSection === "comprehensiveProficiency"
                        ? "bg-white text-[#2334DE]"
                        : "bg-[#f4f4f4] text-[#2334DE]"
                    }`}
                  >
                    <img src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512495/Group1_lvplle.svg" alt="" />
                  </div>
                  <h4 className=" font-bold roboto-bold text-[16px]">
                    Comprehensive Proficiency
                  </h4>
                </div>
                <p className="text-sm">
                  Our group has years of experience in providing top-notch 3D
                  options.
                </p>
              </div>

              {/* Personalized Solutions */}
              <div
                className={`p-6 rounded-2xl cursor-pointer ${
                  activeSection === "personalizedSolutions"
                    ? "bg-[#2334DE] text-white"
                    : "text-gray-800"
                }`}
                onClick={() => handleSetActive("personalizedSolutions")}
              >
                <div className=" items-center mb-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activeSection === "personalizedSolutions"
                        ? "bg-white text-[#2334DE]"
                        : "bg-[#f4f4f4] text-[#FF7A59]"
                    }`}
                  >
                    <img src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512496/Group2_o4p5ez.svg" alt="" />
                  </div>
                  <h4 className="roboto-bold text-[16px]">
                    Personalized Solutions
                  </h4>
                </div>
                <p className="text-sm">
                  We offer tailored 3D services to match your one-of-a-kind
                  company demands.
                </p>
              </div>

              {/* Premium Deliverables */}
              <div
                className={`p-6 rounded-2xl cursor-pointer ${
                  activeSection === "premiumDeliverables"
                    ? "bg-[#2334DE] text-white"
                    : " text-gray-800"
                }`}
                onClick={() => handleSetActive("premiumDeliverables")}
              >
                <div className="items-center mb-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activeSection === "premiumDeliverables"
                        ? "bg-white text-[#2334DE]"
                        : "bg-[#f4f4f4] text-[#FF7A59]"
                    }`}
                  >
                    <img src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512496/Group3_ejksob.svg" alt="" />
                  </div>
                  <h4 className="roboto-bold text-[16px]">
                    Premium Deliverables
                  </h4>
                </div>
                <p className="text-sm">
                  We utilize the most up-to-date innovation to provide top-notch
                  3D visuals and animations.
                </p>
              </div>

              {/* Affordable Rates */}
              <div
                className={`p-6 rounded-2xl cursor-pointer ${
                  activeSection === "affordableRates"
                    ? "bg-[#2334DE] text-white"
                    : " text-gray-800"
                }`}
                onClick={() => handleSetActive("affordableRates")}
              >
                <div className="items-center mb-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activeSection === "affordableRates"
                        ? "bg-white text-[#2334DE]"
                        : "bg-[#f4f4f4] text-[#FF7A59]"
                    }`}
                  >
                    <img src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512496/Group4_nnws0f.svg" alt="" />
                  </div>
                  <h4 className="roboto-bold text-[16px]">Affordable Rates</h4>
                </div>
                <p className="text-sm">
                  Our 3D services are competitively priced to supply maximum
                  worth for your investment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 8th section */}

      <div className="flex justify-center my-5">
        {/* <img src={CTA} alt="" /> */}

        <div className="w-[90%] mx-auto">
          <div className=" mbg2 ">
            <div className="relative md:py-20 sm:py-10 text-white flex flex-col items-center justify-center w-[80%] mx-auto">
              <h1 className="text-3xl md:text-[48px] sm:text-[17px] poppins-medium text-center mb-6 leading-tight">
                Transform Your Service with Maxify Service's 3D Services
              </h1>
              <p className="text-center md:text-[20px] sm:text-[10px] md:text-xl mb-8 poppins-regular">
                At Maxify Service, we are committed to helping services harness
                the power of 3D technology to drive development and attain their
                objectives. Whether you need sensational 3D models for your
                e-commerce website or immersive digital scenic tours for real
                estate, we have the expertise and creativity to bring your
                vision to life.
              </p>

              {/* Input Section */}
              <div className="flex items-center bg-white rounded-full overflow-hidden shadow-md max-w-lg w-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-3 flex-1 outline-none text-gray-700 text-base w-10"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6">
                  <span className="sm:hidden md:block"> Subscribe</span>
                  <span className="md:hidden">
                    <IoSearchOutline />
                  </span>
                </button>
              </div>

              <p className="text-center sm:text-[10px] md:text-base mt-8 max-w-xl">
                Call us today to discuss your 3D task requirements and find
                exactly how we can aid you raise your brand name with innovative
                3D options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingSolutions;
