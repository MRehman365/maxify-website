import React, { useEffect } from "react";
import { GoArrowRight } from "react-icons/go";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { BsArrowUpRight } from "react-icons/bs";
import GraphicSlider from "../Components/GraphicSlider";
import GraficsSlider from "../Components/GraficsSlider";
import { Link } from "react-router-dom";

function Graphic() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mt-[70px] font-pop">
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
            src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513217/image_10_magoe1.png"
            alt="best company seo ranking"
            className="rounded-lg h-full w-auto object-cover"
          />
          <div className="absolute bottom-0 left-[30%] max-w-[400px] bg-white rounded-xl px-4 py-2">
            <h4 className="flex items-center text-xl gap-2 font-manrope">
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
          <h3 className=" font-[500] sm:text-[30px] md:text-5xl text-[#37937e] leading-10 font-manrope">
            Maxify Solution: <span className="text-black">Expert</span> Graphic
            Design <span className="text-black">Services</span>
          </h3>
          <p className="mt-4 text-[16px]  text-justify leading-8 text-[#6C6A72] font-pop">
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
        <div className="flex text-base sm:px-0 md:px-2 lg:px-5 font-pop">
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
          <img src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513202/image_3_mz0ptm.png" 
          alt="seo agency" className="h-[4rem] w-auto" />
          <p className="font-pop">
            <span className="font-semibold text-lg">
              Comprehensive Services :
            </span>
            From branding and logo design to website graphics and marketing
            collateral, we offer a full range of graphic design services.
          </p>
        </div>

        {/* Section for Innovation */}
        <img src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513231/Section_ppckja.png" 
        alt="ai based rast ranking" className="h-[300px] w-auto" />
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
            <h1 className="text-3xl md:text-5xl font-bold font-manrope">
              Our <span className="text-[#37937e]">Graphic Design</span>{" "}
              Services
            </h1>
          </div>

          {/* Right Side - Description */}
          <div className=" md:w-1/2 ">
            <p className="text-gray-500 mt-2 md:mt-[6rem] text-justify font-pop">
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
            src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513200/image_1_bghzft.png"
            alt="seo online marketing"
            className="rounded-lg h-full w-auto object-cover"
          />
        </div>
        <div className="lg:w-[50%] py-4 px-2">
          <h3 className=" font-[700] sm:text-[30px] md:text-4xl text-left text-[#883bf2] leading-8 font-manrope">
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
            <div className="w-1/2 flex justify-center items-center ">
            <div className=" border-l-4 border-[#ffba31] md:w-[80%] md:p-6 md:h-auto h-[100px] w-auto rounded-full">
              <img
                src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513225/image_329_vcmnfx.png"
                alt="search descovery"
                className="md:w-[60%] md:h-auto h-[100px] w-auto"
              />
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-3">
            <div className="w-1/2 flex justify-center items-center">
            <div className=" border-r-4 border-[#ffba31] md:w-[80%] md:p-6 md:h-auto h-[100px] w-auto rounded-full">
              <img
                src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513202/image_2_i6vgog.png"
                className="md:w-[80%] md:h-auto h-[100px] w-auto"
                alt="seo digital marketing cost"
              />
              </div>
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
            <div className=" border-l-4 border-[#ffba31] md:w-[80%] md:p-6 md:h-auto h-[100px] w-auto rounded-full">
              <img
                src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513204/image_4_zdax9n.png"
                alt="seo packages pricing"
                className=" md:w-[80%] md:h-auto h-[100px] w-auto"
              />
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-3">
            <div className="w-1/2 flex justify-center items-center">
            <div className=" border-r-4 border-[#ffba31] md:w-[80%] md:p-6 md:h-auto h-[100px] w-auto rounded-full">
              <img
                src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513206/image_5_gvypsd.png"
                className="md:w-[80%] md:h-auto h-[100px] w-auto"
                alt="high quality content creation"
              />
              </div>
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
          <h1 className="sm:text-3xl md:text-5xl font-semibold text-[black] mt-4  font-manrope">
            Benefits of Partnering with{" "}
            <span className="text-[#37937e] font-bold">Maxify Solution</span> for{" "}
            <span className="text-[#37937e] font-bold">Graphic</span> Design
          </h1>
          <ul className="text-[16px] leading-7  mt-3 text-[#6C6A72] text-justify">
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
          <a  href="tel:+917428309119">
          <button
            className="mt-8 py-2 flex items-center gap-5 text-lg md:text-[14px] font-[300] px-6 rounded-full relative text-[white] bg-[#37937e] isolation-auto z-10 border-2 border-[#37937e]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[white] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-[#37937e]"
          >
            Shadule a Call{" "}
            <span className="">
              <GoArrowRight size={24} />
            </span>
          </button>
          </a>
        </div>

        {/* Right side with video */}
        <div className="md:w-1/2 mt-6 md:mt-0 relative flex sm:justify-center md:justify-center">
          <img src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513191/Group_427320841_zri9mt.png" 
          alt="identifying relevant keywords" className="sm:w-full md:w-[70%]" />
        </div>
      </div>

      <div className="bg-[#f0effc] p-3">
        <div className="flex flex-col-reverse md:flex-row md:space-x-4 mt-8 w-[100%] mx-auto md:w-[90%] lg:w-[90%]">
          {/* Right Side - Visible in Mobile View */}
          <div className="w-full md:w-1/2 p-4 md:p-4 sm:px-3 flex flex-col justify-around">
            <h1 className="text-3xl md:text-5xl font-bold mt-4 mb-2  font-manrope">
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
            <Link to='/about'>
              <button className="bg-gradient-to-l from-[#077EEC] to-[#BD21FC] text-white py-3 px-4 rounded-full hover:bg-[#2334DE] transition duration-300">
                MORE ABOUT US
              </button>
              </Link>
            </div>
          </div>
          {/* Left Side - Hidden in Mobile View */}
          <div className="flex w-full md:w-1/2 sm:h-[300px] md:h-auto justify-center relative px-2">
            <img src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513192/Group_164555_o6svkw.png" 
            alt="high da pa seo backlink" className="md:w-[80%] sm:w-full" />
          </div>
        </div>
      </div>

      <div className="mt-8 text-white relative mx-auto sm:w-full md:w-[90%] lg:w-[80%] hidden md:block">
        <img src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513230/image_xtopqm.png" alt="" className="w-full h-auto" />
        <img
          src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513227/image_332_m1luyv.png"
          alt="brand visual identity seo"
          className="sm:w-[300px] md:w-[400px] absolute bottom-0 left-0 h-auto"
        />
        <img
          src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513228/image_333_abb0jm.png"
          alt="color palette brand promotion"
          className="sm:w-[300px] md:w-[500px] absolute top-0 right-5 h-auto"
        />
        <div
          className=" md:absolute p-6 sm:w-[100%] md:w-[60%] h-auto right-0 bottom-0 bg-gradient-to-tl to-[#37937e] from-[#37937e]"
          style={{ borderRadius: "20px 0px 20px 0px" }}
        >
          <h3 className="text-2xl font-[600] mb-2 font-manrope">
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
            alt="brand awareness brand recognition"
            src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513187/blog_post_img_aytce4.png"
            className="rounded-t-lg object-cover w-full"
          />
          <div className="p-3">
            <h3 className="text-lg font-[500] mt-4 mb-3 text-[#635AD9]">
              Brand Recognition:
            </h3>
            <p className="text-gray-800 text-sm">
              Consistent and high-quality visuals help build strong brand
              recognition.
            </p>
          </div>
        </div>
        <div className=" rounded-lg shadow-lg flex-1">
          <img
            undefinedhidden="true"
            alt="brand recognition"
            src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513186/blog_post_img_1_skvrp9.png"
            className="rounded-t-lg  object-cover w-full"
          />
          <div className="p-3">
            <h3 className="text-lg font-[500] mt-4 mb-3 text-[#635AD9]">
              Higher Conversion Rates:
            </h3>
            <p className="text-gray-800 text-sm">
              Well-designed graphics have the power to influence buying
              decisions.
            </p>
          </div>
        </div>
        <div className=" rounded-lg shadow-lg flex-1">
          <img
            undefinedhidden="true"
            alt="seo strategically growth strategy"
            src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513187/blog_post_img_2_bi7khs.png"
            className="rounded-t-lg  object-cover w-full"
          />
          <div className="p-3">
            <h3 className="text-lg font-[500] mt-4 mb-3 text-[#635AD9]">
              {" "}
              Competitive Edge:
            </h3>
            <p className="text-gray-800 text-sm">
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
          <h1 className="text-2xl md:text-4xl font-semibold text-[black] mt-4 font-sand">
            Partner with Maxify Solution – Your Trusted
            <span className="text-[#2334DE]"> Graphic Design Agency</span>
          </h1>
          <p className="mt-4 text-[16px] leading-7 text-gray-500 text-justify font-roboto">
            At Maxify Solution, we are passionate about helping businesses
            succeed through innovative and strategic graphic design. Whether you
            need a complete brand overhaul or specific graphic assets for your
            digital marketing campaigns, our expert team is here to deliver
            exceptional results.
          </p>
          <a href="https://wa.me/917428309119" target="blank">
          <button
            className="mt-8 py-2 text-sm md:text-[14px] font-[300] sm:px-6 md:px-6 rounded-full relative text-[white] bg-[#2334DE] isolation-auto z-10 border-2 border-[#2334DE]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[white] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-[#2334DE]"
          >
            Contact us
          </button>
          </a>
        </div>

        {/* Right side with video */}
        <div className="md:w-1/2 mt-6 md:mt-0 relative">
          <div className=" relative">
            <img className="h-full w-full" alt="advanced ai seo tool for promotion" src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513185/Background_Border_Shadow_occpga.png" />
          </div>
        </div>
      </div>

      <div className="px-2 flex md:flex-row flex-col justify-between md:w-[90%] mx-auto font-roboto">
        <p className=" md:px-[20px] text-base mb-2 md:mb-0 md:text-lg text-gray-500 text-justify">
          <span className="text-2xl text-black">Get in touch with us</span>{" "}
          today to discuss your graphic design needs and discover how we can
          elevate your brand to new heights.
        </p>
        <img
          src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513229/image_335_jy33gk.png"
          alt="seo company in delhi ncr"
          className="w-full md:w-[30%] mx-auto border-l-[3px] border-t-[3px] rounded-full border-[green]"
        />
      </div>
    </div>
  );
}

export default Graphic;
