import React from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Carousel = () => {
  return (
    <div>
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              class="w-full bg-center bg-cover h-[33rem]"
              style={{
                backgroundImage: `url('https://www.universityofcalifornia.edu/sites/default/files/styles/feature_banner_image/public/2022-01/2018_03_12_UCR_day1_post-79.jpg?h=0c170278&itok=6dn4jQxG'`,
              }}
            >
              <div class="flex items-center justify-center w-full h-full bg-gray-600/30">
                <div class="text-center">
                  <h1 class="text-3xl font-semibold text-white lg:text-4xl">Your Dream is Here</h1>
                  <button class="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                    Start Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              class="w-full bg-center bg-cover h-[33rem]"
              style={{
                backgroundImage: `url("https://www.aalto.fi/sites/g/files/flghsv161/files/styles/2_3_1380w_600h_n/public/2018-08/unto_rautio_aalto_0779_weblarge_0.jpg?h=5ca4ce74&itok=ILbK6coz")`,
              }}
            >
              <div class="flex items-center justify-center w-full h-full bg-gray-600/30">
                <div class="text-center">
                  <h1 class="text-3xl font-semibold text-white lg:text-4xl">Build Your Career</h1>
                  <button class="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                    Start Now
                  </button>
                </div>
              </div>
            </div>
            </SwiperSlide>
          <SwiperSlide>
          <div
              class="w-full bg-center bg-cover h-[33rem]"
              style={{
                backgroundImage: `url("https://vt-vtwa-assets.varsitytutors.com/vt-vtwa/uploads/blog_post_images/339/College_Students_in_Recitation_Class.jpg")`,
              }}
            >
              <div class="flex items-center justify-center w-full h-full bg-gray-600/30">
                <div class="text-center">
                  <h1 class="text-3xl font-semibold text-white lg:text-4xl">Your Future is Here</h1>
                  <button class="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                    Start Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Carousel;
