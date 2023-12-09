import React from 'react'

const NotificationBar = () => {
  return (
  <>
      {/* top-notification-bar start */}
      <section className="top-notification-bar">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <ul className="notification-entry">
              <li className="notify-wrap contact-wrap">
                <div className="contact-link">
                  <div className="connect-wrap contact-phone">
                    <a href="tel:(+33)123456789">
                      <i className="feather-phone" />
                      <span>(+33) 1 23 45 67 89</span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="notify-wrap our-service">
                <ul className="single-service">
                  <li className="service-content">
                    <div className="ser-block">
                      <a href="javascript:void(0)">
                        <i className="feather-truck" />
                      </a>
                      <div className="service-text">
                        <h6>Free shipping</h6>
                      </div>
                    </div>
                  </li>
                  <li className="service-content">
                    <div className="ser-block">
                      <a href="javascript:void(0)">
                        <i className="feather-gift" />
                      </a>
                      <div className="service-text">
                        <h6>Gift voucher</h6>
                      </div>
                    </div>
                  </li>
                  <li className="service-content">
                    <div className="ser-block">
                      <a href="javascript:void(0)">
                        <i className="feather-credit-card" />
                      </a>
                      <div className="service-text">
                        <h6>Safe payment</h6>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="notify-wrap other-wrap">
                <div className="noti-wrap user-wrap">
                  <div className="connect-wrap contact-mail">
                    <a href="mailto:spacing@tech.com">
                      <i className="feather-mail" />
                      <span>Demo@gmail.com</span>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    {/* top-notification-bar end */}</>
  )
}

export default NotificationBar