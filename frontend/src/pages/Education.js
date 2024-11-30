import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const Education = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mt-[70px]"> 
     <div className="w-full font-sans md:w-[90%] lg:w-[80%] mx-auto px-4 py-8">
  <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-8 items-start">
    {/* Left Side Content */}
    <div className="space-y-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold">
        <span className="text-blue-600">Education</span>
        <br />
        <span className="text-blue-600">Internet Site</span>
        <br />
        <span className="text-blue-600">Growth</span>
      </h1>
      <p className="text-2xl md:text-5xl font-[300]">
        by Maxify Solution
      </p>
      <Link to="/contact">
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-md">
        Get started
      </button>
      </Link>
      <div className="mt-8">
        <img
          src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512876/image_38_veynfo.png"
          alt="Primary school website design"
          width={500}
          height={300}
          className="rounded-lg shadow-md"
        />
      </div>
    </div>

    {/* Right Side Content */}
    <div className="relative h-full">
      <div className="h-full object-cover w-[70%]">
        <img
          src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512880/image_39_jn7ke0.png"
          alt="Futuristic classroom"
          width={600}
          height={800}
          className="rounded-lg"
        />
      </div>
      <div className="absolute top-4 right-0 w-[30%] -mr-4 sm:hidden md:block">
        <img
          src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512881/image_40_tca8a9.png"
          alt="Students collaborating"
          width={200}
          height={200}
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="absolute bottom-0 right-0 bg-white p-4 w-[80%] rounded-md">
        <p className="text-[12px] md:text-base text-gray-500 text-justify">
          In today's electronic age, education and learning have transcended the traditional classroom. Institutions, instructors, and EdTech companies need a robust online presence to reach and engage students worldwide. At Maxify Service, we focus on education website development customized to satisfy the unique needs of schools, universities, and e-learning platforms. Our goal is to create engaging, interactive, and user-friendly websites that enhance the learning experience and drive academic growth.
        </p>
      </div>
    </div>
  </div>
