import React from "react";
import img1 from "../Assets/Graphics/image (10).png";
import img2 from "../Assets/Graphics/image (3).png";
import img3 from "../Assets/Graphics/Section.png";
import img4 from "../Assets/Graphics/Group 427320841.png";
import img5 from "../Assets/Graphics/Group 164555.png";
import img6 from "../Assets/Graphics/blog post img.png";
import img7 from "../Assets/Graphics/blog post img (2).png";
import img8 from "../Assets/Graphics/blog post img (1).png";
import img9 from "../Assets/Graphics/image.png";
import img10 from "../Assets/Graphics/image 332.png";
import img11 from "../Assets/Graphics/Background+Border+Shadow.png";
import img12 from "../Assets/Graphics/image 335.png";
import img13 from "../Assets/Graphics/image (1).png";
import img14 from "../Assets/Graphics/image (2).png";
import img15 from "../Assets/Graphics/image 329.png";
import img16 from "../Assets/Graphics/image (4).png";
import img18 from "../Assets/Graphics/image 333.png";
import img17 from "../Assets/Graphics/image (5).png";
import { GoArrowRight } from "react-icons/go";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { BsArrowUpRight } from "react-icons/bs";
import GraphicSlider from "../Components/GraphicSlider";
import GraficsSlider from "../Components/GraficsSlider";

