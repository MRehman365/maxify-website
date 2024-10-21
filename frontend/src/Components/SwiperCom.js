import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import './Style.css';

// Import required modules
import { EffectCoverflow, Navigation } from 'swiper/modules';

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
          <img src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513313/image_17_q6wqwe.webp" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513321/image_28_o2ltfe.webp" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513323/image_29_cre5ig.webp" alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513324/image_30_vxa35m.webp" alt="Slide 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513325/image_31_xmv9rc.webp" alt="Slide 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1729513323/image_29_cre5ig.webp" alt="Slide 3" />
        </SwiperSlide>
        {/* Add more SwiperSlides if needed */}
      </Swiper>
    </>
  );
}