</div>

      {/* section 2 */}
      <div className="w-full md:w-[70%] lg:w-[60%] mx-auto flex flex-col items-center gap-4 p-4">
        <div className="text-center">
          <p className="text-sm text-gray-400 mb-4">Education Services</p>
          <h1 className="text-[#2334de] text-3xl md:text-5xl font-semibold font-syne">
            Why Pick Maxify Service for Education Website Development?
          </h1>
        </div>
        <p className="text-base md:text-xl leading-7 text-[#807e85] text-justify md:px-20 font-dm">
          Maxify Service brings over 15 years of experience in electronic
          improvement within the education and learning field. We recognize the
          distinct obstacles dealt with by universities and online understanding
          systems. Our education website development solutions are developed to
          assist you in constructing an interactive, safe, secure, and scalable
          electronic system that fulfills the needs of contemporary learners. We
          concentrate on delivering:
        </p>
      </div>

      {/* section 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full md:w-[80%] lg:w-[70%] mx-auto p-4">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md flex flex-col">
          <img
            aria-hidden="true"
            alt="Custom-made Designs"
            src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512868/Container_13_b5ew8f.png"
            className="rounded-t-lg"
          />

          <div className="flex flex-col justify-between items-center h-full p-4">
            <h2 className="text-xl text-center font-semibold mt-2 font-syne">
              Custom-made Designs for Improved Learning:
            </h2>
            <p className="text-sm text-gray-500 text-center mt-1">
              Our sites are designed to mirror the one-of-a-kind branding and
              instructional approach of each institution, offering a seamless
              and engaging learning experience.
            </p>
            <Link to='/web'>
            <button className="bg-[#2334de] text-white text-secondary-foreground hover:bg-secondary/80 mt-4 rounded px-4 py-2">
              Know More
            </button>
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md flex flex-col">
          <img
            aria-hidden="true"
            alt="User-Friendly Interfaces"
            src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512868/Container_12_mr9hxn.png"
            className="rounded-t-lg"
          />
          <div className="flex flex-col justify-between items-center h-full p-4">
            <h2 className="text-xl text-center font-semibold mt-2 font-syne">
              User-Friendly Interfaces:
            </h2>
            <p className="text-sm text-gray-500 text-center mt-1">
              We focus on ease of navigation to ensure trainees, educators, and
              parents can access information rapidly and effectively.
            </p>
            <Link to='/web'>
            <button className="bg-[#2334de] text-white text-secondary-foreground hover:bg-secondary/80 mt-4 rounded px-4 py-2">
              Know More
            </button>
            </Link>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-md flex flex-col">
          <img
            aria-hidden="true"
            alt="Safe and Certified Platforms"
            src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512867/bg34.jpg_1_sqdrf0.png"
            className="rounded-t-lg"
          />
          <div className="flex flex-col justify-between items-center p-4 h-full">
            <h2 className="text-xl text-center font-semibold mt-2 font-syne">
              Safe and Certified Platforms:
            </h2>
            <p className="text-sm text-gray-500 text-center mt-1">
              We follow data security guidelines and execute sophisticated
              security procedures to guard sensitive pupil details.
            </p>
            <Link to='/web'>
            <button className="bg-[#2334de] text-white text-secondary-foreground hover:bg-secondary/80 mt-4 rounded px-4 py-2">
              Know More
            </button>
            </Link>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-lg shadow-md flex flex-col">
          <img
            aria-hidden="true"
            alt="Safe and Certified Platforms"
            src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512868/Container_12_mr9hxn.png"
            className="rounded-t-lg"
          />
          <div className="flex flex-col justify-between items-center p-4">
            <h2 className="text-xl text-center font-semibold mt-2">
              Safe and Certified Platforms:
            </h2>
            <p className="text-sm text-gray-500 text-center mt-1">
              We follow data security guidelines and execute sophisticated
              security procedures to guard sensitive pupil details.
            </p>
            <Link to='/web'>
            <button className="bg-[#2334de] text-white text-secondary-foreground hover:bg-secondary/80 mt-4 rounded px-4 py-2">
              Know More
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* slider */}
      <h2 className="w-full md:w-[90%] lg:w-[80%] mx-auto text-black text-3xl md:text-5xl font-bold text-center">Our Comprehensive Education And Learning Web Development Solutions</h2>
      <div className="h-auto p-2 md:p-8 ">
        <div className=" mx-auto rounded-lg overflow-hidden relative">
         
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={0}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper relative"
          >
            <SwiperSlide>
              <div className="flex flex-col md:flex-row mt-2 items-center">
                
                <div className="md:w-1/2 p-2 md:p-6 space-y-3 sm:min-h-[70vh] md:min-h-auto">
                  <h2 className="text-2xl md:text-3xl font-semibold lg:w-full text-[#3343e0] mb-4 sm:text-center md:text-left">
                  Personalized Education Website Development
                  </h2>
                  <p className="text-gray-600 mb-4 text-justify text-sm md:text-base">
                  A well-designed website is necessary for any type of school or online discovery system. At Maxify Service, we offer custom education website development services that surpass simply aesthetic appeal. We create sites that are functional, engaging, and optimized for performance.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-3 text-sm md:text-base text-justify">
                    <li>
                    <strong>Receptive and Mobile-Optimized Layouts:</strong> Guarantee a seamless individual experience throughout all gadgets—desktop computers, tablet computers, and smartphones.
                    </li>
                    <li>
                   <strong> SEO-Friendly Framework:</strong> Our websites are built following search engine optimization's finest practices to aid you in placing greater on search engines and attracting even more natural web traffic.
                    </li>
                    <li>
                    <strong>Interactive Understanding Qualities:</strong> We integrate interactive components such as quizzes, conversation online forums, and live courses to improve the knowing experience.
                    </li>
                  </ul>
                  <div className="">
                  <div className="flex justify-center gap-2  items-center mt-2">
       <Link to='/about'>   <button
            className=" py-3  md:text-[14px] font-[500] px-8 rounded-full relative text-white bg-[blue] isolation-auto z-10 border-2 border-[blue]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-white before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-[blue]"
          >
            About us

          </button>
          </Link>
          <div className=" h-[45px] w-[45px] bg-[blue]  rounded-full flex justify-center items-center">
          <BsArrowRight className="  text-[30px] p-1 text-white  transform -rotate-[40deg] font-[200]" />
          </div>
          </div>
                  </div>
                </div>
                <div className="md:w-1/2  flex justify-center items-center">
                  <img src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512883/image11_ztasxk.png" alt="Real Estate" className=" inset-0 h-[80%] w-[80%]" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col md:flex-row mt-2 items-center">
                
                <div className="md:w-1/2 p-2 md:p-6 space-y-3 sm:min-h-[70vh] md:min-h-auto">
                  <h2 className="text-2xl md:text-3xl font-semibold lg:w-full text-[#3343e0] mb-4 sm:text-center md:text-left">
                  E-Learning  Website <br/>
Development
                  </h2>
                  <p className="text-gray-600 mb-4 text-justify text-sm md:text-base">
                  The need for Internet education has escalated, and having 
