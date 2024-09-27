import React from "react";

import { FiCheckCircle } from "react-icons/fi"; // Import the React Icons
import { MdImportantDevices } from "react-icons/md";
import { AiOutlineSolution } from "react-icons/ai";
import { LuFocus } from "react-icons/lu";
import { BsGraphUpArrow } from "react-icons/bs";
import img1 from "../Assets/contact us/Container (11).webp";
import img2 from "../Assets/contact us/Image (16).webp";
import img3 from "../Assets/Group 164554.png";
import img5 from "../Assets/Group 164555.png";
import img6 from "../Assets/Group 164558.png";
import img7 from "../Assets/contact us/Mask group (4).webp";
import img8 from "../Assets/contact us/Mask group (5).webp";
import img9 from "../Assets/contact us/Image (35).webp";
import img10 from "../Assets/contact us/stock-photo-photo-of-curious-inspired-lady-hold-big-one-like-pinata-stand-tiptoe-wear-plaid-shirt-isolated-2083936846-transformed-Photoroom 1.webp";
import img11 from "../Assets/image 2.png";
import img12 from "../Assets/image-Photoroom (15) 1.png";
import img13 from "../Assets/image (4).png";
import img16 from "../Assets/image (3).png";
import img14 from "../Assets/image.png";
import img15 from "../Assets/image 318.png";
import SwiperCom from "../Components/SwiperCom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Correct import
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"; // for custom arrows
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="mt-[70px] bg-[#ffffff]">
      <div className="flex flex-col lg:flex-row items-center sm:p-2 md:p-6 bg-background rounded-lg sm:w-full md:w-[90%] mx-auto">
        <div className="lg:w-1/2 p-4">
          <img
            src={img1}
            alt="Team meeting"
            className="rounded-lg h-full w-auto object-cover"
          />
        </div>
        <div className="lg:w-1/2 py-4 px-2 md:px-10">
          <h2 className="text-lg text-[#6C6A72]">Who We Are:</h2>
          <h3 className=" font-semibold sm:text-4xl md:text-5xl">
            Your Trusted Partner
            <br /> in{" "}
            <span className="text-[#2334DE] font-bold">Digital Excellence</span>
          </h3>
          <p className="mt-4 text-sm text-justify leading-6 text-[#6C6A72]">
            Welcome to Maxify Solutions, where innovation meets excellence. As
            one of the Top 5 Web Designing Companies in India, we have built our
            reputation on delivering cutting-edge digital solutions that elevate
            brands and drive business growth. Our journey has been one of
            passion, commitment, and relentless pursuit of perfection in the
            digital marketing and web development landscape.
          </p>
          <p className="mt-2 text-sm text-justify leading-6 text-[#6C6A72]">
            At Maxify Solutions, we understand that a website is more than just
            a digital presence; it's a reflection of your brand's identity and a
            powerful tool to connect with your audience. Our team of seasoned
            professionals is dedicated to crafting websites that not only look
            stunning but also perform exceptionally well, making us one of the
            Best Web Designing Companies in the industry.
          </p>
        </div>
      </div>

      {/* Section * */}
      <div className="pt-10 mt-10">
        <div className=" text-center sm:w-full md:w-[90%] px-2 mx-auto">
          <span className="inline-block px-4 py-1 text-sm font-medium text-[#2334DE] bg-blue-100 rounded-full mb-4">
            Our Mission
          </span>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-gray-900">
            As our mission states — we exist to provide organizations with
            digital presence is{" "}
            <span className="text-[#2334DE]">
              strategies & solutions of the future.
            </span>
          </h1>
        </div>

        {/* Middle Section with Linear Gradient Background */}
        <div
          className=" mt-8 py-10"
          style={{
            background: "linear-gradient(to bottom, white 50%, #2334DE 50%)",
          }}
        >
          <div className="md:w-[90%] lg:w-[90%] mx-auto  flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/2 flex justify-end">
              <img
                src={img2} // Replace with actual image source
                alt="Team Working"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0 p-5 rounded-r-lg  text-[#6C6A72] bg-white">
              <p className="text-[20x] leading-7 text-justify">
                Being top Web Design Company in India we make the most user
                friendly and responsive designs so that any device can become
                your hurdle to touch heights. Be it a dynamic website,
                high-quality SEO services or comprehensive digital marketing
                tactics; Maxify Solutions is the one-stop resolution for all
                that can offer your more business online! We think that
                everyone, regardless of the size or industry their business
                belongs to deserves a notable online platform. We aim to help
                you gain a competitive edge through quality custom web design
                and development. This commitment to perfection makes us one of
                the Top 5 Web Designing Companies in India.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section with Solid Blue Background */}
        <div className="bg-[#2334DE] text-white text-center py-6">
          <p className=" sm:text-xl md:text-2xl ">
            What We Do: All your digital solution in one place
          </p>
        </div>
      </div>

      {/* <SwiperCom /> */}

      {/* b */}
      <div className="bg-contact">
      <div className="flex flex-col md:flex-row md:space-x-4 mt-8 w-[100%] mx-auto md:w-[90%] lg:w-[90%]">
        {/* Left Side - Hidden in Mobile View */}
        <div className="flex justify-center items-center sm:h-[400px] md:h-auto w-full md:w-1/2 px-2">
        <div className="flex justify-center items-center w-[80%] h-full relative">
          <img
            src={img13}
            alt="Left Side"
            className="sm:h-[60%] md:h-[50%] absolute sm:top-0 md:top-10 sm:left-0  object-cover w-auto"
          />
          <img
            src={img16}
            alt="Left Side"
            className="sm:h-[60%] md:h-[50%] absolute sm:bottom-0 sm:right-0 md:bottom-20 border-[10px] border-white rounded-[3rem] object-cover w-auto"
          />
          </div>
        </div>

        {/* Right Side - Visible in Mobile View */}
        <div className="w-full md:w-1/2 p-4 md:p-8 sm:px-3 md:px-[0px]">
          <p className="text-[18px] font-[500] bg-gradient-to-l from-[#077EEC] to-[#BD21FC] bg-clip-text text-transparent">
            About us
          </p>

          <h1 className="text-2xl md:text-4xl font-bold mb-4 mt-4">
            Web Development — Building Websites That SELL
          </h1>
          <p className="text-sm text-justify  text-gray-600 mb-6">
            For Maxify Solutions, having websites developed means way more than
            simply doing codes; it's about building an online experience that
            engages and converts. Being one of the Top Web Designing Companies
            in India, we possess expertise and experience to assure that your
            web design looks good but also delivers optimum performance. During
            development nothing is done sloppily to ensure whatever website we
            create, it will be super SEO fast and responsive user-friendly web.
          </p>
          <p className="text-sm text-justify  text-gray-600 mb-6">
            We manage to be ahead of the curve by leveraging web dev best
            practices and latest tech. Whether it is ecommerce, content
            management systems or digital magazines; our team can create
            websites for any industry and business model. With a focus on
            quality and innovation, we are the best Web Design Company in India
            for those who want to improve the digital experience for their
            customers.{" "}
          </p>

          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 mb-6">
            <div className="flex-1 flex gap-3 items-start text-left p-4 rounded-md">
              <div  className="bg-[#eaf2f6] h-10 w-10 rounded-full p-2 flex justify-center items-center">
                <LuFocus className="text-[30px] text-[#635ad9]" />
              </div>
              <div >
                <h3 className="text-sm font-[500] text-black">
                  Problem Solving
                </h3>
                <p className="text-[12px] text-justify">
                  Aliquam erat volutpat <br />Nullam imperdiet
                </p>
              </div>
            </div>
            <div className="flex-1 flex gap-3 items-start text-left p-4 rounded-md">
              <div  className="bg-[#eaf2f6] h-10 w-10 rounded-full p-2 flex justify-center items-center">
                <BsGraphUpArrow className="text-[30px] text-[#635ad9]" />
              </div>
              <div>
                <h3 className="text-sm font-[500] text-black">
                  Mission & Vision
                </h3>
                <p className="text-[12px] text-justify">
                  Ut vehiculadictumst.<br /> Maecenas ante.
                </p>
              </div>
            </div>
          </div>

          <Link to="/app flex justify-center">
            <button
              className="mt-8 py-3 text-[14px] font-[300] px-5 rounded-full relative text-[white] bg-gradient-to-l from-[#077EEC] to-[#BD21FC] isolation-auto z-10
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[white] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-[#2334DE]"
            >
              Get Started Now
            </button>
          </Link>
        </div>
      </div>
      </div>

      {/* second section */}
      <div className="flex flex-col md:flex-row md:space-x-4 mt-8 w-[100%] mx-auto md:w-[90%] lg:w-[90%]">
        {/* Right Side - Visible in Mobile View */}
        <div className="w-full md:w-1/2 py-4 md:p-8 sm:px-3">
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-2">
            <span className="text-[#2334DE]">SEO </span>And{" "}
            <span className="text-[#2334DE]">Marketing:</span>
          </h1>
          <p className="text-[18px] font-[500] text-[gray] mb-4">
             Apparent In Extreme Traffic Boost And Conversions
          </p>
          <p className="text-sm text-justify  text-gray-600 mb-6">
            The act of creating a website in modern time is but step one. If you
            want to achieve real success online, your site must be visible in
            the eyes of potential customers. That is where our mastery over SEO,
            SMO and PPC Ads can be beneficial. We are one of the best Web
            Designing offered in india,we provide digital marketing services
            that boost your websites rank and brings more traffic during a
            search.
          </p>
          <p className="text-sm text-justify  text-gray-600 mb-6">
            When it comes to SEO, our strategies are designed keeping your
            business goals in mind so that you can show up on the top when a
            user types keywords related to your advertisements using search
            engine. We have the experience to help you reach top rankings at
            both local, national and global level. We are the top 5 Web
            Designing Companies that provides a measurable ROI — an approach has
            landed us Methodist Hospital, Radco Truck Accessories and BIG
            Thinking on their ongoing web strategy.
          </p>

          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 mb-6">
            <div className="flex-1 flex gap-3 items-center text-left p-4 rounded-md">
              <div className="h-[60px] w-[60px] bg-[#f0effc] flex justify-center items-center">
                <MdImportantDevices className="text-[30px] text-[#2334DE]" />
              </div>
              <p className="font-semibold lg:text-[16px] md:text-[16px]">
                Business
                <br /> Growth
              </p>
            </div>
            <div className="flex-1 flex gap-3 items-center text-left p-6 rounded-md">
              <div className="h-[60px] w-[60px] bg-[#f0effc] flex justify-center items-center">
                <AiOutlineSolution className="text-[30px] text-[#2334DE]" />
              </div>
              <p className="font-semibold lg:text-[16px] md:text-[16px]">
                Technology <br />
                Consultancy
              </p>
            </div>
          </div>
        </div>

        {/* Left Side - Hidden in Mobile View */}
        <div className="flex w-full md:w-1/2 justify-start items-center relative px-2 bg-contact1">
          <img
            src={img12}
            alt="Left Side"
            className="w-[90%] object-cover h-auto"
          />
        </div>
      </div>

      {/* PPC ads */}
      <div className="bg-contact">
      <div className="flex flex-col-reverse md:flex-row md:space-x-4 mt-8 w-[100%] mx-auto md:w-[90%] lg:w-[90%]">
        {/* Left Side */}
        <div className="flex w-full md:w-1/2 justify-center items-start relative px-2">
          <img
            src={img11}
            alt="Left Side"
            className="md:w-[90%] md:h-[80%] sm:w-full object-cover"
          />
        </div>
        {/* Right Side - Visible in Mobile View */}
        <div className="w-full md:w-1/2  sm:px-3 md:px-[30px] lg:px-[60px]">
          <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-2">
            <span className="text-[#2334DE]">PPC </span>Ads :
          </h1>
          <p className="text-[18px] font-[500] text-[gray] mb-4">
             How to get the most out of your marketing money
          </p>
          <p className="text-sm text-justify  text-gray-600 mb-6">
            One of the quickest traffic generating methods happens to be through
            pay-per-click (PPC) advertising. Providing professionally managed
            PPC campaigns, Maxify Solutions takes pride in securing the highest
            ROI for you. Our team of PPC experts utilizes sophisticated
            targeting methods to guarantee your advertisements are shown on the
            right platform at the right time, driving conversions while
            maximizing marketing budget
          </p>

          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 mb-6">
            <div className="flex-1 flex gap-3 items-start text-left p-4 rounded-md">
              <div className="bg-[#eaf2f6] h-10 w-10 rounded-full p-2 flex justify-center items-center">
                <LuFocus className="text-[30px] text-[#2334DE]" />
              </div>
              <div>
                <h3 className="text-2xl font-[700] text-black">99%</h3>
                <p className="text-sm font-[300] text-justify">SMS Marketing</p>
              </div>
            </div>
            <div className="flex-1 flex gap-3 items-start text-left p-4 rounded-md">
              <div  className="bg-[#eaf2f6] h-10 w-10 rounded-full p-2 flex justify-center items-center">
                <BsGraphUpArrow className="text-[30px] text-[#2334DE]" />
              </div>
              <div>
                <h3 className="text-2xl font-[700] text-black">65%</h3>
                <p className="text-sm font-[300] text-justify">
                  Cover Marketing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/*  */}
      <section className="bg-gradient-to-r from-[#edd6fb] to-[#adadff] p-8 mt-4">
        <div className="w-[100%] mx-auto md:w-[90%] lg:w-[90%]">
          {/* First Section: Left Content, Right Image */}
          <div className="flex flex-col lg:flex-row justify-between items-center">
            {/* Left Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <p className="text-[#2334DE] font-bold text-xl">
                CHECK THIS LINK:
              </p>
              <h1 className="text-5xl font-bold text-blue-800 mt-2">SMO :</h1>
              <p className="text-[#504E4E] text-base mt-4 leading-7">
                <span className="text-xl">
                  {" "}
                  Strong presence in social media into process.
                </span>{" "}
                <br />
                Besides, We Are Expert In SEO | SMO Social Media Optimization
                Apart From SEO And PPC. With Social Media Use On The Rise, There
                Is No Better Time To Utilize It Than Today For Connecting With
                Your Audience And Spreading Word Of Mouth About Woodpecker.
              </p>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0">
              <div className="relative inline-block rounded-full p-[4px] bg-gradient-to-r from-[#b300ff] to-[#2334DE]">
                <img
                  src={img14} // replace with actual image
                  alt="SMO Icon"
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
                src={img15} // replace with actual image
                alt="Social Media Icons"
                className="h-[70%] w-auto rounded-full border-r-[4px] border-[#2334DE]"
              />
            </div>

            {/* Right Content */}
            <div className="lg:w-1/2 text-center lg:text-left mt-6 lg:mt-0">
              <p className="text-[#504E4E] text-base mt-4 leading-7">
                Our SMO Services Make Sure That You Have Right Social Media
                Marketing Plan In Place And Helps To Create A Strong Network Of
                Connections So Similar Brands Know About Your Offerings. We Know
                How To Take Advantage Of The Opportunity Social Media Presents
                As Connecting You With Your Potential Audience, Earning Trust,
                And Increased Organic Traffic Towards Website.
              </p>

              <div className="flex justify-center lg:justify-start mt-4">
                <ul className="text-base leading-7 text-black">
                  <li className="flex items-center">
                    <FiCheckCircle className="text-[#2334DE] mr-2" /> Various
                    analysis options.
                  </li>
                  <li className="flex items-center">
                    <FiCheckCircle className="text-[#2334DE] mr-2" /> Page Load
                    (time, size, number of requests).
                  </li>
                </ul>
              </div>

              <div className="text-center lg:text-left mt-8">
                <button className="bg-gradient-to-l from-[#077EEC] to-[#BD21FC] text-white py-2 px-6 rounded-full hover:bg-[#2334DE] transition duration-300">
                  MORE ABOUT US
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col md:flex-row md:space-x-4 mt-8 w-[100%] mx-auto md:w-[90%] lg:w-[90%]">
        {" "}
        {/* Left Side - Hidden in Mobile View */}
        <div className="flex w-full md:w-1/2 sm:h-[350px] md:h-auto justify-center relative px-2">
          <img
            src={img3}
            alt="Left Side"
            className="md:w-[80%] sm:w-full"
          />
        </div>
        {/* Right Side - Visible in Mobile View */}
        <div className="w-full md:w-1/2 flex flex-col justify-around p-4 md:p-4 sm:px-3">
          <h1 className="text-3xl md:text-5xl font-bold mt-4 mb-2">
            A <span className="text-[#2334DE]"> Track Record </span>of Success
          </h1>
          <p className="sm:text-[1rem] md:text-[18px] text-justify  text-gray-600 mb-6 border p-4 leading-8">
            Maxify Solutions has delivered numerous successful projects in the
            field of digital marketing and web development over time. Our client
            work speaks for itself in our portfolio and the impact it has made
            on businesses. We have successfully delivered web projects in India
            and aboard all our clients are ranging from start-ups to large
            enterprises feel us one of best Web designers Companies In the
            world.{" "}
          </p>
          <div>
          <button className="bg-gradient-to-l from-[#077EEC] to-[#BD21FC] text-white py-3 px-4 rounded-full hover:bg-[#2334DE] transition duration-300">
            MORE ABOUT US
          </button>
          </div>
        </div>
      </div>

      <div className="bg-[#f0effc] p-3">
        <div className="flex flex-col-reverse md:flex-row md:space-x-4 mt-8 w-[100%] mx-auto md:w-[90%] lg:w-[90%]">
          {/* Right Side - Visible in Mobile View */}
          <div className="w-full md:w-1/2 p-4 md:p-4 sm:px-3 flex flex-col justify-around">
            <h1 className="text-3xl md:text-5xl font-bold mt-4 mb-2">
              A <span className="text-[#2334DE]"> Client-Centric </span>Approach
            </h1>
            <p className="sm:text-[1rem] md:text-[18px] text-justify  text-gray-600 mb-6 border p-4 leading-8 bg-white">
              Here at Maxify Solutions we pride ourselves on a human-centric
              approach. That is why we learn your business, goals and even
              struggles so that our solutions fit you the best. with an approach
              that keeps the client at its heart and thats why today we are a
              known name in search of reliable web partners for business to step
              into digital world.{" "}
            </p>
            <div>
            <button className="bg-gradient-to-l from-[#077EEC] to-[#BD21FC] text-white py-3 px-4 rounded-full hover:bg-[#2334DE] transition duration-300">
              MORE ABOUT US
            </button>
          </div>
          </div>
          {/* Left Side - Hidden in Mobile View */}
          <div className="flex w-full md:w-1/2 sm:h-[300px] md:h-auto justify-center relative px-2">
          <img
            src={img5}
            alt="Left Side"
            className="md:w-[80%] sm:w-full"
          />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-4 mt-8 w-[100%] mx-auto md:w-[90%] lg:w-[90%]">
        {" "}
        {/* Left Side - Hidden in Mobile View */}
        <div className="flex w-full md:w-1/2 sm:h-[300px] md:h-auto justify-center relative px-2">
        <img
            src={img6}
            alt="Left Side"
            className="md:w-[80%] sm:w-full"
          />
        </div>
        {/* Right Side - Visible in Mobile View */}
        <div className="w-full md:w-1/2 p-4 md:p-4 sm:px-3 flex flex-col justify-around">
          <h1 className="text-3xl md:text-5xl font-bold mt-4 mb-2">
            <span className="text-[#2334DE]"> Innovation </span>and Excellence
          </h1>
          <p className="sm:text-[1rem] md:text-[18px] text-justify  text-gray-600 mb-6 border p-4 leading-8">
            We operate driven by innovation and excellence. Who Says What We Do
            — Being an elite Web Design Company in India, we love to talk about
            our work; whether it's showing off the unique features of a site or
            showcasing what sets us apart online. By being the first to market
            with solutions, our clients are guaranteed that they receive best in
            class offerings.{" "}
          </p>
          <div>
          <button className="bg-gradient-to-l from-[#077EEC] to-[#BD21FC] text-white py-3 px-4 rounded-full hover:bg-[#2334DE] transition duration-300">
            MORE ABOUT US
          </button>
          </div>
        </div>
      </div>

      {/* b */}
      <div className="flex flex-col md:flex-row md:space-x-4 mt-8 w-[100%] mx-auto md:w-[90%]">
        {/* Left Side - Hidden in Mobile View */}
        <div className="flex w-full md:w-1/2 justify-end relative px-2">
          <img
            src={img9}
            alt="Left Side"
            className=" mx-auto object-cover h-auto"
          />
          <img
            src={img10}
            alt="Left Side"
            className=" mx-auto object-cover h-auto absolute"
          />
        </div>

        {/* Right Side - Visible in Mobile View */}
        <div className="w-full md:w-1/2 p-4 md:p-8 sm:px-3 md:px-[50px]">
          <p className="text-2xl font-[500] bg-gradient-to-l from-[#077EEC] to-[#BD21FC] bg-clip-text text-transparent">
            Our Values:
          </p>

          <h1 className="text-3xl md:text-5xl font-bold mb-4 mt-4">
            <span className="text-[#2334DE]">Integrity, Innovation </span>and
            Impact
          </h1>
          <p className="text-sm text-justify  text-gray-600 mb-6">
            Value Value The values of Maxify Solutions dictate our actions and
            decision making. Integrity: We conduct ourselves with integrity,
            always acting in the best interest of our clients. We are big
            believers in innovation as a force for change and value creation. We
            committed to contributing in a positive way to our clients, helping
            them reach their goals and create Brand growth for all of us.
          </p>
          <p className="text-sm text-justify  text-gray-600 mb-6">
            No matter if you want to start a new website, enhance your SEO
            ranking or seek a full digital marketing blueprint – Maxify
            Solutions can work. Being one of the top Web Designing Companies in
            India, we connect our clients' success and their goals with other
            things like their customer's satisfaction.
          </p>
          <p className="text-sm text-justify  text-gray-600 mb-6">
            Be a part of the ever growing satisfied client list that has opted
            Maxify Solutions as their digital partner. With our specialist web
            design and digital marketing services we can help elevate your
            business to the next level. Learn more about how we can help you
            online today!{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
