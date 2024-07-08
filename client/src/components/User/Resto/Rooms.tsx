import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

import Wrapper from "../../Common/Wrapper";
import Container from "../../Common/Container";
import sampleImg from "../../../assets/gurame-bakar.png";
import { useState } from "react";

interface VIPRoom {
  photo: string
  title: string
  details: string
}

const roomsData: VIPRoom[] = [
  {
    photo: sampleImg,
    title: "Ruang VIP 1",
    details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia recusandae temporibus inventore tenetur ipsam, consequuntur laudantium, maiores minima similique dolor vitae consectetur dicta tempora neque corrupti animi vel? Necessitatibus aperiam eius recusandae reprehenderit animi rerum."
  },
  {
    photo: sampleImg,
    title: "Ruang VIP 2",
    details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia recusandae temporibus inventore tenetur ipsam, consequuntur laudantium, maiores minima similique dolor vitae consectetur dicta tempora neque corrupti animi vel? Necessitatibus aperiam eius recusandae reprehenderit animi rerum."
  },
  {
    photo: sampleImg,
    title: "Ruang VIP 2",
    details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia recusandae temporibus inventore tenetur ipsam, consequuntur laudantium, maiores minima similique dolor vitae consectetur dicta tempora neque corrupti animi vel? Necessitatibus aperiam eius recusandae reprehenderit animi rerum."
  }
]

const Rooms = () => {
  const [hoverIndex, setHoverIndex] = useState<number>(0);

  return (
    <Wrapper id="rooms">
      <Container>
        <h2>Ruang VIP</h2>
        {/* Card bisa dibuat bagi 3 gitu hover tengah muncul text atau bikin 3 card bawah detail singkat */}
        {/* Room Slider */}
        <div className="flex gap-x-2.5">
          {roomsData?.map((room: VIPRoom, index: number) => (
            <div key={`vip-${index}`} className="basis-1/3">
              {/* DESKTOP */}
              <img src={room.photo} alt={room.title} className="w-full" />
              {/* Substance */}
              <div>
                <h4>VIP Lantai 1</h4>
                <ul>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Wrapper>
  );
};

export default Rooms;