a durable e-learning website development strategy is 
important. We concentrate on producing e-learning 
platforms that satisfy various instructional demands, from 
K-12 education to higher education and specialist 
development.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-3 text-sm md:text-base text-justify">
                    <li>
                    <strong> Custom Understanding Paths:</strong>  Create personalized 
                    learning courses to satisfy different learning designs and pacesD
                    </li>
                    <li>
                   <strong>Gamification Components:</strong>  Involve pupils via gamified 
learning experiences such as badges, leaderboards, and 
benefitsD
                    </li>
                    <li>
                    <strong>Secure Repayment Portals: </strong> Execute protected payment 
services for program enrollments, registrations, and various 
other purchases.
                    </li>
                  </ul>
                  <div className="">
                  <div className="flex justify-center gap-2  items-center mt-2">
       <Link to='/about'></Link>   <button
            className=" py-3  md:text-[14px] font-[500] px-8 rounded-full relative text-white bg-[blue] isolation-auto z-10 border-2 border-[blue]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-white before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-[blue]"
          >
            About us

          </button>
          <div className=" h-[45px] w-[45px] bg-[blue]  rounded-full flex justify-center items-center">
          <BsArrowRight className="  text-[30px] p-1 text-white  transform -rotate-[40deg] font-[200]" />
          </div>
          </div>
                  </div>
                </div>
                <div className="md:w-1/2  flex justify-center items-center">
                  <img src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512884/image22_eniezw.png" alt="Real Estate" className=" inset-0 h-[80%] w-[80%]" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col md:flex-row mt-2 items-center">
                
                <div className="md:w-1/2 p-2 md:p-6 space-y-3 sm:min-h-[70vh] md:min-h-auto">
                  <h2 className="text-2xl md:text-3xl font-semibold lg:w-full text-[#3343e0] mb-4 sm:text-center md:text-left">
                  Learning Website   <br/>
Development
                  </h2>
                  <p className="text-gray-600 mb-4 text-justify text-sm md:text-base">
                  A specific understanding of learning website development 
methods is vital for producing interesting, useful, and 
obtainable sites for educational purposes. We make internet 
sites that cultivate a comprehensive understanding 
atmosphere, satisfying diverse understanding needs.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-3 text-sm md:text-base text-justify">
                    <li>
                    <strong>Easily Accessible Style:</strong>  Apply access functions to 
satisfy students with various needs, guaranteeing 
conformity with access standards such as WCAG
                    </li>
                    <li>
                   <strong>Content Management Systems (CMS):</strong>     Develop 
internet sites with easy-to-use CMS, permitting teachers 
and administrators to update content effortlessly
                    </li>
                    <li>
                    <strong>  Multi-Language Support: </strong>  Assistance with diverse 
trainee demographics by offering multi-language 
alternatives on your discovering website
                    </li>
                  </ul>
                  <div className="">
                  <div className="flex justify-center gap-2  items-center mt-2">
       <Link to='/about'>   <button
            className=" py-3  md:text-[14px] font-[500] px-8 rounded-full relative text-white bg-[blue] isolation-auto z-10 border-2 border-[blue]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-white before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-[blue]"
          >
            About us

          </button>
          </Link>
          <div className=" h-[45px] w-[45px] bg-[blue]  rounded-full flex justify-center items-center">
          <BsArrowRight className="  text-[30px] p-1 text-white  transform -rotate-[40deg] font-[200]" />
          </div>
          </div>
                  </div>
                </div>
                <div className="md:w-1/2  flex justify-center items-center">
                  <img src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512887/image44_kb518h.png" alt="Real Estate" className=" inset-0 h-[80%] w-[80%]" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col md:flex-row mt-2 items-center">
                
                <div className="md:w-1/2 p-2 md:p-6 space-y-3 sm:min-h-[70vh] md:min-h-auto">
                  <h2 className="text-2xl md:text-3xl font-semibold lg:w-full text-[#3343e0] mb-4 sm:text-center md:text-left">
                  Online Learning Platform  <br/>
Development
                  </h2>
                  <p className="text-gray-600 mb-4 text-justify text-sm md:text-base">
                  At Maxify Option, we comprehend that every educational 
platform has unique needs. Our online learning platform 
development solutions are customized to produce 
scalable and interactive platforms that foster learning and 
cooperation.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-3 text-sm md:text-base text-justify">
                    <li>
                    <strong> Online Classrooms:</strong> Construct interactive digital 
