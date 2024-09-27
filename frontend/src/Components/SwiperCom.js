import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import './Style.css';

// Import required modules
import { EffectCoverflow, Navigation } from 'swiper/modules';

import img3 from "../Assets/contact us/image (17).webp"
import img4 from "../Assets/contact us/image (28).webp"
import img5 from "../Assets/contact us/image (29).webp"
import img6 from "../Assets/contact us/image (30).webp"
import img7 from "../Assets/contact us/image (31).webp"
export default function App() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}  // Shows 5 slides at a time
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 400,   // Increase depth for center slide
          modifier: 1,
          slideShadows: true,
        }}
        navigation={true} // Add left and right arrows
        breakpoints={{
          640: {
            slidesPerView: 1, // Show one slide at a time for small screens
            centeredSlides: true,
          },
          768: {
            slidesPerView: 3, // Show 3 slides at a time for medium screens
          },
          1024: {
            slidesPerView: 5, // Show 5 slides at a time for large screens
          },
        }}
        modules={[EffectCoverflow, Navigation]}
        className="mySwiper p-4"
      >
        <SwiperSlide className="mySwiper p-4">
          <img src={img3} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="Slide 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="Slide 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="Slide 3" />
        </SwiperSlide>
        {/* Add more SwiperSlides if needed */}
      </Swiper>
    </>
  );
}
