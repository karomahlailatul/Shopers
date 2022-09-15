import React, { useEffect, Fragment } from "react";
import { useSearchParams } from "react-router-dom";

import Form from "react-bootstrap/Form";

import { useDispatch, useSelector } from "react-redux";

import { getSearchProduct } from "../../app/redux/Slice/SearchProductSlice";

import MyPagination from "../../component/Pagination";

import CardProduct from "../../component/CardProduct";


const SearchProduct = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let keywordParam = searchParams.get("keyword");

  let sortbyParam = searchParams.get("sortby") || "created_on";
  let sortParam = searchParams.get("sort") || "desc";
  let pageParam = searchParams.get("page") || "1";
  let limitParam = searchParams.get("limit") || "24";

  let keyword = `search=${keywordParam}&`;
  let value = `sortby=${sortbyParam}&sort=${sortParam}&page=${pageParam}&limit=${limitParam}`;

  const dispatch = useDispatch();
  const {
    SearchProduct,
    // statusCode,
    pagination_currentPage,
    pagination_totalData,
    //  pagination_limit,
    pagination_totalPage,
  } = useSelector((state) => state.SearchProduct);

  useEffect(() => {
    if (keywordParam !== null) {
      let valueSender = keyword + value;
      dispatch(getSearchProduct(valueSender))
      .unwrap()
    } else {
      let valueSender = value;
      dispatch(getSearchProduct(valueSender))
      .unwrap()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keywordParam, value]);

  return (
    <Fragment>
      {/* <section>
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
                      <option className="option-box" value="24">
                        Show 24
                      </option>
                      <option className="option-box" value="36">
                        Show 48
                      </option>
                      <option className="option-box" value="36">
                        Show 84
                      </option>
                    </Form.Select>
                  </div>
                </div>
              </div>

              <div className="col-12 my-3">
                <div className="row d-flex">
                  <CardProduct valueDispatch={SearchProduct} />
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
      </section> */}
    </Fragment>
  );
};

export default SearchProduct;
