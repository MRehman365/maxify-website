import React, {useState} from "react";
import { Link } from "react-router-dom";
import google from "../Assets/google-logo-png-google-sva-scholarship-20.png";
import img1 from "../Assets/app development/1.webp";
import img2 from "../Assets/app development/3.webp";
import img3 from "../Assets/app development/2.webp";
import img4 from "../Assets/app development/5.webp";
import img5 from "../Assets/app development/6.webp";
import img6 from "../Assets/app development/7.webp";
import img7 from "../Assets/app development/8.webp";
import img8 from "../Assets/app development/9.webp";
import img9 from "../Assets/Group 29.webp";
import img10 from "../Assets/app development/4.webp";
import img11 from "../Assets/app development/10.webp";
import img12 from "../Assets/app development/11.webp";
import { HiUserGroup } from "react-icons/hi2";
import { FaHandHoldingHeart } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { FaCheckCircle } from 'react-icons/fa';
const AppDevelopment = () => {
    const [activeService, setActiveService] = useState('Android App Development');

      const services = {
    'Android App Development': {
      title: 'Android App Development',
      description: 'As the leading Android app development company in Noida, we specialize in creating robust and scalable Android apps that meet your business requirements. Our developers are proficient in Java, Kotlin, and other Android development tools, ensuring that your app is compatible with the latest Android versions and devices.',
      features: [
        'Custom Android app development tailored to your needs',
        'Integration with third-party services and APIs',
        'Optimized performance for various Android devices',
        'Rigorous testing to ensure a bug-free experience',
      ],
      imgSrc: img4, // Replace with the actual image path
    },
    'iOS App Development': {
      title: 'iOS App Development',
      description: 'Our iOS app development services are designed to help businesses create secure, scalable, and engaging applications for Apple devices. We ensure that your app meets the highest standards of quality and performance.',
      features: [
        'Custom iOS app development tailored to your needs',
        'Integration with Apple services and APIs',
        'Optimized performance for iPhone and iPad devices',
        'Rigorous testing to ensure a seamless user experience',
      ],
      imgSrc: img5, // Replace with the actual image path
    },
    'Cross-Platform App Development': {
      title: 'Cross-Platform App Development',
      description: 'We develop cross-platform apps that run seamlessly on both Android and iOS devices. Our expertise in frameworks like React Native and Flutter ensures that your app delivers a consistent user experience across platforms.',
      features: [
        'Single codebase for multiple platforms',
        'Faster development and deployment',
        'Consistent user experience on Android and iOS',
        'Cost-effective solution for multi-platform apps',
      ],
      imgSrc: img8, // Replace with the actual image path
    },
    'App Design and User Experience (UX)': {
      title: 'App Design and User Experience (UX)',
      description: 'Our design team focuses on creating intuitive and user-friendly app interfaces. We ensure that your app is not only functional but also visually appealing, enhancing user satisfaction and engagement.',
      features: [
        'User-centered design approach',
        'Prototyping and wireframing',
        'Responsive design for all devices',
        'Focus on accessibility and usability',
      ],
      imgSrc: img6, // Replace with the actual image path
    },
    'App Testing and Quality Assurance': {
      title: 'App Testing and Quality Assurance',
      description: 'We provide comprehensive app testing services to ensure that your app is bug-free and performs optimally. Our QA team conducts various tests, including functional, performance, and security testing, to deliver a reliable product.',
      features: [
        'Manual and automated testing',
        'Performance optimization',
        'Security and compliance checks',
        'Continuous testing during development',
      ],
      imgSrc: img7, // Replace with the actual image path
    },
  };
 
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
      title: 'Proven Track Record',
      description: 'With years of experience in the industry, we have successfully delivered hundreds of apps to satisfied clients across various industries. Our portfolio speaks for itself, showcasing our ability to create high-quality apps that deliver results.',
      side: 'right',
    },
    {
      title: 'Client Testimonials',
      description: 'Our clients trust us because we deliver what we promise. We take pride in the positive feedback we receive, which motivates us to continue providing top-notch services.',
      side: 'left',
    },
    {
      title: 'Innovation and Creativity',
      description: 'We believe in pushing the boundaries of technology and creativity. Our team is always exploring new ideas and solutions to ensure that your app stands out in a crowded market.',
      side: 'right',
    },
    {
      title: 'Comprehensive Solutions',
      description: 'From idea to execution, we offer a complete range of app development services. Whether you need a simple app or a complex enterprise solution, we have the expertise to meet your needs.',
      side: 'left',
    },
  ];
  return (
    <div className="mt-[70px]">
      <div className="md:w-[90%] mx-auto bg-background rounded-lg flex flex-col-reverse lg:flex-row lg:items-center">
        <div className="lg:w-1/2 sm:px-2 md:px-4 lg:px-6">
          <h1 className="sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Best App Development Company in Noida
          </h1>
          <p className="mt-4 text-[18px] text-justify">
            Mobile applications have become an essential part of every business.
            Whether you are a startup looking to launch your first app or an
            established business aiming to enhance customer engagement, having a
            well-designed and functional mobile app is crucial. At Maxify
            Solution, we pride ourselves on being the best app development
            company in Noida, offering top-notch mobile app solutions that cater
            to your business needs.
          </p>
          <div className="mt-6 flex space-x-4">
            <Link
              to=""
              className="bg-[#2334DE] text-white py-3 px-5 rounded-full hover:bg-[#2334DE]/80"
            >
              Learn More
            </Link>
            <Link
              to=""
              className="bg-[#d5d8fa] text-[#2334DE] py-3 px-5 rounded-full hover:bg-[#d5d8fa]/80"
            >
              Let's Talk <span undefinedhidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 p-4 mt-8 lg:mt-0 relative">
          <div className="bg-card  rounded-lg">
            <img
              src={img1}
              alt="App Development"
              className="rounded-lg w-full"
            />
          </div>
          <div className="mt-8 flex flex-col gap-3 relative sm:bottom-[100px] md:bottom-[150px] lg:bottom-[150px] ">
            <div className="bg-card p-3 rounded-lg shadow-md  lg:mb-0 w-1/2 bg-white">
              <span className="bg-[#44b88c] text-white  rounded-sm px-2 text-xs">
                Exclusive
              </span>
              <h2 className="mt-2 md:text-xl sm:text-lg font-bold">
                Success Stories
              </h2>
            </div>
            <div className="flex gap-3 w-full ">
              <div className="bg-card w-1/2 py-6 px-4 rounded-lg shadow-md lg:mb-0 flex  justify-center items-center bg-white">
                <div className="flex items-center">
                  <img
                    src="https://placehold.co/40x40"
                    alt="Expert 1"
                    className="rounded-full md:size-[40px] sm:size-[20px] relative z-10"
                  />
                  <img
                    src="https://placehold.co/40x40"
                    alt="Expert 2"
                    className="rounded-full relative md:size-[40px] sm:size-[20px] -ml-3 z-20"
                  />
                  <img
                    src="https://placehold.co/40x40"
                    alt="Expert 3"
                    className="rounded-full relative md:size-[40px] sm:size-[20px] -ml-3 z-30 mr-2"
                  />
                </div>
                <span className="sm:text-[10px] md:text-sm">
                  Meet Our Experts
                </span>
              </div>

              <div className="bg-card w-1/2 flex justify-around items-center py-0 px-2 rounded-lg shadow-md bg-white">
                <div>
                  <span className="text-[5px]">Verified by Google</span>
                  <img
                    src={google}
                    alt=""
                    className="sm:w-[40px] md:w-[80px] h-auto"
                  />
                </div>
                <div>
                  <span className="ml-2 text-yellow-500">★★★★★</span>
                  <p className="ml-2 sm:text-[10px] md:text-sm">100+ Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd section */}
      <div className="flex lg:flex-row sm:flex-col-reverse sm:w-[100%] md:w-[80%] mx-auto py-7 border-t-[2px] border-black">
        <div className="lg:w-1/2 sm:w-full items-start flex flex-col p-6">
          <img src={img2} alt="img2" />
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
                <h2 className="text-[15px] ml-1 font-bold">
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
                <h2 className="text-[15px] ml-1 font-bold">Customized Solutions</h2>
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
            <button className="ml-2 text-base rounded-full relative px-8 py-2 text-[#2334DE] bg-none isolation-auto z-10 border-2 border-[#2334DE]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[#2334DE] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-white">
              MORE ABOUT US
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 sm:w-full flex flex-col gap-4 p-6">
            <h3 className="text-4xl font-bold">Why Choose Us as Your App Development Partner</h3>
            <p className="text-sm text-justify">At Maxify Solution, we stand out as the best mobile app development company in Noida because of our commitment to delivering exceptional results. Here's why you should choose us:</p>
            <img src={img3} alt="" />
        </div>
      </div>

      {/* section 3 */}
      <div className="bg-[#1c1c1c] bg-app flex sm:flex-col lg:flex-row rounded-lg overflow-hidden md:w-[90%] mx-auto sm:py-[40px] md:py-[60px] md:px-[40px]">
        <div className="flex flex-col sm:items-center lg:items-start sm:justify-center lg:justify-between mb-5">
        <div className=" space-y-4 mb-6 sm:text-center lg:text-left">
        <p className="text-[20px] text-[#5858ff]">OUR MODEL</p>
        <h3 className="text-4xl font-bold text-[#ffffff]">How We Do</h3>
        <p className=" text-[#e2e2e2] text-sm">Save Time and Money with our Powerful Method</p>
        </div>
        <div>
        <button className="mt-8 rounded-full relative px-8 py-2 text-[#2334DE] bg-none isolation-auto z-10 border-2 border-[#2334DE]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[#2334DE] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-white">
            Learn More
          </button>
        </div>
        </div>
        <div className="flex lg:justify-end w-full">
        <img src={img9} className="w-[900px]" alt="" />
        </div>
      </div>

      {/* 4th section */}
      <div className="max-w-6xl mx-auto px-4 py-8 mt-5">
      <h2 className="text-3xl font-bold text-center text-primary">Our App Development Services</h2>
      <p className="mt-4 text-muted-foreground text-center">
        At Maxify, we offer a comprehensive range of app development services that cater to various industries and business sizes. Whether you need a simple app for internal use or a complex,
        feature-rich app for your customers, we have the expertise to deliver.
      </p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
        <button
          onClick={() => handleClick('Android App Development')}
          className={`bg-secondary text-sm p-2 rounded-lg ${
            activeService === 'Android App Development' ? 'bg-[#2334DE] text-white' : 'hover:bg-[#2334DE] hover:text-white'
          }`}
        >
          Android App Development
        </button>
        <button
          onClick={() => handleClick('iOS App Development')}
          className={`bg-secondary text-sm p-2 rounded-lg ${
            activeService === 'iOS App Development' ? 'bg-[#2334DE] text-white' : 'hover:bg-[#2334DE] hover:text-white'
          }`}
        >
          iOS App Development
        </button>
        <button
          onClick={() => handleClick('Cross-Platform App Development')}
          className={`bg-secondary text-sm p-2 rounded-lg ${
            activeService === 'Cross-Platform App Development' ? 'bg-[#2334DE] text-white' : 'hover:bg-[#2334DE] hover:text-white'
          }`}
        >
          Cross-Platform App Development
        </button>
        <button
          onClick={() => handleClick('App Design and User Experience (UX)')}
          className={`bg-secondary text-sm p-2 rounded-lg ${
            activeService === 'App Design and User Experience (UX)' ? 'bg-[#2334DE] text-white' : 'hover:bg-[#2334DE] hover:text-white'
          }`}
        >
          App Design and User Experience (UX)
        </button>
        <button
          onClick={() => handleClick('App Testing and Quality Assurance')}
          className={`bg-secondary text-sm p-2 rounded-lg ${
            activeService === 'App Testing and Quality Assurance' ? 'bg-[#2334DE] text-white' : 'hover:bg-[#2334DE] hover:text-white'
          }`}
        >
          App Testing and Quality Assurance
        </button>
      </div>
      <div className="flex flex-col gap-5 mt-7 md:flex-row dark:bg-card rounded-lg sm:p-2 md:p-6">
        <div className="md:w-1/2 mt-4 md:mt-0">
          <img alt={services[activeService].title} src={services[activeService].imgSrc} className="rounded-lg" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold ">{services[activeService].title}</h2>
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
        <div className="lg:w-1/2 sm:p-2 md:p-5 lg:p-12">
          <h3 className="text-[#2334DE] uppercase tracking-wider mb-2">Projects</h3>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">The App Development Process</h1>
          <p className="text-gray-700 text-sm text-justify mb-8">
            Our app development process is designed to be efficient, transparent, and client-focused. 
            Here's a step-by-step overview of how we bring your app idea to life:
          </p>
          <ul className="space-y-4 text-sm">
            {[
              'Discovery and Planning',
              'Design and Prototyping',
              'Development',
              'Testing and Quality Assurance',
              'Launch and Deployment',
              'Post-Launch Support',
            ].map((step, index) => (
              <li key={index} className="flex items-center text-sm text-gray-800">
                <FaCheckCircle className="text-[#2334DE] mr-4" />
                {step}
              </li>
            ))}
          </ul>
          <button className="mt-8 rounded-full flex items-center relative px-8 py-2 text-[#2334DE] bg-white isolation-auto z-10 border-2 border-[#2334DE]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[#2334DE] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-white">
            Learn More <span className="ml-2"><GoArrowRight /></span>
          </button>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 sm:w-full flex gap-4 flex-col items-center md:flex-row items-center justify-between mt-10 lg:mt-10 sm:p-2 md:py-5 lg:py-12">
          {[
            {
              title: '',
              bgColor: 'bg-black text-white',
              image: img10,
            },
            {
              title: 'Software as a Service integration',
              bgColor: 'bg-gray-200 text-gray-800',
              image: img11,
            },
            {
              title: 'Mobile Platform Development',
              bgColor: 'bg-gray-100 text-gray-800',
              image: img12,
            },
          ].map((section, index) => (
            <div
              key={index}
              className={`flex items-center justify-between mb-4 md:mb-0 relative`}
            >
              <img src={section.image} alt={section.title} className="w-auto object-fit h-[500px] mb-4" />
              <h3 className="absolute top-0 p-4 text-xl font-bold">{section.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
    {/* section 6 */}
    <div className="bg-white sm:p-2 md:p-8  w-full flex sm:flex-col lg:flex-row items-center mt-10">
    <div className="lg:w-1/2 space-y-5 sm:flex md:block justify-center flex-col items-center sm:text-center md:text-left">
          <h3 className="text-[#2334DE] uppercase tracking-wider mb-2">Consulting Excellence</h3>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Why We Are the Best App Development Company in Noida</h1>
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
          <button className="mt-8 flex items-center relative px-8 py-2 text-[#2334DE] rounded-md bg-white isolation-auto z-10 border-2 border-[#2334DE]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[#2334DE] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-white">
            Learn More <span className="ml-2"><GoArrowRight /></span>
          </button>
        </div>
      <div className="lg:w-1/2 mt-6">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300"></div>

        {steps.map((step, index) => (
          <div key={index} className="mb-12 flex w-full">
            {/* Left Side Content */}
            <div className={`w-1/2 ${step.side === 'right' ? 'text-right pr-8' : 'text-left'}`}>
              {step.side === 'left' && (
                <div className="bg-[#f3f6fd] p-2">
                  <h3 className="font-semibold  text-[14px] text-center">{step.title}</h3>
                  <p className="text-gray-600 text-[12px] text-justify mt-2">{step.description}</p>
                </div>
              )}
            </div>

            {/* Step Number */}
            <div className="relative flex justify-center w-12">
              <div className="w-10 h-10 flex items-center justify-center bg-[#f3f6fd] text-[#2334DE] font-bold rounded-full">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>

            {/* Right Side Content */}
            <div className={`w-1/2 ${step.side === 'left' ? 'text-right pr-8' : 'text-left'}`}>
              {step.side === 'right' && (
                <div className="bg-[#f3f6fd] p-2">
                  <h3 className="font-semibold text-[14px] text-center">{step.title}</h3>
                  <p className="text-gray-600 text-[12px] text-justify mt-2">{step.description}</p>
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
