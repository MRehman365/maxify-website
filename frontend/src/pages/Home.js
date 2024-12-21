import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { MdImportantDevices } from "react-icons/md";
import { AiOutlineSolution } from "react-icons/ai";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";

import { TbBrandDenodo, TbDeviceMobileCode, TbSeo } from "react-icons/tb";

import { IoIosPlay } from "react-icons/io";
import { motion } from "framer-motion";

import {
  FaHandHoldingMedical,
  FaStethoscope,
  FaHeartbeat,
} from "react-icons/fa";
import { LuFocus } from "react-icons/lu";
import { BsBadge3D, BsGraphUpArrow } from "react-icons/bs";
import { MdSupportAgent } from "react-icons/md";
import { GoCodeReview } from "react-icons/go";

import "swiper/css";
import "swiper/css/navigation";

import { gsap } from "gsap";

import v1 from "../Assets/VID-20241025-WA0042.mp4";
import v2 from "../Assets/VID-20241025-WA0043.mp4";
import v3 from "../Assets/VID-20241025-WA0045.mp4";
import FAQs from "../Components/FAQs";

import { SiAltiumdesigner } from "react-icons/si";
import { RiVoiceprintFill } from "react-icons/ri";
import { GrResources } from "react-icons/gr";
import SEOComponent from "../Components/SEOComponent";

const services = [
  {
    icon: FaLaptopCode,
    title: "Web Design & Development",
    description:
      "   Delivering responsive and dynamic websites tailored to your business needs.",
    url: "/web-development-company-in-noida",
  },
  {
    icon: TbDeviceMobileCode,
    title: "App Development",
    description:
      "Custom mobile app solutions for Android and iOS, designed to enhance engagement and drive business growth.",
    url: "/app-development-company-in-noida",
  },
  {
    icon: SiAltiumdesigner,
    title: "  Graphic Design",
    description:
      "Creative design solutions, from logos to marketing collateral, ensuring your brand stands out with professional visuals.",
    url: "/graphic",
  },
  {
    icon: BsBadge3D,
    title: "3D Modeling",
    url: "/3d-modeling-agency-in-noida",
    description:
      "Innovative 3D modeling and animations that bring your ideas to life, perfect for presentations, product demos, and more. ",
  },
  {
    icon: TbSeo,
    title: "SEO",
    url: "/seo-company-in-noida",
    description:
      "Enhancing your brand’s presence on social platforms with creative and engaging content to drive interaction and growth.",
  },
  {
    icon: RiVoiceprintFill,
    title: "   Digital Marketing",
    url: "/digital-marketing-agency-noida",
    description:
      "Comprehensive strategies combining SEO, PPC, and content marketing to boost your online presence and conversions.",
  },
  {
    icon: TbBrandDenodo,
    title: "SMO",
    url: "/social-media-agency-in-noida",
    description:
      "Enhancing your brand’s presence on social platforms with creative and engaging content to drive interaction and growth.",
  },
  {
    icon: GrResources,
    title: "HRMS",
    url: "/hrms-software-development-company-in-noida",
    description:
      "Streamline HR processes with custom HRMS solutions, enhancing efficiency in recruitment, payroll, and employee management.",
  },
];

