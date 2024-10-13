import React from "react";
import img from "../Assets/Rectangle 4601.png"

const Education = () => {
  return (
    <div className="mt-[70px]">
      <div className="w-full md:w-[90%] lg:w-[80%] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
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
                src="/placeholder.svg"
                alt="Primary school website design"
                width={500}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3]">
              <img
                src="/placeholder.svg"
                alt="Futuristic classroom"
                width={600}
                height={800}
                className="rounded-lg"
              />
            </div>
            <div className="absolute top-0 right-0 w-1/3 -mt-4 -mr-4">
              <img
                src="/placeholder.svg"
                alt="Students collaborating"
                width={200}
                height={200}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-4">
              <p className="text-sm text-justify">
                In today's electronic age, education and learning have
                transcended the traditional classroom. Institutions,
                instructors, and EdTech companies need a robust online presence
                to reach and engage students worldwide. At Maxify Service, we
                focus on education website development customized to satisfy the
                unique needs of schools, universities, and e-learning platforms.
                Our goal is to create engaging, interactive, and user-friendly
                websites that enhance the learning experience and drive academic
                growth.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* section 2 */}
      <div className="w-full md:w-[70%] lg:w-[60%] mx-auto flex flex-col items-center gap-4 p-4">
        <div className="text-center">
          <p className="text-sm text-gray-400 mb-4">Education Services</p>
          <h1 className="text-[#2334de] text-4xl md:text-5xl font-semibold">
            Why Pick Maxify Service for Education Website Development?
          </h1>
        </div>
        <p className="text-xl leading-7 text-[#807e85] text-justify md:px-20">
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
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
          <img
            aria-hidden="true"
            alt="Custom-made Designs"
            src="https://openui.fly.dev/openui/300x200.svg?text=Custom+Designs"
            className="rounded-t-lg"
          />

          <div className="flex flex-col justify-between items-center h-full">
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
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
          <img
            aria-hidden="true"
            alt="User-Friendly Interfaces"
            src="https://openui.fly.dev/openui/300x200.svg?text=User+Friendly"
            className="rounded-t-lg"
          />
          <div className="flex flex-col justify-between items-center h-full">
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
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
          <img
            aria-hidden="true"
            alt="Safe and Certified Platforms"
            src="https://openui.fly.dev/openui/300x200.svg?text=Safe+Platforms"
            className="rounded-t-lg"
          />
          <div className="flex flex-col justify-between items-center h-full">
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
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
          <img
            aria-hidden="true"
            alt="Safe and Certified Platforms"
            src="https://openui.fly.dev/openui/300x200.svg?text=Safe+Platforms"
            className="rounded-t-lg"
          />
          <div className="flex flex-col justify-between items-center ">
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

      {/* section */}
      <div className="bg-white sm:p-4 md:p-10 w-full md:w-[90%] lg:w-[80%] mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl font-bold text-blue-700 mb-4">
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
              src="/path-to-image/ai-technology.png"
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
              src="/path-to-image/ai-technology.png"
              alt="AI Technology"
              className="rounded-lg"
            />
          </div>
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl font-bold text-blue-700 mb-4">
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
      <img src="ig" alt="img" className="h-[100%] w-[100%] z-10" /></div>
      <div className="absolute rounded-lg -z-10 inset-0 bg-gradient-to-br from-purple-600 via-purple-500 to-blue-500 transform -skew-x-12 -left-1/4 w-[100%]" /></div>
    
        <div className="w-full md:w-1/2 space-y-4 text-left p-4">
        <p className="text-purple-500 font-semibold text-xl">MAXIFY SOLUTIONS</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Your Trusted Partner 
            <span className="text-gray-800 font-[500]"> In Education Website Development</span>
          </h1>
          
          <p className="text-sm md:text-lg text-justify text-gray-500 leading-relaxed">
            At Maxify Service, we are dedicated to providing education website development solutions that not only satisfy the existing demands of the industry but also prepare schools for future difficulties. Whether you are an institution seeking to boost your electronic visibility, a college aiming to provide online training courses, or an EdTech startup with a distinct idea, we have the expertise and experience to change your vision into truth.
          </p>
          <img src="" className="w-full h-[100px] object-cover" alt="img here" />
          
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
