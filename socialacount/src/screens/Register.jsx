import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>
      <>
      <style>
                {`
                     .nav-header.bg-white.shadow-xs.border-0 {
                        display: none;
                    }
            
                    .nav-header.bg-transparent.shadow-none.border-0 {
                      background: #fff !important;
                  }
                    .col-xl-7.vh-100.align-items-center.d-flex.bg-white.rounded-3.overflow-hidden {
                      height: 123vh !important;
                  }
          
                    nav.navigation.scroll-bar {
                        display: none;
                    }
                    a.header-btn.d-none.d-lg-block.bg-current.fw-500.text-white.font-xsss.p-3.ms-2.w100.text-center.lh-20.rounded-xl {
                      color: #000 !important;
                      background: #fcbb01 !important;
                  }
                `}
            </style>
  <div className="main-wrap">
    <div className="nav-header bg-transparent shadow-none border-0">
      <div className="nav-top w-100">
                 <Link to="/">
                        <img src="assets/images/logo.jpeg" alt="" className='feather-zap text-success display1-size me-2 ms-0' style={{width:'20%'}}/>
                        <span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">
                        VibeHub{" "}
                        </span>{" "}
                    </Link>
        <a href="#" className="mob-menu ms-auto me-2 chat-active-btn">
          <i className="feather-message-circle text-grey-900 font-sm btn-round-md bg-greylight" />
        </a>
        <a href="default-video.html" className="mob-menu me-2">
          <i className="feather-video text-grey-900 font-sm btn-round-md bg-greylight" />
        </a>
        <a href="#" className="me-2 menu-search-icon mob-menu">
          <i className="feather-search text-grey-900 font-sm btn-round-md bg-greylight" />
        </a>
        <button className="nav-menu me-0 ms-2" />
        <Link
          to="/login"
          className="header-btn d-none d-lg-block bg-dark fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 rounded-xl"
          
        >
          Login
        </Link>
        <Link
          to="/register"
          className="header-btn d-none d-lg-block bg-current fw-500 text-white font-xsss p-3 ms-2 w100 text-center lh-20 rounded-xl"

        >
          Register
        </Link>
      </div>
    </div>
    <div className="row">
      <div
        className="col-xl-5 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat"
        style={{ backgroundImage: "url(assets/images/login-bg-2.jpg)" }}
      />
      <div className="col-xl-7 vh-100 align-items-center d-flex bg-white rounded-3 overflow-hidden">
        <div className="card shadow-none border-0 ms-auto me-auto login-card">
          <div className="card-body rounded-0 text-left">
            <h2 className="fw-700 display1-size display2-md-size mb-4">
              Create <br />
              your account
            </h2>
            <form>
              <div className="form-group icon-input mb-3">
                <i className="font-sm ti-user text-grey-500 pe-0" />
                <input
                  type="text"
                  className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group icon-input mb-3">
                <i className="font-sm ti-email text-grey-500 pe-0" />
                <input
                  type="text"
                  className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                  placeholder="Your Email Address"
                />
              </div>
              <div className="form-group icon-input mb-3">
                <input
                  type="Password"
                  className="style2-input ps-5 form-control text-grey-900 font-xss ls-3"
                  placeholder="Password"
                />
                <i className="font-sm ti-lock text-grey-500 pe-0" />
              </div>
              <div className="form-group icon-input mb-1">
                <input
                  type="Password"
                  className="style2-input ps-5 form-control text-grey-900 font-xss ls-3"
                  placeholder="Confirm Password"
                />
                <i className="font-sm ti-lock text-grey-500 pe-0" />
              </div>
              <div className="form-check text-left mb-3">
                <input
                  type="checkbox"
                  className="form-check-input mt-2"
                  id="exampleCheck2"
                />
                <label
                  className="form-check-label font-xsss text-grey-500"
                  htmlFor="exampleCheck2"
                >
                  Accept Term and Conditions
                </label>
                {/* <a href="#" class="fw-600 font-xsss text-grey-700 mt-1 float-right">Forgot your Password?</a> */}
              </div>
            </form>
            <div className="col-sm-12 p-0 text-left">
              <div className="form-group mb-1">
                <a
                  href="#"
                  className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 "
                >
                  Register
                </a>
              </div>
              <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">
                Already have account{" "}
                <Link to="/login" className="fw-700 ms-1">
                  Login
                </Link>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</>

    </div>
  )
}

export default Register
