import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaQuoteRight } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const blogs = [
    {
      image: 'https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512677/image_2_fcpwas.png',
      quote: 'Maxify Solutions transformed our outdated website into a modern, user-friendly platform that perfectly reflects our brand. Their team was responsive, creative, and incredibly professional throughout the process. We have seen a significant increase in traffic and customer engagement since the redesign!',
      name: 'Amit Sharma, CEO of EcoNest Enterprises',
    },
    {
      image: 'https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512676/image_4_vpcrbk.png',
      quote: 'The digital marketing strategy crafted by Maxify Solutions exceeded our expectations. From SEO to social media campaigns, they helped us grow our online presence and triple our website traffic within six months. Their data-driven approach and consistent updates kept us confident every step of the way!',
      name: 'Riya Malhotra, Founder of Fit & Well Studio',
    },
    {
      image: 'https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512676/image_4_vpcrbk.png',
      quote: 'Maxify Solutions delivered a top-notch mobile app for our business. Their attention to detail and focus on user experience set them apart. Our customers love the seamless functionality, and we’ve seen a remarkable boost in app downloads and user retention.',
      name: 'Karan Singh, Director of GreenMart',
    },
    {
      image: 'https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512676/image_4_vpcrbk.png',
      quote: 'Their graphic design team brought our brand to life! The logo and marketing materials they created have helped us stand out in a crowded market. Their designs are innovative, eye-catching, and perfectly aligned with our brand identity."',
      name: 'Priya Arora, Marketing Manager at Style & Co.',
    },
    {
      image: 'https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729512678/image_zm2kh5.png',
      quote: 'The 3D models created by Maxify Solutions were nothing short of stunning. Their precision and creativity helped us showcase our architectural designs to clients in a way we couldn’t before. Their work added immense value to our presentations',
      name: 'Rahul Verma, Architect at DreamScape Designs',
    },
  ];
const BolgsSlider = () => {
  return (
    <div className=" py-16 px-4 min-h-screen">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-3">
          <span className="text-gray-900">Our Blogs  </span>
          {/* <span className="text-[#2334DE]">Maxify Solutions</span> */}
        </h2>
        <p className='text-gray-600'>At Maxify Solutions, we take pride in building lasting relationships with our clients by delivering exceptional results. Here’s what some of our satisfied clients have to say about their experience working with us:</p>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{
          clickable: true,
          // bulletClass: `swiper-pagination-bullet bg-[#FF6B2B] opacity-50 w-3 h-3`,
          // bulletActiveClass: `swiper-pagination-bullet-active opacity-100`,
        }}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="swiper-container h-full"
      >
        {blogs.map((testimonial, index) => (
          <SwiperSlide key={index} style={{height:"auto"}}>
            <div className="border border-gray-300 h-full rounded-lg shadow-lg relative flex flex-col justify-arround">
              <div className="flex justify-center ">
                <div className="relative h-[250px] w-full">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="mt-3 p-3 flex flex-col justify-between h-full">
              <div>
              <h3 className="text-xl font-semibold text-gray-800 text-center ">{testimonial.name}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {testimonial.quote}
                </p>
                </div>
                <p className='text-[#2334DE]'>Read More</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <p className="text-center text-gray-300 mt-12 max-w-3xl mx-auto">
        Our Ad Agency team is comprised of savvy entrepreneurs, marketers and industry experts,
        who bring their years of experience together to help businesses grow successfully.
      </p> */}
    </div>
  </div>
  )
}

export default BolgsSlider
