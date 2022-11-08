import React, { useEffect, Fragment } from "react";
import { Link, useSearchParams } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

import { useDispatch, useSelector } from "react-redux";
import { getProductBySearch } from "../../feature/ProductBySearchSlice.js";

import MyPagination from "../../components/pagination/pagination.js";

import "./ProductPageBySearch.css"
const ProductPageBySearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let keywordParam = searchParams.get("keyword");

  let sortbyParam = searchParams.get("sortby") || "created_on";
  let sortParam = searchParams.get("sort") || "desc";
  let pageParam = searchParams.get("page") || "1";
  let limitParam = searchParams.get("limit") || "24";

  let keyword = `search=${keywordParam}&`;
  let value = `sortby=${sortbyParam}&sort=${sortParam}&page=${pageParam}&limit=${limitParam}`;

  const dispatch = useDispatch();
  const { ProductBySearch, statusCode, pagination_currentPage, pagination_totalData, pagination_limit, pagination_totalPage } = useSelector((state) => state.ProductBySearch);

  useEffect(() => {
    if (keywordParam !== null) {
      let valueSender = keyword + value;
      dispatch(getProductBySearch(valueSender));
    } else {
      let valueSender = value;
      dispatch(getProductBySearch(valueSender));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keywordParam, value]);

  return (
    <Fragment>
      <section>
        <div className="container mt-5 ">
          <div className="row-new">
            <div className="row">
              <div className="col-12 d-xl-flex d-lg-flex d-md-grid d-sm-grid ">
                <div className="col-xxl-8 col-xl-7 col-lg-6 col-md-12 col-sm-12">
                  {keywordParam !== null ? (
                    <div>
                      <h1 className="fw-bold">Find : {keywordParam}</h1>
                      <p className="fs-6 text-muted">Total product {pagination_totalData}</p>
                    </div>
                  ) : (
                    <div>
                      <h1 className="fw-bold">Show All Product</h1>
                      <p className="fs-6 text-muted">Total product {pagination_totalData}</p>
                    </div>
                  )}
                </div>
                <div className="d-flex col-xxl-4 col-xl-5 col-lg-6 col-md-12 col-sm-12">
                  <div className="col-8 d-flex align-items-center">
                    <Form.Select 
                    className="w-100 me-2 ShadowBox"
                      onChange={(e) => {
                        if (keywordParam === null) {
                          setSearchParams({
                            sort: [e.target.value],
                            page: 1,
                            limit: limitParam,
                          });
                        } else {
                          setSearchParams({
                            keyword: keywordParam,
                            sort: [e.target.value],
                            page: 1,
                            limit: limitParam,
                          });
                        }
                      }}
                    >
                      <option value="desc">New Product</option>
                      <option value="asc">Oldest Product</option>
                    </Form.Select>
                  </div>
                  <div className="col-4 d-flex align-items-center">
                    <Form.Select 
                      className="w-100  ShadowBox"
                      onChange={(e) => {
                        if (keywordParam === null) {
                          setSearchParams({
                            sort: sortParam,
                            page: 1,
                            limit: [e.target.value],
                          });
                        } else {
                          setSearchParams({
                            keyword: keywordParam,
                            sort: sortParam,
                            page: 1,
                            limit: [e.target.value],
                          });
                        }
                      }}
                    >
                      <option className="option-box" value="24">Show 24</option>
                      <option className="option-box" value="36">Show 48</option>
                      <option className="option-box" value="36">Show 84</option>
                    </Form.Select>

                   
                  </div>
                </div>
              </div>

              <div className="col-12 my-3">
                <div className="row d-flex">
                  {ProductBySearch.map((item, index) => (
                    <Link className="col-xl-2 col-lg-3 col-md-4 col-sm-6 my-2 link-product " to={`../product/${item.id}`} key={item.id}>
                      <Card className="container border rounded align-items-center ShadowBox">
                        <div key={item.id}>
                          <div className="d-flex justify-content-center out-img-product">
                            <img className="img-product" 
                            
                referrerPolicy="no-referrer"
                            // crossOrigin="anonymous" 
                            src={item.photo} alt="" />{" "}
                          </div>
                          <h6 className="text-dark fw-bold title-product ">{item.name}</h6>
                          <h6 className="text-danger">$ {item.price}</h6>
                          <p className="fs-6 text-muted">
                            <small>{item.name_store}</small>
                          </p>
                          <img className="mb-3" crossOrigin="anonymous" src={require("../../assets/images/product/stars.png")} alt="" />
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="col-12 d-flex justify-content-center my-3">
                <MyPagination
                  total={pagination_totalPage}
                  current={pagination_currentPage}
                  // onChangePage={(e) => handleChangePage}
                  // keywordParam = {keywordParam}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ProductPageBySearch;
