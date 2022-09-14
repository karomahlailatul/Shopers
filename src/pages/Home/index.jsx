import React, { useEffect , Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,Navigation, Pagination, Mousewheel, Keyboard, FreeMode } from "swiper";

import { useNavigate } from 'react-router-dom'

import HomeProductNew from "../../component/HomeProductNew";
import HomeProductPopular from "../../component/HomeProductPopular";

const Home = () => {

  useEffect(() => {
    document.title = 'Shopers';
  });
  
  const navigate = useNavigate()

  return (
    <Fragment>
      <div className="home-page">
      <div className="container col-12 my-5">
        <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
          spaceBetween={30}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 3,
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // mousewheel={true}
          grabCursor={true}
          keyboard={true}
          navigation={true}
          freeMode={true}
          loop={true}
          modules={[Autoplay,Navigation, Pagination, Mousewheel, Keyboard, FreeMode]}
          className="mySwiper"
        >
          <SwiperSlide >
            <img src={require("../../assets/images/promotion/promotion_1.png")} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require("../../assets/images/promotion/promotion_2.png")} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require("../../assets/images/promotion/promotion_1.png")} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require("../../assets/images/promotion/promotion_2.png")} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require("../../assets/images/promotion/promotion_1.png")} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require("../../assets/images/promotion/promotion_2.png")} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require("../../assets/images/promotion/promotion_1.png")} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require("../../assets/images/promotion/promotion_2.png")} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require("../../assets/images/promotion/promotion_1.png")} alt="" />
          </SwiperSlide>
          
        </Swiper>
      
      </div>

      <div className="container col-12 my-5">
        <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
          1400: {
            slidesPerView: 5,
          },
        }}
          spaceBetween={30}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // mousewheel={true} 
          grabCursor={true}
          keyboard={true}
          navigation={true} 
          freeMode={true}
          loop={true}
          modules={[Autoplay,Navigation, Pagination, Mousewheel, Keyboard, FreeMode]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <img onClick={()=>navigate('../category/accessories')} src={require("../../assets/images/category/accessories.png")} alt="" /> 
          </SwiperSlide>
          <SwiperSlide> 
            <img onClick={()=>navigate('../category/bagpack')} src={require("../../assets/images/category/bagpack.png")} alt="" />
          </SwiperSlide>
          <SwiperSlide> 
            <img onClick={()=>navigate('../category/cap')} src={require("../../assets/images/category/cap.png")} alt="" />
          </SwiperSlide>
          <SwiperSlide> 
            <img onClick={()=>navigate('../category/dress')} src={require("../../assets/images/category/dress.png")} alt="" />
          </SwiperSlide>
          <SwiperSlide> 
            <img onClick={()=>navigate('../category/formal_suit')} src={require("../../assets/images/category/formal_suit.png")} alt="" />
          </SwiperSlide>
          <SwiperSlide> 
            <img onClick={()=>navigate('../category/glasses')} src={require("../../assets/images/category/glasses.png")} alt="" />
          </SwiperSlide>
          <SwiperSlide> 
            <img onClick={()=>navigate('../category/handbag')} src={require("../../assets/images/category/handbag.png")} alt="" />
          </SwiperSlide>
          <SwiperSlide> 
            <img onClick={()=>navigate('../category/highheels')} src={require("../../assets/images/category/highheels.png")} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img onClick={()=>navigate('../category/jacket')} src={require("../../assets/images/category/jacket.png")} alt="" />
          </SwiperSlide>
          <SwiperSlide> 
            <img onClick={()=>navigate('../category/pants')} src={require("../../assets/images/category/pants.png")} alt="" />
          </SwiperSlide>
          <SwiperSlide> 
            <img onClick={()=>navigate('../category/shoes')} src={require("../../assets/images/category/shoes.png")} alt="" />
          </SwiperSlide>
          <SwiperSlide> 
            <img onClick={()=>navigate('../category/short')} src={require("../../assets/images/category/short.png")} alt="" />
          </SwiperSlide>
          <SwiperSlide> 
            <img onClick={()=>navigate('../category/socks')} src={require("../../assets/images/category/socks.png")} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img onClick={()=>navigate('../category/t-shirt')} src={require("../../assets/images/category/t-shirt.png")} alt="" />
          </SwiperSlide>
          <SwiperSlide> 
            <img onClick={()=>navigate('../category/tie')} src={require("../../assets/images/category/tie.png")} alt="" />
          </SwiperSlide>
          <SwiperSlide> 
            <img onClick={()=>navigate('../category/wristwatch')} src={require("../../assets/images/category/wristwatch.png")} alt="" /> 
          </SwiperSlide>
        </Swiper>
      </div>


      <HomeProductNew />
      <HomeProductPopular />
      </div>
    </Fragment>
  );
};

export default Home;
