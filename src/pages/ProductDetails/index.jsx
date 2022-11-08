import React, { useEffect, useState, Fragment } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./ProductDetails.css";

import btnMin from "../../assets/images/icons/minus.svg";
import btnPlus from "../../assets/images/icons/plus.svg";
import stars from "../../assets/images/icons/stars.svg";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import ProductBySeller from "../ProductBySeller/ProductBySeller.jsx";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [count, setCount] = useState(1);

  const addCountHandler = () => {
    setCount(count + 1);
  };
  const removeCountHandler = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };

  useEffect(() => {
      const getData = async () => {
        await axios
          .get(process.env.REACT_APP_API_BACKEND + "product/" + id)
          .then((response) => {
            setProduct(response.data.data[0]);
            document.title = response.data.data[0].name + " | Shopers";
          })
          .catch((error) => {
            console.log(error);
          });
      };
      getData();
  }, [id]);
  

  return (
    <Fragment>
      
    <div className="product-detail-page">
      <div className="container">
        <div className=" d-flex col-12 my-xl-5 my-lg-5 my-md-4 my-sm-3 link-redirect ">
          <h6 onClick={()=>navigate('../home')} >
            <small>
              Home {">"}&nbsp; 
            </small>
          </h6>
          <h6 onClick={()=>navigate('../category')} >
            <small>
            category {">"}&nbsp;  
            </small>
          </h6>
          <h6 onClick={()=>navigate('../category/'+ product.category_name)} >
            <small>
              {product.category_name}
            </small>
          </h6>
        </div>
        <div className="col-12 my-3 d-xl-flex d-lg-flex d-md-grid d-sm-grid justify-content-between">
          <div className="container col-xxl-5 col-xl-5 col-lg-6 col-md-12 col-sm-12 product-swipers">
            <Swiper loop={true} spaceBetween={10} thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }} modules={[FreeMode, Navigation, Thumbs]} className="mySwiperDisplay">
              <SwiperSlide>
                <img
                
                referrerPolicy="no-referrer"
                //  crossOrigin="anonymous"
                 src={product.photo} alt="" />
              </SwiperSlide>
              {/* <SwiperSlide>
            <img crossOrigin="anonymous" src={product.photo} alt=""  />
          </SwiperSlide> */}
            </Swiper>

            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              loop={false}
              spaceBetween={10}
              onSwiper={setThumbsSwiper}
              watchSlidesProgress={true}
              slidesPerView={5}
              navigation={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiperTumbnails"
            >
              <SwiperSlide>
                <img 
                // crossOrigin="anonymous"
                
                referrerPolicy="no-referrer"
                 src={product.photo}
                  alt="" />
              </SwiperSlide>
              {/* <SwiperSlide>
            <img crossOrigin="anonymous" src={product.photo} alt=""  />
          </SwiperSlide> */}
            </Swiper>
          </div>
          <div className="          col-xxl-7 col-xl-7 col-lg-6 col-md-12 col-sm-12 px-xxl-5  px-xl-4 px-lg-3 ">
            <div className="col-12        mb-xxl-5 mb-xl-5 mb-lg-4 mb-md-4 mb-sm-3 mt-md-2 mt-sm-1">
              <h2 className="fw-bold">{product.name}</h2>
              <h6 className="fw-bold text-muted">
                <small>{product.name_store}</small>
              </h6>
              <img crossOrigin="anonymous" src={require("../../assets/images/icons/stars.svg")} alt="" />
            </div>
            <div className="col-12        my-xxl-5 my-xl-4 my-lg-4 my-md-4 my-sm-4">
              <h6 className="fw-bold text-muted">
                <small>Price</small>
              </h6>
              <h2 className="fw-bold text-danger">$ {product.price}</h2>
            </div>
            <div className="col-12         my-xxl-5 my-xl-4 my-lg-4 my-md-4 my-sm-3">
              <h6 className="fw-bold">
                <small>Color</small>
              </h6>
              <div className="d-flex">
                <input type="radio" className="btn-check" name="optionColor1" id="optionColor1" />
                <label className="btn btn-outline-danger btn-circle" htmlFor="optionColor1">
                  {product.color}
                </label>
              </div>
            </div>
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12  d-flex  my-xxl-4 my-xl-3 my-lg-4 my-md-2 my-sm-2">
              <div className="col-6">
                <h6 className="fw-bold">
                  <small>Size</small>
                </h6>
                <div className=" d-flex justify-content-start align-items-center text-center ">
                  <input type="radio" className="btn-check" name="optionSize1" id="optionSize1" />
                  <label className="btn btn-outline-danger btn-circle" htmlFor="optionSize1">
                    {product.size}
                  </label>
                </div>
              </div>
              <div className="col-6">
                <h6 className="fw-bold">
                  <small>Jumlah</small>
                </h6>
                <div className="d-flex justify-content-start align-items-center text-center ">
                  <button onClick={removeCountHandler} className="btn-min rounded-pill" type="button">
                    <img src={btnMin} className="w-75" alt="..." />
                  </button>
                  <p className="fs-5 mx-auto my-auto"> {count} </p>
                  <button onClick={addCountHandler} className="btn-plus rounded-pill" type="button">
                    <img src={btnPlus} className="w-75" alt="..." />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 d-flex mt-xxl-5 mt-xl-4 mt-lg-5 mt-md-4 mt-sm-4 div-btn-product">
              <div className="col-3 d-grid">
                <button type="button" className="btn btn-outline-secondary rounded-pill">
                  Chat
                </button>
              </div>
              <div className="col-3 d-grid px-2">
                <button type="button" className="btn btn-outline-secondary rounded-pill">
                  Add bag
                </button>
              </div>
              <div className="col-6 d-grid">
                <button type="button" className="btn btn-danger rounded-pill">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="col-12 my-4 mt-md-5 mt-sm-5 ">
            <h2 className="fs-4 fw-bold">Informasi Produk</h2>
          </div>
          <div className="col-12 my-4">
            <h2 className="fs-5 fw-bold">Condition</h2>
            <h2 className="fs-6 fw-bold text-danger">{product.condition}</h2>
          </div>
          <div className="col-12 my-4">
            <h2 className="fs-5 fw-bold">Description</h2>
            <p className="fs-6 text-muted ">
              <small> {product.description}</small>
            </p>
          </div>
          <div className="col-12 my-4">
            <h2 className="fs-4 fw-bold">Product review</h2>
            <div className="container">
              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 d-flex align-items-center">
                <div className="col-6">
                  <div className="col-12 d-flex justify-content-start align-items-end">
                    <h1 className="fs-1 fw-bold">5.0</h1>
                    <p className="fs-6 fw-bold text-muted  ">/ 5</p>
                  </div>
                  <div className="col-12 d-flex justify-content-start align-items-end">
                    <img src={stars} alt="stars" />
                    <img src={stars} alt="stars" />
                    <img src={stars} alt="stars" />
                    <img src={stars} alt="stars" />
                    <img src={stars} alt="stars" />
                  </div>
                </div>

                <div className="col-6 my-auto">
                  <div className="col-12 d-flex align-items-center text-center">
                    <div className="col-1">
                      <img src={stars} alt="stars" />
                    </div>
                    <div className="col-1 mx-2">
                      <p className="fs-6 fw-bold text-muted my-auto">5</p>
                    </div>
                    <div className="col-8 mx-2 ">
                      <div className="progress">
                        <div className="progress-bar-5 bg-danger" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                    <div className="col-1">
                      <p className="fs-6 fw-bold text-muted my-auto mx-2">4</p>
                    </div>
                  </div>
                  <div className="col-12 d-flex align-items-center text-center">
                    <div className="col-1">
                      <img src={stars} alt="stars" />
                    </div>
                    <div className="col-1 mx-2">
                      <p className="fs-6 fw-bold text-muted my-auto">4</p>
                    </div>
                    <div className="col-8 mx-2 ">
                      <div className="progress">
                        <div className="progress-bar-4 bg-danger" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                    <div className="col-1">
                      <p className="fs-6 fw-bold text-muted my-auto mx-2">0</p>
                    </div>
                  </div>
                  <div className="col-12 d-flex align-items-center text-center">
                    <div className="col-1">
                      <img src={stars} alt="stars" />
                    </div>
                    <div className="col-1 mx-2">
                      <p className="fs-6 fw-bold text-muted my-auto">3</p>
                    </div>
                    <div className="col-8 mx-2 ">
                      <div className="progress">
                        <div className="progress-bar-3 bg-danger" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                    <div className="col-1">
                      <p className="fs-6 fw-bold text-muted my-auto mx-2">0</p>
                    </div>
                  </div>
                  <div className="col-12 d-flex align-items-center text-center">
                    <div className="col-1">
                      <img src={stars} alt="stars" />
                    </div>
                    <div className="col-1 mx-2">
                      <p className="fs-6 fw-bold text-muted my-auto">2</p>
                    </div>
                    <div className="col-8 mx-2 ">
                      <div className="progress">
                        <div className="progress-bar-2 bg-danger" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                    <div className="col-1">
                      <p className="fs-6 fw-bold text-muted my-auto mx-2">0</p>
                    </div>
                  </div>
                  <div className="col-12 d-flex align-items-center text-center">
                    <div className="col-1">
                      <img src={stars} alt="stars" />
                    </div>
                    <div className="col-1 mx-2">
                      <p className="fs-6 fw-bold text-muted my-auto">1</p>
                    </div>
                    <div className="col-8 mx-2 ">
                      <div className="progress">
                        <div className="progress-bar-1 bg-danger" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                    <div className="col-1">
                      <p className="fs-6 fw-bold text-muted my-auto mx-2">0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProductBySeller />
      </div></div>
    </Fragment>
  );
};

export default ProductDetails;
