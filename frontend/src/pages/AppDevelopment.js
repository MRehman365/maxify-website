import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiUserGroup } from "react-icons/hi2";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import SEOComponent from "../Components/SEOComponent";

const plans = [
  {
    title: "Discovery and Planning",
    description:
      "We work closely with you to comprehend your objectives, assess your requirements, and develop a successful strategy.",
  },
  {
    title: "Design and Prototyping",
    description:
      "Our team brings your concept reality before development by producing interactive prototypes and aesthetically appealing designs.",
  },
  {
    title: "Development",
    description:
      "With a focus on speed, usability, and usefulness, we create solutions that are reliable, scalable, and high-performing.",
  },
  {
    title: "Testing and Quality Assurance",
    description:
      "Thorough testing guarantees that your solution is secure, error-free, and user experience optimal.",
  },
  {
    title: "Launch and Deployment",
    description:
      "We manage the launch process with ease, making sure your product is operational, live, and prepared to wow users.",
  },
  {
    title: "Post-Launch Support",
    description:
      "To keep your solution secure, up to date, and operating at peak efficiency, our staff offers continuous support and maintenance.",
  },
];
const AppDevelopment = () => {
  const [activeService, setActiveService] = useState("Android App Development");
  const [hoveredStep, setHoveredStep] = useState(null);
  const services = {
    "Android App Development": {
      title: "simple coding app development",
      description:
        "As the leading Android app development company in Noida, we specialize in creating robust and scalable Android apps that meet your business requirements. Our developers are proficient in Java, Kotlin, and other Android development tools, ensuring that your app is compatible with the latest Android versions and devices.",
      features: [
        "Custom Android app development tailored to your needs",
        "Integration with third-party services and APIs",
        "Optimized performance for various Android devices",
        "Rigorous testing to ensure a bug-free experience",
      ],
      imgSrc:
        "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513433/5_pskc4h.webp", // Replace with the actual image path
    },
    "iOS App Development": {
      title: "app development for ios and android",
      description:
        "Our iOS app development services are designed to help businesses create secure, scalable, and engaging applications for Apple devices. We ensure that your app meets the highest standards of quality and performance.",
      features: [
        "Custom iOS app development tailored to your needs",
        "Integration with Apple services and APIs",
        "Optimized performance for iPhone and iPad devices",
        "Rigorous testing to ensure a seamless user experience",
      ],
      imgSrc:
        "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513385/6_o1yhbj.webp", // Replace with the actual image path
    },
    "Cross-Platform App Development": {
      title: "custom app development for android",
      description:
        "We develop cross-platform apps that run seamlessly on both Android and iOS devices. Our expertise in frameworks like React Native and Flutter ensures that your app delivers a consistent user experience across platforms.",
      features: [
        "Single codebase for multiple platforms",
        "Faster development and deployment",
        "Consistent user experience on Android and iOS",
        "Cost-effective solution for multi-platform apps",
      ],
      imgSrc:
        "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513389/9_sdrh8y.webp", // Replace with the actual image path
    },
    "App Design and User Experience (UX)": {
      title: "ui/ux design app",
      description:
        "Our design team focuses on creating intuitive and user-friendly app interfaces. We ensure that your app is not only functional but also visually appealing, enhancing user satisfaction and engagement.",
      features: [
        "User-centered design approach",
        "Prototyping and wireframing",
        "Responsive design for all devices",
        "Focus on accessibility and usability",
      ],
      imgSrc:
        "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513388/7_jih0gm.webp", // Replace with the actual image path
    },
    "App Testing and Quality Assurance": {
      title: "aap for automation ",
      description:
        "We provide comprehensive app testing services to ensure that your app is bug-free and performs optimally. Our QA team conducts various tests, including functional, performance, and security testing, to deliver a reliable product.",
      features: [
        "Manual and automated testing",
        "Performance optimization",
        "Security and compliance checks",
        "Continuous testing during development",
      ],
      imgSrc:
        "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513388/8_k98pir.webp", // Replace with the actual image path
    },
  };
  const serviceList = [
    "Android App Development",
    "iOS App Development",
    "Cross-Platform App Development",
    "App Design and User Experience (UX)",
    "App Testing and Quality Assurance",
  ];

  // Automatically change active service every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => {
        const currentIndex = serviceList.indexOf(prev);
        const nextIndex = (currentIndex + 1) % serviceList.length; // Cycle back to the first service
        return serviceList[nextIndex];
      });
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const handleClick = (service) => {
    setActiveService(service);
  };

  const progressData = [
    {
      percentage: "95",
      title: "Completed Project",
    },
    {
      percentage: "88",
      title: "Fincial Skill",
    },
    {
      percentage: "99",
      title: "Relaible & Hardworking",
    },
  ];
  const steps = [
    {
      title: "Proven Track Record",
      description:
        "With years of experience in the industry, we have successfully delivered hundreds of apps to satisfied clients across various industries. Our portfolio speaks for itself, showcasing our ability to create high-quality apps that deliver results.",
      side: "right",
    },
    {
      title: "Client Testimonials",
      description:
        "Our clients trust us because we deliver what we promise. We take pride in the positive feedback we receive, which motivates us to continue providing top-notch services.",
      side: "left",
    },
    {
      title: "Innovation and Creativity",
      description:
        "We believe in pushing the boundaries of technology and creativity. Our team is always exploring new ideas and solutions to ensure that your app stands out in a crowded market.",
      side: "right",
    },
    {
      title: "Comprehensive Solutions",
      description:
        "From idea to execution, we offer a complete range of app development services. Whether you need a simple app or a complex enterprise solution, we have the expertise to meet your needs.",
      side: "left",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mt-[70px]">
      <div>
        <SEOComponent
          title="Maxify-AppDevelopment"
          description="Maxify Web Solutions offers digital marketing services in Noida and Delhi NCR. We help businesses grow with AI-powered marketing strategies."
          keywords="Home, Digital Marketing, Noida, Delhi NCR, Maxify Web Solutions"
        />
      </div>
      <div className="md:w-[90%] mx-auto bg-background rounded-lg flex flex-col-reverse lg:flex-row lg:items-center">
        <div className="lg:w-1/2 sm:px-4 md:px-4 lg:px-6">
          <h1 className="sm:text-2xl md:text-5xl lg:text-7xl text-center md:text-left font-semibold text-foreground font-yan">
            Best App Development Company in Noida
          </h1>
          <p className="mt-4 text-base text-gray-600 md:text-[18px] text-justify">
            Mobile applications have become an essential part of every business.
            Whether you are a startup looking to launch your first app or an
            established business aiming to enhance customer engagement, having a
            well-designed and functional mobile app is crucial. At Maxify
            Solution, we pride ourselves on being the best app development
            company in Noida, offering top-notch mobile app solutions that cater
            to your business needs.
          </p>
          <div className="mt-6 flex space-x-4 mb-4">
            <Link
              to="/about"
              className="bg-[#2334DE] text-white py-3 px-5 rounded-full hover:bg-[#2334DE]/80"
            >
              Learn More
            </Link>
            <a
              href="https://wa.me/+917428309119"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#d5d8fa] text-[#2334DE] py-3 px-5 rounded-full flex items-center hover:bg-[#d5d8fa]/80"
            >
              Let's Talk
              <GoArrowUpRight className="ml-2" />
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 p-4 mt-8 lg:mt-0 relative">
          <div className="bg-card  rounded-lg">
            <img
              src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513377/1_i0qump.webp"
              alt="best app development company in noida"
              className="rounded-lg w-full"
            />
          </div>
          <div className="mt-8 flex flex-col gap-3 relative sm:bottom-[100px] md:bottom-[150px] lg:bottom-[150px] font-pop">
            <div className="bg-card p-3 rounded-lg shadow-md  lg:mb-0 w-1/2 bg-white">
              <span className="bg-[#44b88c] text-white  rounded-sm px-2 text-xs relative right-0">
                Exclusive
              </span>
              <h2 className="mt-2 md:text-2xl sm:text-lg text-center font-bold">
                Success Stories
              </h2>
            </div>
            <div className="flex gap-3 w-full ">
              <div className="bg-card w-1/2 py-6 px-4 rounded-lg shadow-md lg:mb-0 flex  justify-center items-center bg-white">
                <div className="flex items-center">
                  <img
                    src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1731335944/small-img-4.png_z4avqf.png"
                    alt="Expert 1"
                    className="rounded-full md:size-[40px] sm:size-[20px] relative z-10 object-cover"
                  />
                  <img
                    src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1731335943/small-img-2.png_mdxkam.png"
                    alt="Expert 2"
                    className="rounded-full relative md:size-[40px] sm:size-[20px] -ml-5 z-20 object-cover"
                  />
                  <img
                    src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1731335943/small-img-3.png_rdnuri.png"
                    alt="Expert 3"
                    className="rounded-full relative md:size-[40px] sm:size-[20px] -ml-5 z-30 mr-2 object-cover"
                  />
                  <img
                    src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1731335943/small-img-1.png_f7wrel.png"
                    alt="Expert 3"
                    className="rounded-full relative md:size-[40px] sm:size-[20px] -ml-5 z-30 mr-2 object-cover"
                  />
                </div>
                <span className="sm:text-[10px] md:text-sm">
                  <span className="text-[blue]"> Meet</span> Our Experts
                </span>
              </div>

              <div className="bg-card w-1/2 flex justify-around items-center py-0 px-2 rounded-lg shadow-md bg-white">
                <div>
                  <span className="text-[10px]">Verified by Google</span>
                  <img
                    src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512492/google-logo-png-google-sva-scholarship-20_j1e74q.png"
                    alt="maxify websolution"
                    className="sm:w-[40px] md:w-[80px] h-auto"
                  />
                </div>
                <div>
                  <span className="ml-2 text-yellow-500">★★★★★</span>
                  <p className="ml-2 sm:text-[10px] md:text-sm">
                    <span className="text-[blue]">100+</span> Reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd section */}
      <div className="flex lg:flex-row sm:flex-col-reverse sm:w-[100%] md:w-[80%] mx-auto py-7 border-t-[2px] border-black">
        <div className="lg:w-1/2 sm:w-full items-start flex flex-col p-4 md:p-6">
          <img
            src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513401/3_pywoq4.webp"
            alt="cutting edge technology for app development"
          />
          <div className="p-4 space-y-4 w-full">
            {progressData.map((percentages, index) => (
              <div key={index} className="w-full max-w-lg mx-auto mb-6">
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
                <h2 className="text-sm md:text-[15px] ml-1 font-bold">
                  Experienced and Skilled Team
                </h2>
              </div>
              <p className="text-[12px] text-justify">
                Our team of developers, designers, and project managers has
                years of experience in the app development industry. We keep up
                with the latest technology and trends to ensure that your app is
                not only functional, but also creative and user-friendly.
              </p>
            </div>
            <div className="flex-1 p-4">
              <div className="flex items-center mb-2">
                <div>
                  <FaHandHoldingHeart size={25} className="text-[#2334DE]" />
                </div>{" "}
                <h2 className="text-sm md:text-[15px] ml-1 font-bold">
                  Customized Solutions
                </h2>
              </div>
              <p className="text-[12px] text-justify">
                We understand that every business is unique, and so are its app
                requirements. We provide customized app development solutions
                based on your individual requirements, whether you require an
                Android app, an iOS app, or a cross-platform application.
              </p>
            </div>
          </div>

          <div className="text-center mt-4">
            <Link to="/about">
              <button
                className="ml-2 text-sm md:text-base rounded-full relative px-8 py-2 text-[#2334DE] bg-none isolation-auto z-10 border-2 border-[#2334DE]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[#2334DE] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-white"
              >
                MORE ABOUT US
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 sm:w-full flex flex-col gap-4 p-4 md:p-6">
          <h3 className="text-2xl md:text-4xl font-bold font-Mulish">
            Why Choose Us as Your App Development Partner
          </h3>
          <p className="text-sm text-justify">
            At Maxify Solution, we stand out as the best mobile app development
            company in Noida because of our commitment to delivering exceptional
            results. Here's why you should choose us:
          </p>
          <img
            src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513399/2_ftzsf4.webp"
<<<<<<< HEAD
            alt="maxify websolution"
=======
            alt="app development plan"
>>>>>>> 6f3742d81654c63597d83f3121d7a30dde569303
          />
        </div>
      </div>

      {/* section 3 */}
      <div className="bg-[#1c1c1c] bg-app flex sm:flex-col lg:flex-row rounded-lg overflow-hidden md:w-[90%] mx-auto sm:py-[40px] md:py-[60px] md:px-[40px]">
        <div className="flex flex-col sm:items-center lg:items-start sm:justify-center lg:justify-between mb-5">
          <div className=" space-y-4 mb-6 sm:text-center lg:text-left">
            <p className="text-base md:text-[20px] text-[#5858ff]">OUR MODEL</p>
            <h3 className="text-2xl md:text-4xl font-bold text-[#ffffff]">
              How We Do
            </h3>
            <p className=" text-[#e2e2e2] text-sm">
              Save Time and Money with our Powerful Method
            </p>
          </div>
          <div>
            <a href="https://wa.me/917428309119" target="blank">
              <button
                className="mt-8 rounded-full relative px-8 py-2 text-[#2334DE] bg-white bg-none isolation-auto z-10 border-2 border-[#2334DE]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[#2334DE] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-white"
              >
                Learn More
              </button>
            </a>
          </div>
        </div>
        <div className="flex lg:justify-end w-full">
          <img
            src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512492/Group_29_lt4fj2.webp"
            className="w-[900px]"
<<<<<<< HEAD
            alt="maxify websolution"
=======
            alt="app development strategy"
>>>>>>> 6f3742d81654c63597d83f3121d7a30dde569303
          />
        </div>
      </div>

      {/* 4th section */}
      <div className="max-w-6xl mx-auto px-4 py-8 mt-5">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center text-primary">
          Our App Development Services
        </h2>
        <p className="mt-4 text-sm md:text-base  text-center lg:w-[70%] mx-auto">
          At Maxify, we offer a comprehensive range of app development services
          that cater to various industries and business sizes. Whether you need
          a simple app for internal use or a complex, feature-rich app for your
          customers, we have the expertise to deliver.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
          <button
            onClick={() => handleClick("Android App Development")}
            className={`bg-secondary text-sm p-2 rounded-sm ${
              activeService === "Android App Development"
                ? "bg-[#2334DE] text-white"
                : "hover:bg-[#2334DE] hover:text-white"
            }`}
          >
            Android App Development
          </button>
          <button
            onClick={() => handleClick("iOS App Development")}
            className={`bg-secondary text-sm p-2 rounded-sm ${
              activeService === "iOS App Development"
                ? "bg-[#2334DE] text-white"
                : "hover:bg-[#2334DE] hover:text-white"
            }`}
          >
            iOS App Development
          </button>
          <button
            onClick={() => handleClick("Cross-Platform App Development")}
            className={`bg-secondary text-sm p-2 rounded-sm ${
              activeService === "Cross-Platform App Development"
                ? "bg-[#2334DE] text-white"
                : "hover:bg-[#2334DE] hover:text-white"
            }`}
          >
            Cross-Platform App Development
          </button>
          <button
            onClick={() => handleClick("App Design and User Experience (UX)")}
            className={`bg-secondary text-sm p-2 rounded-sm ${
              activeService === "App Design and User Experience (UX)"
                ? "bg-[#2334DE] text-white"
                : "hover:bg-[#2334DE] hover:text-white"
            }`}
          >
            App Design and User Experience (UX)
          </button>
          <button
            onClick={() => handleClick("App Testing and Quality Assurance")}
            className={`bg-secondary text-sm p-2 rounded-sm ${
              activeService === "App Testing and Quality Assurance"
                ? "bg-[#2334DE] text-white"
                : "hover:bg-[#2334DE] hover:text-white"
            }`}
          >
            App Testing and Quality Assurance
          </button>
        </div>
        <div className="flex flex-col gap-5 mt-7 md:flex-row dark:bg-card rounded-lg sm:p-2 md:p-6">
          <div className="md:w-1/2 mt-4 md:mt-0">
            <img
              alt={services[activeService].title}
              src={services[activeService].imgSrc}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold ">
              {services[activeService].title}
            </h2>
            <p className="mt-2 text-sm text-justify">
              {services[activeService].description}
            </p>
            <h3 className="mt-4 font-semibold text-secondary">Key Features:</h3>
            <ul className="list-disc list-inside mt-2 text-sm leading-7">
              {services[activeService].features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* section 5 */}
      <div className="bg-gray-50">
        <div className="flex flex-col lg:flex-row justify-between items-start">
          {/* Left Section */}
          <div className="lg:w-1/2 sm:p-2 md:p-5 lg:px-[100px]">
            <h3 className="text-[#2334DE] uppercase tracking-wider mb-2">
              Projects
            </h3>
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 font-yan">
              The App Development Process
            </h3>
            <p className="text-gray-700 text-sm text-justify mb-8">
              Our app development process is designed to be efficient,
              transparent, and client-focused. Here's a step-by-step overview of
              how we bring your app idea to life:
            </p>
            <ul className="space-y-4 text-sm border-t border-gray-300 w-fit py-6">
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
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 sm:w-full flex gap-4 flex-col items-center md:flex-row items-center justify-between mt-10 lg:mt-10 sm:p-2 md:py-5 lg:py-12">
            {[
              {
                title: "ecommerce app development cost",
                bgColor: "bg-black text-white",
                image:
                  "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513400/4_umkgco.webp",
              },
              {
                title: "ios app development",
                bgColor: "bg-gray-200 text-gray-800",
                image:
                  "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513391/10_s3erfq.webp",
              },
              {
                title: "custom mobile app development",
                bgColor: "bg-gray-100 text-gray-800",
                image:
                  "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513391/11_tniorw.webp",
              },
            ].map((section, index) => (
              <div
                key={index}
                className={`flex items-center justify-between mb-4 md:mb-0 relative`}
              >
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-auto object-fit h-[500px] mb-4"
                />
                <h3 className="absolute top-0 p-4 text-xl font-bold">
                  {section.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* section 6 */}
      <div className="bg-white sm:p-2 md:p-8  w-full flex sm:flex-col lg:flex-row items-center mt-10">
        <div className="lg:w-1/2 space-y-5 sm:flex md:block justify-center flex-col items-start  md:text-left">
          <h3 className="text-[#2334DE] uppercase tracking-wider mb-2">
            Consulting Excellence
          </h3>
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 font-yan">
            Why We Are the Best App Development Company in Noida
          </h3>
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
          <Link to="/about">
            <button
              className="mt-8 flex items-center relative px-8 py-2 text-[#2334DE] rounded-full bg-white isolation-auto z-10 border-2 border-[#2334DE]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[#2334DE] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-white"
            >
              Learn More
              <span className="ml-2">
                <GoArrowUpRight />
              </span>
            </button>
          </Link>
        </div>
        <div className="lg:w-1/2 mt-6">
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

export default AppDevelopment;
