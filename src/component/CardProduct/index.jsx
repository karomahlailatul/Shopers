import React, { Fragment } from "react";

import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

import stars from "../../assets/images/icons/stars.svg";

const CardProduct = (valueDispatch) => {
  return (
    <Fragment>
      {valueDispatch.valueDispatch.map((item) => (
        <Link className="col-xl-2 col-lg-3 col-md-4 col-sm-6 my-2 link-product " to={`../product/${item.id}`} key={item.id}>
          <Card className="container border rounded align-items-center ShadowBox">
            <div key={item.id}>
              <div className="d-flex justify-content-center out-img-product">
                <img className="img-product" 
                referrerPolicy="no-referrer"
                // crossOrigin="anonymous" 
                src={item.photo} alt="" />
              </div>
              <h6 className="text-dark fw-bold title-product ">{item.name}</h6>
              <h6 className="text-danger ">$ {item.price}</h6>
              <h6 className="text-muted ">
                <small>{item.name_store}</small>
              </h6>
              <div className="col-12 d-flex justify-content-start align-items-center my-2">
                <img src={stars} alt="stars" />
                <img src={stars} alt="stars" />
                <img src={stars} alt="stars" />
                <img src={stars} alt="stars" />
                <img src={stars} alt="stars" />
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </Fragment>
  );
};

export default CardProduct;
