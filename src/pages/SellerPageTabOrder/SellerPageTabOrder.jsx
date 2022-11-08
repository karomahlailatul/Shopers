import { Fragment } from "react";
import "./SellerPageTabOrder.css";

import searchIcon from '../../assets/images/icons/search.svg';

const SellerPageTabOrder = () => {
  return (
  <Fragment>

<div className="tab-pane" id="v-pills-order" role="tabpanel"
                                    aria-labelledby="v-pills-order-tab" data-toggle="button">
                                    <div className="">
                                        <div className="container-fluid container-nav-pills">
                                            <div className="col-12 justify-content-start">
                                                <h4 className="modal-title fw-bold " id="modalProfileLabel">
                                                    My Order</h4>

                                            </div>
                                            <div className="nav d-flex-column nav-pills justify-content-start mt-2"
                                                id="v-pills-tab" role="tablist" aria-orientation="horizontal">

                                                <a className="nav-link active" id="v-pills-allitem-order-tab"
                                                    data-bs-toggle="pill" data-bs-target="#v-pills-allitem-order"
                                                    type="button" role="tab" aria-controls="v-pills-allitem-order"
                                                    aria-selected="true">
                                                    All items</a>

                                                <a className="nav-link" id="v-pills-paid-tab" data-bs-toggle="pill"
                                                    data-bs-target="#v-pills-paid" type="button" role="tab"
                                                    aria-controls="v-pills-paid" aria-selected="true"> Get Paid</a>

                                                <a className="nav-link" id="v-pills-process-tab" data-bs-toggle="pill"
                                                    data-bs-target="#v-pills-process" type="button" role="tab"
                                                    aria-controls="v-pills-process" aria-selected="true"> Processed</a>

                                                <a className="nav-link" id="v-pills-sent-tab" data-bs-toggle="pill"
                                                    data-bs-target="#v-pills-sent" type="button" role="tab"
                                                    aria-controls="v-pills-sent" aria-selected="true"> Sent</a>

                                                <a className="nav-link" id="v-pills-completed-tab" data-bs-toggle="pill"
                                                    data-bs-target="#v-pills-completed" type="button" role="tab"
                                                    aria-controls="v-pills-completed" aria-selected="true">
                                                    Completed</a>

                                                <a className="nav-link" id="v-pills-cancel-tab" data-bs-toggle="pill"
                                                    data-bs-target="#v-pills-cancel" type="button" role="tab"
                                                    aria-controls="v-pills-cancel" aria-selected="true"> Order
                                                    Cancel</a>

                                            </div>
                                            <hr/>

                                            <div className="tab-content" id="v-pills-tabContent">
                                                <div className="tab-pane active" id="v-pills-allitem-order"
                                                    role="tabpanel" aria-labelledby="v-pills-allitem-order-tab"
                                                    data-toggle="button">
                                                    <div className="vh-100">
                                                        <div className="col-4 my-3">
                                                            <form
                                                                className="form-search d-flex border border-1 rounded-pill ">
                                                                <input className="form-control rounded-pill border-0 "
                                                                    type="search" placeholder="Search"
                                                                    aria-label="Search" />
                                                                <button className="btn-search" type="submit">
                                                                    <img className="" src={searchIcon}
                                                                        alt="search" />
                                                                </button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="tab-pane" id="v-pills-paid" role="tabpanel"
                                                    aria-labelledby="v-pills-paid-tab" data-toggle="button">
                                                    <div className="vh-100">
                                                        <div className="col-4 my-3">
                                                            <form
                                                                className="form-search d-flex border border-1 rounded-pill ">
                                                                <input className="form-control rounded-pill border-0 "
                                                                    type="search" placeholder="Search"
                                                                    aria-label="Search" />
                                                                <button className="btn-search" type="submit">
                                                                    <img className="" src={searchIcon}
                                                                        alt="search" />
                                                                </button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="tab-pane" id="v-pills-process" role="tabpanel"
                                                    aria-labelledby="v-pills-process-tab" data-toggle="button">
                                                    <div className="vh-100">
                                                        <div className="col-4 my-3">
                                                            <form
                                                                className="form-search d-flex border border-1 rounded-pill ">
                                                                <input className="form-control rounded-pill border-0 "
                                                                    type="search" placeholder="Search"
                                                                    aria-label="Search" />
                                                                <button className="btn-search" type="submit">
                                                                    <img className="" src={searchIcon}
                                                                        alt="search" />
                                                                </button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="tab-pane" id="v-pills-sent" role="tabpanel"
                                                    aria-labelledby="v-pills-sent-tab" data-toggle="button">
                                                    <div className="vh-100">
                                                        <div className="col-4 my-3">
                                                            <form
                                                                className="form-search d-flex border border-1 rounded-pill ">
                                                                <input className="form-control rounded-pill border-0 "
                                                                    type="search" placeholder="Search"
                                                                    aria-label="Search" />
                                                                <button className="btn-search" type="submit">
                                                                    <img className="" src={searchIcon}
                                                                        alt="search" />
                                                                </button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="tab-pane" id="v-pills-completed" role="tabpanel"
                                                    aria-labelledby="v-pills-completed-tab" data-toggle="button">
                                                    <div className="vh-100">
                                                        <div className="col-4 my-3">
                                                            <form
                                                                className="form-search d-flex border border-1 rounded-pill ">
                                                                <input className="form-control rounded-pill border-0 "
                                                                    type="search" placeholder="Search"
                                                                    aria-label="Search" />
                                                                <button className="btn-search" type="submit">
                                                                    <img className="" src={searchIcon}
                                                                        alt="search" />
                                                                </button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="tab-pane" id="v-pills-cancel" role="tabpanel"
                                                    aria-labelledby="v-pills-cancel-tab" data-toggle="button">
                                                    <div className="vh-100">
                                                        <div className="col-4 my-3">
                                                            <form
                                                                className="form-search d-flex border border-1 rounded-pill ">
                                                                <input className="form-control rounded-pill border-0 "
                                                                    type="search" placeholder="Search"
                                                                    aria-label="Search" />
                                                                <button className="btn-search" type="submit">
                                                                    <img className="" src={searchIcon}
                                                                        alt="search" />
                                                                </button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>




                                            </div>


                                        </div>

                                    </div>
                                </div>

  </Fragment> );
};

export default SellerPageTabOrder;
