import React, { useEffect,   Fragment } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getProductPopularHome } from "../../feature/ProductPopularHomeSlice.js";

import Card from 'react-bootstrap/Card';

const ProductPopularHome = () => {
  const dispatch = useDispatch();
  const { ProductPopularHome } = useSelector((state) => state.ProductPopularHome);
  // console.log(ProductPopularHome);

  useEffect(() => {
    dispatch(getProductPopularHome());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <section>
        <div className="container mt-2 ">
          <div className="row-new">
            <div className="row">
              <div className="col-md-12 justify-content-center">
                <div className="row">
                  <h1 className="fw-bold">Popular</h1>
                  <p className="fs-6 text-muted">Find clothes that are trending recently</p>
                </div>
              </div>
              <div className="col-12 my-3">
                <div className="row d-flex">
                  {ProductPopularHome.map((item, index) => (
                     <Link className="col-xl-2 col-lg-3 col-md-4 col-sm-6 my-2 link-product  " to={`../product/${item.id}`} key={item.id}>
                         <Card className="container border rounded align-items-center ShadowBox">
                          <div key={item.id}>
                          <div className="d-flex justify-content-center out-img-product"><img className="img-product" 
                          // crossOrigin="anonymous" 
                          referrerPolicy="no-referrer"
                          src={item.photo} alt="" /> </div>
                            <h6 className="text-dark fw-bold title-product ">{item.name}</h6>
                            <h6 className="text-danger">$ {item.price}</h6>
                            <p className="fs-6 text-muted">
                              <small>{item.name_store}</small>
                            </p>
                            <img className="mb-3" crossOrigin="anonymous" src={require("../../assets/images/icons/stars.svg")} alt="" />
                          </div>
                      </Card> 
                    </Link>
                  ))}
                 </div>
              </div>
            </div>
          </div>
        </div>
       </section>
    </Fragment>
  );
};

export default ProductPopularHome;
