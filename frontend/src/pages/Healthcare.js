import React, { useEffect, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import SEOComponent from "../Components/SEOComponent";
const benifits = [
  {
    title: "Full Service Digital expertise:",
    text: "Maxify provides a wide range of services, from web and app development to digital marketing and visual design, allowing for smooth brand consistency and unified digital strategy.",
  },
  {
    title: "Customized Solutions",
    text: "Whether your objective is to increase conversions, drive traffic, or improve brand visibility, we customize each project to fit your particular business needs.",
  },
  {
    title: "Data-Driven initiatives:",
    text: "To ensure specific targeting, outstanding results, and quantifiable outcomes, our team uses data-supported insights to improve campaigns and development initiatives.",
  },
  {
    title: "Experienced Professionals:",
    text: "With talented engineers, designers, and marketers, Maxify works creative innovation with industry knowledge to produce exceptional outcomes.",
  },
  {
    title: "End-to-End Support:",
    text: "To keep you ahead of the competition in the digital sphere, we help you at every turn, from project planning and execution to post-launch optimization and continuing maintenance.",
  },
  {
    title: "Scalable Growth:",
    text: "Our flexible methods expand to meet your changing needs without sacrificing efficacy or quality as your company does.",
  },
  {
    title: "Transparent Communication:",
    text: "Maxify prioritizes cooperation and openness, offering frequent updates and clear reporting to keep you updated on developments and return on investment.",
  },
];
const Healthcare = () => {
  const contentArray = [
    {
      title: "1. Custom Health Care Web Site Development",

      description:
        "A well-designed, user-friendly website is essential for any kind of doctor. Our custom-made healthcare web development solutions ensure that your internet site is not simply a digital presence but a powerful device for individual acquisition, interaction, and retention.",
      Images:
        "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1731335937/Group_1171275270_hwyh5r.png",
      altImages: "best it company for healthcare idustries branding",

      description:
        "A well-designed, user-friendly website is essential for any kind of doctor. Our custom-made healthcare web development solutions ensure that your internet site is not simply a digital presence but a powerful device for individual acquisition, interaction, and retention.",
      Images:
        "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1731335937/Group_1171275270_hwyh5r.png",
      altImages: "best it company for healthcare idustries branding",

      points: [
        "Receptive and Mobile-Optimized Designs: We develop internet sites that supply a seamless individual experience across all devices—desktop computers, tablet computers, and smartphones.",
        "SEO-Friendly Style: Our web development technique consists of SEO ideal practices to ensure your internet site ranks high up on search engines, attracting more natural traffic.",
        "Integrated Client Portals: We create safe and secure personal websites that permit simple access to medical records, consultation organizing, and online consultations, improving person comfort and fulfillment.",
      ],
    },
    {
      title: "2. Telemedicine Platform Development",

      description:
        "Telemedicine has changed the method of healthcare delivery. Our group specializes in constructing robust telemedicine systems that make it possible for remote examinations, video clip phone calls, and safe communication between healthcare providers and patients.",
      Images:
        "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1731335936/Group_1171275269_h1dglo.png",
      altImages: "healthcare web development ",

      description:
        "Telemedicine has changed the method of healthcare delivery. Our group specializes in constructing robust telemedicine systems that make it possible for remote examinations, video clip phone calls, and safe communication between healthcare providers and patients.",
      Images:
        "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1731335936/Group_1171275269_h1dglo.png",
      altImages: "healthcare web development ",

      points: [
        "Protect Video Clip Appointment: Top-notch, secure video clip conferencing abilities for effective remote client consultations.",
        "Visit Scheduling and Administration: Smooth assimilation of appointment organizing devices that sync with your internal systems, making it easier for both team and patients.",
        "E-Prescription Combination: Structured e-prescription components that permit physicians to prescribe medicine digitally and safely.",
      ],
    },
    {
      title: " 3. Health Care Mobile Application Growth",
      description:
        "In today's mobile-first globe, a dedicated healthcare app can significantly boost patient engagement. Our healthcare mobile application advancement services focus on producing user friendly, feature-rich applications that deal with the needs of both healthcare providers and people",
      Images:
        "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1731335937/Group_1171275270_hwyh5r.png",
      points: [
        "Individual Administration Apps: Apps that help people manage their health and wellness documents, appointments, medicine tips, and a lot more.",
        "Doctor-Patient Communication Applications: Helping with real-time interaction between physicians and patients for far better healthcare distribution.",
        "Wellness Monitoring and Keeping An Eye On Apps: Developing apps that aid in keeping an eye on patient's wellness specifications like heart rate, high blood pressure, etc., which are crucial for chronic disease monitoring.",
      ],
    },
    {
      title: "  4. Healthcare CRM Solutions",

      description:
        "Efficient individual administration is crucial to a successful healthcare technique. Our medical care Consumer Relationship Administration (CRM) solutions help you handle client relationships better, simplify processes, and enhance total solution quality.",
      Images:
        "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1731335943/Group_1171275271_k7w6og.png",
      altImages: "healthcare website development ",

      description:
        "Efficient individual administration is crucial to a successful healthcare technique. Our medical care Consumer Relationship Administration (CRM) solutions help you handle client relationships better, simplify processes, and enhance total solution quality.",
      Images:
        "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1731335943/Group_1171275271_k7w6og.png",
      altImages: "healthcare website development ",

      points: [
        "Person Data Administration: Centralized data storage space to manage patient history, therapy plans, and follow-ups effectively.",
        "Automated Interaction: Automated text and email reminders for visits, medicine, and follow-up checkouts.",
        "Information Analytics and Reporting: Advanced analytics tools that help in comprehending patient's actions, enhancing treatment, and driving tactical decisions.",
      ],
    },
    {
      title: "5. E-Pharmacy and E-Prescription Solutions",
      description:
        "With the increase of digital healthcare, e-pharmacy and e prescription services are becoming significantly preferred. Maxify Solution supplies detailed e-pharmacy services that allow individuals to buy medicines online securely.",
      Images:
        "https://res.cloudinary.com/dzt3r5a2b/image/upload/v1731335942/Group_1171275271_1_ccqbps.png",
      altImages: "healthcare designing development ",
      points: [
        "Safeguard Online Purchases: Integrated settlement portals that make sure safe and secure online deals for buying medicines.",
        "Prescription Administration: Easy-to-use interfaces for handling and refilling prescriptions online.",
        "Stock Monitoring: Effective stock administration systems for drug stores to track supply levels and manage orders.",
      ],
    },
    // Add up to four more items here
  ];

  const [currentIndex, setCurrentIndex] = useState([0]);
  useEffect(() => {
    const Interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentArray.length);
    }, 2000);
    return () => clearInterval(Interval);
  }, [contentArray.length]);
  const { title, description, points, Images, altImages } =
    contentArray[currentIndex];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % benifits.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const currentService = benifits[index];

  if (!currentService) {
    return null;
  }

  return (
    <div className="mt-[70px] font-pop">
      <div>
        <SEOComponent
          title="Maxify-Helthcare"
          description="Maxify Web Solutions offers digital marketing services in Noida and Delhi NCR. We help businesses grow with AI-powered marketing strategies."
          keywords="Home, Digital Marketing, Noida, Delhi NCR, Maxify Web Solutions"
        />
      </div>
      <div className="flex flex-col md:flex-row md:space-x-4 mt-8 w-[100%] mx-auto md:w-[90%] lg:w-[90%]">
        {/* Right Side - Visible in Mobile View */}
        <div className="w-full md:w-1/2 py-4 md:p-8 sm:px-3">
          <h3 className="text-3xl md:text-5xl font-bold mt-4 mb-2 sm:text-center md:text-left">
            <span className="text-black  md:leading-[60px]">
              Healthcare Web Development Solutions By{" "}
            </span>
            <span className=" font-medium  leading-[60px]">
              {" "}
              Maxify Solution
            </span>
          </h3>
          <p className="sm:text-base md:text-xl text-justify  text-gray-600 mb-6 ">
            In the fast-evolving landscape of healthcare, the combination of
            electronic technology is no longer an option—it's a necessity. At
            Maxify Option, we understand the distinct difficulties dealt with by
            healthcare providers, healthcare facilities, clinics, and wellness
            tech firms in delivering outstanding client treatment while
            remaining compliant with laws. Our healthcare web development and
            growth solutions are designed to create easy-to-use, safe, secure,
            and durable platforms that boost patient engagement, improve
            operations, and drive growth for healthcare companies.
          </p>
          <a href="tel:+917428309119">
            <button
              className="mt-8 pl-2 rounded-full flex items-center justify-between gap-5 relative px-2 py-2 font-[500] text-black bg-gray-200 isolation-auto z-10
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
            >
              Get Your Design
              <span className=" bg-white rounded-full p-2 transform -rotate-[45deg]">
                <GoArrowRight />
              </span>
            </button>
          </a>
        </div>

        {/* Left Side - Hidden in Mobile View */}
        <div className="flex w-full md:w-1/2 justify-start items-center relative p-2">
          <img
            src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513072/image_350_tmpbbj.png"
            alt="healthcare web development company in noida"
            className="w-[80%] object-cover h-[90%] rounded-xl mx-auto overflow-hidden"
          />
        </div>
      </div>

      {/* second section */}
      <div class="w-[100%] mx-auto md:w-[90%] lg:w-[90%] lg:p-6 mt-5">
        <h3 class="text-3xl lg:text-6xl md:leading-[70px] font-bold text-center md:mb-4">
          Why Select Maxify Solution for <br />
          <span class="text-blue-600">Healthcare Internet Development?</span>
        </h3>
        <div class="flex flex-col lg:flex-row items-center justify-between md:mt-2 space-x-4">
          <div class="md:w-1/2 mb-6 md:mb-0 mt-6 px-6">
            <img
              src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513072/image_351_suj5ua.png"
              alt="hospital web development company in noida"
              class="rounded-lg"
            />
          </div>
          <div class="md:w-1/2 px-6">
            <ul class="list-disc text-justify text-sm md:text-base space-y-3">
              <li class=" text-zinc-800">
                <strong>Patient-Centric Designs:</strong> Prioritizing customer
                experience to ensure simplicity of access and engagement for
                people.
              </li>
              <li class=" text-zinc-800">
                <strong>Governing Compliance:</strong> Complying with all
                pertinent medical care laws such as HIPAA, GDPR, and various
                other data protection regulations.
              </li>
              <li class=" text-zinc-800">
                <strong>Safe and Scalable Platforms:</strong> Developing
                websites and applications that are safe and secure, scalable,
                and enhanced for efficiency.
              </li>
              <li class=" text-zinc-800">
                <strong>Cutting-Edge Innovation:</strong> Leveraging the most
                up-to-date in healthcare web development technologies to use
                innovative functionalities like telemedicine, e-prescriptions,
                and AI-driven analytics.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* 3rd section */}
      <div className="flex flex-col lg:flex-row items-center sm:p-2 md:p-6 bg-background rounded-lg sm:w-full md:w-[90%] mx-auto">
        <div className="lg:w-1/2 p-2 md:p-4 h-[300px] md:h-auto">
          <img
            src={Images}
            alt={altImages}
            className="rounded-lg h-full w-auto object-cover"
          />
        </div>
        <div className="lg:w-1/2 py-4 px-4 md:px-10 h-[700px] md:h-auto">
          <h2 className="text-sm text-[#6C6A72]">Healthcare Services</h2>
          <h3 className=" font-semibold text-lg text-[#2334DE] text-justify font-manrope">
            Our Comprehensive Healthcare Web Development Services
          </h3>
          <h4 className="mt-4 text-base text-justify leading-6 font-semibold text-gray-700 font-dm">
            {title}
          </h4>
          <p className="text-sm text-justify leading-6 text-[#6C6A72] font-dm">
            {description}
          </p>
          <div className="text-sm text-justify leading-6 text-[#6C6A72] list-disc font-dm">
            {points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </div>
        </div>
      </div>
      {/* 4th section */}
      <div class="flex flex-col lg:flex-row items-center justify-between mt-2 space-x-4 sm:w-full md:w-[90%] mx-auto">
        <div class="lg:w-1/2 px-6">
          <h2 className="md:text-5xl sm:text-2xl font-bold text-center md:text-left">
            Advanced Technologies We Make Use Of in Healthcare Web Development
          </h2>
          <p className="text-sm md:text-base leading-7 text-zinc-500 py-3  text-justify">
            At Maxify Solution, we leverage the current technological
            innovations to provide advanced healthcare web development services.
          </p>
          <ul class="list-disc text-justify text-sm space-y-3 px-6 font-sans">
            <li class=" text-zinc-500">
              <strong>Patient-Centric Designs:</strong> Prioritizing customer
              experience to ensure simplicity of access and engagement for
              people.
            </li>
            <li class=" text-zinc-500">
              <strong>Governing Compliance:</strong> Complying with all
              pertinent medical care laws such as HIPAA, GDPR, and various other
              data protection regulations.
            </li>
            <li class=" text-zinc-500">
              <strong>Safe and Scalable Platforms:</strong> Developing websites
              and applications that are safe and secure, scalable, and enhanced
              for efficiency.
            </li>
            <li class=" text-zinc-500">
              <strong>Cutting-Edge Innovation:</strong> Leveraging the most
              up-to-date in healthcare web development technologies to use
              innovative functionalities like telemedicine, e-prescriptions, and
              AI-driven analytics.
            </li>
          </ul>
        </div>

        <div class="lg:w-1/2 mb-6 md:mb-0 mt-6 px-6 relative sm:h-[320px] md:h-[300px] w-full">
          <img
            src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513075/Vector_v8ojeh.png"
            alt="best website designing company for healthcare"
            class=" absolute sm:w-[80%] lg:w-[65%] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <img
            src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513073/image_vsgi2q.png"
            alt="portfolio website for doctors"
            class=" absolute sm:w-[80%] lg:w-[65%] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>

      {/* 6th */}
      <div class="flex flex-col lg:flex-row items-center justify-between space-x-4 sm:w-full md:w-[90%] mx-auto mt-10 p-6">
        <div class="lg:w-1/2 relative sm:h-[320px] md:h-[400px] w-full">
          <img
            src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513060/image_1_mkmwi5.png"
            alt="hearthcare need top it company for solutions"
            className=" object-cover h-full w-full rounded-xl mx-auto overflow-hidden"
          />
        </div>
        <div class="lg:w-1/2 relative sm:h-[320px] md:h-[300px] w-full">
          <div className="flex gap-1 justify-between items-start">
            <div className="md:w-[70%] w-full">
              <h2 className="sm:text-3xl text-center md:text-left md:text-4xl font-bold">
                Key Advantages of Partnering with{" "}
                <span className="text-[#2334DE]"> Maxify Service</span>
              </h2>
              <Link to="/contact">
                <button
                  className="mt-8 sm:mb-4 md:mb-0 py-3 text-[14px] font-[300] px-6 rounded-lg relative text-[white] bg-[#2334DE] isolation-auto z-10 border-2 border-[#2334DE]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[white] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-[#2334DE]"
                >
                  Get Started
                </button>
              </Link>
            </div>
            <div className="w-[30%] py-4 space-y-2 flex-col items-end sm:hidden md:flex">
              <img
                src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513058/image_2_dmpozw.png"
                className="h-[100px]"
                alt="maxify websolution"
              />
              <img
                src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513061/image_3_ld2myz.png"
                className="h-[100px]"
                alt="maxify websolution"
              />
            </div>
          </div>
          <div className="shadow-md bg-white p-4">
            <p className="text-sm md:text-base text-gray-600">
              <span className="font-[600] text-sm md:text-base">
                {benifits[index].title}
              </span>{" "}
              {benifits[index].text}
            </p>
          </div>
        </div>
      </div>

      {/* 7th */}
      <div class="flex flex-col lg:flex-row items-center justify-between sm:w-full md:w-[90%] mx-auto mt-10 p-4 md:p-6">
        <div class="md:w-1/2 mb-6 md:mb-0 mt-6 md:px-6">
          <img
            src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513063/image_4_acwa3p.png"
            alt="doctos website and designinc compnay "
            class="rounded-lg"
          />
        </div>
        <div class="md:w-1/2 md:px-6">
          <h2 className="text-3xl md:text-4xl text-center md:text-left font-bold py-2 leading-10">
            <span className="text-[#2334DE]">Maxify Option:</span> Your Trusted
            Partner in Healthcare Web Growth
          </h2>
          <p class="list-disc text-justify text-sm md:text-base space-y-3 text-gray-500 leading-7">
            At Maxify Option, we are committed to supplying healthcare web
            development services that not only fulfill the present needs of the
            sector but also prepare healthcare companies for future
            difficulties. Whether you are a medical facility wanting to improve
            your electronic presence, a clinic wishing to provide telemedicine
            services, or a health-tech startup with a one-of-a-kind idea, we
            have the experience and expertise to transform your vision into
            reality.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center bg-white md:py-12 px-6 md:px-16">
        {/* Left Section: Image */}
        <div className="relative md:w-1/2 w-full flex justify-center items-center md:rounded-l-lg">
          <img
            src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513078/Mask_group_m9advu.png"
            alt="web development company in noida"
            className="rounded-lg md:rounded-none w-full h-auto object-cover"
          />
        </div>

        {/* Right Section: Text Content */}
        <div className="bg-blue-600 md:w-1/2 w-full p-8 rounded-lg md:rounded-r-lg text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center font-sans">
            Contact Us Today
          </h2>
          <p className="md:text-lg leading-relaxed sm:text-base text-justify">
            Ready to transform your medical care experiment into advanced
            digital remedies? Call Maxify Remedy today to learn more about how
            our healthcare web development services can aid you in accomplishing
            your objectives and staying ahead in this rapidly advancing market.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Healthcare;
