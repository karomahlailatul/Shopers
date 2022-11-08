import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import "./ProductPageByCategory.css";
import Card from "react-bootstrap/Card";
import { useParams, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getProductByCategory } from "../../feature/ProductByCategorySlice.js";

const ProductPageByCategory = () => {
  const navigate = useNavigate();

  const { name } = useParams();

  const dispatch = useDispatch();
  const { ProductByCategory } = useSelector((state) => state.ProductByCategory);
  // console.log(ProductByCategory);

  useEffect(() => {
    dispatch(getProductByCategory(name));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <section>
        <div className="product-list-category-page">
          <div className="container ">
            <div className="row-new">
              <div className="row">
                <div className="col-12 justify-content-center">
                  <div className="row">
                    <div className=" d-flex col-12 my-xl-5 my-lg-5 my-md-4 my-sm-3 link-redirect">
                      <h6 onClick={() => navigate("../home")}>
                        <small>Home {">"}&nbsp;</small>
                      </h6>
                      <h6 onClick={() => navigate("../category")}>
                        <small>category {">"}&nbsp; </small>
                      </h6>
                      <h6 onClick={() => navigate("../category/" + name)}>
                        <small>{name}</small>
                      </h6>
                    </div>
                    <h1 className="fw-bold ">{name}</h1>
                  </div>
                </div>
                <div className="col-12 my-3">
                  <div className="row d-flex">
                    {ProductByCategory.map((item, index) => (
                      <Link className="col-xl-2 col-lg-3 col-md-4 col-sm-6 my-2 link-product  " to={`../product/${item.id}`} key={item.id}>
                        <Card className="container border rounded align-items-center ShadowBox">
                          <div key={item.id}>
                            <div className="d-flex justify-content-center out-img-product">
                              <img className="img-product "
                               referrerPolicy="no-referrer"
                              //  crossOrigin="anonymous"
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
        </div>
      </section>
    </Fragment>
  );
};

export default ProductPageByCategory;