classes with video conferencing, chat, and partnership 
devices to replicate the in-person learning experienceB
                    </li>
                    <li>
                   <strong>Program Management Solutions:</strong>   Integrate robust 
program management tools that permit teachers to 
produce, handle, and update course content quicklyB
                    </li>
                    <li>
                    <strong> Data Analytics and Reporting: </strong>  Use sophisticated 
analytics to track trainee efficiency and interaction, 
helping educators make data-driven choices.
                    </li>
                  </ul>
                  <div className="">
                  <div className="flex justify-center gap-2  items-center mt-2">
       <Link to='/about'>  <button
            className=" py-3  md:text-[14px] font-[500] px-8 rounded-full relative text-white bg-[blue] isolation-auto z-10 border-2 border-[blue]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-white before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-[blue]"
          >
            About us

          </button>
          </Link> 
          <div className=" h-[45px] w-[45px] bg-[blue]  rounded-full flex justify-center items-center">
          <BsArrowRight className="  text-[30px] p-1 text-white  transform -rotate-[40deg] font-[200]" />
          </div>
          </div>
                  </div>
                </div>
                <div className="md:w-1/2  flex justify-center items-center">
                  <img src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512885/image33_ncddbp.png" alt="Real Estate" className=" inset-0 h-[80%] w-[80%]" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col md:flex-row mt-2 items-center">
                
                <div className="md:w-1/2 p-2 md:p-6 space-y-3 sm:min-h-[70vh] md:min-h-auto">
                  <h2 className="text-2xl md:text-3xl font-semibold lg:w-full text-[#3343e0] mb-4 sm:text-center md:text-left">
                  Education Mobile 
Application   <br/>
Development
                  </h2>
                  <p className="text-gray-600 mb-4 text-justify text-sm md:text-base">
                  With the growing usage of smart devices, having a devoted 
mobile app for your academic platform can significantly 
improve involvement. We provide education mobile 
application development services that create user-friendly 
and feature-rich applications for trainees, teachers, and 
moms and dads.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-3 text-sm md:text-base text-justify">
                    <li>
                    <strong>Interactive Understanding Applications:</strong>  Create 
applications that supply a large range of learning 
materials such as videos, tests, and interactive lessons9
                    </li>
                    <li>
                   <strong> Real-Time Alerts:</strong>   Keep trainees and parents 
educated with real-time updates on assignments, 
qualities, and institution events9
                    </li>
                    <li>
                    <strong>Offline Accessibility: </strong>  Make It Possible for offline 
