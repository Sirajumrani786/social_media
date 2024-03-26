import React from 'react'

const ChatSide = () => {
  return (
    <div>
  <div className="main-content right-chat-active">
  <div className="middle-sidebar-bottom">
    <div
      className="middle-sidebar-left pe-0 ps-lg-3 ms-0 me-0"
      style={{ maxWidth: "100%" }}
    >
      <div className="row">
        <div className="col-lg-12 position-relative">
          <div className="chat-wrapper pt-0 w-100 position-relative scroll-bar bg-white theme-dark-bg">
            <div className="chat-body p-3 ">
              <div className="messages-content pb-5">
                <div className="message-item">
                  <div className="message-user">
                    <figure className="avatar">
                      <img src="assets/images/users.png" alt="image" />
                    </figure>
                    <div>
                      <h5>Byrom Guittet</h5>
                      <div className="time">01:35 PM</div>
                    </div>
                  </div>
                  <div className="message-wrap">I'm fine, how are you 😃</div>
                </div>
                <div className="message-item outgoing-message">
                  <div className="message-user">
                    <figure className="avatar">
                      <img src="assets/images/user-2.png" alt="image" />
                    </figure>
                    <div>
                      <h5>Byrom Guittet</h5>
                      <div className="time">
                        01:35 PM
                        <i className="ti-double-check text-info" />
                      </div>
                    </div>
                  </div>
                  <div className="message-wrap">
                    I want those files for you. I want you to send 1 PDF and 1
                    image file.
                  </div>
                </div>
                <div className="message-item">
                  <div className="message-user">
                    <figure className="avatar">
                      <img src="assets/images/users.png" alt="image" />
                    </figure>
                    <div>
                      <h5>Byrom Guittet</h5>
                      <div className="time">01:35 PM</div>
                    </div>
                  </div>
                  <div className="message-wrap">
                    I've found some cool photos for our travel app.
                  </div>
                </div>
                <div className="message-item outgoing-message">
                  <div className="message-user">
                    <figure className="avatar">
                      <img src="assets/images/user-2.png" alt="image" />
                    </figure>
                    <div>
                      <h5>Byrom Guittet</h5>
                      <div className="time">
                        01:35 PM
                        <i className="ti-double-check text-info" />
                      </div>
                    </div>
                  </div>
                  <div className="message-wrap">
                    Hey mate! How are things going ?
                  </div>
                </div>
                <div className="message-item">
                  <div className="message-user">
                    <figure className="avatar">
                      <img src="assets/images/users.png" alt="image" />
                    </figure>
                    <div>
                      <h5>Byrom Guittet</h5>
                      <div className="time">01:35 PM</div>
                    </div>
                  </div>
                  <figure>
                    <img
                      src="assets/images/person1.jfif"
                      className="w-25 img-fluid rounded-3"
                      alt="image"
                    />
                  </figure>
                </div>
                <div className="message-item outgoing-message">
                  <div className="message-user">
                    <figure className="avatar">
                      <img src="assets/images/user-2.png" alt="image" />
                    </figure>
                    <div>
                      <h5>Byrom Guittet</h5>
                      <div className="time">
                        01:35 PM
                        <i className="ti-double-check text-info" />
                      </div>
                    </div>
                  </div>
                  <div className="message-wrap" style={{ marginBottom: 90 }}>
                    Hey mate! How are things going ?
                  </div>
                </div>
                <div className="clearfix" />
              </div>
            </div>
          </div>
          <div
            className="chat-bottom dark-bg p-3 shadow-none theme-dark-bg"
            style={{ width: "98%" }}
          >
            <form className="chat-form">
              <button className="bg-grey float-left">
                <i className="ti-microphone text-grey-600" />
              </button>
              <div className="form-group">
                <input type="text" className='text-dark' placeholder="Start typing.." />
              </div>
              <button className="bg-current backgraoudimg">
                <i className="colorbackground ti-arrow-right text-white" />
              </button>
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

export default ChatSide
