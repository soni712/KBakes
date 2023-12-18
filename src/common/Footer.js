import React from 'react'

const Footer = () => {
  return (
    <> <footer>
    <div className="footer-area section-ptb">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="footer-list-wrap">
              <ul className="footer-list">
                <li className="ftlink-li link-list width">
                  <h2 className="ft-title md-d-none">Our company</h2>
                  <a
                    href="#our-company"
                    className="ft-title"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                  >
                    <span>Our category</span>
                    <span>
                      <i className="feather-plus" />
                    </span>
                  </a>
                  <ul className="footer-sublist link collapse" id="our-company">
                    <li className="ftsublink-li">
                      <a href="about-us.html">About us</a>
                    </li>
                    <li className="ftsublink-li">
                      <a href="collection.html">Best service</a>
                    </li>
                    <li className="ftsublink-li">
                      <a href="privacy-policy.html">Privacy policy</a>
                    </li>
                    <li className="ftsublink-li">
                      <a href="payment-policy.html">Payment policy</a>
                    </li>
                  </ul>
                </li>
                <li className="ftlink-li link-list width">
                  <h2 className="ft-title md-d-none">Help center</h2>
                  <a
                    href="#help-center"
                    className="ft-title"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                  >
                    <span>Help center</span>
                    <span>
                      <i className="feather-plus" />
                    </span>
                  </a>
                  <ul className="footer-sublist link collapse" id="help-center">
                    <li className="ftsublink-li">
                      <a href="register">Login / Register</a>
                    </li>
                    <li className="ftsublink-li">
                      <a href="wishlist-product.html">Wishlist</a>
                    </li>
                    <li className="ftsublink-li">
                      <a href="order-history.html">Order history</a>
                    </li>
                    <li className="ftsublink-li">
                      <a href="return-policy.html">Return policy</a>
                    </li>
                  </ul>
                </li>
                <li className="ftlink-li link-list width">
                  <h2 className="ft-title md-d-none">Our legal</h2>
                  <a
                    href="#our-legal"
                    className="ft-title"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                  >
                    <span>Our legal</span>
                    <span>
                      <i className="feather-plus" />
                    </span>
                  </a>
                  <ul className="footer-sublist link collapse" id="our-legal">
                    <li className="ftsublink-li">
                      <a href="terms-condition.html">Terms &amp; condition</a>
                    </li>
                    <li className="ftsublink-li">
                      <a href="contact-us.html">Contact us</a>
                    </li>
                    <li className="ftsublink-li">
                      <a href="payment-policy.html">Payment policy</a>
                    </li>
                    <li className="ftsublink-li">
                      <a href="login-page.html">Track order</a>
                    </li>
                  </ul>
                </li>
                <li className="ftlink-li f-newsletter width">
                  <div className="footer-title">
                    <h2 className="ft-title">Follow us</h2>
                    <ul className="social-icon store-ul">
                      <li>
                        <a href="https://facebook.com/">
                          <span className="icon-social facebook">
                            <i className="fa-brands fa-facebook-f" />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/">
                          <span className="icon-social twitter">
                            <i className="fa-brands fa-twitter" />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://pinterest.com/">
                          <span className="icon-social pinterest">
                            <i className="fa-brands fa-pinterest" />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/">
                          <span className="icon-social instagram">
                            <i className="fa-brands fa-instagram" />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/">
                          <span className="icon-social linkedin">
                            <i className="fa-brands fa-linkedin-in" />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/">
                          <span className="icon-social telegram">
                            <i className="fa-brands fa-telegram" />
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-text">
                    <h2 className="ft-title">Subscribe us</h2>
                    <div className="newsletter-block">
                      <div className="news-content">
                        <form method="post">
                          <div className="subscribe-block">
                            <input
                              type="email"
                              name="q"
                              className="email mail"
                              placeholder="Enter your email.."
                            />
                            <div className="email-submit">
                              <button type="button" className="news-btn">
                                <i className="bi bi-cursor-fill" />
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom-area">
      <div className="container">
        <div className="row">
          <div className="col">
            <ul className="ft-bottom">
              <li className="grid-wrapper grid-payment">
                <a href="javascript:void(0)" className="payment-icon">
                  <img
                    src="https://spacingtech.com/html/banno/banno-ltr/img/payment/visa.svg"
                    className="img-fluid"
                    alt="visa"
                  />
                  <img
                    src="https://spacingtech.com/html/banno/banno-ltr/img/payment/master.svg"
                    className="img-fluid"
                    alt="master"
                  />
                  <img
                    src="https://spacingtech.com/html/banno/banno-ltr/img/payment/express.svg"
                    className="img-fluid"
                    alt="express"
                  />
                  <img
                    src="https://spacingtech.com/html/banno/banno-ltr/img/payment/paypal.svg"
                    className="img-fluid"
                    alt="paypal"
                  />
                  <img
                    src="https://spacingtech.com/html/banno/banno-ltr/img/payment/diners.svg"
                    className="img-fluid"
                    alt="diners"
                  />
                  <img
                    src="https://spacingtech.com/html/banno/banno-ltr/img/payment/discover.svg"
                    className="img-fluid"
                    alt="discover"
                  />
                </a>
              </li>
              <li className="grid-wrapper logo">
                <div className="footer-logo">
                  <a href="index-5.html" className="theme-footer-logo">
                    <img
                      src='./LogoKanu.png'
                      className="img-fluid"
                      alt="logo"
                    />
                  </a>
                </div>
              </li>
              <li className="grid-wrapper grid-info">
                <div className="footer-copyright">
                  <p>
                    <span>Copyright</span>
                    <span className="copy-icon">
                      <i className="far fa-copyright" />
                    </span>
                    <span>
                      2023 by spacingtech<sup>TM</sup>
                    </span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer></>
  )
}

export default Footer