import React from "react";
import img1 from "../Assets/education/bg34.jpg (1).png"
import img2 from "../Assets/education/Container (12).png"
import img3 from "../Assets/education/Container (13).png"
import img4 from "../Assets/education/Container (14).png"
import img5 from "../Assets/education/Frame 1707481776.png"
import img6 from "../Assets/education/Group 1171275258.png"
import img7 from "../Assets/education/image (36).png"
import img8 from "../Assets/education/image (37).png"
import img9 from "../Assets/education/image (38).png"
import img10 from "../Assets/education/image (39).png"
import img11 from "../Assets/education/image (40).png"
import img12 from "../Assets/education/image-Photoroom (17) 1.png"
import img13 from "../Assets/education/image-Photoroom (17) 1.png"
import img14 from "../Assets/education/image-Photoroom (17) 1.png"
import img15 from "../Assets/education/image-Photoroom (17) 1.png"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Navigation, Autoplay } from "swiper/modules";

const Education = () => {
  return (
    <div className="mt-[70px]">
     <div className="w-full md:w-[90%] lg:w-[80%] mx-auto px-4 py-8">
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
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-md">
        Get started
      </button>
      <div className="mt-8">
        <img
          src={img9}
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
          src={img10}
          alt="Futuristic classroom"
          width={600}
          height={800}
          className="rounded-lg"
        />
      </div>
      <div className="absolute top-4 right-0 w-[30%] -mr-4">
        <img
          src={img11}
          alt="Students collaborating"
          width={200}
          height={200}
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="absolute bottom-0 right-0 bg-white p-4 w-[80%] rounded-md">
        <p className="text-[12px] text-justify">
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
          <h1 className="text-[#2334de] text-3xl md:text-5xl font-semibold">
            Why Pick Maxify Service for Education Website Development?
          </h1>
        </div>
        <p className="text-base md:text-xl leading-7 text-[#807e85] text-justify md:px-20">
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
            src={img3}
            className="rounded-t-lg"
          />

          <div className="flex flex-col justify-between items-center h-full p-4">
            <h2 className="text-xl text-center font-semibold mt-2">
              Custom-made Designs for Improved Learning:
            </h2>
            <p className="text-sm text-gray-500 text-center mt-1">
              Our sites are designed to mirror the one-of-a-kind branding and
              instructional approach of each institution, offering a seamless
              and engaging learning experience.
            </p>
            <button className="bg-[#2334de] text-white text-secondary-foreground hover:bg-secondary/80 mt-4 rounded px-4 py-2">
              Know More
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md flex flex-col">
          <img
            aria-hidden="true"
            alt="User-Friendly Interfaces"
            src={img2}
            className="rounded-t-lg"
          />
          <div className="flex flex-col justify-between items-center h-full p-4">
            <h2 className="text-xl text-center font-semibold mt-2">
              User-Friendly Interfaces:
            </h2>
            <p className="text-sm text-gray-500 text-center mt-1">
              We focus on ease of navigation to ensure trainees, educators, and
              parents can access information rapidly and effectively.
            </p>
            <button className="bg-[#2334de] text-white text-secondary-foreground hover:bg-secondary/80 mt-4 rounded px-4 py-2">
              Know More
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-md flex flex-col">
          <img
            aria-hidden="true"
            alt="Safe and Certified Platforms"
            src={img1}
            className="rounded-t-lg"
          />
          <div className="flex flex-col justify-between items-center p-4 h-full">
            <h2 className="text-xl text-center font-semibold mt-2">
              Safe and Certified Platforms:
            </h2>
            <p className="text-sm text-gray-500 text-center mt-1">
              We follow data security guidelines and execute sophisticated
              security procedures to guard sensitive pupil details.
            </p>
            <button className="bg-[#2334de] text-white text-secondary-foreground hover:bg-secondary/80 mt-4 rounded px-4 py-2">
              Know More
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-lg shadow-md flex flex-col">
          <img
            aria-hidden="true"
            alt="Safe and Certified Platforms"
            src={img2}
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
            <button className="bg-[#2334de] text-white text-secondary-foreground hover:bg-secondary/80 mt-4 rounded px-4 py-2">
              Know More
            </button>
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
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper relative"
          >
            <SwiperSlide>
              <div className="flex flex-col md:flex-row mt-2 items-center">
                
                <div className="md:w-1/2 p-2 md:p-6 space-y-3">
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
                </div>
                <div className="md:w-1/2  flex justify-center items-center">
                  <img src={img4} alt="Real Estate" className=" inset-0 h-[80%] w-[80%]" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col md:flex-row mt-2 items-center">
                <div className="md:w-1/2  flex justify-center items-center">
                  <img src={img11} alt="Real Estate" className=" inset-0" />
                </div>
                <div className="md:w-1/2 p-2 md:p-6 space-y-3">
                  <h2 className="text-2xl font-semibold lg:w-full text-[#F8B948] mb-4 sm:text-center md:text-left">
                    2. Real Estate CRM Integration for Effective Website
                    Development
                  </h2>
                  <p className="text-gray-600 mb-4 text-justify text-sm md:text-base">
                    Client Partnership Management (CRM) is essential for any
                    real estate company. Our real estate website development
                    solutions include CRM integration, enabling you to handle
                    leads, track client communications, and enhance sales
                    processes.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-3 text-sm md:text-base text-justify">
                    <li>
                      Central Lead Monitoring: Effectively handle leads from
                      multiple resources and automate follow-ups
                    </li>
                    <li>
                      Automated Advertising And Marketing Campaigns: Run
                      automated e-mail marketing campaigns to nurture leads and
                      keep customersE
                    </li>
                    <li>
                      Customer Interaction: Streamline communication with
                      possible clients through incorporated messaging and
                      notification systems.
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col md:flex-row mt-2 items-center">
                <div className="md:w-1/2  flex justify-center items-center">
                  <img src={img12} alt="Real Estate" className=" inset-0" />
                </div>
                <div className="md:w-1/2 p-2 md:p-6 space-y-3">
                  <h2 className="text-2xl font-semibold lg:w-full text-[#F8B948] mb-4 sm:text-center md:text-left">
                    3. Building Management System (PMS) for Real Estate Website
                    Development
                  </h2>
                  <p className="text-gray-600 mb-4 text-justify text-sm md:text-base">
                    A durable Property Administration System (PMS) can
                    considerably improve home monitoring procedures. We offer
                    PMS services that integrate flawlessly with your website,
                    enabling much better building management and client service.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-3 text-sm md:text-base text-justify">
                    <li>
                      Comprehensive Property Listings: Manage residential
                      property listings successfully with functions such as bulk
                      uploads, automated updates, and indepth residential
                      property infoE
                    </li>
                    <li>
                      Tenant and Proprietor Portals: Dedicated portals for
                      lessees and property owners for streamlined communication
                      and solution management
                    </li>
                    <li>
                      Upkeep Request Management: Streamlined maintenance request
                      handling, enhancing renter fulfillment and functional
                      efficiency.
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
           
            <div className="absolute bottom-4 right-[100px]">
            
    <div className="swiper-button-prev-custom">
      <FaLongArrowAltRight
        size={34}
        className="text-3xl sm:none md:block text-white bg-[#ffcb66] transform rotate-180 hover:shadow-lg p-2 rounded-lg"
      />
    </div>
  </div>
            <div className="absolute bottom-4 right-2">
            
    <div className="swiper-button-next-custom">
      <FaLongArrowAltLeft
        size={34}
        className="text-3xl sm:none md:block text-white bg-[#ffcb66] transform rotate-180 hover:shadow-lg p-2 rounded-lg"
      />
    </div>
  </div>
          </Swiper>
          
        </div>
      </div>

      {/* section */}
      <div className="bg-white sm:p-4 md:p-10 w-full md:w-[90%] lg:w-[80%] mx-auto">
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
              src={img6}
              alt="AI Technology"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      {/* section */}
      <div className="bg-white sm:p-4 md:p-10 w-full md:w-[90%] lg:w-[80%] mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <img
              src={img5}
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
      <img src={img12} alt="img" className="h-[100%] w-[100%] z-10" /></div>
      <div className="absolute rounded-lg -z-10 inset-0 bg-gradient-to-br from-purple-600 via-purple-500 to-blue-500 transform -skew-x-12 -left-1/4 w-[100%]" /></div>
    
        <div className="w-full md:w-1/2 space-y-4 text-left p-4">
        <p className="text-purple-500 font-semibold text-xl">MAXIFY SOLUTIONS</p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Your Trusted Partner 
            <span className="text-gray-800 font-[500]"> In Education Website Development</span>
          </h1>
          
          <p className="text-sm md:text-lg text-justify text-gray-500 leading-relaxed">
            At Maxify Service, we are dedicated to providing education website development solutions that not only satisfy the existing demands of the industry but also prepare schools for future difficulties. Whether you are an institution seeking to boost your electronic visibility, a college aiming to provide online training courses, or an EdTech startup with a distinct idea, we have the expertise and experience to change your vision into truth.
          </p>
          <img src={img7} className="w-full h-[100px] object-cover rounded-lg rou" alt="img here" />
          
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
