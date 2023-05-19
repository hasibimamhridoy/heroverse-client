import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./BannerSlider.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

const BannerSlider = () => {
  
  return (
    <div  className="h-[40vh] lg:h-[85vh]">
      <Swiper
        pagination={{
          type: "progressbar",
          className: "swiper-pagination-progressbar-fill",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className=""
      >
        <SwiperSlide>
          <div className="flex relative justify-center w-full h-full items-center">
            <img
              className="w-full opacity-40 h-full object-contain absolute"
              src="https://bbts1.azureedge.net/site-images/p/2022/09/1611a3b5-3f7b-4130-b4dd-ff3b81fbfc91.jpg"
              alt=""
            />
            <div className="lg:space-y-5 space-y-2 absolute">
              <div className="title " data-swiper-parallax="-300">
                <h1 className="lg:text-4xl text-lg text-purple-400 font-semibold">
                  Marvel Toys
                </h1>
              </div>

              <div className="" data-swiper-parallax="-100">
                <p className="text-sm text-purple-200 lg:w-2/4 lg:text-justify mx-auto">
                  HeroVerse Toys is your ultimate destination for action figures
                  from Marvel, Avengers, Star Wars, Transformers, and more.
                  Discover a world of legendary heroes and iconic characters,
                  carefully curated for collectors and fans alike.
                </p>
              </div>

              <div className="pt-3 lg:pt-0" data-swiper-parallax="-100">
                <button
                  type="button"
                  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  <Link to="/allToys">Marvel Toys</Link>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex relative justify-center w-full h-full items-center">
            <img
              className="w-full opacity-40 h-full object-contain absolute"
              src="https://bbts1.azureedge.net/images/p/full/2023/02/21d943cf-ce7b-4a90-956c-f3359f686951.jpg"
              alt=""
            />
            <div className="lg:space-y-5 space-y-2 absolute">
              <div className="title " data-swiper-parallax="-300">
                <h1 className="lg:text-4xl text-lg text-purple-400 font-semibold">
                  Avengers Toys
                </h1>
              </div>

              <div className="" data-swiper-parallax="-100">
                <p className="text-sm text-purple-200 lg:w-2/4 lg:text-justify mx-auto">
                  HeroVerse Toys is your ultimate destination for action figures
                  from Marvel, Avengers, Star Wars, Transformers, and more.
                  Discover a world of legendary heroes and iconic characters,
                  carefully curated for collectors and fans alike.
                </p>
              </div>

              <div className="pt-3 lg:pt-0" data-swiper-parallax="-100">
                <button
                  type="button"
                  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  <Link to="/allToys">Avengers Toys</Link>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex relative justify-center w-full h-full items-center">
            <img
              className="w-full opacity-40 h-full object-contain absolute"
              src="https://bbts1.azureedge.net/images/p/full/2020/05/6e97181a-3468-4e72-b4ca-c606bd7582f7.jpg"
              alt=""
            />
            <div className="lg:space-y-5 space-y-2 absolute">
              <div className="title " data-swiper-parallax="-300">
                <h1 className="lg:text-4xl text-lg text-purple-400 font-semibold">
                  Star Wars Toys
                </h1>
              </div>

              <div className="" data-swiper-parallax="-100">
                <p className="text-sm text-purple-200 lg:w-2/4 lg:text-justify mx-auto">
                  HeroVerse Toys is your ultimate destination for action figures
                  from Marvel, Avengers, Star Wars, Transformers, and more.
                  Discover a world of legendary heroes and iconic characters,
                  carefully curated for collectors and fans alike.
                </p>
              </div>

              <div className="pt-3 lg:pt-0" data-swiper-parallax="-100">
                <button
                  type="button"
                  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  <Link to="/allToys">Avengers Toys</Link>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex relative justify-center w-full h-full items-center">
            <img
              className="w-full opacity-40 h-full object-contain absolute"
              src="https://bbts1.azureedge.net/images/p/full/2022/02/c42cd60e-be49-47b3-b7d1-da3e7208ee1c.jpg"
              alt=""
            />
            <div className="lg:space-y-5 space-y-2 absolute">
              <div className="title " data-swiper-parallax="-300">
                <h1 className="lg:text-4xl text-lg text-purple-400 font-semibold">
                  Transformers Toys
                </h1>
              </div>

              <div className="" data-swiper-parallax="-100">
                <p className="text-sm text-purple-200 lg:w-2/4 lg:text-justify mx-auto">
                  HeroVerse Toys is your ultimate destination for action figures
                  from Marvel, Avengers, Star Wars, Transformers, and more.
                  Discover a world of legendary heroes and iconic characters,
                  carefully curated for collectors and fans alike.
                </p>
              </div>

              <div className="pt-3 lg:pt-0" data-swiper-parallax="-100">
                <button
                  type="button"
                  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  <Link to="/allToys">Transformers Toys</Link>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
