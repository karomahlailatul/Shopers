import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getProductBySeller } from "../../app/redux/Slice/ProductBySellerSlice";

const ProductSeller = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { ProductBySeller } = useSelector((state) => state.ProductBySeller);
  // console.log(ProductBySeller);

  useEffect(() => {
    dispatch(getProductBySeller(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Fragment>
      <section>
        <div className=" my-5 ">
          <div className="row-new">
            <div className="row">
              <div className="col-md-12 justify-content-center">
                <div className="row">
                  <h1 className="fw-bold">You can also like this</h1>
                  <p className="fs-6 text-muted">You've never seen it before!</p>
                </div>
              </div>
              <div className="col-12 my-3">
                <div className="row d-flex">
                  {ProductBySeller.map((item, index) => (
                    <Link className="col-xl-2 col-lg-3 col-md-4 col-sm-6 my-2 link-product " to={`../product/${item.id}`} key={item.id}>
                      <Card className="container border rounded align-items-center ShadowBox">
                        <div key={item.id}>
                          <div className="d-flex justify-content-center out-img-product">
                            <img className="img-product" 
                             referrerPolicy="no-referrer"
                            // crossOrigin="anonymous" 
                            src={item.photo} alt="" />{" "}
                          </div>
                          <h6 className="text-dark fw-bold title-product">{item.name}</h6>
                          <h6 className="text-danger">$ {item.price}</h6>
                          <p className="fs-6 text-muted">
                            <small>{item.name_store}</small>
                          </p>
                          <img crossOrigin="anonymous" src={require("../../assets/images/icons/stars.svg")} alt="" />
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

export default ProductSeller;
