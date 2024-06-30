import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import sampleProfile from "../../../assets/ryu-alvano.jpg";
import SliderButtons from "./SliderButtons";
import { FaStar } from "react-icons/fa6";

const TestimonialSlider = () => {
  return (
    <Swiper
      spaceBetween={32}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        }
      }}
      grabCursor
      centeredSlides
      loop
      modules={[Pagination]}
    >
      {[1, 2, 3, 4, 5, 6].map((value: number) => (
        <SwiperSlide key={value}>
          <div className="bg-white p-10 space-y-6 rounded-lg">
            {/* Profile */}
            <div className="flex items-center gap-4">
              <img src={sampleProfile} alt="Profile" className="h-12" />
              <div>
                <h5 className="font-bold text-lg text-primary">John Doe</h5>
                <p className="text-primary">Jakarta Utara, Indonesia</p>
              </div>
            </div>
            {/* Comment */}
            <q className="block text-sm text-primary/60 font-medium leading-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ullam quis optio sit quaerat error perferendis, voluptatibus sint laborum laboriosam!</q>
            {/* Rating */}
            <div className="flex gap-1.5 text-secondary">
              {[1, 2, 3, 4, 5].map(num => <FaStar key={num} />)}
            </div>
          </div>
        </SwiperSlide>
      ))}
      <SliderButtons
        containerStyles="flex px-3 lg:px-6 gap-2 absolute right-0 bottom-1/2 translate-y-1/2 z-20 w-full justify-between"
        btnStyles="bg-accent hover:bg-accent-hover text-white text-lg w-10 lg:text-2xl lg:w-12 aspect-square flex justify-center items-center transition-all"
      />
    </Swiper>
  );
};

export default TestimonialSlider;