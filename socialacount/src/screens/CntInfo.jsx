import React from 'react'
import { Link } from 'react-router-dom'

const CntInfo = () => {
  return (
    <div>
      <div className="main-content bg-lightblue theme-dark-bg right-chat-active">
  <div className="middle-sidebar-bottom">
    <div className="middle-sidebar-left">
      <div className="middle-wrap">
        <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
          <div className="bkgrd card-body p-4 w-100 bg-current border-0 d-flex rounded-3">
            <Link  to="/setting" className="d-inline-block mt-2">
              <i className="ti-arrow-left font-sm text-dark" />
            </Link>
            <h4 className="font-xs fw-600 ms-4 mb-0 mt-2">
              Location Information
            </h4>
          </div>
          <div className="card-body p-lg-5 p-4 w-100 border-0 mb-0">
            <form action="#">
              <div className="row">
                <div className="col-lg-6 mb-3">
                  <div className="form-group">
                    <label className="mont-font fw-600 font-xsss">
                      Country
                    </label>
                    <input
                      type="text"
                      name="comment-name"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-6 mb-3">
                  <div className="form-group">
                    <label className="mont-font fw-600 font-xsss">City</label>
                    <input
                      type="text"
                      name="comment-name"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 mb-3">
                  <div className="form-group">
                    <label className="mont-font fw-600 font-xsss">
                      Address
                    </label>
                    <input
                      type="text"
                      name="comment-name"
                      className="form-control"
                    />
                  </div>
                </div>
              
                <div className="col-lg-12 mb-3">
                 <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14415.931753820785!2d68.3458634!3d25.4053817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1711446605280!5m2!1sen!2s"
                    height={450}
                    style={{ border: 0 , width: "100%" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
              </div>
              <div className="col-lg-12 mb-0 mt-2 ps-0">
                <a
                  href="#"
                  className="bkgrd text-center text-white font-xsss fw-600 p-3 w175 rounded-3 d-inline-block"
                >
                  Save
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default CntInfo
