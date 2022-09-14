import React, { useEffect, Fragment } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getHomeProductPopular } from "../../app/redux/Slice/HomeProductPopularSlice";

import CardProduct from "../CardProduct";

const HomeProductPopular = () => {
  const dispatch = useDispatch();
  const { HomeProductPopular } = useSelector((state) => state.HomeProductPopular);
  // console.log(ProductPopularHome);

  useEffect(() => {
    dispatch(getHomeProductPopular());
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
                  
                <CardProduct valueDispatch={HomeProductPopular} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default HomeProductPopular;
