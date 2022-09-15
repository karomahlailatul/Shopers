import React, { useEffect, Fragment } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getHomeProductNew } from "../../app/redux/Slice/HomeProductNewSlice";

import CardProduct from "../CardProduct";


const HomeProductNew = () => {
  const dispatch = useDispatch();
  const { HomeProductNew } = useSelector((state) => state.HomeProductNew);
  // console.log(HomeProductNew);
  useEffect(() => {
    dispatch(getHomeProductNew())
  }, [dispatch]);

  console.log(HomeProductNew)

  return (
    <Fragment>
      <section>
        <div className="container mt-2 ">
          <div className="row-new">
            <div className="row">
              <div className="col-md-12 justify-content-center">
                <div className="row">
                  <h1 className="fw-bold">New</h1>
                  <p className="fs-6 text-muted">You've never seen it before!</p>
                </div>
              </div>
              <div className="col-12 my-3">
                <div className="row d-flex">
                  <CardProduct valueDispatch={HomeProductNew} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default HomeProductNew;
