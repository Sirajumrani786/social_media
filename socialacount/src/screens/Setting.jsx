import React from 'react'
import { Link } from 'react-router-dom'

const Setting = () => {
    return (
        <div>
            <div className="main-content bg-lightblue theme-dark-bg right-chat-active">
                <div className="middle-sidebar-bottom">
                    <div className="middle-sidebar-left">
                        <div className="middle-wrap">
                            <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
                                <div className="card-body p-lg-5 p-4 w-100 border-0">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <h4 className="mb-4 font-xxl fw-700 mont-font mb-lg-5 mb-4 font-md-xs">
                                                Settings
                                            </h4>
                                            <div className="nav-caption fw-600 font-xssss text-grey-500 mb-2">
                                                Genaral
                                            </div>
                                            <ul className="list-inline mb-4">
                                                <li className="list-inline-item d-block border-bottom me-0">
                                                    <Link to="/Account-info"
                                                        href="account-information.html"
                                                        className="pt-2 pb-2 d-flex align-items-center"
                                                    >
                                                        <i className="bakgrd btn-round-md bg-primary-gradiant text-white feather-home font-md me-3" />{" "}
                                                        <h4 className="fw-600 font-xsss mb-0 mt-0">
                                                            Acount Information
                                                        </h4>
                                                        <i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item d-block border-bottom me-0">
                                                    <Link
                                                        to="/Contact-info"
                                                        className="pt-2 pb-2 d-flex align-items-center"
                                                    >
                                                        <i className="bakgrd btn-round-md bg-gold-gradiant text-white feather-map-pin font-md me-3" />{" "}
                                                        <h4 className="fw-600 font-xsss mb-0 mt-0">
                                                            Saved Address
                                                        </h4>
                                                        <i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3" />
                                                    </Link>
                                                </li>
                                              
                                            </ul>
                                            <div className="nav-caption fw-600 font-xsss text-grey-500 mb-2">
                                                Acount
                                            </div>
                                            <ul className="list-inline mb-4">
                                              
                                                <li className="list-inline-item d-block  me-0">
                                                    <Link 
                                                        to="/password"
                                                        className="pt-2 pb-2 d-flex align-items-center"
                                                    >
                                                        <i className="bakgrd btn-round-md bg-blue-gradiant text-white feather-inbox font-md me-3" />{" "}
                                                        <h4 className="fw-600 font-xsss mb-0 mt-0">Password</h4>
                                                        <i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3" />
                                                    </Link>
                                                </li>
                                            </ul>
                                            <div className="nav-caption fw-600 font-xsss text-grey-500 mb-2">
                                                Other
                                            </div>
                                            <ul className="list-inline">
                                                <li className="list-inline-item d-block border-bottom me-0">
                                                    <Link 
                                                        to="/notification"
                                                        className="pt-2 pb-2 d-flex align-items-center"
                                                    >
                                                        <i className="bakgrd btn-round-md bg-gold-gradiant text-white feather-bell font-md me-3" />{" "}
                                                        <h4 className="fw-600 font-xsss mb-0 mt-0">
                                                            Notification
                                                        </h4>
                                                        <i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item d-block border-bottom me-0">
                                                    <Link 
                                                        to="/Help"
                                                        className="pt-2 pb-2 d-flex align-items-center"
                                                    >
                                                        <i className="bakgrd btn-round-md bg-primary-gradiant text-white feather-help-circle font-md me-3" />{" "}
                                                        <h4 className="fw-600 font-xsss mb-0 mt-0">Help</h4>
                                                        <i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item d-block me-0">
                                                    <Link to="/login" className="pt-2 pb-2 d-flex align-items-center">
                                                        <i className="bakgrd btn-round-md  text-white feather-lock font-md me-3" />{" "}
                                                        <h4 className="fw-600 font-xsss mb-0 mt-0">Logout</h4>
                                                        <i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Setting
