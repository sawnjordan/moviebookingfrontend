import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import banner1 from "../../assets/banner/banner1.jpg";
import banner2 from "../../assets/banner/banner2.jpg";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Image } from "react-bootstrap";

const width = window.innerWidth;
const height = window.innerHeight;
const HomeSlider = () => {
  const [banners, setBanners] = useState([
    {
      imgUrl: banner1,
    },
    {
      imgUrl: banner2,
    },
  ]);

  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      {banners.map((banner, index) => {
        return (
          <SwiperSlide key={index}>
            <Image
              src={banner.imgUrl}
              alt=""
              width={width}
              height={height / 2}
              style={{
                objectFit: "cover",
              }}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HomeSlider;
