import { useState } from "react";
import { BsClock } from "react-icons/bs";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { formatLongDate } from "../../../utils/formatDateTime";

import Wrapper from "../../Common/Wrapper";
import SliderButtons from "../../Common/SliderButtons";
import Button from "../../Common/Button";

interface Promos {
  title: string
  description: string
  visual: string
  startDate: Date
  endDate: Date
};

const promoData: Promos[] = [
  {
    title: "Makan Hemat di Hari Senin",
    description: "Nikmati diskon spesial 20% setiap Senin di semua menu! Ajak keluarga dan teman-teman untuk menikmati hidangan favorit Anda dengan harga lebih terjangkau. Jangan lewatkan kesempatan ini untuk memulai minggu dengan kenikmatan kuliner yang luar biasa.",
    visual: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-promotion-instagram-design-template-0db5641689dfc028146176cd38f275d7_screen.jpg?ts=1613180197",
    startDate: new Date(),
    endDate: new Date()
  },
  {
    title: "Paket Keluarga Happy Weekend",
    description: "Rayakan akhir pekan bersama keluarga dengan Paket Keluarga Happy Weekend. Dapatkan hidangan lengkap untuk 4 orang hanya dengan Rp 250.000. Menu spesial ini mencakup hidangan pembuka, utama, dan penutup yang pasti memuaskan seluruh anggota keluarga. Hanya tersedia setiap Sabtu dan Minggu!",
    visual: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/todays-special-design-template-6a9d693243d90acf1ee8ba0414a86ace_screen.jpg?ts=1699270428",
    startDate: new Date(),
    endDate: new Date()
  },
  {
    title: "Ladies Night, Diskon 30% untuk Wanita",
    description: "Ladies, ini malam kalian! Setiap Kamis, nikmati diskon 30% untuk semua hidangan dan minuman bagi para wanita. Ajak sahabat-sahabat Anda untuk bersantai dan menikmati hidangan lezat dalam suasana yang nyaman dan menyenangkan. Jangan lewatkan malam spesial ini!",
    visual: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-promotion-instagram-design-template-770fed14ebdcc070ebc1fb1cdf580772_screen.jpg?ts=1641638536",
    startDate: new Date(),
    endDate: new Date()
  }
];

const Promotions = () => {
  const [promos] = useState<Promos[]>(promoData);
  const [promo, setPromo] = useState<Promos>(promos[0]);

  const handleSlideChange = (swiper: SwiperClass) => {
    const currentIndex = swiper.realIndex;

    setPromo(promos[currentIndex]);
  };

  return (
    <Wrapper id="promotions" className="bg-light py-16 lg:py-24">
      <h2 className="mb-8 md:mb-12 font-rabona font-bold text-accent text-center text-3xl lg:text-4xl">Promo Kami</h2>
      <div className="max-w-4xl mx-auto flex flex-col md:bg-white md:rounded-lg md:overflow-hidden md:shadow-lg md:flex-row md:items-center group">
        {/* Information */}
        <div className="p-5 text-center order-2 space-y-4 md:order-1 md:text-left md:basis-1/2 md:max-w-1/2 md:p-10 md:space-y-4">
          <h2 className="text-accent text-xl md:text-2xl font-bold">{promo?.title}</h2>
          <p className="text-sm md:text-base text-primary/60 line-clamp-3">{promo?.description}</p>
          <div>
            <h4 className="text-base md:text-lg font-semibold">Periode Promo:</h4>
            <p className="inline-flex items-center text-sm md:text-base text-primary/60">
              <BsClock className="hidden md:inline text-lg mr-1.5" />
              {formatLongDate(promo?.startDate)} &#x2212; {formatLongDate(promo?.endDate)}
            </p>
          </div>
          <Button>Lihat Detail</Button>
        </div>

        {/* Slider */}
        <Swiper
          spaceBetween={32}
          slidesPerView={1}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          modules={[Autoplay]}
          onSlideChange={handleSlideChange}
          className="w-screen order-1 md:order-2 md:basis-1/2 md:max-w-1/2"
        >
          {promos?.map((promo: Promos, index: number) => (
            <SwiperSlide key={index} className="px-8 md:p-0">
              <img src={promo.visual} alt="Visual" className="w-full transition-all duration-300 group-hover:scale-105" />
            </SwiperSlide>
          ))}
          <SliderButtons
            containerStyles="flex px-3 md:px-6 gap-2 absolute right-0 top-1/2 -translate-y-1/2 z-20 w-full justify-between"
            btnStyles="bg-white hover:bg-accent text-accent hover:text-white text-lg w-10 md:text-2xl md:w-12 aspect-square flex justify-center items-center transition-all"
          />
        </Swiper>
      </div>
    </Wrapper>
  );
};

export default Promotions;