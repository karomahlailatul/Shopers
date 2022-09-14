import React, { useEffect, Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Autoplay, Navigation, Pagination, Mousewheel, Keyboard, FreeMode } from "swiper";

import { useNavigate } from "react-router-dom";

import HomeProductPopular from "../../component/HomeProductPopular";

const Category = () => {
  useEffect(() => {
    document.title = "Find All Product | Shopers";
  });

  const navigate = useNavigate();

  return (
    <Fragment>
      <div className="container col-12 my-5 category-page ">
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 2,

              grid: { rows: 30, fill: "row" },
            },
            576: {
              slidesPerView: 2,

              grid: { rows: 30, fill: "row" },
            },
            768: {
              slidesPerView: 3,

              grid: { rows: 30, fill: "row" },
            },
            992: {
              slidesPerView: 4,
              grid: { rows: 30, fill: "row" },
            },
            1200: {
              slidesPerView: 5,
              grid: { rows: 30, fill: "row" },
            },
            1400: {
              slidesPerView: 6,
              grid: { rows: 30, fill: "row" },
            },
          }}
          spaceBetween={30}
          // autoplay={{
          //   delay: 5000,
          //   disableOnInteraction: false,
          // }}
          // pagination={{
          //   clickable: true,
          // }}
          // mousewheel={true}
          // keyboard={true}
          // navigation={true}
          freeMode={true}
          // loop={true}
          modules={[Grid, Autoplay, Navigation, Pagination, Mousewheel, Keyboard, FreeMode]}
          className="mySwiperX"
        >
          <SwiperSlide>
            <img className="link-redirect" onClick={() => navigate("../category/accessories")} src={require("../../assets/images/category/accessories.png")} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="link-redirect" onClick={() => navigate("../category/bagpack")} src={require("../../assets/images/category/bagpack.png")} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="link-redirect" onClick={() => navigate("../category/cap")} src={require("../../assets/images/category/cap.png")} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="link-redirect" onClick={() => navigate("../category/dress")} src={require("../../assets/images/category/dress.png")} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="link-redirect" onClick={() => navigate("../category/formal_suit")} src={require("../../assets/images/category/formal_suit.png")} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="link-redirect" onClick={() => navigate("../category/glasses")} src={require("../../assets/images/category/glasses.png")} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="link-redirect" onClick={() => navigate("../category/handbag")} src={require("../../assets/images/category/handbag.png")} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="link-redirect" onClick={() => navigate("../category/highheels")} src={require("../../assets/images/category/highheels.png")} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="link-redirect" onClick={() => navigate("../category/jacket")} src={require("../../assets/images/category/jacket.png")} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="link-redirect" onClick={() => navigate("../category/pants")} src={require("../../assets/images/category/pants.png")} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="link-redirect" onClick={() => navigate("../category/shoes")} src={require("../../assets/images/category/shoes.png")} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="link-redirect" onClick={() => navigate("../category/short")} src={require("../../assets/images/category/short.png")} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="link-redirect" onClick={() => navigate("../category/socks")} src={require("../../assets/images/category/socks.png")} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="link-redirect" onClick={() => navigate("../category/t-shirt")} src={require("../../assets/images/category/t-shirt.png")} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="link-redirect" onClick={() => navigate("../category/tie")} src={require("../../assets/images/category/tie.png")} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="link-redirect" onClick={() => navigate("../category/wristwatch")} src={require("../../assets/images/category/wristwatch.png")} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <HomeProductPopular />
    </Fragment>
  );
};

export default Category;
