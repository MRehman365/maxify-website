import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaQuoteRight } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    image: 'https://www.kevinashleyphotography.com/wp-content/uploads/2015/11/person.jpg',
    quote: 'Maxify Solutions transformed our outdated website into a modern, user-friendly platform that perfectly reflects our brand. Their team was responsive, creative, and incredibly professional throughout the process. We have seen a significant increase in traffic and customer engagement since the redesign!',
    name: 'Amit Sharma, CEO of EcoNest Enterprises',
  },
  {
    image: 'https://www.kevinashleyphotography.com/wp-content/uploads/2015/11/person.jpg',
    quote: 'The digital marketing strategy crafted by Maxify Solutions exceeded our expectations. From SEO to social media campaigns, they helped us grow our online presence and triple our website traffic within six months. Their data-driven approach and consistent updates kept us confident every step of the way!',
    name: 'Riya Malhotra, Founder of Fit & Well Studio',
  },
  {
    image: 'https://www.kevinashleyphotography.com/wp-content/uploads/2015/11/person.jpg',
    quote: 'Maxify Solutions delivered a top-notch mobile app for our business. Their attention to detail and focus on user experience set them apart. Our customers love the seamless functionality, and we’ve seen a remarkable boost in app downloads and user retention.',
    name: 'Karan Singh, Director of GreenMart',
  },
  {
    image: 'https://www.kevinashleyphotography.com/wp-content/uploads/2015/11/person.jpg',
    quote: 'Their graphic design team brought our brand to life! The logo and marketing materials they created have helped us stand out in a crowded market. Their designs are innovative, eye-catching, and perfectly aligned with our brand identity."',
    name: 'Priya Arora, Marketing Manager at Style & Co.',
  },
  {
    image: 'https://www.kevinashleyphotography.com/wp-content/uploads/2015/11/person.jpg',
    quote: 'The 3D models created by Maxify Solutions were nothing short of stunning. Their precision and creativity helped us showcase our architectural designs to clients in a way we couldn’t before. Their work added immense value to our presentations',
    name: 'Rahul Verma, Architect at DreamScape Designs',
  },
];

export default function ClientFeedback() {
  return (
    <div className=" py-16 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">
            <span className="text-gray-900">Client Feedback for  </span>
            <span className="text-[#2334DE]">Maxify Solutions</span>
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
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} style={{height:"auto"}}>
              <div className="border border-gray-300 h-full rounded-lg p-6 shadow-lg relative flex flex-col justify-arround">
                <div className="flex justify-center mb-6">
                  <div className="relative w-32 h-32 rounded-full">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="object-cover w-full h-full rounded-full border-4 border-[#2334DE]"
                    />
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#2334DE] rounded-full flex items-center justify-center">
                  <FaQuoteRight className="text-white w-6 h-6" />
                </div>
                  </div>
                </div>
                <div className="text-center mt-8">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {testimonial.quote}
                  </p>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center">{testimonial.name}</h3>
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
  );
}
