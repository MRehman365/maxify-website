import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoPlayOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { BiSolidCalendarStar } from "react-icons/bi";
import { GiHiveMind } from "react-icons/gi";
import { FaPlay } from "react-icons/fa";
import { BsPersonHearts } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { GoArrowRight } from "react-icons/go";
import { FaCheckCircle } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // You may need this for the autoplay feature
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import PricingCard from "../Components/PricingCard";
import SEOComponent from "../Components/SEOComponent";

const plans = [
  {
    title: "Experienced Team",
    description:
      "Our team of SMO experts has years of experience in the industry, working with a diverse range of clients across various sectors. We stay up to date on the newest social media trends and analytics to keep your brand ahead of the competition.",
  },
  {
    title: "Customized Solutions",
    description:
      "We understand that every business is unique. That’s why we offer customized SMO solutions that cater to your specific needs and objectives. Whether you’re a small business or a large enterprise, we have the expertise to help you succeed.",
  },
  {
    title: "Proven Track Record",
    description:
      "Our proven track record speaks for itself. We have supported numerous companies in India and beyond in achieving their social media goals, resulting in increased traffic, higher engagement, and improved ROI.",
  },
  {
    title: "Testing and Quality Assurance",
    description:
      "We offer affordable SMO packages that deliver value for money. Our transparent pricing ensures you know exactly what you’re paying for, with no hidden costs or surprises.",
  },
];
const SEO = () => {
  const [hoveredStep, setHoveredStep] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mt-[70px]">
      <div>
        <SEOComponent
          title="Best SEO Company in Noida - Achieve Fast Rankings on SERPs"
          description="Boost your website’s visibility with the best SEO company in Noida. We deliver fast and effective rankings on SERPs with advanced SEO strategies. Get more traffic and leads today!"
          keywords="Home, Digital Marketing, Noida, Delhi NCR, Maxify Web Solutions"
        />
      </div>
      <div className="flex flex-col-reverse bg-contact lg:flex-row items-center justify-between p-2 bg-[#e7eaf3]">
        <div className="lg:w-1/2 p-4">
          <div className=" flex items-center flex-col sm:w-full md:w-[500px] mx-auto">
            <h2 className="lg:text-4xl md:text-3xl sm:text-2xl mt-9 font-bold text-[#2334DE] font-inter">
              Best SEO Services
            </h2>
            <h1 className="text-6xl md:text-5xl sm:text-4xl mt-2  font-bold text-black font-inter">
              Company in Noida
            </h1>
            <p className="text-sm md:text-base mt-4 text-justify text-[gray] leading-6 font-inter">
              In today's digital landscape, having a strong online presence is
              essential for any business looking to succeed. At Maxify
              solutions, we pride ourselves on being the best SEO services
              company in Noida, offering tailored solutions that drive traffic,
              boost rankings, and ultimately, increase your revenue. Whether
              you're a startup or an established business, our SEO strategies
              are designed to meet your specific needs.
            </p>
            <div className="flex gap-5 md:mt-[60px] font-inter">
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
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex items-center justify-center relative sm:h-[400px] md:h-[600px] right-seo">
          <div className="h-[100%] w-[70%] overflow-hidden flex justify-center items-center rounded-lg right-seo relative  z-10">
            <img
              src="https://i.ibb.co/Pv7CMYHT/20.webp"
              alt="seo expert in noida, delhi ncr"
              className="h-[80%] w-auto object-cover rounded-lg relative sm:bottom-4 md:bottom-8"
            />
          </div>
          <div className=" p-6 roundeded-lg shadow-md bottom-0 md:w-1/2 left-3 absolute bg-white z-30">
            <div className="flex items-center mb-4">
              <img
                className="sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border-2 border-white"
                src="https://i.ibb.co/hRMJpc0K/person6.jpg"
                alt="seo campany"
              />
              <img
                className="sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border-2 border-white -ml-4"
                src="https://i.ibb.co/XxjsRJVN/person2.jpg"
                alt="seo professionals in noida"
              />
              <img
                className="sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border-2 border-white -ml-4"
                src="https://i.ibb.co/twqYRfqp/images.jpg"
                alt="seo services"
              />
              <img
                className="sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border-2 border-white -ml-4"
                src="https://i.ibb.co/7JBMx6yW/Screenshot-2024-09-09-101724.png"
                alt="seo optimization"
              />
              <img
                className="sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border-2 border-white -ml-4"
                src="https://i.ibb.co/20Lcr80D/image.jpg"
                alt="google my business seo"
              />
              <div className="bg-[#2334DE] text-white text-[10px]  sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full -ml-4">
                12k+
              </div>
            </div>
            <p className="sm:text-[10px] md:text-base md:leading-6 text-gray-600">
              1200+ Clients yours succeed and grow with the use of technology.
            </p>
          </div>
          <div className="bg-white text-[#2334DE] flex gap-5 sm:text-[35px] md:text-[50px] sm:px-3 md:px-6 py-2 rounded-sm absolute sm:top-0 md:top-10 md:right-10 right-0 z-30">
            <GiHiveMind />
            <BiSolidCalendarStar />
            <FaLinkedin />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center p-3 bg-background rounded-lg mx-auto sm:w-full md:w-[94%] lg:w-[80%]">
        {/* Left side content */}
        <div className="md:w-1/2 md:px-8">
          <span className="text-sm bg-[#e5eeff] text-blue-500 rounded-lg px-3 py-1">
            Why
          </span>
          <h3 className="text-3xl md:text-5xl font-bold text-[black] mt-4 font-sand">
            SEO is Essential for Your{" "}
            <span className="text-[#2334DE]">Business</span>
          </h3>
          <p className="mt-4 text-sm text-gray-500 text-justify font-roboto">
            In an era where most consumers start their buying journey with an
            online search, Search Engine Optimization (SEO) is crucial. SEO
            helps your website to rank high in search engines like Google,
            making it easier for potential customers to find you.
          </p>
          <p className="mt-2 text-sm text-gray-500 text-justify font-roboto">
            Whereas SEO is about more than just rankings; it's about offering an
            ongoing user experience, developing trust with your audience, and
            generating genuine conversions.
          </p>
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
        <div className="md:w-1/2 mt-6 md:mt-0 relative">
          <div className=" relative">
            <img
              className="w-[500px] h-[500px]"
              src="https://i.ibb.co/svnXD03x/image-31.webp"
            />
            <div
              className="absolute bottom-3 text-[60px] bg-[#f9f9f9] py-6 px-[60px] text-[#2334DE]"
              style={{ borderRadius: "0px 20px 0px 0px" }}
            >
              <BsPersonHearts />
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform sm:-translate-x-1/2 md:-translate-x-[100%] -translate-y-1/2">
            <button className="bg-[#2334DE] text-white rounded-full p-5">
              <FaPlay className="text-2xl" />
            </button>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="right-banner sm:h-auto bg-seo pt-3">
        <div className="w-full md:w-[90%] lg:w-[80%] mx-auto flex sm:flex-col md:flex-row">
          <div className="md:w-1/2 flex flex-col justify-center px-2 lg:px-10 text-white">
            <h2 className="text-2xl md:text-4xl font-bold md:font-extrabold mb-5 sm:text-center md:text-left font-Mulish">
              Our Comprehensive SEO Services
            </h2>
            <p className="mb-6 text-sm text-justify font-[300] leading-6">
              At Maxify Solutions, we offer a full range of SEO services to
              ensure your website achieves the visibility it deserves. As the
              best SEO services company in Noida, we specialize in both on-page
              and off-page SEO, delivering results that go beyond just higher
              rankings.
            </p>
            <div>
              <a href="https://wa.me/917428309119">
                <button
                  className="mt-8 py-2 text-sm md:text-[14px] font-[300] sm:px-2 md:px-6 rounded-full relative text-[white] bg-[#f24080] isolation-auto z-10 border-2 border-[#f24080]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[white] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-[#f24080]"
                >
                  Join Us Now
                </button>
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 flex items-center justify-center relative sm:h-[400px] md:h-[470px]">
            <div className=" mb flex justify-center items-center rounded-lg relative  z-10">
              <img
                src="https://i.ibb.co/k6mrpcCf/25.webp"
                alt="affordable seo for small business"
                className="sm:h-[300px] lg:h-[480px] w-auto object-cover rounded-lg relative sm:bottom-4 md:bottom-0"
              />
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <section className="w-full mx-auto">
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation={{
            // Enable navigation
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="h-full"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="flex flex-col md:flex-row p-2 md:p-12 sm-w-full md:w-[90%] lg-[80%] mx-auto  font-space">
              {/* Left side - Text content */}
              <div className="md:w-1/2 space-y-4 flex flex-col justify-between md:min-h-[300px] px-4">
                <div>
                  <span className="inline-block bg-blue-100 text-[#2334DE] font-semibold py-1 px-3 rounded-lg mb-4">
                    About Us
                  </span>
                  <h3 className=" sm:text-3xl md:text-5xl font-bold text-gray-900 mt-4">
                    On-Page SEO <br />
                    <span className="text-[#2334DE] mt-2">Optimization</span>
                  </h3>
                  <p className="mb-4 text-gray-600 text-sm text-justify">
                    On-page SEO is about optimizing the elements on your website
                    to improve its visibility and usability. This includes
                    everything from content to HTML source code. As the leading
                    SEO services company in Noida, we ensure your website is
                    optimized to deliver the best possible user experience.
                  </p>
                  <ul className="list-disc list-inside mb-4 text-gray-600 text-sm text-justify">
                    <li>
                      Content Optimization: Crafting high-quality, relevant, and
                      engaging content that resonates with your audience.
                    </li>
                    <li>
                      Meta Tags and Descriptions: Writing compelling meta titles
                      and descriptions that attract clicks from search engine
                      users.
                    </li>
                    <li>
                      Image Optimization: Ensuring images are optimized for
                      faster loading times without compromising quality.
                    </li>
                    <li>
                      Internal Linking: Structuring your website’s internal
                      links to enhance navigation and SEO performance.
                    </li>
                  </ul>
                  <p className="font-semibold text-gray-600 text-sm text-justify">
                    Mobile Optimization:
                  </p>
                  <p className="text-gray-600 text-sm text-justify">
                    Make sure your website is responsive and performs well on
                    all devices.
                  </p>
                </div>
                <a href="https://wa.me/917428309119" target="blank">
                  <button className="mb-[100px] inline-flex items-center bg-transparent text-[#2334DE] border border-[#2334DE] py-2 px-4 rounded-full hover:bg-[#2334DE] hover:text-white transition-all">
                    Read More <span className="ml-2">→</span>
                  </button>
                </a>
              </div>

              {/* Right side - Images */}
              <div className="md:w-1/2 grid items-center grid-cols-2 gap-2 md:mt-0">
                <img
                  src="https://i.ibb.co/Qq97r6x/2.webp"
                  alt="SEO services for website"
                  className="col-span-1 row-span-2 h-full object-cover"
                />
                <img
                  src="https://i.ibb.co/3mB2NXkd/7.webp"
                  alt="seo ranking for website"
                  className="col-span-1 h-full object-cover"
                />
                <img
                  src="https://i.ibb.co/9mpbdrh8/15.webp"
                  alt="search engine optimization for higher ranking"
                  className="col-span-1 h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>

          {/* Add more slides here */}
          <SwiperSlide>
            <div className="flex flex-col md:flex-row p-2 md:p-12 sm-w-full md:w-[90%] lg-[80%] mx-auto  font-space">
              {/* Left side - Text content */}
              <div className="md:w-1/2 space-y-4 flex flex-col justify-between md:min-h-[300px] px-4">
                <div>
                  <span className="inline-block bg-blue-100 text-[#2334DE] font-semibold py-1 px-3 rounded-lg mb-4">
                    About Us
                  </span>
                  <h3 className=" sm:text-3xl md:text-5xl font-bold text-gray-900 mt-4">
                    Technical <span className="text-[#2334DE] mt-2">Seo</span>
                  </h3>
                  <p className="mb-4 text-gray-600 text-sm text-justify">
                    Technical SEO involves optimizing the backend of your
                    website. This is crucial for ensuring that search engines
                    can crawl and index your site effectively. We, as the top
                    SEO & SMO services company in Noida, focus on technical
                    aspects to enhance your website’s performance and rankings.
                  </p>
                  <ul className="list-disc list-inside mb-4 text-gray-600 text-sm text-justify">
                    <li>
                      Website Speed Optimization: Improving your website’s load
                      times to enhance user experience and SEO rankings.
                    </li>
                    <li>
                      XML Sitemap Creation: Developing a clear and comprehensive
                      sitemap to help search engines navigate your site.
                    </li>
                    <li>
                      Robots.txt File Optimization: Configuring the robots.txt
                      file to control which pages are indexed by search engines.
                    </li>
                    <li>
                      Structured Data Markup: Implementing schema markup to help
                      search engines understand your content better.
                    </li>
                  </ul>
                </div>
                <a href="https://wa.me/917428309119" target="blank">
                  <button className="mb-[100px] inline-flex items-center bg-transparent text-[#2334DE] border border-[#2334DE] py-2 px-4 rounded-full hover:bg-[#2334DE] hover:text-white transition-all">
                    Read More <span className="ml-2">→</span>
                  </button>
                </a>
              </div>

              {/* Right side - Images */}
              <div className="md:w-1/2 grid items-center grid-cols-2 gap-2 md:mt-0">
                <img
                  src="https://i.ibb.co/bjbFZXfN/3.webp"
                  alt="seo company in noida"
                  className="col-span-1 row-span-2 h-full object-cover"
                />
                <img
                  src="https://i.ibb.co/20XdNKqR/8.webp"
                  alt="seo agency in delhi ncr"
                  className="col-span-1 h-full object-cover"
                />
                <img
                  src="https://i.ibb.co/8D1zpg9Q/14.webp"
                  alt="fast ranking seo"
                  className="col-span-1 h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col md:flex-row p-2 md:p-12 sm-w-full md:w-[90%] lg-[80%] mx-auto  font-space">
              {/* Left side - Text content */}
              <div className="md:w-1/2 space-y-4 flex flex-col justify-between md:min-h-[300px] px-4">
                <div>
                  <span className="inline-block bg-blue-100 text-[#2334DE] font-semibold py-1 px-3 rounded-lg mb-4">
                    About Us
                  </span>
                  <h3 className=" sm:text-3xl md:text-5xl font-bold text-gray-900 mt-4">
                    Off-Page SEO &{" "}
                    <span className="text-[#2334DE] mt-2">Link Building</span>
                  </h3>
                  <p className="mb-4 text-gray-600 text-sm text-justify">
                    Off-page SEO refers to actions taken outside your website to
                    impact your rankings within search engine results pages
                    (SERPs). Link building is a critical component of off-page
                    SEO. As a reputable SEO services company in India, we focus
                    on acquiring high-quality backlinks to enhance your
                    website’s authority.
                  </p>
                  <ul className="list-disc list-inside mb-4 text-gray-600 text-sm text-justify">
                    <li>
                      Quality Backlink Acquisition: Building a robust backlink
                      profile by acquiring links from reputable and relevant
                      websites.
                    </li>
                    <li>
                      Guest Posting: Creating and publishing valuable content on
                      authoritative sites to build links and drive traffic.
                    </li>
                    <li>
                      Social Media Engagement: Leveraging social media platforms
                      to enhance brand awareness and generate backlinks.
                    </li>
                    <li>
                      Local SEO: Optimizing your online presence for local
                      searches to attract nearby customers.
                    </li>
                  </ul>
                </div>
                <a href="https://wa.me/917428309119" target="blank">
                  <button className="mb-[100px] inline-flex items-center bg-transparent text-[#2334DE] border border-[#2334DE] py-2 px-4 rounded-full hover:bg-[#2334DE] hover:text-white transition-all">
                    Read More <span className="ml-2">→</span>
                  </button>
                </a>
              </div>

              {/* Right side - Images */}
              <div className="md:w-1/2 grid items-center grid-cols-2 gap-2 md:mt-0">
                <img
                  src="https://i.ibb.co/HMwkmZC/5.webp"
                  alt="quality back links for seo ranking"
                  className="col-span-1 row-span-2 h-full object-cover"
                />
                <img
                  src="https://i.ibb.co/4RrCHS3D/9.webp"
                  alt="seo analysis for website"
                  className="col-span-1 h-full object-cover"
                />
                <img
                  src="https://i.ibb.co/9mpbdrh8/15.webp"
                  alt="hi da pa backlinks creation"
                  className="col-span-1 h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
          {/* <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-[#2334DE] p-2 rounded-full">
      &gt;
    </div>
    <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-[#2334DE] p-2 rounded-full">
      &lt;
    </div> */}
        </Swiper>
      </section>

      {/* section 6 */}
      <div className="bg-[#e7effe]">
        <div className="flex flex-col md:flex-row items-center sm:p-3 md:p-8  md:w-[94%] lg:w-[80%] mx-auto">
          <div className="w-full md:w-1/2">
            <span className=" bg-[#ddddfd] px-3 py-1 text-sm font-bold text-[#2334DE] rounded mb-4">
              Why CHOOSE US
            </span>
            <h3 className="sm:text-3xl md:text-5xl mt-8  font-bold  font-space">
              For SEO <br /> Services{" "}
              <span className="text-[#2334DE]">in India?</span>
            </h3>
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
            <a href="https://wa.me/917428309119" target="blank">
              <button
                className="mt-8 rounded-full flex items-center relative px-8 py-2 text-[#2334DE] bg-white isolation-auto z-10 border-2 border-[#2334DE]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[#2334DE] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-white"
              >
                Learn More{" "}
                <span className="ml-2">
                  <GoArrowRight />
                </span>
              </button>
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
            <img
              alt="social media optimization"
              className="md:w-[500px] sm:w-[300px] h-auto"
              src="https://i.ibb.co/PZJW8LZt/26.webp"
            />
          </div>
        </div>
      </div>

      {/* price section  */}
      <div>
        <section className="bg-white">
          <div className="py-8 px-20 mx-auto lg:py-16 md:px-20 sm:px-2">
            <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
              <div>
                <span className="mb-4 px-6 py-1 rounded-md text-4xl tracking-tight bg-[#dde7fa] font-semibold text-[#2334DE]">
                  SEO Packages
                </span>
              </div>
            </div>
            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
              {/* Starter Plan */}
              <PricingCard
                title="Basic"
                price="RS-19999 / $249"
                index={1}
                color="bg-[#2334DE]"
                features={[
                  "Setting Goals",
                  "Account Management – 2 (FB & IG)",
                  "Hashtag Research",
                  "Content Strategy Creation",
                  "Facebook Management",
                ]}
                features2={[
                  "Page Creation",
                  "Facebook Cover",
                  "Profile Pic Creation",
                  "Page Optimization",
                  "Posting Per Week – 3",
                  "Page Monitoring",
                  "Call To Action Button Creation",
                  "Instagram Management",
                  "Engagement Strategy",
                  "IGTV Upload (Video provided by Client)",
                ]}
              />
              {/* Company Plan */}
              <PricingCard
                title="Advanced"
                price="RS-29999  / $379"
                index={2}
                color="bg-black"
                features={[
                  "Setting Goals",
                  "Account Management – 3",
                  "Hashtag Research",
                  "Content Strategy Creation",
                  "Facebook Management",
                ]}
                features2={[
                  "Page Creation",
                  "Facebook Cover",
                  "Profile Pic Creation",
                  "Page Optimization",
                  "Posting Per Week – 6",
                  "Page Monitoring",
                  "Call To Action Button Creation",
                  "Instagram Management",
                  "Engagement Strategy",
                  "IGTV Upload (Video provided by Client)",
                  "Creation of Facebook Quiz/polls",
                  "Facebook Story Creation",
                  "Video Posting (Provide By Client)",
                  "Page Monitring",
                ]}
              />
              {/* Enterprise Plan */}
              <PricingCard
                title="Enterpriser"
                price="RS-39999 / $499"
                index={3}
                color="bg-[#2334DE]"
                features={[
                  "Setting Goals",
                  "Account Management – 6",
                  "Hashtag Research",
                  "Content Strategy Creation",
                  "Facebook Management",
                ]}
                features2={[
                  "Page Creation",
                  "Facebook Cover",
                  "Profile Pic Creation",
                  "Page Optimization",
                  "Posting Per Week – 10",
                  "Page Monitoring",
                  "Call To Action Button Creation",
                  "Instagram Management",
                  "Engagement Strategy",
                  "IGTV Upload (Video provided by Client)",
                  "Creation of Facebook Quiz/polls",
                  "Facebook Story Creation",
                  "Video Posting (Provide By Client)",
                  "Page Monitring",
                  "Video Posting (Provide By Client)",
                  "LinkedIn Management",
                  "YouTube Management",
                  "Creation of Showcase page",
                ]}
              />
            </div>
          </div>
        </section>
      </div>
      {/* on page price section  */}
      <div>
        <section className="bg-[#e7effe] ">
          <div className="py-8 px-20 mx-auto lg:py-16 md:px-20 sm:px-2">
            <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
              <div>
                <span className="mb-4 px-6 py-1 rounded-md text-4xl tracking-tight bg-[#dde7fa] font-semibold text-[#2334DE] ">
                  On-Page SEO Packages
                </span>
              </div>
            </div>
            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
              {/* Starter Plan */}
              <PricingCard
                title="Basic"
                price="RS-19999 / $249"
                index={1}
                color="bg-[#2334DE]"
                features={[
                  "Setting Goals",
                  "Account Management – 2 (FB & IG)",
                  "Hashtag Research",
                  "Content Strategy Creation",
                  "Facebook Management",
                ]}
                features2={[
                  "Page Creation",
                  "Facebook Cover",
                  "Profile Pic Creation",
                  "Page Optimization",
                  "Posting Per Week – 3",
                  "Page Monitoring",
                  "Call To Action Button Creation",
                  "Instagram Management",
                  "Engagement Strategy",
                  "IGTV Upload (Video provided by Client)",
                ]}
              />
              {/* Company Plan */}
              <PricingCard
                title="Advanced"
                price="RS-29999  / $379"
                index={2}
                color="bg-black"
                features={[
                  "Setting Goals",
                  "Account Management – 3",
                  "Hashtag Research",
                  "Content Strategy Creation",
                  "Facebook Management",
                ]}
                features2={[
                  "Page Creation",
                  "Facebook Cover",
                  "Profile Pic Creation",
                  "Page Optimization",
                  "Posting Per Week – 6",
                  "Page Monitoring",
                  "Call To Action Button Creation",
                  "Instagram Management",
                  "Engagement Strategy",
                  "IGTV Upload (Video provided by Client)",
                  "Facebook Story Creation",
                  "Video Posting (Provide By Client)",
                ]}
              />
              {/* Enterprise Plan */}
              <PricingCard
                title="Enterpriser"
                price="RS-39999 / $499"
                index={3}
                color="bg-[#2334DE]"
                features={[
                  "Setting Goals",
                  "Account Management – 6",
                  "Hashtag Research",
                  "Content Strategy Creation",
                  "Facebook Management",
                ]}
                features2={[
                  "Page Creation",
                  "Facebook Cover",
                  "Profile Pic Creation",
                  "Page Optimization",
                  "Posting Per Week – 10",
                  "Page Monitoring",
                  "Call To Action Button Creation",
                  "Instagram Management",
                  "Engagement Strategy",
                  "IGTV Upload (Video provided by Client)",
                  "Creation of Facebook Quiz/polls",
                  "Facebook Story Creation",
                  "Video Posting (Provide By Client)",
                  "Page Monitring",
                  "Video Posting (Provide By Client)",
                  "LinkedIn Management",
                  "YouTube Management",
                  "Creation of Showcase page",
                ]}
              />
            </div>
          </div>
        </section>
      </div>
      {/* on page price section  */}
      <div>
        <section className="bg-white ">
          <div className="py-8 px-20 mx-auto lg:py-16 md:px-20 sm:px-2">
            <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
              <div>
                <span className="mb-4 px-6 py-1 rounded-md text-4xl tracking-tight bg-[#dde7fa] font-semibold text-[#2334DE] ">
                  Technical SEO Packages
                </span>
              </div>
            </div>
            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
              {/* Starter Plan */}
              <PricingCard
                title="Basic"
                price="RS-19999 / $249"
                index={1}
                color="bg-[#2334DE]"
                features={[
                  "Setting Goals",
                  "Account Management – 2 (FB & IG)",
                  "Hashtag Research",
                  "Content Strategy Creation",
                  "Facebook Management",
                ]}
                features2={[
                  "Page Creation",
                  "Facebook Cover",
                  "Profile Pic Creation",
                  "Page Optimization",
                  "Posting Per Week – 3",
                  "Page Monitoring",
                  "Call To Action Button Creation",
                  "Instagram Management",
                  "Engagement Strategy",
                  "IGTV Upload (Video provided by Client)",
                ]}
              />
              {/* Company Plan */}
              <PricingCard
                title="Advanced"
                price="RS-29999  / $379"
                index={2}
                color="bg-black"
                features={[
                  "Setting Goals",
                  "Account Management – 3",
                  "Hashtag Research",
                  "Content Strategy Creation",
                  "Facebook Management",
                ]}
                features2={[
                  "Page Creation",
                  "Facebook Cover",
                  "Profile Pic Creation",
                  "Page Optimization",
                  "Posting Per Week – 6",
                  "Page Monitoring",
                  "Call To Action Button Creation",
                  "Instagram Management",
                  "Engagement Strategy",
                  "IGTV Upload (Video provided by Client)",
                  "Facebook Story Creation",
                  "Video Posting (Provide By Client)",
                ]}
              />
              {/* Enterprise Plan */}
              <PricingCard
                title="Enterpriser"
                price="RS-39999 / $499"
                index={3}
                color="bg-[#2334DE]"
                features={[
                  "Setting Goals",
                  "Account Management – 6",
                  "Hashtag Research",
                  "Content Strategy Creation",
                  "Facebook Management",
                ]}
                features2={[
                  "Page Creation",
                  "Facebook Cover",
                  "Profile Pic Creation",
                  "Page Optimization",
                  "Posting Per Week – 10",
                  "Page Monitoring",
                  "Call To Action Button Creation",
                  "Instagram Management",
                  "Engagement Strategy",
                  "IGTV Upload (Video provided by Client)",
                  "Facebook Story Creation",
                  "Video Posting (Provide By Client)",
                  "LinkedIn Management",
                ]}
              />
            </div>
          </div>
        </section>
      </div>
      <div>
        <div className="flex flex-col md:flex-row items-center bg-background p-6 rounded-lg shadow-lg bg-black text-white">
          <div className="md:w-1/2 flex gap-3 sm:p-4 md:p-16 lg:p-20">
            <img
              undefinedhidden="true"
              alt="seo agency noida"
              src="https://i.ibb.co/QFkffr0t/18.webp"
              className="rounded-lg w-1/2"
            />
            <img
              undefinedhidden="true"
              alt="seo company"
              src="https://i.ibb.co/nG4snXX/17.webp"
              className="rounded-lg w-1/2"
            />
          </div>
          <div className="relative md:w-1/2 lg:p-16 sm:mt-6 md:mt-0 font-yan">
            <h2 className="sm:text-2xl md:text-4xl font-bold text-center md:text-left font-yan">
              Get Started with the Best SEO Services Company in Noida
            </h2>
            <p className="text-justify text-sm mt-6 ">
              If you're looking to improve your online visibility and drive more
              traffic to your website, Maxify Web Solution is here to help. As
              the best SEO services company in Noida, we are committed to
              delivering results that exceed your expectations.
            </p>
            <p className="relative mt-4  sm:text-sm md:text-[18px] pl-8">
              <FaCheckCircle className="absolute left-0 top-[30%] transform -translate-y-1/2 text-[#2334DE]" />
              <span className="font-bold ">Contact Us: </span>
              <span>
                {" "}
                to learn more about how we can help you achieve your digital
                marketing goals.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEO;
