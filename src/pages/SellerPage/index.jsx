import React, { useEffect, useState, Fragment , } from "react";
// import {useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import SellerPageCreateProduct from "../SellerPageCreateProduct/SellerPageCreateProduct.jsx";
// import SellerPageTabOrder from "../SellerPageTabOrder/SellerPageTabOrder.jsx";
import SellerPageTabProduct from "../SellerPageTabProduct/SellerPageTabProduct.jsx";
import SellerPageTabProfile from "../SellerPageTabProfile/SellerPageTabProfile.jsx";
import "./SellerPage.css";

import editProfileIcon from "../../assets/images/icons/edit.svg";
import SellerProfileIcon from "../../assets/images/icons/house-door.svg";
import SellerProductIcon from "../../assets/images/icons/box-seam.svg";
import SellerOrderIcon from "../../assets/images/icons/order.svg";

const SellerPage = () => {
  // boxerid
  // const id = "affae220-43c2-4011-abbb-12cae8145cc9";
  const id = localStorage.getItem("id");
  // shoescomp
  // const id = "9f7032af-5c14-4bb1-95ae-3e91b8e7faf4"
  // kaos ind
  // const id = "963d6a93-1649-42c7-9316-7639a97377cb"
  // const {id} = useParams()
  // console.log(id);
  const [seller, setSeller] = useState([]);

  const [statusEdit, setStatusEdit] = useState(false);

  // const navigate = useNavigate();
  const getSellerPage = async () => {
    await axios
      .get(process.env.REACT_APP_API_BACKEND + "seller/" + id)
      .then((response) => {
        setSeller(response.data.data[0]);
        // console.log(response.data.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  

  useEffect(() => {
    getSellerPage();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <div className="container container-profile-seller">
        <div className="col-12 d-xl-flex d-lg-flex d-md-grid d-sm-grid">
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 my-xl-5 my-lg-5 mt-md-5 mt-sm-5">
            <div className="col-12 d-flex mx-auto profile-seller-card">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 d-flex justify-content-center logo-profile-middle">
                <img className=""
                //  crossOrigin="anonymous" 
                referrerPolicy="no-referrer"
                src={seller.logo} alt="" />
              </div>
              <div className="col-xl-8 col-lg-8 col-md-6 col-sm-6 my-auto edit-profile-middle">
                <p className="my-auto fw-bold">{seller.name_store}</p>
              
                <div className="my-auto" onClick={() => setStatusEdit(true)}>
                  <input type="checkbox" className="btn-check" id="btn-check-2-outlined" autoComplete="off" />
                  <label className="" htmlFor="btn-check-2-outlined">
                    <img className="me-2" src={editProfileIcon} alt="" />
                    <small>Change profile</small>
                  </label>
                </div>
              </div>
            </div>
            <div className="col-12 my-xl-5 my-lg-5 mt-md-5 mt-sm-5">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <ul className="list-unstyled ps-0">
                      <div className="nav nav-pills d-grid" id="v-pills-tab" role="tablist" aria-orientation="horizontal">
                        <li className="mb-1">
                          <div className="d-flex justify-content-between">
                            <button className="nav-link d-flex justify-content-start collapsed px-n5" data-bs-toggle="collapse" data-bs-target="#store-collapse" aria-expanded="true">
                              <div className="ms-1 me-2 ico-profile d-flex justify-content-center">
                                <img className="w-50" src={SellerProfileIcon} alt="" />
                              </div>
                              <span className="label-sidebar my-auto">Store</span>
                            </button>
                            <button className=" btn-toggle rounded collapsed" data-bs-toggle="collapse" data-bs-target="#store-collapse" aria-expanded="true"></button>
                          </div>

                          <div className="collapse show" id="store-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                              <li>
                                <button
                                  href="#"
                                  className="nav-link rounded ms-5 active"
                                  id="v-pills-profile-tab"
                                  data-bs-toggle="pill"
                                  data-bs-target="#v-pills-profile"
                                  type="button"
                                  role="tab"
                                  aria-controls="v-pills-profile"
                                  aria-selected="true"
                                >
                                  Store Profile
                                </button>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="mb-1">
                          <div className="d-flex justify-content-between">
                            <button className="nav-link  d-flex justify-content-start collapsed px-n5" data-bs-toggle="collapse" data-bs-target="#product-collapse" aria-expanded="false">
                              <div className="ms-1 me-2 ico-product d-flex justify-content-center">
                                <img className="w-50" src={SellerProductIcon} alt="" />
                              </div>
                              <label className="label-sidebar my-auto">Product</label>
                            </button>
                            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#product-collapse" aria-expanded="false"></button>
                          </div>

                          <div className="collapse" id="product-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                              <li>
                                <button
                                  href="#"
                                  className="nav-link rounded ms-5"
                                  id="v-pills-product-tab"
                                  data-bs-toggle="pill"
                                  data-bs-target="#v-pills-product"
                                  type="button"
                                  role="tab"
                                  aria-controls="v-pills-product"
                                  aria-selected="true"
                                >
                                  My Products
                                </button>
                                <button
                                  href="#"
                                  className="nav-link rounded ms-5"
                                  id="v-pills-sellproduct-tab"
                                  data-bs-toggle="pill"
                                  data-bs-target="#v-pills-sellproduct"
                                  type="button"
                                  role="tab"
                                  aria-controls="v-pills-sellproduct"
                                  aria-selected="true"
                                >
                                  Selling Products
                                </button>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="mb-1">
                          <div className="d-flex justify-content-between">
                            <button className="nav-link  d-flex justify-content-start collapsed px-n5" data-bs-toggle="collapse" data-bs-target="#order-collapse" aria-expanded="false">
                              <div className="ms-1 me-2 ico-order d-flex justify-content-center">
                                <img className="w-50" src={SellerOrderIcon} alt="" />
                              </div>
                              <span className="label-sidebar my-auto">Order</span>
                            </button>
                            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#order-collapse" aria-expanded="false"></button>
                          </div>

                          <div className="collapse" id="order-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                              <li>
                                <button href="#" className="nav-link rounded ms-5" id="v-pills-order-tab" data-bs-toggle="pill" data-bs-target="#v-pills-order" type="button" role="tab" aria-controls="v-pills-order" aria-selected="true">
                                  My order
                                </button>
                                <button
                                  href="#"
                                  className="nav-link rounded ms-5"
                                  id="#v-pills-cancel-tab"
                                  data-bs-toggle="pill"
                                  data-bs-target="#v-pills-cancel"
                                  type="button"
                                  role="tab"
                                  aria-controls="#v-pills-cancel"
                                  aria-selected="true"
                                >
                                  Cancel order
                                </button>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 bg-light">
            <div className="container">
              <div className="col-12 w-auto bg-white mx-3 my-5 py-3 px-3">
                <div className="tab-content" id="v-pills-tabContent">
                
                    
                  <SellerPageTabProfile id={id} 
                  name_store={seller.name_store} 
                  logo={seller.logo} 
                  address={seller.address} 
                  phone={seller.phone} 
                  description={seller.description} 
                  statusEdit={statusEdit}
                  setStatusEdit={setStatusEdit}
                  setSellerPage={getSellerPage} />

                  <SellerPageTabProduct id={id} />

                  <SellerPageCreateProduct id={id} />

                  {/* <SellerPageTabOrder /> */}
                  
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SellerPage;