function Graphic() {
  return (
    <div className="mt-[70px]">
      <div className="flex flex-col lg:flex-row items-center sm:p-2 md:p-6 bg-background rounded-lg sm:w-full md:w-[90%] mx-auto">
        <div className="lg:w-[60%] p-4 relative">
          <p className="absolute top-5 right-5 text-[2rem] text-center sm:hidden lg:flex">
            Graphic{" "}
            <span className="mt-2 px-2 text-[#37937e]">
              <GoArrowRight />
            </span>
            Design
            <br /> Service
          </p>
          <img
            src={img1}
            alt="Team meeting"
            className="rounded-lg h-full w-auto object-cover"
          />
          <div className="absolute bottom-0 left-[30%] max-w-[400px] bg-white rounded-xl px-4 py-2">
            <h4 className="flex items-center text-xl gap-2">
              <span className="text-[#37937e]">
                <BsFillCreditCard2BackFill size={30} />
              </span>
              Why Choose Maxify <br />
              Solution for Graphic Design?
            </h4>
            <p className="mt-2 text-sm text-[#6C6A72]">
              Tailored Visual Strategies: We create customized designs that
              align with your brand's goals and target audience.
            </p>
          </div>
        </div>
        <div className="lg:w-[40%] py-4 px-2 md:px-10">
          <h3 className=" font-[500] sm:text-[36px] md:text-5xl text-[#37937e] leading-10">
            Maxify Solution: <span className="text-black">Expert</span> Graphic
            Design <span className="text-black">Services</span>
          </h3>
          <p className="mt-4 text-[16px]  text-justify leading-8 text-[#6C6A72]">
            In today's competitive digital landscape, compelling visuals are
            crucial for standing out and making a lasting impression. At Maxify
            Solution, we offer cutting-edge graphic design services that help
            businesses elevate their brand presence and communicate effectively
            with their audience. As a leading graphic design agency, we blend
            creativity with strategy to create visuals that captivate and
            convert.
          </p>
        </div>
      </div>

      {/*  */}
      <div className="bg-white flex sm:flex-col md:flex-row justify-between items-center px-2 py-5 w-full mx-auto gap-3 md:w-[90%]">
        {/* Section for Experienced Designers */}
        <div className="flex text-base sm:px-0 md:px-2 lg:px-5">
          <p>
            <span className="font-semibold text-lg">
              Experienced Designers :{" "}
            </span>
            Our team consists of experienced graphic designers with expertise
            across diverse industries.
          </p>
        </div>

        {/* Middle Section for Services */}
        <div className="flex items-center gap-2  text-base sm:px-0 md:px-2 lg:px-5">
          <img src={img2} alt="" className="h-[4rem] w-auto" />
          <p>
            <span className="font-semibold text-lg">
              Comprehensive Services :
            </span>
            From branding and logo design to website graphics and marketing
            collateral, we offer a full range of graphic design services.
          </p>
        </div>

        {/* Section for Innovation */}
        <img src={img3} alt="" className="h-[300px] w-auto" />
      </div>

      {/* slider section */}
      <div>
        <div className="flex sm:flex-col md:flex-row justify-between items-center px-2 py-5 bg-white mx-auto md:w-[90%]">
          {/* Left Side - Title and Icon */}
          <div className=" md:w-1/2">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-[#37937e] rounded-full mr-2"></div>
              <span className="text-gray-500 font-medium">Services</span>
            </div>
            <h1 className="text-5xl font-bold">
              Our <span className="text-[#37937e]">Graphic Design</span>{" "}
              Services
            </h1>
          </div>

          {/* Right Side - Description */}
          <div className=" md:w-1/2 ">
            <p className="text-gray-500 mt-2 md:mt-[6rem] ">
              This book delves into the intricacies of wealth management,
              offering readers comprehensive strategies to grow and protect
              their assets. It covers topics ranging from investment
              diversification to tax optimization tailored for the contemporary.
            </p>
          </div>
        </div>
      </div>


      {/* Slider */}
      <GraphicSlider />

      {/*  */}
      <div className="flex flex-col lg:flex-row items-center sm:p-2 md:p-6 bg-background rounded-lg sm:w-full md:w-[90%] mx-auto">
        <div className="lg:w-[50%] p-4 relative">
          <img
            src={img13}
            alt="Team meeting"
            className="rounded-lg h-full w-auto object-cover"
          />
        </div>
        <div className="lg:w-[50%] py-4 px-2">
          <h3 className=" font-[700] sm:text-[36px] md:text-4xl text-center text-[#37937e] leading-10">
            Our Graphic Design Process
          </h3>
          <p className="mt-4 text-[14px]  text-justify leading-6 text-[#6C6A72]">
            At Maxify Solution, we follow a structured design process to ensure
            that every project meets your expectations and delivers impactful
            results.
          </p>
          <div className="flex justify-between mt-3">
            <div className="w-1/2 pr-2">
              <h4 className="text-base font-[600]">
                Step 1: Discovery and Research
              </h4>
              <p className="text-sm font-[300] text-justify">
                Understanding your brand, target audience, and business goals is
                the first step. We conduct thorough research and hold discovery
                sessions to gather all necessary information
              </p>
            </div>
            <div className="w-1/2 flex justify-center items-center">
              <img
                src={img15}
                alt=""
                className="md:w-[60%] md:h-auto h-[100px] w-auto"
              />
            </div>
          </div>
          <div className="flex justify-between mt-3">
            <div className="w-1/2 flex justify-center items-center">
              <img
                src={img14}
                className="md:w-[80%] md:h-auto h-[100px] w-auto"
                alt=""
              />
            </div>
            <div className="w-1/2 pl-2">
              <h4 className="text-base font-[600]">
                Step 2: Concept Development
              </h4>
              <p className="text-sm font-[300] text-justify">
                Based on the research, we brainstorm and develop design concepts
                that align with your objectives. Multiple concepts are created
                to offer a range of options.
              </p>
            </div>
          </div>
          <div className="flex justify-between mt-3">
            <div className="w-1/2 pr-2">
              <h4 className="text-base font-[600]">
                Step 3: Design and Revision
              </h4>
              <p className="text-sm font-[300] text-justify">
                Our talented designers bring the chosen concept to life,
                incorporating your feedback at every stage. We offer multiple
                rounds of revisions to ensure complete satisfaction.
              </p>
            </div>
            <div className="w-1/2 flex justify-center items-center">
              <img
                src={img16}
                alt=""
                className=" md:w-[80%] md:h-auto h-[100px] w-auto"
              />
            </div>
          </div>
          <div className="flex justify-between mt-3">
            <div className="w-1/2 flex justify-center items-center">
              <img
                src={img17}
                className="md:w-[80%] md:h-auto h-[100px] w-auto"
                alt=""
              />
            </div>
            <div className="w-1/2 pl-2">
              <h4 className="text-base font-[600]">
                Step 4: Finalization and Delivery
              </h4>
              <p className="text-sm font-[300] text-justify">
                Once the design is approved, we prepare the final files in the
                required formats and deliver them to you, ready for use across
                all platforms and channels.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center p-3 bg-background rounded-lg mx-auto sm:w-full md:w-[94%] lg:w-[90%]">
        {/* Left side content */}
        <div className="md:w-1/2">
          {/* <span className="text-sm bg-[#e5e5ff] text-[#2334DE] rounded px-3 py-1">
            Why
          </span> */}
          <h1 className="sm:text-4xl md:text-5xl font-semibold text-[black] mt-4">
            Benefits of Partnering with{" "}
            <span className="text-[#37937e]">Maxify Solution</span> for{" "}
            <span className="text-[#37937e]">Graphic</span> Design
          </h1>
          <ul className="text-[16px] leading-7 list-disc mt-3 text-[#6C6A72]">
            <li>
              Customized Solutions: Tailored graphic design solutions to meet
              your unique business needs.
            </li>
            <li>
              Consistent Branding: Designs that maintain brand consistency
              across all digital and print mediums.
            </li>
            <li>
              Increased Engagement: Visually appealing graphics that attract
              attention and boost engagement.
            </li>
            <li>
              Enhanced Credibility: Professional designs that establish trust
              and credibility with your audience.
            </li>
            <li>
              Scalable Services: Scalable graphic design services to accommodate
              businesses of all sizes, from startups to large enterprises.
            </li>
          </ul>
          <button
            className="mt-8 py-2 flex items-center gap-5 text-lg md:text-[14px] font-[300] px-6 rounded-full relative text-[white] bg-[#37937e] isolation-auto z-10 border-2 border-[#37937e]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[white] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-[#37937e]"
          >
            Shadule a Call{" "}
            <span className="">
              <GoArrowRight size={24} />
            </span>
          </button>
        </div>

        {/* Right side with video */}
        <div className="md:w-1/2 mt-6 md:mt-0 relative flex sm:justify-center md:justify-end">
          <img src={img4} alt="" className="sm:w-full md:w-[70%]" />
        </div>
      </div>

      <div className="bg-[#f0effc] p-3">
        <div className="flex flex-col-reverse md:flex-row md:space-x-4 mt-8 w-[100%] mx-auto md:w-[90%] lg:w-[90%]">
          {/* Right Side - Visible in Mobile View */}
          <div className="w-full md:w-1/2 p-4 md:p-4 sm:px-3 flex flex-col justify-around">
            <h1 className="text-3xl md:text-5xl font-bold mt-4 mb-2">
              Industries We Serve
            </h1>
            <p className="text-lg text-[#5f5f5f]">
              We have extensive experience working with clients across various
              industries, including:
            </p>
            <ul className="sm:text-[1rem] md:text-[18px] text-justify  text-gray-600 mb-6 border p-4 leading-8 bg-white list-disc list-inside">
              <li>Healthcare</li>
              <li>Real Estate</li>
              <li>Education</li>
              <li>E-commerce</li>
              <li>Hospitality</li>
              <li>Finance and Insurance</li>
            </ul>
            <div>
              <button className="bg-gradient-to-l from-[#077EEC] to-[#BD21FC] text-white py-3 px-4 rounded-full hover:bg-[#2334DE] transition duration-300">
                MORE ABOUT US
              </button>
            </div>
          </div>
          {/* Left Side - Hidden in Mobile View */}
          <div className="flex w-full md:w-1/2 sm:h-[300px] md:h-auto justify-center relative px-2">
            <img src={img5} alt="Left Side" className="md:w-[80%] sm:w-full" />
          </div>
        </div>
      </div>

      <div className="mt-8 text-white relative mx-auto sm:w-full md:w-[90%] lg:w-[80%]">
        <img src={img9} alt="" className="w-full h-auto" />
        <img
          src={img10}
          alt=""
          className="sm:w-[300px] md:w-[400px] absolute bottom-0 left-0 h-auto"
        />
        <img
          src={img18}
          alt=""
          className="sm:w-[300px] md:w-[500px] absolute top-0 right-5 h-auto"
        />
        <div
          className=" md:absolute p-6 sm:w-[100%] md:w-[60%] h-auto right-0 bottom-0 bg-gradient-to-tl to-[#37937e] from-[#37937e]"
          style={{ borderRadius: "20px 0px 20px 0px" }}
        >
          <h3 className="text-2xl font-[600] mb-2">
            Why Invest in Professional Graphic Design?
          </h3>
          <p className="text-base">
            Professional graphic design is more than just aesthetics—it’s about
            effective communication and achieving your business goals. Here’s
            why investing in professional graphic design is crucial:
          </p>
        </div>
      </div>

      {/* 2nd last */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-4 mx-auto sm:w-full md:w-[90%] lg:w-[80%]">
        <div className=" rounded-lg shadow-lg  flex-1">
          <img
            undefinedhidden="true"
            alt="Chat GPT"
            src={img6}
            className="rounded-t-lg object-cover w-full"
          />
          <div className="p-3">
            <h3 className="text-lg font-semibold mt-4 mb-3">
              Brand Recognition:
            </h3>
            <p className="text-sm">
              Consistent and high-quality visuals help build strong brand
              recognition.
            </p>
          </div>
        </div>
        <div className=" rounded-lg shadow-lg flex-1">
          <img
            undefinedhidden="true"
            alt="Clear Communication"
            src={img8}
            className="rounded-t-lg  object-cover w-full"
          />
          <div className="p-3">
            <h3 className="text-lg font-semibold mt-4 mb-3">
              Higher Conversion Rates:
            </h3>
            <p className="text-sm">
              Well-designed graphics have the power to influence buying
              decisions.
            </p>
          </div>
        </div>
        <div className=" rounded-lg shadow-lg flex-1">
          <img
            undefinedhidden="true"
            alt="Dedicated Support"
            src={img7}
            className="rounded-t-lg  object-cover w-full"
          />
          <div className="p-3">
            <h3 className="text-lg font-semibold mt-4 mb-3">
              {" "}
              Competitive Edge:
            </h3>
            <p className="text-sm">
              Distinguish your business from competitors with unique and
              impactful designs.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center p-3 bg-background rounded-lg mx-auto sm:w-full md:w-[94%] lg:w-[80%]">
        {/* Left side content */}
        <div className="md:w-1/2 md:px-8">
          <span className="text-sm bg-[#e5e5ff] text-[#2334DE] rounded px-3 py-1">
            Get in touch
          </span>
          <h1 className="text-4xl font-semibold text-[black] mt-4">
            Partner with Maxify Solution – Your Trusted
            <span className="text-[#2334DE]"> Graphic Design Agency</span>
          </h1>
          <p className="mt-4 text-[16px] leading-7 text-gray-500 text-justify">
            At Maxify Solution, we are passionate about helping businesses
            succeed through innovative and strategic graphic design. Whether you
            need a complete brand overhaul or specific graphic assets for your
            digital marketing campaigns, our expert team is here to deliver
            exceptional results.
          </p>
          <button
            className="mt-8 py-2 text-sm md:text-[14px] font-[300] sm:px-6 md:px-6 rounded-full relative text-[white] bg-[#2334DE] isolation-auto z-10 border-2 border-[#2334DE]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[white] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-[#2334DE]"
          >
            Learn More
          </button>
        </div>

        {/* Right side with video */}
        <div className="md:w-1/2 mt-6 md:mt-0 relative">
          <div className=" relative">
            <img className="h-full w-full" alt="" src={img11} />
          </div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col justify-between md:w-[90%] mx-auto">
        <p className="md:px-[20px] text-lg text-gray-500">
          <span className="text-2xl text-black">Get in touch with us</span>{" "}
          today to discuss your graphic design needs and discover how we can
          elevate your brand to new heights.
        </p>
        <img
          src={img12}
          alt=""
          className="w-full md:w-[30%] mx-auto border-l-[3px] border-t-[3px] rounded-full border-[green]"
        />
      </div>
    </div>
  );
}

export default Graphic;
