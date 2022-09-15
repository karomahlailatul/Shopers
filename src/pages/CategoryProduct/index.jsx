import React, { useEffect, Fragment } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getCategoryProduct } from "../../app/redux/Slice/CategoryProductSlice";

import CardProduct from "../../component/CardProduct";

const CategoryProduct = () => {
  const navigate = useNavigate();

  const { name } = useParams();

  const dispatch = useDispatch();
  const { CategoryProduct } = useSelector((state) => state.CategoryProduct);
  // console.log(CategoryProduct);

  useEffect(() => {
    dispatch(getCategoryProduct(name));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      {/* <section>
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
                    <h1 className="fw-bold ">Product from Category {name}</h1>
                  </div>
                </div>
                <div className="col-12 my-3">
                  <div className="row d-flex">
                    <CardProduct valueDispatch={CategoryProduct} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </Fragment>
  );
};

export default CategoryProduct;