access to finding materials, ensuring pupils can learn 
anytime, anywhere.
                    </li>
                  </ul>
                  <div className="">
                  <div className="flex justify-center gap-2  items-center mt-2">
       <Link to='/about'>  <button
            className=" py-3  md:text-[14px] font-[500] px-8 rounded-full relative text-white bg-[blue] isolation-auto z-10 border-2 border-[blue]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-white before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-[blue]"
          >
            About us

          </button>
          </Link> 
          <div className=" h-[45px] w-[45px] bg-[blue]  rounded-full flex justify-center items-center">
          <BsArrowRight className="  text-[30px] p-1 text-white  transform -rotate-[40deg] font-[200]" />
          </div>
          </div>
                  </div>
                </div>
                <div className="md:w-1/2  flex justify-center items-center">
                  <img src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512889/image66_cvirav.png" alt="Real Estate" className=" inset-0 h-[80%] w-[80%]" />
                </div>
              </div>
            </SwiperSlide>
           
            <div className="absolute bottom-4 right-[100px]">
            
    <div className="swiper-button-prev-custom">
      <FaLongArrowAltRight
        size={34}
        className="text-3xl sm:none md:block text-white bg-[#f5bb48] transform rotate-180 hover:shadow-lg p-2 rounded-lg"
      />
    </div>
  </div>
            <div className="absolute bottom-4 right-2">
            
    <div className="swiper-button-next-custom">
      <FaLongArrowAltLeft
        size={34}
        className="text-3xl sm:none md:block text-white bg-[#f5bb48] transform rotate-180 hover:shadow-lg p-2 rounded-lg"
      />
    </div>
  </div>
          </Swiper>
          
        </div>
      </div>

      {/* section */}
      <div className="bg-white sm:p-4 md:p-10 w-full md:w-[90%] lg:w-[80%] mx-auto font-syne">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-2xl md:text-4xl font-bold text-blue-700 mb-4">
              Advanced Technologies{" "}
              <span className="font-[500] text-gray-600">
                We Make Use Of in Education Website Development
              </span>
            </h1>
            <p className="text-gray-700 mb-6 md:text-xl text-justify">
              At Maxify Service, we leverage the most up-to-date technical
              advancements to provide sophisticated education website
              development services.
            </p>
            <ul className="list-disc pl-5 space-y-4 text-gray-500 md:text-xl text-justify px-6 md:px-10">
              <li>
                <span className="font-semibold text-black">
                  Expert System (AI) and Artificial Intelligence (ML):
                </span>{" "}
                Implement AI-driven chatbots for immediate trainee support and
                individualized finding-out experiences.
              </li>
              <li>
                <span className="font-semibold text-black">
                  Blockchain Technology:
                </span>{" "}
                Guarantee secure and clear instructional transactions and
                qualifications using blockchain technology.
              </li>
              <li>
                <span className="font-semibold text-black">
                  Cloud-Based Solutions:
                </span>{" "}
                Use scalable cloud options for information storage, enabling
                simple access to instructional resources and improving
                information protection.
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512875/Group_1171275258_g95ze4.png"
              alt="AI Technology"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      {/* section */}
      <div className="bg-white sm:p-4 md:p-10 w-full md:w-[90%] lg:w-[80%] mx-auto font-syne">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <img
              src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512870/Frame_1707481776_yvbswb.png"
              alt="AI Technology"
              className="rounded-lg"
            />
          </div>
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
              Advantages of Partnering{" "}
              <span className="font-[500] text-gray-600">
                {" "}
                with Maxify Solution for Education Website Development
              </span>
            </h1>
            <ul className="list-disc pl-5 space-y-4 text-gray-500 md:text-xl text-justify px-6 md:px-10">
              <li>
                <span className="font-semibold text-black">
                  Boosted Learning Experience:
                </span>{" "}
                By developing interactive and interesting electronic systems, we assist educational institutions in providing exceptional learning experiences.
              </li>
              <li>
                <span className="font-semibold text-black">
                Functional Performance:
                </span>{" "}
                Our customized remedies streamline administrative processes, minimize hand-operated jobs, and boost general efficiency.
              </li>
              <li>
                <span className="font-semibold text-black">
                Data Safety Security and Compliance: 
                </span>{" "}
                We focus on information protection and ensure all services comply with information security policies.
              </li>
              <li>
                <span className="font-semibold text-black">
                Raised Pupil Interaction:
                </span>{" "}
                With interactive and easy-to-use internet sites and apps, student involvement and retention rates are enhanced.
              </li>
              <li>
                <span className="font-semibold text-black">
                Scalability and Future-Readiness: 
                </span>{" "}
                Our services are scalable and designed to adjust to future technological innovations in the education field.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* last section */}
      <div className="relative min-h-screen flex items-center overflow-hidden bg-[#ecf8ff] -z-20">
      
      
      
      <div className="relative w-full flex md:flex-row flex-col">
     
     
      <div className="w-full md:w-1/2 relative space-y-8">
      <div className="h-full w-full">
      <img src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512889/image-Photoroom_17_1_jpo5b5.png" alt="img" className="h-[100%] w-[100%] z-10" /></div>
      <div className="absolute rounded-lg -z-10 inset-0 bg-gradient-to-br from-purple-600 via-purple-500 to-blue-500 transform -skew-x-12 -left-1/4 w-[100%]" /></div>
    
        <div className="w-full md:w-1/2 space-y-4 text-left p-4">
        <p className="text-purple-500 font-semibold text-xl">MAXIFY SOLUTIONS</p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight font-manrope">
            Your Trusted Partner 
            <span className="text-gray-800 font-[500]"> In Education Website Development</span>
          </h1>
          
          <p className="text-sm md:text-lg text-justify text-gray-500 leading-relaxed">
            At Maxify Service, we are dedicated to providing education website development solutions that not only satisfy the existing demands of the industry but also prepare schools for future difficulties. Whether you are an institution seeking to boost your electronic visibility, a college aiming to provide online training courses, or an EdTech startup with a distinct idea, we have the expertise and experience to change your vision into truth.
          </p>
          <img src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512875/image_36_owjg9b.png" className="w-full h-[100px] object-cover rounded-lg rou" alt="img here" />
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-600">
            Get In Touch With Us Today
          </h2>
          
          <p className="text-sm md:text-lg text-justify text-gray-500 leading-relaxed">
            Ready to transform your educational offerings with sophisticated digital options? Contact Maxify Solution today for more information regarding just how our education website development services can assist you in achieving your goals and staying ahead in the rapidly evolving education and learning market.
          </p>
        </div>
      </div>
    </div>
    
    </div>
  );
};

export default Education;
