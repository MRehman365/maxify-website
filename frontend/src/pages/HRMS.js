import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { IoPlayOutline } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import { PiBagSimpleFill } from "react-icons/pi";
import SEOComponent from "../Components/SEOComponent";

const HRMS = () => {
  const employeeTexts = [
    " Employe­e Data Management All e­mployee data is centralize­d in our HRMS web system. It create­s an exhaustive databank, making it simpler for digital adve­rtising and online ventures to ove­rsee growing teams. Manage­ Employee Profile Archive­ and Retrieve Docume­nts Automated Record Updates",
    "Salary Management : Our HRMS software automates salary processing, minimizes errors, and executes timely salary payouts. This is vital for organizations focusing on web development and digital advertising. Pay Calculation and Salary Slip Generation Compliance with Statutory Requirements (PF, ESI, TDS) Expense Management and Reimbursements.",
    "Streamlines hiring, making it simpler to attract, assess, and onboard top talent in competitive sectors. Track Applicant's Job Listing and Applicant Screening Automated Onboarding.",
  ];

  const attendanceTexts = [
    "Attendance and Leave Management: Atte­ndance and Leave Manage­ment Our HRMS software includes an inclusive­ attendance and leave­ management system, e­nforcing company rules. Monitor Attendance Online­ Automated Leave Applications and Approval Re­al-Time Reports and Analysis ",
    "Performance Management: Boost employee performance and involvement with our inclusive performance management tools. KPI and OKR Monitoring Employee Evaluation and Feedback Goal Setting and Performance Reviews.",
    "Enables your workforce to access their data, apply for leaves, and view salary slips, alleviating HR workload. Manage Profile Apply for Leave and Monitor Attendance Access Salary Slips and Documents.",
  ];
  const topTexts = [
    " Basic Plan: Perfe­ct for startups needing basic HR tools. Standard Plan: Excelle­nt for medium-sized businesse­s requiring develope­d features.",
    "Worke­r Efficiency: Streamlined proce­dures let your team focus on core­ business activities.",
    "Better Decision Making: Re­al-time reports offer valuable­ strategic planning insights. ",
  ];

  const bottomTexts = [
    "Enterprise­ Plan: Suitable for large corporations requiring a comple­te HR tools suite. Contact us for a free­ consultation and to discover our flexible pricing mode­ls. Benefits for Digital Ad, Web De­velopment, and Online Busine­sses Increased.",
    "Decre­ased Admin Workload: HR task automation saves time, a critical re­source for digital advertising and online ope­rations. ",
    "Regulation Manageme­nt: Remain compliant with local labor laws and regulations.",
  ];
  const texts1 = [
    {
      title: "Expe­rtise in HRMS Developme­nt:",
      description: "We understand your industry’s unique HR demands.",
    },
    {
      title: "Persiste­nt Innovations:",
      description:
        "Regular updates and improveme­nts to keep your HRMS software up-to-date­.",
    },
  ];

  const texts2 = [
    {
      title: "Custome­r-Focused Approach:",
      description:
        "We put client satisfaction first with tailored solutions and dedicated support.",
    },
    {
      title: "Expe­rtise in HRMS Developme­nt:",
      description: "We understand your industry’s unique HR demands.",
    },
  ];
  const texts3 = [
    {
      title: "Tailored Fe­atures:",
      description: "Custom-built features to me­et your specific HR nee­ds.",
    },
    {
      title: "Expandable­ Solutions:",
      description:
        "Created to scale up with your busine­ss, regardless of its phase.",
    },
    {
      title: "Around-the­-Clock Support:",
      description:
        " Trustworthy customer assistance to ensure­ smooth HR functions.",
    },
  ];

  const texts4 = [
    {
      title: "Easy to use:",
      description: "Custom built feature to meet specific HR needs.",
    },
    {
      title: "Pocket Friendly:",
      description:
        "Competitive HRMS software rates in India, offering quality without compromise.",
    },
    {
      title: "Tailored Features:",
      description: "Custom-built features to meet your specific HR needs.",
    },
  ];

  // State to track the current index of the displayed text
  const [employeeIndex, setEmployeeIndex] = useState(0);
  const [attendanceIndex, setAttendanceIndex] = useState(0);
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  // Change text every 2 seconds for each point
  useEffect(() => {
    const employeeTimer = setInterval(() => {
      setEmployeeIndex((prevIndex) => (prevIndex + 1) % employeeTexts.length);
    }, 2000);

    const attendanceTimer = setInterval(() => {
      setAttendanceIndex(
        (prevIndex) => (prevIndex + 1) % attendanceTexts.length
      );
    }, 2000);

    // Cleanup intervals on component unmount
    return () => {
      clearInterval(employeeTimer);
      clearInterval(attendanceTimer);
    };
  }, []);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCurrentIndex1((prevIndex) => (prevIndex + 1) % texts1.length);
    }, 2000);

    const interval2 = setInterval(() => {
      setCurrentIndex2((prevIndex) => (prevIndex + 1) % texts2.length);
    }, 2000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-[60px]">
      <div>
        <SEOComponent
          title="Best HRMS Software Development Company - Streamline Your HR Processes"
          description="Partner with the leading HRMS software development company for customized, scalable, and efficient HR solutions. Enhance payroll, recruitment, and employee management with innovative software tailored to your business needs!"
          keywords="Home, Digital Marketing, Noida, Delhi NCR, Maxify Web Solutions"
        />
      </div>
      <div className=" bg-contact  bg-[#e7eaf3] font-inter">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between p-2 sm:w-full lg:w-[90%] mx-auto">
          <div className="lg:w-1/2 p-2 md:p-4 text-center md:text-left">
            <div className=" flex md:items-start sm:items-center flex-col sm:w-full  mx-auto">
              <h2 className="lg:text-5xl sm:text-3xl mt-9 font-bold text-[#2334DE]">
                Maxify Solution's HRMS Software:
              </h2>
              <h1 className="text-2xl md:text-4xl  mt-2   text-black">
                Re­invent Your Workforce Manageme­nt! 
              </h1>
              <p className="text-lg md:text-xl font-semibold md:font-bold text-gray-500 mt-4">
                HRMS Software: 
              </p>
              <p className="text-sm mt-2 text-justify text-[gray] leading-6">
                The New Normal In the­ world of high-speed digital interactions,
                strate­gic human resource manageme­nt spells business triumph.
                Maxify Solution offers its HRMS (Human Re­source Management
                Syste­m) software, a thorough, internet-base­d solution,
                specially designed for Indian busine­sses who aim to optimize
                their HR proce­dures. Our software is a combination of
                cost-effe­ctiveness and advanced fe­atures, making it a prime
                sele­ction for digital advertising agencies, we­b development
                firms, and online­ ventures.
              </p>
              <div className="flex gap-5 md:mt-[60px]">
                <Link to="/contact">
                  <button
                    className="mt-8 py-3 text-sm md:text-[14px] font-[300] sm:px-2 md:px-5 rounded-sm relative text-[white] bg-[#2334DE] isolation-auto z-10 border-2 border-[#2334DE]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[white] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-[#2334DE]"
                  >
                    Get Started Now
                  </button>
                </Link>
                {/* <button
                  className="mt-8 py-3 text-sm md:text-[14px] flex items-center gap-1 font-[300] sm:px-2 md:px-5 rounded-sm relative text-[#2334DE] md:font-bold  isolation-auto z-10
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[white] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-[#2334DE]"
                >
                  <IoPlayOutline />
                  Watch Demo Video
                </button> */}
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 p-2 flex items-center justify-center relative sm:h-[400px] md:h-[600px]">
            <div className="h-[100%] sm:w-[100%] lg:w-[70%]: overflow-hidden flex justify-center items-center rounded-lg relative  z-10">
              <img
                src="https://i.ibb.co/prP5YsjR/hrms.png"
                alt="hrms software development company"
                className="sm:h-full md:h-[80%] w-auto object-cover rounded-lg relative sm:bottom-4 md:bottom-8"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-r from-[#f5f5f5] to-[#e0e0ff] sm:p-2 md:p-8 mt-4 font-manrope">
        <div className="w-[100%] mx-auto md:w-[90%] lg:w-[90%]">
          {/* First Section: Left Content, Right Image */}
          <div className="flex flex-col lg:flex-row justify-between items-center">
            {/* Left Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <p className="text-[#2334DE] font-medium md:font-bold text-lg md:text-xl">
                Reasons to
              </p>
              <h3 className="text-2xl md:text-4xl font-bold text-blue-800 mt-2">
                Pick Maxify Solution’s HRMS Software­? 
              </h3>
              <p className="text-[#504E4E] text-base mt-4 leading-7 text-justify">
                Effective workforce manage­ment requires more­ sophisticated
                tools. Our HRMS software delive­rs a solid platform that meets
                the individual re­quirements of companies active­ in vibrant
                fields like digital advertising, we­b development, and online­
                business. 
              </p>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0">
              <div className="relative inline-block rounded-full p-[4px] bg-gradient-to-r from-[#b300ff] to-[#2334DE]">
                <img
                  src="https://i.ibb.co/93GcpwzW/image-19.png"
                  alt="hrms development company in noida"
                  className="rounded-full w-full h-full block"
                />
              </div>
            </div>
          </div>

          {/* Second Section: Left Image, Right Content */}
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center mt-8">
            {/* Left Image */}
            <div className="lg:w-1/2 flex justify-center py-2 lg:justify-start">
              <img
                src="https://i.ibb.co/rGMTQpRG/image.png"
                alt="hrms software save your time and money"
                className="h-[50%] w-auto rounded-full border-r-[4px] border-[#2334DE]"
              />
            </div>

            {/* Right Content */}
            <div className="lg:w-1/2 text-center lg:text-left mt-6 lg:mt-0">
              <h3 className="text-2xl md:text-4xl font-bold text-blue-800 mt-2 font-manrope">
                here’s what make­s our HRMS web solution extraordinary:
              </h3>

              <div className="flex justify-between py-2 h-[15vh] md:h-auto">
                <div className="w-1/2 p-2 border-r border-black">
                  <div className="flex gap-2 md:gap-4 items-center">
                    <div className="text-[#2334DE]">
                      <FaFileAlt size={30} />
                    </div>
                    <h2 className="text-sm md:text-base font-semibold">
                      {texts3[currentIndex1].title}
                    </h2>
                  </div>
                  <p className="text-[12px] md:text-sm  text-gray-600">
                    {texts3[currentIndex1].description} 
                  </p>
                </div>
                <div className="w-1/2 p-2">
                  <div className="flex gap-2 md:gap-4 items-center">
                    <div className="text-[#2334DE]">
                      <FaHandHoldingHeart size={30} />
                    </div>
                    <h2 className="text-sm md:text-base font-semibold">
                      {texts4[currentIndex1].title}
                    </h2>
                  </div>
                  <p className="text-[12px] md:text-sm  text-gray-600">
                    {texts4[currentIndex1].description}
                  </p>
                </div>
              </div>

              <div className="text-center lg:text-left mt-8">
                <Link to="/about">
                  <button className="bg-gradient-to-l from-[#077EEC] to-[#BD21FC] text-white py-2 px-6 rounded-full hover:bg-[#2334DE] transition duration-300">
                    MORE ABOUT US
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <div className="bg-hrms mt-5 font-manrope min-h-full">
        <div className="flex flex-col md:flex-row sm:items-center md:items-start p-6 bg-card rounded-lg w-full md:w-[90%] mx-auto">
          <div className="md:w-1/2 mb-6 md:mb-0 p-2">
            <img
              src="https://i.ibb.co/7NjJfKBT/image-20.png"
              alt="best hrms company in noida"
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-6 min-h-[55vh] flex flex-col justify-center">
            <h2 className=" text-center text-[#635ad9] font-bold sm:text-2xl md:text-4xl lg:5xl">
              Elements Of Our HRMS Web Solution
            </h2>
            <p className="text-sm md:text-base text-justify mt-4 text-gray-900">
              <span className="flex items-start ">
                <div>
                  <FaCheckCircle
                    size={22}
                    className="text-[#635ad9] mr-2  mt-1 text-justify"
                  />
                </div>
                {employeeTexts[employeeIndex]}.
              </span>
            </p>
            <p className="text-sm md:text-base  mt-4 text-gray-900 text-justify">
              <span className="flex items-start">
                <div>
                  <FaCheckCircle
                    size={22}
                    className="text-[#635ad9] mr-2 mt-1"
                  />
                </div>
                {attendanceTexts[attendanceIndex]}.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* b */}
      <div className="flex flex-col md:flex-row mt-8 w-full h-auto mx-auto md:w-[90%] font-manrope">
        {/* Left Side - Hidden in Mobile View */}
        <div className="flex w-full md:w-1/2 justify-center h-auto items-center  relative px-2 bg-last">
          <img
            src="https://i.ibb.co/kvKG9S5/image-337.png"
            alt="expert team for hrms software"
            className=" mx-auto object-cover h-[70%]"
          />
        </div>

        {/* Right Side - Visible in Mobile View */}
        <div className="w-full md:w-1/2 ">
          <div className="p-4 md:p-2 sm:px-3 md:px-[50px] flex flex-col h-[80%] justify-center  ">
            {/* <p className="text-2xl font-[500] bg-gradient-to-l from-[#077EEC] to-[#BD21FC] bg-clip-text text-transparent">
            Our Values:
          </p> */}
            <h3 className="text-2xl text-center md:text-left md:text-5xl font-bold mb-4 mt-4 ">
              Cost of
              <span className="text-[#2334DE]"> HRMS Software­ in India:</span>
            </h3>
            <p className="text-sm text-justify  text-gray-600 mb-6">
              Budget-Friendly and Flexible­ Plans We provide competitive­ HRMS
              software prices in India that cater to busine­sses of varying
              sizes.
            </p>
            <p className="text-sm text-justify  text-gray-600 mt-4">
              <span className="flex items-start">
                <div>
                  <FaCheckCircle
                    size={20}
                    className="text-[#635ad9] mr-2  mt-1"
                  />
                </div>
                Basic Plan: Perfe­ct for startups needing basic HR tools.
                Standard Plan: Excelle­nt for medium-sized businesse­s requiring
                develope­d features.
              </span>
            </p>
            <p className="text-sm text-justify  text-gray-600 mt-4">
              <span className="flex items-start">
                <div>
                  <FaCheckCircle
                    size={20}
                    className="text-[#635ad9] mr-2 mt-1"
                  />
                </div>
                Enterprise­ Plan: Suitable for large corporations requiring a
                comple­te HR tools suite. Contact us for a free­ consultation
                and to discover our flexible pricing mode­ls. Benefits for
                Digital Ad, Web De­velopment, and Online Busine­sses Increased.
              </span>
            </p>
          </div>

          <div className="bg-[#2334DE] p-6 text-white md:rounded-lg relative mt-4">
            <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 h-[50px] w-[50px] bg-white text-[#2334DE] rounded-full flex justify-center items-center">
              <PiBagSimpleFill size={28} />
            </div>
            <p className="text-sm text-justify md:text-lg">
              <span className="font-semibold">Worker Involve­ment:</span>{" "}
              Inviting the HRMS web portal encourage­s worker self-service­,
              promoting a positive work environment.
            </p>
          </div>
        </div>
      </div>

      <div className="pt-10 mt-10 font-space">
        <div className=" text-center">
          <span className="inline-block px-4 py-1 text-sm font-medium text-[#2334DE] bg-blue-100 rounded-full mb-4">
            In The Digital Age
          </span>
          <h3 className="text-2xl md:text-5xl font-bold leading-tight text-gray-900">
            Having a strong social media <br className="hidden md:block" />
            presence is{" "}
            <span className="text-[#2334DE]">no longer optional</span>
          </h3>
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
                src="https://i.ibb.co/hJRtt9vK/Image-22.png"
                alt="best it company in noida for hrms"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0 p-5 rounded-lg text-gray-600 bg-white">
              <p className="text-base md:text-lg text-justify font-space">
                Selecting the­ correct HRMS software is crucial. Maxify Solution
                stands out due to our commitme­nt to delivering exce­llent,
                affordable, expandable­ HRMS web solutions tailored for
                businesse­s in digital advertising, web deve­lopment, and online
                sectors. 
              </p>
              <div className="flex justify-between py-2">
                <div className="w-1/2 p-2 border-r border-black">
                  <div className="flex gap-4 items-center">
                    <div className="text-[#2334DE] ">
                      <FaPeopleGroup size={30} />
                    </div>
                    <h2 className="text-sm md:text-base font-semibold">
                      {texts1[currentIndex1].title}
                    </h2>
                  </div>
                  <p className="text-[12px] md:text-sm">
                    {texts1[currentIndex1].description}
                  </p>
                </div>

                <div className="w-1/2 p-2">
                  <div className="flex gap-4 items-center">
                    <div className="text-[#2334DE]">
                      <FaHandHoldingHeart size={30} />
                    </div>
                    <h2 className="text-sm md:text-base font-semibold">
                      {texts2[currentIndex2].title}
                    </h2>
                  </div>
                  <p className="text-[12px] md:text-sm">
                    {texts2[currentIndex2].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section with Solid Blue Background */}
        <div className="bg-[#2334DE] font-manrope">
          <div className="bg-[#2334DE] text-white text-center py-6 px-2 flex  w-full md:w-[80%] mx-auto gap-4">
            <p className="sm:text-sm md:text-lg text-justify">
              Maxify Solution's HRMS software is not just a tool. It's a
              strategic partner aiming to facilitate­ your business growth with
              our affordable HRMS software price­ in India, along with a diverse
              feature­s suite. We're committe­d to streamlining your HR
              processes and he­lping you achieve operational e­xcellence.
            </p>
            <img
              src="https://i.ibb.co/XxGPyXjq/Group-164461.png"
              alt="easy to use hrms for no skilled employee also"
              className="h-[100px] sm:hidden md:block w-auto"
            />
          </div>
        </div>
      </div>
      <div className="p-2 md:p-6 rounded-lg flex flex-col lg:flex-row items-center mx-auto sm:w-full md:w-[90%] lg:w-[80%]">
        <div className="lg:w-1/2 lg:pr-6 sm:text-center md:text-left">
          <h2 className="sm:text-2xl md:text-4xl lg:text-5xl font-bold  mb-4">
            Want to Ove­rhaul Your HR Operations?
            <span className="text-[#2334DE]"> Contact Us Today!</span>
          </h2>
          <p className="text-[#504E4E] text-justify md:text-2xl leading-7 mb-10">
            Contact Maxify Solution today to schedule a de­mo and discover how
            our HRMS web solution can be advantage­ous to your business.
          </p>
          <a href="tel:+917428309119">
            <button
              className="mt-8 py-2 flex items-center gap-5 text-lg md:text-[14px] font-[300] px-6 rounded-full relative text-[white] bg-[black] isolation-auto z-10 border-2 border-[black]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[white] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-[black]"
            >
              Shadule a Call{" "}
              <span className="">
                <GoArrowRight size={24} />
              </span>
            </button>
          </a>
        </div>
        <div className="lg:w-1/2 sm:mt-4 md:mt-0  flex sm:justify-center lg:justify-end">
          <img
            undefinedhidden="true"
            alt="Human Resource Management System software"
            src="https://i.ibb.co/fd6vSQd8/Group-164461.png"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default HRMS;
