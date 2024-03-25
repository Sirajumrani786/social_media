import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
      <>
  {/* navigation left */}
  <nav className="navigation scroll-bar">
    <div className="container ps-0 pe-0">
      <div className="nav-content">
        <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2 mt-2">
          <div className="nav-caption fw-600 font-xssss text-grey-500">
            <span>New </span>Feeds
          </div>
          <ul className="mb-1 top-content">
            <li className="logo d-none d-xl-block d-lg-block" />
            <li>
              <Link to="/" className="nav-content-bttn open-font">
                <i className="feather-tv btn-round-md bg-blue-gradiant me-3" />
                <span>Newsfeed</span>
              </Link>
            </li>
          
          
          
            <li>
              <Link to="/profile" className="nav-content-bttn open-font">
                <i className="feather-user btn-round-md bg-primary-gradiant me-3" />
                <span>Author Profile </span>
              </Link>
            </li>
          </ul>
        </div>
      
        <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1">
          <div className="nav-caption fw-600 font-xssss text-grey-500">
            <span /> Account
          </div>
          <ul className="mb-1">
            <li className="logo d-none d-xl-block d-lg-block" />
            <li>
              <a
                href="default-settings.html"
                className="nav-content-bttn open-font h-auto pt-2 pb-2"
              >
                <i className="font-sm feather-settings me-3 text-grey-500" />
                <span>Settings</span>
              </a>
            </li>
        
            <li>
              <a
                href="default-message.html"
                className="nav-content-bttn open-font h-auto pt-2 pb-2"
              >
                <i className="font-sm feather-message-square me-3 text-grey-500" />
                <span>Chat</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  {/* navigation left */}
</>

    </div>
  )
}

export default Sidebar
