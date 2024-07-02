import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const PromoSlider = () => {
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
      centeredSlides
      loop
      modules={[Pagination]}
    >
      {[1, 2, 3].map((value: number) => (
        <SwiperSlide key={value}>
          <div>
            
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PromoSlider;