import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import SliderButtons from "../../Common/SliderButtons";
import sampleImage from "../../../assets/gurame-bakar.png";

const FavMenuSlider = () => {
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
      {[1, 2, 3, 4].map((value: number) => (
        <SwiperSlide key={value}>
          <div className="text-center bg-white rounded-lg overflow-hidden duration-300 group">
            <div className="w-full aspect-square overflow-hidden">
              <img src={sampleImage} alt="Menu DSW" className="w-full transition-all duration-300 group-hover:scale-105" />
            </div>
            <div className="substance space-y-3 p-5">
              <h3 className="font-rabona tracking-wide text-2xl font-bold text-primary">Gurame Bakar</h3>
              <p className="text-sm text-primary/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, excepturi. Aperiam nam fugiat doloremque at?</p>
              <p className="text-2xl text-accent font-bold">
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  maximumFractionDigits: 0
                }).format(150000)}
              </p>
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

export default FavMenuSlider;