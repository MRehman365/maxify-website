import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaCheckCircle, FaArrowUpRight } from 'react-icons/fa';
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";


const Banking = () => {
    const [activeService, setActiveService] = useState('Android App Development');

    const services = {
  'Android App Development': {
    title: 'Digital Advertising And Marketing for Banking and Finance',
    description: 'The banking and financial market is highly competitive, and effective electronic advertising is important for standing apart. We provide specialized electronic marketing solutions tailored for banking and finance in India to help financial institutions develop their brand name, engage consumers, and drive development.',
    features: [
      'Search Engine Optimization (SEO): Enhance presence on Internet search engines with targeted SEO methods developed for the banking and finance sectors.',
      'Material Marketing: Develop useful web content that reverberates with your target market in the banking and financial industry, builds trust, and drives interaction.',
      'Social Media Advertising And Marketing: Take advantage of social media platforms to connect with clients, promote services, and build a strong online presence in the banking and finance sector.',
      'Email Advertising Campaigns: Create tailored email marketing campaigns to support leads and retain clients within the banking and finance industry.',
    ],
    imgSrc: "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512926/image_36_a071tl.png", // Replace with the actual image path
  },
  'iOS App Development': {
    title: 'Web Site Advancement for Financial and Financial Institutions',
    description: 'A specialist and easy-to-use website is essential for financial institutions to establish credibility and provide an excellent user experience. At Maxify Solutions, we provide specialized internet site advancement solutions for banks and economic firms in the banking and financial sector.',
    features: [
      'Receptive Web Site Style: Create responsive and mobile-friendly sites that deliver an optimum experience across all devices within the banking and finance industry.',
      'Secure and Scalable Platforms: Establish secure websites with durable safety features to shield delicate customer data, crucial for banking and finance.',
      'Custom Web Growth: Custom-made websites that mirror your brands identity and deal with the specific demands of your banks within the banking and finance sector.',
      'Assimilation with Monetary Devices: Seamlessly incorporate financial and economic tools, such as funding calculators, stock market updates, and money converters, to enhance user experience in banking and finance.',
    ],
    imgSrc: "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512933/image_40_syswdq.png", // Replace with the actual image path
  },
  'Cross-Platform App Development': {
    title: 'E-Commerce Solutions And Marketing for Banking and Finance',
    description: 'As the banking and finance market moves towards digitalization, e-commerce platforms play an essential function in enabling online deals and financial product sales. Our e-commerce web development services are designed to support financial and banking services.',
    features: [
      'Electronic Banking Portals: Develop secure and straightforward electronic banking websites to supply customers with easy access to banking and finance services.',
      'Payment Gateway Integration: Integrate reliable repayment portals to ensure secure online transactions for clients in the banking and finance sector.',
      'Financial Investment Systems: Develop comprehensive investment systems that provide real-time data and analytics to help customers make informed choices within banking and finance.',
      'Financial Product Catalogs: Develop digital catalogs for financial products such as loans, insurance policies, and investment strategies, making it easier for customers to explore and buy in the banking and finance industry.',
    ],
    imgSrc: "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512927/image_39_cuqd45.png", // Replace with the actual image path
  },
  'App Design and User Experience (UX)': {
    title: 'Custom Software Application Growth for Financial and Finance',
    description: 'Maxify Option provides customized software solutions for the banking and finance market, assisting organizations to enhance operational effectiveness and improve customer service.',
    features: [
      'Core Financial Solutions: Develop comprehensive core banking software to manage all aspects of financial operations, from account administration to transactions in the banking and financial sector.',
      'Risk Administration Software: Implement software solutions for effective risk assessment and management, ensuring compliance with regulatory requirements in banking and financial services.',
      'Consumer Relationship Management (CRM) Systems: Develop CRM systems tailored to the needs of financial institutions and banks to manage consumer information and improve customer support within banking and finance.',
      'Financial Reporting Tools: Create financial reporting tools to provide real-time information and analytics, aiding organizations to make informed business decisions in the banking and finance industry.',
    ],
    imgSrc: "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512925/image_38_anwh1j.png", // Replace with the actual image path
  },
  'App Testing and Quality Assurance': {
    title: 'Digital Makeover for Financial Institutions',
    description: 'The banking and finance industry is undergoing a massive digital transformation. At Maxify Remedy, we offer end-to-end digital transformation solutions to help financial institutions adapt to the changing landscape.',
    features: [
      'Fintech Combination: Integrate cutting-edge fintech solutions to streamline processes and improve client experience in banking and finance.',
      'Cloud-Based Solutions: Implement secure and scalable cloud-based remedies for data storage, economic operations, and customer administration within the banking and finance sector.',
      'AI and Artificial Intelligence: Use AI and machine learning to automate processes, enhance client service, and drive insights from data in banking and finance.',
      'Blockchain Solutions: Develop blockchain-based solutions for secure and transparent financial transactions in the banking and finance industry.',
    ],
    imgSrc: "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512931/image_41_qjy0sg.png", // Replace with the actual image path
  },
};
const serviceKeys = Object.keys(services);
useEffect(() => {
  const interval = setInterval(() => {
    setActiveService((prevService) => {
      const currentIndex = serviceKeys.indexOf(prevService);
      const nextIndex = (currentIndex + 1) % serviceKeys.length;
      return serviceKeys[nextIndex];
    });
  }, 3000); // Change every 3 seconds

  return () => clearInterval(interval); // Cleanup on component unmount
}, [serviceKeys]);
const handleClick = (service) => {
  setActiveService(service);
};


useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <div className="mt-[60px] font-pop">
      <div className="bg-[#0d0d1d] py-5">
        <div className="flex flex-col-reverse md:flex-row items-center p-3 bg-background min-h-max rounded-lg mx-auto sm:w-full md:w-[94%] lg:w-[80%]">
          {/* Right side with video */}
          <div className="md:w-1/2 mt-6 md:mt-0 relative flex sm:justify-center md:justify-start lg:h-[70vh] w-full ">
          <div className="w-[70%] h-full mx-auto  bg-gradient-to-b from-[#1ad079] to-[#0d0d1d] rounded-lg"></div>
            <img src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512929/image-Photoroom_18_1_mgecit.png" alt="" className="sm:w-full h-full top-0 right-0 z-10 absolute" />
          </div>
          {/* Left side content */}
          <div className="md:w-1/2 p-4 md:px-8">
            <h1 class="text-3xl font-semibold text-[#1ad079] mb-4">
              Maxify Solution:
            </h1>
            <h1 className="sm:text-3xl md:text-4xl font-semibold text-[#1ad079] my-4">
              <span className="text-[#ffffff] ">
                {" "}
                Transformative Banking <br />
              </span>{" "}
              and Financial Services
            </h1>
            <p class="text-gray-500 text-justify leading-7 mb-6">
              The globe of{" "}
              <span class="font-semibold text-white">banking and finance</span>{" "}
              is swiftly evolving, driven by digital makeover and technical
              innovations. At Maxify Remedy, we offer cutting-edge services
              customized to meet the vibrant demands of the banking and
              financial industry. From electronic marketing and website
              development to
              <span class="font-semibold text-white">
                {" "}
                innovative e-commerce web advancement
              </span>
              , we empower banks to grow in the digital period. Our extensive
              solutions aid banks and economic companies optimize their
              <span class="font-semibold text-white"> online presence</span>,
              streamlining procedures, and increasing customer engagement within
              the banking and financial sector.
            </p>
            <Link to="/contact">
            <button
              className="mt-8 py-2 text-sm md:text-[14px] font-[300] px-8 rounded-lg relative text-[white] bg-[#1ad079] isolation-auto z-10 border-2 border-[#1ad079]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[white] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-[#1ad079]"
            >
              Get Start
            </button>
            </Link>
          </div>
        </div>
      </div>
      {/* section 2 */}
      <div className="flex flex-col-reverse md:flex-row items-center p-3 bg-background rounded-lg mx-auto sm:w-full md:w-[94%] lg:w-[80%]">
        <div className="md:w-1/2 p-4 md:px-8">
          <h1 className="sm:text-3xl md:text-5xl font-[400] text-[#000000] my-4">
            <span className="font-[700] "> Why Pick Maxify</span> Remedy For
            Banking And Financial Providers
          </h1>
          <p class="text-gray-500 text-justify text-sm leading-7 ">
            <span className="text-black font-semibold">
              Domain Name Know-How:
            </span>{" "}
            With Years Of Experience In The Electronic Landscape, We Understand
            The Complexities And One-Of-A-Kind Difficulties Of The Banking And
            Finance Sector.
          </p>
          <p class="text-gray-500 text-justify text-sm leading-7 ">
            <span className="text-black font-semibold">
            Personalized Solutions:
            </span>{" "}
            We Offer Customized Digital Remedies That Deal With The Certain Demands Of Banking And Financial Solutions.
          </p>
          <p class="text-gray-500 text-justify text-sm leading-7 ">
            <span className="text-black font-semibold">
            Cutting-Edge Modern Technology:
            </span>{" "}
            Utilizing The Latest Technologies, We Deliver Innovative Services That Assist Banks Stay Ahead Of The Contour In Banking And Financial Services.
          </p>
          <p class="text-gray-500 text-justify text-sm leading-7 mb-6">
            <span className="text-black font-semibold">
            Client-Centric Approach:
            </span>{" "}
            Our Emphasis Is On Constructing Lasting Collaborations By Supplying Value-Driven Services That Boost Development And Consumer Satisfaction In The Banking And Financial Industry.
          </p>
          <div className="flex  items-center mt-2">
          <Link to='/about'>
          <button
            className=" py-3  md:text-[14px] font-[500] px-8 rounded-full relative text-[#229ae3] bg-[#e9f2f7] isolation-auto z-10 border-2 border-[#e9f2f7]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[#229ae3] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-[#e9f2f7]"
          >
            About us

          </button>
          </Link>
          <div className=" h-[45px] w-[45px] bg-[#229ae3]  rounded-full flex justify-center items-center">
          <BsArrowRight className="  text-[30px] p-1 text-white  transform -rotate-[40deg] font-[200]" />
          </div>
          </div>
        </div>

        <div className="md:w-1/2 mt-6 md:mt-0 relative flex sm:justify-center md:justify-center h-full">
        <div className="relative sm:h-[330px] sm:w-[330px] md:h-[400px] md:w-[400px]  bg-gradient-to-b from-[#1ad079] to-[#ffffff] flex justify-center items-center bg-gray-400 rounded-[50%]">
          <img src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512935/image-Photoroom_19_1_kdfs3m.png" alt="" className="sm:h-full mx-auto absolute -top-[90px] -right-[48px]" />
        </div>
        </div>
      </div>

        {/* 4th section */}
        <div className="max-w-6xl mx-auto px-4 py-8 mt-5">
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
        <button
          onClick={() => handleClick('Android App Development')}
          className={`bg-[#f6f8fb] text-lg p-3 rounded-xl ${
            activeService === 'Android App Development' ? 'bg-white text-black font-[500] border-[2px] border-[#1ad079]' : 'hover:bg-[#f6f8fb] hover:text-black font-[500]'
          }`}
        >
          DM For Banking
        </button>
        <button
          onClick={() => handleClick('iOS App Development')}
          className={`bg-[#f6f8fb] text-lg p-3 rounded-xl ${
            activeService === 'iOS App Development' ? 'bg-white text-black font-[500] border-[2px] border-[#1ad079]' : 'hover:bg-[#f6f8fb] hover:text-black font-[500]'
          }`}
        >
          www. for Banking
        </button>
        <button
          onClick={() => handleClick('Cross-Platform App Development')}
          className={`bg-[#f6f8fb] text-lg p-3 rounded-xl ${
            activeService === 'Cross-Platform App Development' ? 'bg-white text-black font-[500] border-[2px] border-[#1ad079]' : 'hover:bg-[#f6f8fb] hover:text-black font-[500]'
          }`}
        >
          Solution for Banking
        </button>
        <button
          onClick={() => handleClick('App Design and User Experience (UX)')}
          className={`bg-[#f6f8fb] text-lg p-3 rounded-xl ${
            activeService === 'App Design and User Experience (UX)' ? 'bg-white border-[2px] border-[#1ad079] text-black font-bold' : 'hover:bg-[#f6f8fb] hover:text-black font-[500]'
          }`}
        >
          App for Banking
        </button>
        <button
          onClick={() => handleClick('App Testing and Quality Assurance')}
          className={`bg-[#f6f8fb] p-3 rounded-xl ${
            activeService === 'App Testing and Quality Assurance' ? 'bg-white text-black font-[500] border-[2px] border-[#1ad079]' : 'hover:bg-[#f6f8fb] hover:text-black font-[500]'
          }`}
        >
          Digi Makeover
        </button>
      </div>
      <div className="flex flex-col gap-5 mt-7 md:flex-row dark:bg-card rounded-lg sm:p-2 md:p-6">
        <div className="md:w-1/2 mt-4 md:mt-0">
          <img alt={services[activeService].title} src={services[activeService].imgSrc} className="rounded-lg" />
        </div>
        <div className="md:w-1/2">
          <h2 className="sm:text-xl md:text-3xl font-bold ">{services[activeService].title}</h2>
          <p className="mt-2 text-sm text-justify text-[#6C6A72]">
            {services[activeService].description}
          </p>
          <ul className="list-disc list-inside mt-2 text-sm leading-7 text-[#6C6A72] text-justify">
            {services[activeService].features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <a href="https://wa.me/917428309119" target="blank"><button class="bg-[#1ad079] text-white text-sm hover:bg-primary/80 py-3 mt-4 px-4 rounded-lg">Start your business</button></a>
        </div>
      </div>
    </div>
    {/* 5th section */}
    <div className="flex flex-col md:flex-row items-center p-4 bg-background rounded-lg mx-auto sm:w-full md:w-[90%] lg:w-[80%]">
        {/* Left side content */}
        <div className="md:w-1/2">
          {/* <span className="text-sm bg-[#e5e5ff] text-[#2334DE] rounded px-3 py-1">
            Why
          </span> */}
          <h1 className="sm:text-3xl md:text-5xl font-semibold text-[black] mt-4">
            Benefits of Partnering with{" "}
            <span className="text-[#37937e]">Maxify Solution</span>
          </h1>
          <ul className="text-base leading-7 list-disc mt-3 text-[#6C6A72] text-justify px-6">
            <li>
            <span className="text-black font-semibold">Enhanced Customer Experience: </span>
            By leveraging the latest digital tools and technologies, we help financial institutions deliver exceptional customer experiences in the banking and finance sector.
            </li>
            <li>
            <span className="text-black font-semibold">Enhanced Operational Efficiency: </span>
            Our personalized software application solutions and digital tools help streamline operations and reduce costs within banking and financial services.
            </li>
            <li>
            <span className="text-black font-semibold">Regulative Compliance: </span>
            We ensure that all digital solutions comply with the latest regulatory needs and standards in banking and finance.
            </li>
            <li>
            <span className="text-black font-semibold">Enhanced Brand Exposure: </span>
            Our targeted digital marketing approaches improve online visibility, helping financial institutions attract and retain customers in the banking and financial industry.
            </li>
            <li>
            <span className="text-black font-semibold">Future-Ready Solutions </span>
            We provide innovative solutions that prepare banks and financial firms for the future, including digital banking, fintech integration, and more within banking and finance.
            </li>
          </ul>
        </div>

        {/* Right side with video */}
        <div className="md:w-1/2 mt-6 md:mt-0 relative flex sm:justify-center md:justify-end">
          <img src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512926/feature-img-1.png_2_crvjkl.png" alt="img" className="sm:w-full md:w-[70%]" />
        </div>
      </div>

       {/* section 7th */}
       <section className="w-full md:w-[80%] mx-auto px-4 py-12 bg-[#1c1c1c] my-4 md:rounded-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="w-full">
          <img
            src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512922/Container_12_yvudfq.png"
            alt="Banking Digital Solutions"
            className="rounded-lg  object-cover w-full h-full"
          />
        </div>

        <div className=" text-white p-6 rounded-lg">
          <h2 className="text-3xl md:text-4xl font-[500] mb-4 text-center">
            Why Buy <span className="font-bold">Digital Solutions</span> with Maxify Solution?
          </h2>
          <p className="mb-6 text-justify">
            Choosing Maxify Solution for your banking and financial services offers several benefits:
          </p>

          <ul className="space-y-4">
            <li className="flex items-start">
              <FaCheckCircle className="text-blue-500 w-6 h-6 mr-2 mt-1" />
              <div className="text-justify">
                <h3 className="font-semibold">Proven Experience:</h3>
                <p className="text-gray-400">
                  With a team of seasoned professionals, we bring years of experience and expertise to the table in banking and financial services.
                </p>
              </div>
            </li>
            <li className="flex items-start text-justify">
              <FaCheckCircle className="text-blue-500 w-6 h-6 mr-2 mt-1" />
              <div>
                <p className="text-gray-400">
                <span  className="font-semibold text-white">Cutting-edge Solutions:</span>
                  We stay ahead of the curve with innovative digital remedies that drive growth and effectiveness in banking and financial services.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    {/* section 9 */}
    <section className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Client-Centric Method Card */}
      <div className="bg-[#eff3fe] rounded-lg shadow-lg p-6">
        
        <img
          src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512922/Container_13_k9sanb.png"
          alt="Client-Centric Method"
          className="rounded-md w-full h-52 object-cover mb-4"
        />
    
        <h2 className="text-blue-600 text-3xl font-semibold mb-2 uppercase  font-syne">Client-Centric Method:</h2>
   
        <p className="text-xl font-bold text-gray-800 mb-4">
          Our approach is always client-focused, ensuring that our solutions
        </p>
        <p className="text-gray-500 py-2 border-b-2"> Align with your business objectives and deliver maximum value in the banking and finance sector.</p>
       
        <ul className="flex flex-wrap gap-6 mb-4 mt-4">
          <li className="flex items-center">
            <FaCheckCircle className="mr-2  text-[#1351d8]" /> Collaboration Tools
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="mr-2  text-[#1351d8]" /> Requirement
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="mr-2  text-[#1351d8]" /> Smart Reminders
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="mr-2  text-[#1351d8]" /> Task Management
          </li>
        </ul>
        {/* Button */}
        <div className="flex justify-end">
          <button className="bg-[#1351d8] text-white p-3 rounded-full">
            <GoArrowUpRight />
          </button>
        </div>
      </div>

      <div className="bg-[#eff3fe] rounded-lg shadow-lg p-6">
        
        <img
          src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512922/Container_14_fe6hja.png"
          alt="Competitive Pricing"
          className="rounded-md w-full h-52 object-cover mb-4"
        />
    
        <h2 className="text-[#1351d8] text-3xl font-semibold mb-2 uppercase  font-syne">Competitive Pricing</h2>
   
        <p className="text-xl font-bold text-gray-800 mb-4">
          Our approach is always client-focused, ensuring that our solutions
        </p>
        <p className="text-gray-500 py-2 border-b-2">  We offer affordable prices without compromising on the quality of our banking and financial services.</p>
       
        <ul className="flex flex-wrap gap-6  mb-4 mt-4">
          <li className="flex items-center">
            <FaCheckCircle className="mr-2 text-[#1351d8]" /> Collaboration Tools
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="mr-2 text-[#1351d8]" /> Requirement
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="mr-2 text-[#1351d8]" /> Smart Reminders
          </li>
        </ul>
        {/* Button */}
        <div className="flex justify-end">
          <button className="bg-[#1351d8] text-white p-3 rounded-full">
            <GoArrowUpRight />
          </button>
        </div>
      </div>
    </section>

      {/* 6th */}
      <div className="flex flex-col md:flex-row items-center bg-background p-6 rounded-lg shadow-lg bg-black text-white">
          <div className="md:w-1/2 flex gap-3 sm:p-4 md:p-16 lg:p-20">
            <img
              undefinedhidden="true"
              alt="SEO graphics"
              src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512926/feature-img-1.png_2_crvjkl.png"
              className="rounded-lg w-1/2"
            />
            <img
              undefinedhidden="true"
              alt="SEO graphics"
              src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512923/feature-img-2.png_3_njssfi.png"
              className="rounded-lg w-1/2"
            />
          </div>
          <div className="relative md:w-1/2 py-6  sm:mt-6 md:mt-0 sm:px-4 md:px-10 lg:px-[5%]">
            <h2 className="sm:text-2xl md:text-4xl font-[400] text-center md:text-left">
            Transform <span className="font-bold">Your Financial and Finance Procedures</span> with Maxify Solutions
            </h2>
            <p className="text-justify text-gray-300 mt-6">
            At Maxify Solution, we recognize that the banking and finance field is swiftly advancing, and staying ahead requires innovation, dexterity, and know-how. Whether you need a robust digital advertising strategy, a safe and user-friendly website, or custom-made software solutions for your banks, we have you covered in banking and financial services in India.
            </p>
            <div className="flex  items-center mt-2">
            <Link to='/about'>
          <button
            className=" py-3  md:text-[14px] font-[500] px-8 rounded-full relative text-[#229ae3] bg-[#e9f2f7] isolation-auto z-10 border-2 border-[#e9f2f7]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[#229ae3] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-[#e9f2f7]"
          >
            About us

          </button>
          </Link>
          <div className=" h-[45px] w-[45px] bg-[#229ae3]  rounded-full flex justify-center items-center">
          <BsArrowRight className="  text-[30px] p-1 text-white  transform -rotate-[40deg] font-[200]" />
          </div>
          </div>
          </div>
        </div>

        {/* last */}
        <section className="max-w-7xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
     
      <div className="w-full">
        <img
          src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512925/image_37_fo9tqe.png"
          alt="Contact us"
          className="rounded-lg w-[80%] mx-auto"
        />
      </div>

    
      <div className="w-full">
        <h2 className="sm:text-4xl md:text-5xl text-center font-bold text-blue-600 mb-4 md:px-20">
          Contact us <span className="text-black">Today</span>
        </h2>
        <p className="text-lg text-gray-600 mb-6 leading-7 text-justify">
          To review your needs and discover exactly how <strong>Maxify Option</strong> can aid you navigate the digital transformation journey in the <span className="font-bold text-black">banking and financial service</span>.
        </p>
      </div>
    </section>

        

       
    </div>
  );
};

export default Banking;
