import React from 'react'

function BannerGrid() {
  return (
    <>
         <section
        className="banner3 banner3-template"
        style={{ backgroundImage: 'url("img/banner/about.jpg")' }}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="banner3-grid">
                <div className="banner-text-img">
                  {/* img start */}
                  <div className="offer-img">
                    <img
                      src="https://spacingtech.com/html/banno/banno-ltr/img/banner/ice-crem-cone.png"
                      className="img-fluid"
                      alt="ice-crem-cone"
                    />
                  </div>
                  {/* img end */}
                  {/* text start */}
                  <div className="banner-text-content">
                    <span className="sub-title">We are obsessed with cones</span>
                    <h2>
                      <span>Ice cream cone that</span>
                      <span>enriches your life!</span>
                    </h2>
                    <p>
                      There are many variations of passages of lorem ipsum
                      available, but the majority have suffered alteration in some
                      form, by injected humour, or randomised words which don't
                      look even slightly believable
                    </p>
                    <div className="banner-price">
                      <h2 className="custom-text-1">
                        <span>$18.00</span>
                      </h2>
                      <h2 className="custom-text-2">
                        <span>$24.00</span>
                      </h2>
                    </div>
                    <div className="banner-btn">
                      <span className="cart-text">
                        <span>Order now</span>
                      </span>
                      <span className="cart-icon">
                        <a href="collection.html">
                          <i className="feather-arrow-right" />
                        </a>
                      </span>
                    </div>
                  </div>
                  {/* text end */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default BannerGrid
