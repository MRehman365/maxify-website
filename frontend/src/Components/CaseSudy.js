import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaQuoteRight } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const CaseSudy = () => {
  return (
    <div className='max-w-7xl mx-auto p-4 md:p-8 text-gray-600'>
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Digital Marketing Success: Case Studies from  <span className='text-[#2334DE]'>  Maxify Solutions</span></h2>
    <p className='text-center text-gray-600 mb-8'>Here are answers to some of the most common questions clients ask us about our services:</p>
    <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          onDurationChange={2000}
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
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1,
            },
          }}
          className="swiper-container h-full"
        >
       <SwiperSlide className="w-full">
      <div className="mx-auto grid md:grid-cols-2 gap-4 md:gap-8  items-center">
        {/* Left side with image */}
        <div className="border border-gray-600 aspect-square flex items-center justify-center">
      <img src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513525/1_a07tse.webp" className='h-full w-full' alt="" />
        </div>

        {/* Right side with content */}
        <div className=" space-y-6">
          <h1 className="text-black text-3xl md:text-4xl font-bold leading-tight">
           <span className='text-[#2334DE]'> Case Study 1:</span> Small Business Boosts Revenue by 200% with SEO
          </h1>

          <div className="space-y-2 ">
            <p><span className="font-semibold">Client:</span> A an eye hospital looking to expand its reach beyond walk-in customers.</p>
            <p><span className="font-semibold">Challenge:</span> Limited online presence and low search engine rankings.</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-gray-800 text-2xl font-bold">Our Solution:</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Conducted keyword research to identify local SEO opportunities.</li>
              <li>Optimized the website with targeted keywords, meta tags, and content.</li>
              <li>Launched a Google My Business profile to capture local search traffic.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-gray-800 text-2xl font-bold">Results:</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Achieved a 250% increase in website traffic within 6 months.</li>
              <li>Secured top rankings for local keywords like "eye hospital in patel nagar."</li>
              <li>Boosted online and offline revenue by 200%.</li>
            </ul>
          </div>
        </div>
      </div>
    </SwiperSlide>
       <SwiperSlide className="w-full">
      <div className="mx-auto grid md:grid-cols-2 gap-4 md:gap-8  items-center">
        {/* Left side with image */}
        <div className="border border-gray-600 aspect-square flex items-center justify-center">
      <img src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513525/1_a07tse.webp" className='h-full w-full' alt="" />
        </div>

        {/* Right side with content */}
        <div className=" space-y-6">
          <h1 className="text-black text-3xl md:text-4xl font-bold leading-tight">
           <span className='text-[#2334DE]'> Case Study 1:</span> Small Business Boosts Revenue by 200% with SEO
          </h1>

          <div className="space-y-2 ">
            <p><span className="font-semibold">Client:</span> A an eye hospital looking to expand its reach beyond walk-in customers.</p>
            <p><span className="font-semibold">Challenge:</span> Limited online presence and low search engine rankings.</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-gray-800 text-2xl font-bold">Our Solution:</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Conducted keyword research to identify local SEO opportunities.</li>
              <li>Optimized the website with targeted keywords, meta tags, and content.</li>
              <li>Launched a Google My Business profile to capture local search traffic.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-gray-800 text-2xl font-bold">Results:</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Achieved a 250% increase in website traffic within 6 months.</li>
              <li>Secured top rankings for local keywords like "eye hospital in patel nagar."</li>
              <li>Boosted online and offline revenue by 200%.</li>
            </ul>
          </div>
        </div>
      </div>
    </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default CaseSudy
