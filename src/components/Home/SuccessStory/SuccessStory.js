import React from "react";
import {
  A11y,
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./SuccessStory.css";

const SuccessStory = () => {
  
  return (
    <div className="container">
      <h3 className="section-title text-center my-4">
        Our <span>Success story</span>
      </h3>

      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          EffectFade,
          Autoplay,
        ]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={true}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="">
            <div className="d-flex justify-content-center">
              <img
                className="swiper-card-img my-4"
                src="https://thegenius.co/dentistry/live/wp-content/uploads/2015/10/testimonial-1.jpg"
                alt=""
              />
            </div>
            <div className="text-center w-50 mx-auto mb-5">
              <p>
                Etusaesent justo dolor, lobortis quobortisnissim pulvinar ac
                Lorem ipsum dolor sit amet,nsectetuer adipiscing et
                loremdovestibmolestie.Fusce et libero
              </p>
              <h5>Mistoy Deo</h5>
              <small>Teeth Whiting</small>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <div className="d-flex justify-content-center">
              <img
                className="swiper-card-img my-4"
                src="https://thegenius.co/dentistry/live/wp-content/uploads/2015/10/testimonial-2.jpg"
                alt=""
              />
            </div>
            <div className="text-center w-50 mx-auto mb-5">
              <p>
                Etusaesent justo dolor, lobortis quobortisnissim pulvinar ac
                Lorem ipsum dolor sit amet,nsectetuer adipiscing et
                loremdovestibmolestie.Fusce et libero
              </p>
              <h5>Mistoy Deo</h5>
              <small>Teeth Whiting</small>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <div className="d-flex justify-content-center">
              <img
                className="swiper-card-img my-4"
                src="https://thegenius.co/dentistry/live/wp-content/uploads/2015/10/testimonial-4.jpg"
                alt=""
              />
            </div>
            <div className="text-center w-50 mx-auto mb-5">
              <p>
                Etusaesent justo dolor, lobortis quobortisnissim pulvinar ac
                Lorem ipsum dolor sit amet,nsectetuer adipiscing et
                loremdovestibmolestie.Fusce et libero
              </p>
              <h5>Mistoy Deo</h5>
              <small>Teeth Whiting</small>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="row my-5">
          <div className="col-12 col-md-10">
          <div className="row d-flex align-items-center">
              <div className="col-md-3 "><img src="https://thegenius.co/dentistry/live2/wp-content/uploads/2015/10/teeth_2.png" alt="" /></div>
              <div className="col-9"><h3>We are dedicated to giving each of our patients the healthy smile they deserve!</h3></div>
          </div>
          </div>
          <div className="col-12 col-md-2 ">
          <button className="carousel-btn">Get Emergency</button>
          </div>
      </div>
    </div>
  );
};

export default SuccessStory;