const sections = {
  softwareDevelopment: {
    heading: "Custom Software Development",
    bgColor: "#2334DE",
    image:
      "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1731336049/Web_Design_and_Development_5_xuuean.gif",
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
    bgColor: "#6b64ec",
    image:
      "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1731336049/Web_Design_and_Development_5_xuuean.gif",
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
    bgColor: "#44b88c",
    image:
      "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1731335999/Web_Design_and_Development_wb6hhm.gif",
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
    bgColor: "#ffad05",
    image:
      "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1731336019/Web_Design_and_Development_1_y7rffp.gif",
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
  cloudsolution: {
    heading: "Cloud Solutions",
    bgColor: "#a1a6b3",
    image:
      "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1731335962/Web_Design_and_Development_2_wgdytz.gif",
    points: [
      {
        number: "01",
        title: "Custom Architectures:",
        description:
          "Scalable cloud infrastructures designed to grow with your business.",
      },
      {
        number: "02",
        title: "Proactive Management: ",
        description:
          "Optimization of cloud performance and costs through continuous monitoring",
      },
      {
        number: "03",
        title: "Enhanced Security: ",
        description:
          " Advanced security measures beyond standard protocols to safeguard your data.",
      },
    ],
  },
  cybersecurity: {
    heading: "Cybersecurity",
    bgColor: "#ff0000",
    image:
      "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1731335983/Web_Design_and_Development_3_pqhwpk.gif",
    points: [
      {
        number: "01",
        title: "Proactive Threat Prevention:",
        description:
          " Anticipate and prevent threats before they impact your business.",
      },
      {
        number: "02",
        title: "Tailored Security Protocols: ",
        description:
          "Custom security strategies designed for your specific industry and needs.",
      },
      {
        number: "03",
        title: "Real-Time Monitoring: ",
        description:
          "Continuous monitoring and rapid incident response to protect your assets.",
      },
    ],
  },
  busniess: {
    heading: "Business Intelligence and Analytics",
    bgColor: "#946e4d",
    image:
      "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1731336021/Web_Design_and_Development_4_quavha.gif",
    points: [
      {
        number: "01",
        title: "Predictive Insights: ",
        description:
          " Advanced analytics that forecast trends and inform proactive business decisions.",
      },
      {
        number: "02",
        title: "Integrated Data Sources: ",
        description:
          " Custom integration of data from multiple sources for comprehensive insights.",
      },
      {
        number: "03",
        title: "Strategic Consulting: ",
        description:
          "Expert guidance to help you leverage data for a competitive advantage.",
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

const videos = [v1, v2, v3];
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const [index, setIndex] = useState(0);
  const [positions, setPositions] = useState([0, 1, 2]);
  const videoRefs = [useRef(null), useRef(null), useRef(null)];
  const animatedRefs = useRef([useRef(null), useRef(null), useRef(null)]); // To hold GSAP refs

  useEffect(() => {
    // Play the center video and pause the others
    videoRefs.forEach((ref, index) => {
      if (ref.current) {
        if (index === positions[0]) {
          ref.current.play().catch((error) => {
            console.error("Error playing video:", error);
          });
        } else {
          ref.current.pause();
        }
      }
    });
  }, [positions]);

  useEffect(() => {
    // GSAP animations
    gsap.fromTo(
      animatedRefs.current[0],
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 1 }
    );

    gsap.fromTo(
      animatedRefs.current[1],
      { opacity: 0, x: 100, y: -100 },
      { opacity: 1, x: 0, y: 0, duration: 1 }
    );

    gsap.fromTo(
      animatedRefs.current[2],
      { opacity: 0, x: -100, y: 100 },
      { opacity: 1, x: 0, y: 0, duration: 1 }
    );
  }, [positions]); // Trigger animations on position change

  const handleVideoEnd = () => {
    setPositions((prevPositions) => [
      prevPositions[1], // Move top-right video to center
      prevPositions[2], // Move bottom-left video to top-right
      prevPositions[0], // Move center video to bottom-left
    ]);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSectionIndex(
        (prevIndex) => (prevIndex + 1) % sectionKeys.length
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const { heading, points, image, bgColor } =
    sections[sectionKeys[currentSectionIndex]];

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentSectionIndex(
  //       (prevIndex) => (prevIndex + 1) % sectionKeys.length
  //     );
  //   }, 2000);

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
  const steps = [
    {
      title: "Initial Consultation & Discovery",
      description:
        "We begin by getting to know your business, goals, and the problems you face. This stage focuses on listening to you and learning about your brand and vision.",
      side: "left",
    },
    {
      title: "Strategic Planning & Roadmap Creation",
      description:
        "After we grasp your requirements, we develop a strategic plan and a straightforward roadmap for your project. We establish achievable timelines crucial milestones and deliverables.",
      side: "right",
    },
    {
      title: "Design & Prototyping",
      description:
        "Next, we bring your idea to life through design. Our team builds wireframes and clickable prototypes showing you a visual preview of your project.We make sure the design matches your brand identity and gives a smooth user experience.",
      side: "left",
    },
    {
      title: "Development & Implementation",
      description:
        "Once you okay the design, we start developing. Our skilled developers build your solution keeping in mind speed, safety, and growth potential. We add the needed features and functions while keeping you in the loop",
      side: "right",
    },
    {
      title: "Quality Checks & Tests",
      description:
        "Quality stands at the heart of all we do. We test your solution to check if it's easy to use, works well, and stays secure. Our quality team runs many tests, from checks across browsers to getting user approval.",
      side: "left",
    },
    {
      title: " Start & Setup",
      description:
        "After we test and approve your project, we prepare it for launch. This applies to websites mobile apps, or software solutions. We make sure the rollout goes and the product works well.",
      side: "right",
    },
    {
      title: "Ongoing Support & Maintenance",
      description:
        "We don't stop caring about your success after launch. We keep supporting and maintaining your solution to keep it current and working at its best. We update, patch security holes, and boost performance.",
      side: "left",
    },
  ];

  return (
    <div className="mt-[80px] font-dm">
      <div>
        <SEOComponent
          title="Top Digital Marketing Agency in Noida, Delhi NCR - Maximize Your Online Growth"
          description="Partner with the best digital marketing agency in Noida, Delhi NCR. Specializing in SEO, PPC, social media marketing, and branding to boost your online presence and drive results."
          keywords="Home, Digital Marketing, Noida, Delhi NCR, Maxify Web Solutions"
        />
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-2 bg-background relative">
        <img
          src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512522/Path_4_1_satfqd.png"
          className="absolute -top-[80px] left-0 -z-20 sm:hidden lg:block"
          alt="maxify websolution"
        />
        <img
          src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1732109312/h3_banner_img02_kksuqv.webp"
          className="absolute top-[55%] left-[45%] -z-20 sm:hidden lg:block animate-pulse"
          alt="maxify websolution"
        />
        <img
          src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1732115044/h3_banner_img_shape_stusom.webp"
          className="absolute top-[15%] left-[35%] -z-20 sm:hidden lg:block  transition-[5s] "
          alt="maxify websolution"
        />
        <img
          src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1732115043/about_shape04_xudxbb.webp"
          className="absolute top-[100%] left-[90%] -z-20 sm:hidden lg:block  transition-[5s] "
          alt="maxify websolution"
        />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-2 bg-background">
            <div className="sm:w-full  sm:p-2 md:p-4 sm:mt-0 md:mt-0">
              <div className="bg-[#2334DE] lg:ml-[20px] xl:ml-[100px] uppercase text-white tracking-wider md:mb-4 text-[10px] mt-8 flex text-center w-32 px-2 py-[2px] justify-between">
                <span>IT SOLUTION </span>
                <span className="w-10 mt-[6px]">
                  <hr />
                </span>
              </div>
              <h2 className="text-7xl md:text-5xl sm:text-4xl mt-3 md:mt-9 font-semibold text-black font-barlow lg:ml-[20px] xl:ml-[100px]">
                Welcome To{" "}
                <span className="text-7xl md:text-5xl sm:text-4xl md:mt-2  font-semibold text-[#2334DE] font-barlow">
                  {" "}
                  Maxify Solutions{" "}
                </span>
              </h2>
              <h5 className="text-7xl md:text-5xl sm:text-4xl md:mt-2  font-semibold text-[#2334DE] font-barlow"></h5>
              <p className="md:text-4xl sm:text-lg mt-4 font-semibold text-black font-barlow lg:ml-[20px] xl:ml-[100px]">
                Your Partner For Digital Transformation
              </p>
              <Link to="/contact">
                <button
                  className="mt-8 py-3 lg:ml-[20px] xl:ml-[100px] text-[14px] font-[300] px-5 rounded-sm relative text-[white] bg-[#2334DE] isolation-auto z-10 border-2 border-[#2334DE]
                 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[white] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-[#2334DE]"
                >
                  Get Started Now
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
        <div className="sm:w-full lg:w-1/2 mt-0 flex items-center justify-center relative sm:h-[400px] md:h-[600px] md:mt-4">
          {/* Center Video */}
          <div
            ref={(el) => (animatedRefs.current[0] = el)} // Attach ref for GSAP
            className="h-[65%] md:w-[65%] w-[75%] overflow-hidden rounded-lg relative z-10"
          >
            <video
              ref={videoRefs[positions[0]]}
              src={videos[positions[0]]}
              loop={false}
              muted
              onEnded={handleVideoEnd}
              className="h-full w-full object-fill rounded-lg"
            />
          </div>

          {/* Top Right Video */}
          {/* Top Right Video */}
          <div
            ref={(el) => (animatedRefs.current[1] = el)} // Attach ref for GSAP
            className="absolute top-0 right-0 z-0 h-[100px] w-[150px] md:h-[200px] md:w-[300px] rounded-lg"
            style={{ backgroundColor: "#2334DE" }} // Set your desired color
          >
            <video
              ref={videoRefs[positions[1]]}
              src={videos[positions[1]]}
              loop
              muted
              className="h-full w-full object-fill rounded-lg hidden"
            />
          </div>

          {/* Bottom Left Video */}
          <div
            ref={(el) => (animatedRefs.current[2] = el)} // Attach ref for GSAP
            className="absolute bottom-0 left-0 z-0 h-[100px] w-[150px] md:h-[200px] md:w-[300px] rounded-lg"
            style={{ backgroundColor: "#2334DE" }} // Set another color
          >
            <video
              ref={videoRefs[positions[2]]}
              src={videos[positions[2]]}
              loop
              muted
              className="h-full w-full object-fill rounded-lg hidden"
            />
          </div>
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
              src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512488/5_yswoho.webp"
              alt="web development company in noida, Delhi NCR"
              className="h-auto right-2 bottom-0 w-[40%] absolute"
            />
            <img
              src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512489/3_atcrny.webp"
              alt="Digital Marketing Agency in Noida, Delhi NCR"
              className="w-[80%] object-cover h-auto"
            />
          </div>

          {/* Right Side - Visible in Mobile View */}
          <div className="w-full md:w-1/2 p-4 md:p-8 sm:px-3 md:px-[50px] font-dm">
            <p className="text-[18px] font-[500] text-[gray]">
              <span className="text-[#2334DE] font-dm">//</span> Get to Now
            </p>
            <h3 className="text-2xl md:text-4xl font-bold mb-4 mt-4 font-manrope">
              Maxify Solutions
            </h3>
            <p className="text-sm text-justify  text-gray-600 mb-6 font-dm">
              is a trustworthy partner for navigating the difficult realm of
              digital transformation. Based in Noida, we specialize in helping
              businesses like yours succeed and grow with the use of technology.
              Whether you're looking for a reputable website development company
              in Noida or a digital marketing services provider in Noida, we
              have you covered. Our broad solutions are customized to your
              requirements and offer visible outcomes. Allow us to help you take
              your company to the next level with our unique solutions.
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
              Maxify Solutions - Improve Your Business with Innovative
              Technology Solutions.
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
                  <p className="text-[14px] font-bold">+91 7428 309 119</p>
                </div>
              </div>
              <div className="w-1/2 flex justify-center">
                <Link to="/services">
                  <button
                    className=" px-6 py-2 rounded-sm relative text-[white] bg-[#2334DE] isolation-auto z-10 border-2 border-[#2334DE]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[white] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-[#2334DE]"
                  >
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
        <div className="w-full max-w-6xl mx-auto py-12 px-4 relative font-dm">
          <p className=" text-[17px] font-semibold text-center text-[gray] mb-5">
            <span className="text-[#2334DE]">//</span> What We’re Offering
          </p>
          <h2 className="text-4xl font-bold text-center font-manrope">
            Services we’re offering to <br />
            our customers
          </h2>
          {/*  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            {services.map((service, index) => (
              <Link
                to={service.url}
                key={index}
                className="relative p-6 hover:bg-white text-center transition duration-300 hover:shadow-[0_0_20px_#A1A6B3] group overflow-hidden"
              >
                {/* Top-right corner blue box */}
                <div className="absolute transition duration-1000 -top-5 -right-5 h-2 w-2 group-hover:w-10 group-hover:h-10 transform rotate-45 bg-[#2334DE] "></div>

                <div className="mb-4 flex justify-center">
                  <service.icon className="w-12 h-12 text-[#2334DE]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </Link>
            ))}
          </div>

          {/*  */}
          <div className="flex justify-center gap-2 flex-wrap mt-12">
            <p className="sm:text-sm md:text-base text-center font-[500] text-gray-600 bg-[#f3f3f3] p-3 rounded-lg">
              Trust the experts for all your{" "}
              <span className="font-semibold text-black">
                Web Design & Development
              </span>{" "}
              needs.
            </p>
            <Link to="/services">
              <button
                className="rounded-lg px-6 py-2 relative text-[white] bg-[#2334DE] isolation-auto z-10 border-2 border-[#2334DE]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[white] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-[#2334DE]"
              >
                Explore now
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/*  */}
      <div className=" bg-img">
        <div className="max-w-6xl mx-auto  mt-6 p-2">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Planning and <span className="text-[#2334DE]"> Development </span>
            Process
          </h2>

          <div className="">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300"></div>

              {steps.map((step, index) => (
                <div key={index} className="mb-12 flex w-full">
                  {/* Left Side Content */}
                  <div
                    className={`w-1/2 ${
                      step.side === "right" ? "text-right pr-8" : "text-left"
                    }`}
                  >
                    {step.side === "left" && (
                      <div className="bg-[#f3f6fd] p-2">
                        <h3 className="font-semibold  text-[14px] md:text-lg text-center">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-[12px] md:text-sm text-justify mt-2">
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
                        <h3 className="font-semibold md:text-lg text-center">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-sm text-justify mt-2">
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
          <div className="md:w-1/2 min-h-[400px] md:px-5">
            <h3 className="text-[#2334DE]">
              {/* <span className="text-white">What We Offer!</span> */}
            </h3>
            <h3 className="text-2xl md:text-3xl font-bold mt-4 font-manrope">
              {heading}
            </h3>
            <div className="mt-8 space-y-8">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div>
                    <p
                      className="text-white h-10 w-10 flex items-center justify-center rounded-full"
                      style={{ backgroundColor: bgColor }}
                    >
                      {point.number}
                    </p>
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
            <div className="lg:absolute sm:w-full md:w-[55%] right-[0px] top-[-30px]">
              <img
                src={image}
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
          <div className="flex w-full md:w-1/2 justify-center md:justify-end items-center company-bg relative gap-3">
            <div className="flex flex-col gap-3">
              <img
                src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512490/7_b87xoc.webp"
                alt={`${heading} advanced ai technology for best results`}
                className="sm:h-[200px] md:h-[350px] sm:w-[150px] rounded-lg object-cover md:w-[300px]"
              />
              <img
                src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512489/6_jtqi46.webp"
                alt={`${heading} social media optimization`}
                className="sm:h-[200px] md:h-[350px] sm:w-[150px] md:w-[300px]"
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512488/4_mlz0sf.webp"
                alt={`${heading} ROI-driven campaign optimization`}
                className="sm:h-[200px] md:h-[400px] sm:w-[150px] rounded-lg object-cover md:w-[300px]"
              />
            </div>
          </div>

          {/* Right Side - Visible in Mobile View */}
          <div className="w-full md:w-1/2 p-4 md:p-8 sm:px-3 md:px-[30px] flex flex-col md:gap-8 justify-center">
            <p className="text-[16px] font-[500] text-[gray]">
              <span className="text-[#ff0000]">//</span> Company Benifits
            </p>
            <h3 className="text-2xl md:text-4xl font-bold mb-1 font-manrope">
              Industry Solutions and Expertise.
            </h3>
            <div>
              <p className="text-sm text-justify  text-gray-600 mb-2">
                At Maxify Web Solutions, we know each industry faces its own
                challenges and chances. We've worked in many different fields,
                so we can create new tailored digital answers for your
                business's exact needs. Our team mixes deep knowledge of
                industries with the latest tech to boost growth, make operations
                smoother, and improve customer experiences.
              </p>
              <p className="text-sm text-justify  text-gray-600 mb-2">
                <strong>E-Commerce Solutions :</strong>We build custom
                e-commerce websites, add secure payment options, and create
                scalable solutions. This improves shopping experiences, boosts
                sales, and increases conversions.
              </p>
              <p className="text-sm text-justify  text-gray-600 mb-2">
                <strong>Healthcare & Medical Solutions :</strong>We develop
                HIPAA-compliant healthcare tools. These include telemedicine
                platforms, software to manage patients, and secure systems to
                schedule appointments.
              </p>
              <p className="text-sm text-justify  text-gray-600 mb-2">
                <strong>Finance & Banking :</strong>We create secure banking
                apps, platforms to manage finances, and systems to track
                investments. These meet regulatory standards and boost user
                trust.
              </p>
              {/* <p className="text-sm text-justify  text-gray-600 mb-2">
            <strong>Education & E-Learning :</strong>Custom Learning Management Systems (LMS), student portals, and online assessment tools to boost access and involvement in education.
            </p> */}
              <p className="text-sm text-justify  text-gray-600 mb-2">
                <strong>Real Estate Solutions :</strong>Real estate websites,
                CRM systems, and virtual tour solutions to simplify property
                deals and boost customer engagement.
              </p>
              <p className="text-sm text-justify  text-gray-600 mb-2">
                <strong>Technology & IT Solutions :</strong>Online software,
                business management platforms, and smart programs help tech
                companies boost productivity and keep up with rivals.
              </p>
              <p className="text-sm text-justify  text-gray-600 mb-6">
                <strong>Hospitality & Travel :</strong>Booking platforms and
                hotel management systems to improve guest experiences and grow
                bookings in the hospitality industry.
              </p>
            </div>

            <div className="flex justify-between shadow-md p-4 mb-6 border-t-[1px] border-r-[1px] border-l-[3px] border-l-[#2334DE] bg-white">
              <p className="font-semibold">{benifits[index].text}</p>
              {benifits[index].icon}
            </div>

            <div className="mt-8">
              <Link to="/services">
                <button
                  className=" px-6 py-2  relative text-[white] bg-[#2334DE] isolation-auto z-10 border-2 border-[#2334DE]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[white] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-[#2334DE]"
                >
                  Explore now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* last section */}
      <div className="bg-img">
        <div className="flex flex-col md:flex-row md:space-x-4 mt-8 w-[100%] mx-auto md:w-[90%]">
          {/* Left Side - Hidden in Mobile View */}
          <div className="w-full md:w-1/2 justify-center items-center relative flex">
            <img
              src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512489/2_ryqv8n.webp"
              alt="cutting edge technology"
              className="w-[70%] object-cover h-[90%] rounded-lg"
            />
          </div>

          {/* Right Side - Visible in Mobile View */}
          <div className="w-full md:w-full lg:w-1/2 p-4 md:p-8 sm:px-3 md:px-[30px]">
            <span className="text-[12px] font-[500] px-4 py-0 bg-[#2334DE] text-white">
              Why ------
            </span>
            <h3 className="text-2xl md:text-4xl font-semibold mb-1 font-barlow">
              Why Should You Choose Maxify Solutions?
            </h3>
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
                    We take interest in our track record of offering
                    high-quality solutions resulting in measurable outcomes. Our
                    primary goal is to increase the value of your company.
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
                    Our dedication to your success does not end when we offer
                    our services. We provide ongoing support and maintenance to
                    ensure that your solutions operate at their best.
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
              <Link to="/services">
                <button
                  className=" px-6 py-2 rounded-sm relative text-[white] bg-[#2334DE] isolation-auto z-10 border-2 border-[#2334DE]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[white] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-[#2334DE]"
                >
                  Explore now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <FAQs />
    </div>
  );
};

export default Home;
