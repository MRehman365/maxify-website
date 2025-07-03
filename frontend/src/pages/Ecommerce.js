import React, { useEffect } from "react";

import EcomSlider from "../Components/EcomSlider";
import { Link } from "react-router-dom";
import SEOComponent from "../Components/SEOComponent";

const Ecommerce = () => {
  const caseStudies = [
    {
      title: "Fashion Retailer",
      icone:
        "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513273/svg3_okqwh5.svg",
      description:
        "We helped a leading fashion brand launch an e-commerce store that increased their online sales by 200% within the first six months.",
    },
    {
      title: "Electronics Store",
      icone:
        "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513273/svg1_sfuj8q.svg",
      description:
        "Our team developed a robust e-commerce platform for an electronics retailer, enabling them to handle high-order volumes during peak shopping seasons.",
    },
    {
      title: "Healthcare Products",
      icone:
        "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513272/svg2_txpjyi.svg",
      description:
        "We designed and developed an e-commerce website for a healthcare company, ensuring compliance with industry regulations while providing a user-friendly shopping experience.",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-[60px] w-full">
      <div>
        <SEOComponent
          title="Best Ecommerce Website and App Development Company in Noida"
          description="Maxify Solutions is a leading ecommerce website and app development company in Noida. We create scalable, secure, and user-friendly ecommerce solutions to help businesses thrive online."
          keywords="Home, Digital Marketing, Noida, Delhi NCR, Maxify Web Solutions"
        />
      </div>
      <div
        className={`top md:pt-20 py-3 flex sm:flex-col-reverse md:flex-col w-[100%] bg-cover `}
      >
        <div className="w-[80%] mx-auto">
          <div className="heading sm:mt-2 md:mt-0">
            <h2 className="text-2xl md:text-4xl font-bold uppercase sm:text-center md:text-left">
              <span>Transform </span>{" "}
              <span className="text-[#2334DE]">Your Business </span>{" "}
              <span>with Cutting-Edge</span>{" "}
              <span className="text-[#2334DE]"> E-commerce Solutions</span>
            </h2>
          </div>
          <div className="mt-2 md:flex gap-2">
            <p className="text-sm text-justify md:px-6">
              At Maxify Solutions, we specialize in creating powerful and
              user-friendly e-commerce websites that not only attract customers
              but also convert visits into sales. As a leading Ecommerce Website
              Designing Company with a strong presence, we are committed to
              delivering exceptional e-commerce solutions that meet the unique
              needs of your business. Whether you are a startup looking to make
              your mark or an established business aiming to enhance your online
              presence, our team of experts is here to help you succeed.
            </p>
            <div className="w-[40%] mt-3 sm:hidden md:block">
              <Link to="/services">
                <button className="p-2 w-[100%] rounded-full border-[#C21EFC] border-[1px]">
                  our services
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className=" md:w-[90%] lg:h-auto sm:h-[300px] mx-auto md:mt-10">
          <img
            className="md:w-[100%] lg:h-auto sm:h-[300px]"
            src="images/img2.png"
            alt="maxify websolution"
          />
        </div>
      </div>

      {/* second section */}
      <section>
        <div className="bg-white w-full md:w-[90%] lg:w-[80%] mx-auto">
          <div className="flex flex-col md:flex-row items-center  lg:p-8 md:p-16 sm:p-2 lg:w-[90%] sm:w-[90%] mx-auto">
            {/* Left Section */}
            <div className="sm:h-[80%] sm:w-auto md:w-[50%] relative flex sm:ml-0 md:mb-0 sm:justify-center md:justify-center">
              <div className="relative">
                <img
                  src="https://i.ibb.co/9mkdL6M5/img3.png"
                  alt="Main"
                  className="rounded-lg w-full h-[25rem] mb-4"
                />
                <img
                  src="https://i.ibb.co/TMZDs0rs/img4.png"
                  alt="Secondary"
                  className=" shadow-md w-52 h-auto absolute bottom-0 right-0 transform translate-x-4 translate-y-4"
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="md:w-[50%] sm:w-full pl-0 sm:mt-12 md:mt-0">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-2 sm:text-center md:text-left">
                <span>
                  Why Choose Maxify <br /> Solutions for{" "}
                </span>
                <span className="text-[#1351D8] text-center">
                  E-commerce Website Development?
                </span>
              </h2>
              <div className="bg-white rounded-lg">
                <h3 className="text-lg md:text-2xl font-semibold  mb-2 text-gray-600 sm:text-center md:text-left">
                  Expertise You Can Trust
                </h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base text-justify ">
                  Maxify Solutions has established itself as a trusted name in
                  the industry. Our expertise in E-commerce Web Development
                  allows us to create websites that are not only visually
                  appealing but also functionally robust, ensuring a seamless
                  shopping experience for your customers. As an Ecommerce
                  Website Designing Company in Delhi, we understand the local
                  market dynamics and are well-equipped to help businesses
                  succeed in this competitive landscape.
                </p>
              </div>

              <div className="mt-8 flex md:flex-row sm:flex-col gap-3 items-center space-x-4">
                <a href="https://wa.me/917428309119" target="blank">
                  <button className="gradient-background px-6 text-white font-normal text-sm px-0 rounded-full py-3  hover:bg-[#2334DE] transition duration-300">
                    EXPLORE MORE
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white w-full md:w-[90%] lg:w-[80%] mx-auto">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center  lg:p-8 md:p-16 sm:p-2 lg:w-[90%] sm:w-[90%] mx-auto">
            {/* Left Section */}
            <div className="md:w-[50%] sm:w-full pl-0 sm:mt-12 md:mt-0">
              {/* <h2 className="text-3xl md:text-4xl sm:text-xl font-bold text-gray-900 mb-6 sm:mb-2">
                <span>
                  Why Choose Maxify <br /> Solutions for{" "}
                </span>
                <span className="text-[#1351D8]">
                  E-commerce Website Development?
                </span>
              </h2> */}
              <div className="bg-white rounded-lg">
                <h3 className="text-2xl font-semibold  mb-2 text-gray-600 sm:text-center md:text-left">
                  Custom Solutions Tailored to Your Needs
                </h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base sm:text-justify ">
                  Every business is unique, and so are its e-commerce needs. At
                  Maxify Solutions, we take a personalized approach to Ecommerce
                  Website Design Service in India. Our team works closely with
                  you to understand your business goals, target audience, and
                  specific requirements. This allows us to create a customized
                  e-commerce platform that aligns perfectly with your brand and
                  delivers a superior user experience.
                </p>
              </div>

              <div className="mt-8 flex md:flex-row sm:flex-col gap-3 items-center space-x-4">
                <a href="https://wa.me/917428309119" target="blank">
                  <button className="gradient-background text-white font-normal text-sm px-6 rounded-full py-3  hover:bg-[#2334DE] transition duration-300">
                    EXPLORE MORE
                  </button>
                </a>
              </div>
            </div>

            {/* Right Section */}
            <div className="md:w-[50%] relative flex sm:ml-0 md:mb-0 justify-end">
              <div className="relative">
                <img
                  src="https://i.ibb.co/xVdBCWc/img5.png"
                  alt="Main"
                  className="rounded-lg shadow-md w-full h-[25rem] mb-4 ml-2"
                />
                <img
                  src="https://i.ibb.co/cjRbRY2/img6.png"
                  alt="Secondary"
                  className=" shadow-md w-52 h-auto absolute bottom-0 right-0 transform translate-x-4 translate-y-4"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white md:mt-10">
          <div className="flex flex-col md:flex-row  lg:p-8 md:px-16 sm:p-2 lg:w-[90%] sm:w-[90%] mx-auto">
            {/* Left Section */}
            <div className="md:w-[50%] relative flex sm:ml-0 md:mb-0 justify-start mt-20">
              <div className="">
                <img
                  src="https://i.ibb.co/6Jn7bVMm/img7.png"
                  alt="Main"
                  className="rounded-lg w-full h-[25rem] mb-4 ml-2"
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="md:w-[50%] sm:w-full pl-0 sm:mt-12 md:mt-0">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-2 text-center">
                <p className="gradient-text">End-to-End </p>
                <p>E-Commerce Development</p>
              </h2>
              <div className="bg-white rounded-lg sm:text-justify text-sm md:text-base">
                <h3 className=" mb-2 text-gray-600">
                  From concept to launch, Maxify Solutions offers end-to-end{" "}
                  <span> </span>
                  <span className="text-gray-900">
                    Ecommerce Website Design Services <span> </span>
                  </span>
                  that cover every aspect of your online store. Our services
                  include:
                </h3>
                <ul className="flex flex-col gap-2 list-disc px-6">
                  <li className="text-gray-500">
                    <span className="text-gray-700 font-bold">
                      Custom E-commerce Website Design{" "}
                    </span>
                    :{" "}
                    <span>
                      Tailored designs that reflect your brand identity and
                      resonate with your target audience.
                    </span>
                  </li>
                  <li className="text-gray-500">
                    <span className="text-gray-700 font-bold">
                      Responsive Web Development{" "}
                    </span>
                    :{" "}
                    <span>
                      Mobile-friendly websites that provide a seamless
                      experience across all devices.
                    </span>
                  </li>
                  <li className="text-gray-500">
                    <span className="text-gray-700 font-bold">
                      Secure Payment Gateway Integration{" "}
                    </span>
                    :{" "}
                    <span>
                      Safe and reliable payment solutions that build trust and
                      encourage repeat business
                    </span>
                  </li>
                  <li className="text-gray-500">
                    <span className="text-gray-700 font-bold">
                      SEO Optimizatio{" "}
                    </span>
                    : <span>E-commerce websites opt</span>
                  </li>
                  <li className="text-gray-500">
                    imized for search engines to drive organic traffic and boost
                    sales.
                  </li>
                  <li className="text-gray-500">
                    <span className="text-gray-700 font-bold">
                      CMS Integration{" "}
                    </span>
                    :{" "}
                    <span>
                      Easy-to-use content management systems that allow you to
                      manage your products, content, and promotions
                      effortlessly.
                    </span>
                  </li>
                  <li className="text-gray-500">
                    <span className="text-gray-700 font-bold">
                      Ongoing Support and Maintenance{" "}
                    </span>
                    :{" "}
                    <span>
                      Continuous support to ensure your website remains
                      up-to-date, secure, and fully functional.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* image section */}
      <div className="imge w-[90%] lg:w-[80%] mx-auto md:border-2 rounded-t-3xl md:shadow-xl">
        <div className="">
          <img
            className="w-full object-cover object-center h-[30rem]"
            src="https://i.ibb.co/yF4Ljftc/img8.png"
            alt="maxify websolution"
          />
        </div>
        <div>
          <div className="heading p-4 md:p-10">
            <div>
              <h3 className="text-3xl md:text-4xl sm:text-center md:text-center">
                <span className="gradient-text font-bold">Our Approach :</span>
                <span className="font-medium">
                  {" "}
                  Driving Results with Proven Strategies.
                </span>
              </h3>
            </div>
            <div className="text-xl md:text-3xl font-[600] md:font-bold text-[#2334DE] mt-4  sm:text-center md:text-left">
              <h2>User-Centric Design</h2>
            </div>
            <div className="mt-5">
              <p className="md:leading-8 leading-6 text-justify text-sm md:text-lg text-gray-500">
                At Maxify Solutions, we believe that the success of an
                e-commerce website lies in its ability to provide a seamless and
                enjoyable shopping experience. Our design philosophy is centered
                around the user, ensuring that every element of your website is
                crafted to enhance usability and drive conversions. As an
                Ecommerce Website Designing Company Delhi, we combine aesthetics
                with functionality to create websites that not only look great
                but also perform exceptionally well.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Solid Development Framework */}
      <div>
        <div className="bg-white">
          <div className="flex flex-col md:flex-row gap-10  lg:p-8 md:p-16 sm:p-2 lg:w-[90%] sm:w-[90%] mx-auto">
            {/* Left Section */}
            <div className="md:w-[50%] relative flex sm:ml-0 md:mb-0 justify-start">
              <div className="relative">
                <img
                  src="https://i.ibb.co/xt5rdKcd/img9.png"
                  alt="Main"
                  className="rounded-lg w-[90%]  mb-4 ml-2"
                />
                <img
                  src="https://i.ibb.co/6R1L8Tr1/img10.png"
                  alt="Secondary"
                  className=" shadow-md h-auto absolute bottom-[-18%] right-[50px] w-40"
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="md:w-[50%] sm:w-full pl-0 sm:mt-12 md:mt-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl sm:text-xl font-bold text-gray-900 mb-6 sm:mb-2  sm:hidden md:block">
                <span>Solid Development Framework</span>
              </h2>
              <div className="bg-white rounded-lg">
                {/* <h3 className="text-xl font-semibold  mb-2 text-gray-600">
                  Expertise You Can Trust
                </h3> */}
                <p className="text-gray-600 mb-4 text-sm md:text-lg text-justify">
                  Our development team is skilled in the latest technologies and
                  frameworks, enabling us to build e-commerce websites that are
                  fast, secure, and scalable. We focus on creating a solid
                  backend structure that supports high traffic volumes, smooth
                  transactions, and easy management. Whether you need a simple
                  online store or a complex multi-vendor platform, our Ecommerce
                  Website Design Service in India is designed to meet your
                  specific needs.
                </p>
              </div>

              <div className="mt-8 flex md:flex-row sm:flex-col gap-3 items-center space-x-4">
                <a href="https://wa.me/917428309119" target="blank">
                  <button className="gradient-background text-white font-normal text-sm px-6 rounded-full py-3  md:w-52 hover:bg-[#2334DE] transition duration-300">
                    EXPLORE MORE
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white mt-10 w-full md:w-[90%] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center  lg:p-8 md:p-16 sm:p-2 lg:w-[90%] sm:w-[90%] mx-auto">
            {/* Left Section */}
            <div className="md:w-[50%] sm:w-full pl-0 sm:mt-12 md:mt-0">
              <h2 className="text-3xl md:text-4xl lg:text-5xl sm:text-xl font-bold text-gray-800 mb-6 sm:mb-2 sm:text-center md:text-left">
                <span>Integrated Digital Marketing Services</span>
              </h2>
              <div className="bg-white rounded-lg">
                <p className="text-gray-600 mb-4 text-sm md:text-lg text-justify">
                  In addition to e-commerce website development, Maxify
                  Solutions offers comprehensive Digital Marketing services to
                  help you reach your target audience and maximize your online
                  sales. Our integrated approach combines SEO, SMO, PPC, and
                  content marketing to create a powerful online presence for
                  your brand. By working with a full-service Ecommerce Website
                  Designing Company, you can ensure that your website not only
                  attracts visitors but also converts them into loyal customers.
                </p>
              </div>

              <div className="mt-8 flex md:flex-row sm:flex-col gap-3 items-center space-x-4">
                <a href="https://wa.me/917428309119" target="blank">
                  <button className="gradient-background text-white font-normal text-sm px-6 rounded-full py-3 md:w-52 hover:bg-[#2334DE] transition duration-300">
                    EXPLORE MORE
                  </button>
                </a>
              </div>
            </div>

            {/* Right Section */}
            <div className="md:w-[50%] relative flex sm:ml-0 md:mb-0 justify-center sm:mt-10 md:mt-0">
              <div className="relative">
                <img
                  src="https://i.ibb.co/KHWP1Nn/img11.png"
                  alt="Main"
                  className="rounded-lg shadow-md w-full h-[25rem] mb-4 ml-2"
                />
                <img
                  src="https://i.ibb.co/cmgdv0X/img12.png"
                  alt="Secondary"
                  className=" shadow-md w-52 h-auto absolute bottom-0 right-0 transform translate-x-4 translate-y-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* slider section */}
      <EcomSlider />

      <div>
        <div className="bg-white w-full md:w-[90%] mx-auto">
          <div className="flex flex-col md:flex-row  lg:p-8 md:px-16 sm:p-2 lg:w-[90%] sm:w-[90%] mx-auto">
            {/* Left Section */}
            <div className="md:w-[50%] relative flex sm:ml-0 md:mb-0 justify-start">
              <div className="">
                <img
                  src="https://i.ibb.co/qMdL2DD0/img14.png"
                  alt="Main"
                  className="rounded-lg w-full h-[25rem] mb-4 ml-2"
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="md:w-[50%] sm:w-full pl-0 sm:mt-12 md:mt-20">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-2 text-center">
                <p className="gradient-text">Get Started with </p>
                <p>Maxify Solutions Today</p>
              </h2>
              <div className="bg-white rounded-lg text-justify">
                <p>
                  Ready to take your business to the next level with a custom
                  e-commerce website? Contact Us today to discuss your project
                  and learn more about our Ecommerce Website Design Service in
                  India. As a leading Ecommerce Website Designing Company in
                  Delhi, we are committed to delivering solutions that drive
                  results and help your business grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
