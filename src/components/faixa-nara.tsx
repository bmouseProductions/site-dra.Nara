import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import faixaNara from "../assets/images/faixa-nara.svg";
import faixaSentir from "../assets/images/faixa-sentir.svg";

const images = [faixaNara, faixaSentir];

export default function Faixa() {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView="auto"
      autoplay={{ delay: 0, disableOnInteraction: false }}
      loop={true}
      speed={2000}
      modules={[Autoplay]}
      className="bg-black"
    >
      {Array(10)
        .fill(null)
        .map((_, index) => (
          <SwiperSlide key={index} className="w-fit">
            <img src={images[index % images.length]} alt="" className="h-10" />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
