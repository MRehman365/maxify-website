import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { MdImportantDevices } from "react-icons/md";
import { AiFillStar, AiOutlineSolution, AiOutlineStar } from "react-icons/ai";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";

import { TbBrandDenodo, TbDeviceMobileCode, TbSeo } from "react-icons/tb";
import { IoStar, IoStarHalf } from "react-icons/io5";
import { IoIosPlay } from "react-icons/io";

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

import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import PopupForm from "../Components/PopupForm";
import ClientFeedback from "../Components/ClientFeedback";
import CaseSudy from "../Components/CaseSudy";
import { BiCheckCircle, BiChevronDown } from "react-icons/bi";
import BolgsSlider from "../Components/BolgsSlider";

const services = [
  {
    icon: FaLaptopCode,
    title: "Web Design & Development",
    description:
      "   Delivering responsive and dynamic websites tailored to your business needs.",
    point: [
      "Custom-designed websites that reflect your brand identity.",
      "Responsive, user-friendly, and SEO-optimized designs.",
      "Seamless integration of cutting-edge features to enhance performance and engagement.",
    ],
    url: "/web-development-company-in-noida",
  },
  {
    icon: TbDeviceMobileCode,
    title: "App Development",
    description:
      "Custom mobile app solutions for Android and iOS, designed to enhance engagement and drive business growth.",
    point: [
      "Innovative mobile and web applications tailored to your business goals.",
      "Intuitive designs with a focus on user experience and functionality.",
      "Support for iOS, Android, and cross-platform app development.",
    ],
    url: "/app-development-company-in-noida",
  },
  {
    icon: SiAltiumdesigner,
    title: "  Graphic Design",
    description:
      "Creative design solutions, from logos to marketing collateral, ensuring your brand stands out with professional visuals.",
    point: [
      "Eye-catching graphics that captivate and communicate your message.",
      "Designs for branding, marketing, and social media campaigns.",
      "Professional logo design, brochures, and visual content.",
    ],
    url: "/graphic",
  },
  {
    icon: BsBadge3D,
    title: "3D Modeling",
    url: "/3d-modeling-agency-in-noida",
    description:
      "Innovative 3D modeling and animations that bring your ideas to life, perfect for presentations, product demos, and more. ",
    point: [
      "High-quality 3D designs for product presentations, architectural visuals, and animations.",
      "Realistic renders to bring your ideas to life.",
      "Advanced modeling tools to meet industry-specific needs.",
    ],
  },
  // {
  //   icon: TbSeo,
  //   title: "SEO",
  //   url: "/seo-company-in-noida",
  //   description:
  //     "Enhancing your brand’s presence on social platforms with creative and engaging content to drive interaction and growth.",
  //   point: [
  //     "Custom-designed websites that reflect your brand identity.",
  //     "Responsive, user-friendly, and SEO-optimized designs.",
  //     "Seamless integration of cutting-edge features to enhance performance and engagement.",
  //   ],
  // },
  {
    icon: RiVoiceprintFill,
    title: "   Digital Marketing",
    url: "/digital-marketing-agency-noida",
    description:
      "Comprehensive strategies combining SEO, PPC, and content marketing to boost your online presence and conversions.",
    point: [
      "Comprehensive online marketing strategies to grow your brand visibility.",
      "Services include SEO, PPC, social media marketing, and content creation.",
      "Data-driven campaigns that deliver measurable results.",
    ],
  },
  // {
  //   icon: TbBrandDenodo,
  //   title: "SMO",
  //   url: "/social-media-agency-in-noida",
  //   description:
  //     "Enhancing your brand’s presence on social platforms with creative and engaging content to drive interaction and growth.",
  //   point: [
  //     "Custom-designed websites that reflect your brand identity.",
  //     "Responsive, user-friendly, and SEO-optimized designs.",
  //     "Seamless integration of cutting-edge features to enhance performance and engagement.",
  //   ],
  // },
  {
    icon: GrResources,
    title: "HRMS Software Development",
    url: "/hrms-software-development-company-in-noida",
    description:
      "Streamline HR processes with custom HRMS solutions, enhancing efficiency in recruitment, payroll, and employee management.",
    point: [
      "Streamline your HR processes with custom Human Resource Management Systems.",
      "Features include employee tracking, payroll management, performance evaluation, and more.",
      "Scalable and secure software solutions tailored to your business requirements.",
    ],
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

const slides = [
  {
    heading: "Website Designing & Development",
    description: "The perfect way to show products and services",
  },
  {
    heading: "Custom App Development",
    description: "Meet your needs and improve customer mobile experience",
  },
  {
    heading: "Graphic Designing Services",
    description: "Designs That Speak with your audience",
  },
  {
    heading: "3d modeling and animation",
    description: "Bringing Concepts to screen ",
  },
  {
    heading: "Digital Marketing",
    description: "Boost Your Reach, let experience your targeted audience ",
  },
  {
    heading: "HRMS Software Solutions",
    description: "Streamline Your Business Workforce ",
  },
];

const videos = [v1, v2, v3];
const Home = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const [index, setIndex] = useState(0);
  const [positions, setPositions] = useState([0, 1, 2]);
  const videoRefs = [useRef(null), useRef(null), useRef(null)];
  const animatedRefs = useRef([useRef(null), useRef(null), useRef(null)]); // To hold GSAP refs
  const [currentIndex, setCurrentIndex] = useState(0);
  const [curser, setCurser] = useState({ x: 0, y: 0 });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  const CurserMove = (e) => {
    setCurser({ x: e.clientX, y: e.clientY });
  };

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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(interval);
  }, [slides.length]);

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
      title: "Understanding Client Needs",
      points: [
        "We start by engaging with you to understand your goals, challenges, and vision.",
        "A detailed analysis is conducted to identify your business requirements and target audience.",
        "We document your expectations to ensure clarity and alignment.",
      ],
      description:
        "We begin by getting to know your business, goals, and the problems you face. This stage focuses on listening to you and learning about your brand and vision.",
      side: "left",
    },
    {
      title: "Research and Strategy",
      points: [
        "Our team conducts in-depth market research to analyze industry trends and competitors.",
        "We develop a strategic plan tailored to your objectives, focusing on innovation and scalability.",
        "Key deliverables and timelines are defined to set clear milestones.",
      ],
      description:
        "After we grasp your requirements, we develop a strategic plan and a straightforward roadmap for your project. We establish achievable timelines crucial milestones and deliverables.",
      side: "right",
    },
    {
      title: "Conceptualization and Design",
      points: [
        "Creative brainstorming sessions lead to innovative design concepts.",
        "Wireframes, prototypes, and mockups are developed for initial feedback.",
        "User experience (UX) and user interface (UI) designs are refined for optimal usability and aesthetics.",
      ],
      description:
        "Next, we bring your idea to life through design. Our team builds wireframes and clickable prototypes showing you a visual preview of your project.We make sure the design matches your brand identity and gives a smooth user experience.",
      side: "left",
    },
    {
      title: "Development and Testing",
      points: [
        "Our expert developers turn concepts into reality using the latest technologies.",
        "Rigorous testing is conducted to ensure functionality, performance, and security.",
        "Client reviews and feedback are integrated to maintain quality and satisfaction.",
      ],
      description:
        "Once you okay the design, we start developing. Our skilled developers build your solution keeping in mind speed, safety, and growth potential. We add the needed features and functions while keeping you in the loop",
      side: "right",
    },
    {
      title: "Deployment and Launch",
      points: [
        "Once the product is finalized, it is deployed to the live environment.",
        "Our team ensures a smooth launch with minimal downtime.",
        "Training and support are provided to help you get the most out of your solution.",
      ],
      description:
        "Quality stands at the heart of all we do. We test your solution to check if it's easy to use, works well, and stays secure. Our quality team runs many tests, from checks across browsers to getting user approval.",
      side: "left",
    },
    {
      title: "Post-Launch Support and Maintenance",
      points: [
        "We offer on-going support to address any issues or updates.",
        "Regular performance monitoring and optimization keep your solution running smoothly.",
        "Scalability and enhancements are implemented as your business grows.",
      ],
      description:
        "After we test and approve your project, we prepare it for launch. This applies to websites mobile apps, or software solutions. We make sure the rollout goes and the product works well.",
      side: "right",
    },
  ];

  return (
    <div className="mt-[60px] font-dm">
      <div>
        <SEOComponent
          title="Top Digital Marketing Agency in Noida, Delhi NCR - Maximize Your Online Growth"
          description="Partner with the best digital marketing agency in Noida, Delhi NCR. Specializing in SEO, PPC, social media marketing, and branding to boost your online presence and drive results."
          keywords="Home, Digital Marketing, Noida, Delhi NCR, Maxify Web Solutions"
        />
      </div>

      <div
        onMouseMove={CurserMove}
        className="flex overflow-hidden flex-col-reverse lg:flex-col items-center justify-between px-2 bg-background relative p-2 md:p-10 lg:p-12"
      >
        <img
          src="https://i.ibb.co/v6HFVxv1/about-shape04.webp"
          className="absolute -top-[80px] left-0 -z-10 sm:h-[150px] md:h-auto"
          alt="maxify websolution"
        />

        <motion.div
          className="absolute hidden md:block left-[20%] bottom-[20%]"
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            duration: 3,
          }}
          whileHover={{
            x: Math.random() > 0.5 ? 20 : -20, // Randomly move left or right
            y: Math.random() > 0.5 ? 20 : -20, // Randomly move up or down
            duration: 6,
          }}
        >
          <img
            src="https://i.ibb.co/Tx7rWMGN/store.png"
            alt="Folder"
            className="h-auto w-auto"
          />
        </motion.div>
        <motion.div
          className="absolute hidden md:block left-[80%] bottom-[20%]"
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            duration: 3,
          }}
          whileHover={{
            x: Math.random() > 0.5 ? 20 : -20, // Randomly move left or right
            y: Math.random() > 0.5 ? 20 : -20, // Randomly move up or down
          }}
        >
          <img
            src="https://i.ibb.co/X9m1Gds/web.png"
            alt="Folder"
            className="h-auto w-auto"
          />
        </motion.div>
        <motion.div
          className="absolute hidden md:block left-[76%] top-[10%]"
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 10,
            duration: 6,
          }}
          whileHover={{
            x: Math.random() > 0.5 ? 20 : -20, // Randomly move left or right
            y: Math.random() > 0.5 ? 20 : -20, // Randomly move up or down
          }}
        >
          <img
            src="https://i.ibb.co/LzC110ML/graph.png"
            alt="Folder"
            className="h-auto w-auto"
          />
        </motion.div>
        <motion.div
          className="absolute hidden md:block left-[16%] top-[10%]"
          //  animate={{
          //     x: (curser.x - window.innerWidth / 2) * 0.05, // Adjust the multiplier for subtle movement
          //     y: (curser.y - window.innerHeight / 2) * 0.05, // Adjust the multiplier for subtle movement
          //   }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            duration: 6,
          }}
          whileHover={{
            x: Math.random() > 0.5 ? 20 : -20, // Randomly move left or right
            y: Math.random() > 0.5 ? 20 : -20, // Randomly move up or down
          }}
        >
          <img
            src="https://i.ibb.co/Xk3PLBzv/ai.png"
            alt="Folder"
            className="h-auto w-auto"
          />
        </motion.div>
        <motion.div
          className="absolute hidden md:block left-[48%] top-[0%]"
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            duration: 3,
          }}
          whileHover={{
            x: Math.random() > 0.5 ? 20 : -20, // Randomly move left or right
            y: Math.random() > 0.5 ? 20 : -20, // Randomly move up or down
          }}
        >
          {/* <img src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1735554473/dev_zhjlx0.png" alt="Folder" className="h-auto w-auto" /> */}
        </motion.div>
        <motion.div
          className="absolute hidden md:block left-[6%] top-[45%]"
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            duration: 3,
          }}
          whileHover={{
            x: Math.random() > 0.5 ? 20 : -20, // Randomly move left or right
            y: Math.random() > 0.5 ? 20 : -20, // Randomly move up or down
          }}
        >
          <img
            src="https://i.ibb.co/zTYzb603/healthcare.png"
            alt="Folder"
            className="h-auto w-auto"
          />
        </motion.div>
        <motion.div
          className="absolute hidden md:block right-[6%] top-[45%]"
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            duration: 3,
          }}
          whileHover={{
            x: Math.random() > 0.5 ? 20 : -20, // Randomly move left or right
            y: Math.random() > 0.5 ? 20 : -20, // Randomly move up or down
          }}
        >
          <img
            src="https://i.ibb.co/8g3fHr4h/book.png"
            alt="Folder"
            className="h-auto w-auto"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="w-full"
        >
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-2 bg-background">
            <div className="sm:w-full flex flex-col items-center sm:p-2 md:p-4 sm:mt-0 md:mt-0 text-center">
              <div className="bg-[#2334DE] lg:ml-[20px]  uppercase text-white tracking-wider md:mb-4 text-[10px] mt-8 flex text-center w-32 px-2 py-[2px] justify-between">
                <span>IT SOLUTION </span>
                <span className="w-10 mt-[6px]">
                  <hr />
                </span>
              </div>
              <h2 className=" md:text-6xl sm:text-4xl mt-3 md:mt-9 font-semibold text-black font-barlow lg:ml-[20px] ">
                Welcome To{" "}
                <span className=" md:mt-2  font-semibold text-[#2334DE] font-barlow">
                  {" "}
                  Maxify Solutions{" "}
                </span>
              </h2>
              <p className="md:text-6xl sm:text-2xl mt-4 font-semibold text-black font-barlow lg:ml-[20px] ">
                Your Partner For Digital Transformation
              </p>
              <div className="relative w-full h-[220px]  max-w-3xl mx-auto rounded-lg overflow-hidden">
                <div className="px-8 py-12 h-full flex flex-col justify-center item-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="text-center"
                    >
                      <h2 className="text-xl md:text-3xl font-semibold text-gray-800 mb-4">
                        {slides[currentIndex].heading}
                      </h2>
                      <p className="text-base md:text-xl text-gray-600">
                        {slides[currentIndex].description}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "bg-[#3f4ff9] w-4"
                          : "bg-gray-300"
                      }`}
                      onClick={() => setCurrentIndex(index)}
                    />
                  ))}
                </div>
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-300"
                >
                  <FaChevronLeft size={24} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-300"
                >
                  <FaChevronRight size={24} />
                </button>
              </div>
              <div className="flex items-center justify-center gap-4 p-4">
                <div className="flex flex-col justify-center items-center gap-2">
                  <img
                    src="https://i.ibb.co/nq0Ykxpg/Trustpilot-Logo-500x281.png"
                    className="h-[60px] w-auto"
                    alt="trust pilot"
                  />
                  <div className="flex">
                    <IoStar className="w-5 h-5 text-[orange]" />
                    <IoStar className="w-5 h-5 text-[orange]" />
                    <IoStar className="w-5 h-5 text-[orange]" />
                    <IoStar className="w-5 h-5 text-[orange]" />
                    <IoStarHalf className="w-5 h-5 text-[orange]" />
                  </div>
                </div>
                <div className="h-8 w-px bg-gray-500 mx-2" />
                <div className="flex flex-col items-center gap-2">
                  <img
                    src="https://i.ibb.co/9mvhRrmn/Google-Logo.png"
                    className="h-[60px] w-auto"
                    alt="google"
                  />
                  <div className="flex">
                    <IoStar className="w-5 h-5 text-[orange]" />
                    <IoStar className="w-5 h-5 text-[orange]" />
                    <IoStar className="w-5 h-5 text-[orange]" />
                    <IoStar className="w-5 h-5 text-[orange]" />
                    <IoStarHalf className="w-5 h-5 text-[orange]" />
                  </div>
                </div>
              </div>
              <Link to="/contact">
                <button
                  className="mt-8 py-3 lg:ml-[20px]  text-[14px] font-[300] px-5 rounded-sm relative text-[white] bg-[#2334DE] isolation-auto z-10 border-2 border-[#2334DE]
                 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[white] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-[#2334DE]"
                >
                  Get Started Now
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
        {/* <div className="sm:w-full lg:w-1/2 mt-0 flex items-center justify-center relative sm:h-[400px] md:h-[600px] md:mt-4">
     
        </div> */}
      </div>

      <div >
        <div className="flex flex-col-reverse  md:space-x-4 mt-2 w-[100%] mx-auto md:w-[90%] lg:w-[80%]">

          {/* Right Side - Visible in Mobile View */}
          <div className="w-full text-center p-4 md:p-8 sm:px-3 md:px-[50px] font-dm">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 mt-4 font-manrope">
              Partner with the Best Digital Marketing Agency in Noida
            </h1>
            <p className="text-sm  text-gray-600 mb-6 font-dm">
              Boost your online presence with advanced AI technology for web and
              app development, Digital Marketing agency in Noida. Achieve
              remarkable results and take your business to the next level.
            </p>

            {/* <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 mb-6">
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
            </div> */}
            {/* <p className="text-justify font-semibold text-sm">
              Maxify Solutions - Improve Your Business with Innovative
              Technology Solutions.
            </p> */}
            <div className="flex mt-2 w-full flex-col justify-center">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
                <div className=" flex justify-center items-center">
                  <MdOutlinePhoneInTalk
                    size={22}
                    className="bg-[#f3f3f3] text-[#2334DE] size-[40px] p-2 rounded-full"
                  />
                  <div>
                    <p className=" text-[12px] text-gray-400 font-semibold">
                      Call us anytime
                    </p>
                    <a
                      href="tel:+917428309119"
                      className="text-[14px] font-bold"
                    >
                      +91 7428 309 119
                    </a>
                  </div>
                </div>
                <div className=" flex justify-center items-center gap-1">
                  <span></span>
                  <button onClick={openModal}>
                    <button
                      className=" px-6 py-2 rounded-sm relative w-full text-[white] bg-[#2334DE] isolation-auto z-10 border-2 border-[#2334DE]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[white] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-[#2334DE]"
                    >
                      Discus your business plan now
                    </button>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* video section */}
      <div className="bg-img">
        <div className="flex flex-col md:flex-row md:space-x-4 mt-8 w-[100%] mx-auto md:w-[90%] lg:w-[80%]">
          <div className="sm:w-[96%] mx-auto lg:w-1/2 mt-0 flex items-center justify-center relative sm:h-[400px] md:h-[600px] md:mt-4">
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

          {/* Right Side - Visible in Mobile View */}
          <div className="w-full md:w-1/2 p-4 md:p-8 sm:px-3 md:px-[50px] font-dm">
            <p className="text-[18px] font-[500] text-[gray]">
              <span className="text-[#2334DE] font-dm">//</span> Get to Now
            </p>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 mt-4 font-manrope">
              Best Digital Marketing Agency in Noida
            </h3>
            <p className="text-sm text-justify  text-gray-600 mb-6 font-dm">
              At Maxify Solutions, we are leading Web Development and Digital
              Marketing agency in Noida, Delhi NCR, and India, thrive in the
              digital landscape. As a full-service IT company, we combine
              innovative strategies, cutting-edge technology, and a
              customer-centric approach to deliver measurable Quick Results.
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

      {/* Services */}
      <div className="bg-img relative">
        <div className="w-full md:w-[90%] mx-auto py-12 px-4 relative font-dm">
          <p className=" text-[17px] font-semibold text-center text-[gray] mb-5">
            <span className="text-[#2334DE]">//</span> What We’re Offering
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center font-manrope">
            Services we’re offering to <br />
            our customers
          </h2>
          {/*  */}
          <div className="flex flex-col w-full h-full gap-6 mt-6">
            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
              {services.map((service, index) => (
                <Link
                  to={service.url}
                  key={index}
                  className="relative p-6 bg-[#ffffff7f] hover:bg-[#ffffff0f] border border-gray-200 shadow-sm hover:shadow-lg transition duration-300 group overflow-hidden"
                >
                  {/* Icon Section */}
                  <div className="flex justify-center items-center mb-4">
                    <service.icon className="w-12 h-12 text-[#2334DE] group-hover:text-white" />
                  </div>

                  <h3 className="text-xl font-semibold mb-4 text-gray-800 group-hover:text-white transition text-center">
                    {service.title}
                  </h3>

                  <ul className="text-sm text-gray-600 group-hover:text-white list-disc pl-5">
                    {service.point.map((item, idx) => (
                      <li key={idx} className="mb-2">
                        {item}
                      </li>
                    ))}
                    <p className="text-[#2334DE] group-hover:text-white">
                      Learn More
                    </p>
                  </ul>

                  {/* Decorative Hover Element */}
                  <div className="absolute transition-transform duration-500 transform scale-0 group-hover:scale-100 -z-20 bg-[#2333def1] w-full h-full top-0 left-0"></div>
                </Link>
              ))}
            </div>
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

      {/* planing and Deveolpment */}
      <div className="bg-img">
        <div className="max-w-6xl mx-auto p-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Maxify Solutions -{" "}
            <span className="text-blue-600">Planning and Development</span>{" "}
            Process
          </motion.h2>
          <motion.p
            className="text-center mb-16 text-gray-600 text-lg leading-relaxed"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            At Maxify Solutions, we believe that a well-structured process is
            the foundation of successful project delivery. Our Planning and
            Development Process ensures that every project is executed with
            precision, efficiency, and innovation.
          </motion.p>

     <div className="relative max-w-4xl mx-auto">
  {steps.map((step, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex flex-col items-center group"
    >
      {/* Process Step Card */}
      <div className="bg-white group-hover:bg-[#2334DE] transition-all rounded-lg shadow-[0px_0px_5px_#e1e1e1] p-8 relative overflow-hidden w-full">
        <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#2334DE] transition-all group-hover:bg-[white] rounded-full flex items-center justify-center transform -rotate-45">
          <span className="text-white group-hover:text-[#2334DE] transition-all font-bold text-2xl transform rotate-45">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <h3 className="text-xl font-semibold group-hover:text-[white] transition-all text-gray-800 mb-4 pl-16">
          {step.title}
        </h3>
        {step.points.map((point, i) => (
          <div key={i} className="flex items-start">
            <BiCheckCircle className="text-green-500 w-6 h-6 mr-4 flex-shrink-0 mt-1" />
            <p className="text-gray-600 group-hover:text-[#f1f1f1] transition-all">{point}</p>
          </div>
        ))}
      </div>

      {/* Arrow Image */}
{index < steps.length - 1 && (
  <div
    className={`absolute top-1/2 transform hidden lg:block ${
      index % 2 === 0
        ? "right-[-110px] rotate-[305deg]" // Right-side arrow
        : "left-[-110px] rotate-[235deg] scale-y-[-1]" // Downward-pointing left-side arrow
    }`}
  >
    <img
      src="https://i.ibb.co/PvZvCF8g/arrow-removebg-preview-2.png"
      className="h-[170px] w-auto"
      alt="arrow"
    />
  </div>
)}

      {/* Connecting Line */}
      {index < steps.length - 1 && (
        <div className="h-20 w-[2px] bg-gray-300 opacity-1 lg:opacity-0"></div>
      )}
    </motion.div>
  ))}
</div>

        </div>
      </div>

      {/*  */}
      <div className="md:py-6 p-2 md:px-6 lg:px-8">
        <div className="max-w-7xl md:w-[90%] mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-center gap-8">
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
                src="https://i.ibb.co/5hmCx7tQ/5.webp"
                alt="web development company in noida, Delhi NCR"
                className="h-auto right-2 bottom-0 w-[40%] absolute"
              />
              <img
                src="https://i.ibb.co/twNPj3QB/3.webp"
                alt="Digital Marketing Agency in Noida, Delhi NCR"
                className="w-[80%] object-cover h-auto"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h1 className="text-3xl font-extrabold text-gray-900 mb-8">
                Why Our Process Works
              </h1>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-[#2334DE] mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    <span className="font-semibold">
                      Client-Centric Approach:
                    </span>{" "}
                    Your input drives every stage of the process.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-[#2334DE] mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    <span className="font-semibold">Transparency:</span> We
                    maintain open communication and provide regular progress
                    updates.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-[#2334DE] mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    <span className="font-semibold">Efficiency:</span> Clear
                    timelines and milestones ensure timely delivery.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-[#2334DE] mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    <span className="font-semibold">Innovation:</span> We
                    leverage the latest technologies and trends to deliver
                    exceptional results.
                  </span>
                </li>
              </ul>

              <p className="text-gray-700 mb-6 text-justify">
                At Maxify Solutions, our Planning and Development Process
                ensures that every project is a success. Whether you're building
                a website, developing an app, or launching a branding campaign,
                we're here to turn your vision into reality.
              </p>

              <p className="text-xl font-bold text-gray-900 mb-8">
                Let's build something amazing together!
              </p>

              <div>
                <a href="tel:+917428309119" target="blank">
                  <button
                    className=" px-6 py-2 rounded-sm relative text-[white] bg-[#2334DE] isolation-auto z-10 border-2 border-[#2334DE]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[white] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-[#2334DE]"
                  >
                    Call now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="">
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
          <div className="w-full flex justify-end px-2 mt-8 md:mt-0">
            <div className=" sm:w-full md:w-[70%] right-[0px] ">
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
                src="https://i.ibb.co/vMVXTqB/7.webp"
                alt={`${heading} advanced ai technology for best results`}
                className="sm:h-[200px] md:h-[350px] sm:w-[150px] rounded-lg object-cover md:w-[300px]"
              />
              <img
                src="https://i.ibb.co/tPF8D42v/6.webp"
                alt={`${heading} social media optimization`}
                className="sm:h-[200px] md:h-[350px] sm:w-[150px] md:w-[300px]"
              />
            </div>
            <div>
              <img
                src="https://i.ibb.co/C4GbkmP/4.webp"
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
              src="https://i.ibb.co/qYgH6Fxn/2.webp"
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
      <CaseSudy />
      <ClientFeedback />
      <BolgsSlider />
      <FAQs />

      {isModalVisible && <PopupForm onClose={closeModal} />}
    </div>
  );
};

export default Home;
