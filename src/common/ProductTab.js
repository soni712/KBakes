import React from 'react'

const ProductTab = () => {
  return (
    <>     <section className="product-tab-ptb product-area section-ptb">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="product-tab-area">
            <div className="section-capture">
              {/* our title start */}
              <div className="section-title">
                <div className="section-cont-title">
                  <span className="sub-title">New ice-cream cone</span>
                  <h2>
                    <span>Trending products</span>
                  </h2>
                </div>
              </div>
              {/* our title end */}
            </div>
            {/* product-slider start */}
            <div className="feture-pro-tab swiper" id="new-pro">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  {/* product start */}
                  <div className="single-product-wrap">
                    {/* product-img start */}
                    <div className="product-image">
                      <a href="product-template.html" className="pro-img">
                        <img
                          src="https://spacingtech.com/html/banno/banno-ltr/img/product/p-149.jpg"
                          className="img-fluid img1"
                          alt="p-149"
                        />
                        <img
                          src="https://spacingtech.com/html/banno/banno-ltr/img/product/p-150.jpg"
                          className="img-fluid img2"
                          alt="p-150"
                        />
                      </a>
                      {/* product-action start */}
                      <div className="product-action">
                        <a
                          href="wishlist-product.html"
                          className="wishlist-product"
                        >
                          <span className="tooltip-text">Wishlist</span>
                          <span className="wishlist-icon">
                            <i className="feather-heart" />
                          </span>
                        </a>
                        <a
                          href="#quickview"
                          className="quick-view"
                          data-bs-toggle="modal"
                          data-bs-target="#quickview"
                        >
                          <span className="tooltip-text">Quickview</span>
                          <span className="quickview-icon">
                            <i className="feather-eye" />
                          </span>
                        </a>
                      </div>
                      {/* product-action end */}
                      <div className="product-add-cart-action">
                        <a
                          href="javascript:void(0)"
                          className="add-to-cart btn-style2"
                        >
                          <span className="tooltip-text">Add to cart</span>
                        </a>
                      </div>
                    </div>
                    {/* product-img end */}
                    {/* product-content start */}
                    <div className="product-content">
                      {/* product-title start */}
                      <h6>
                        <a href="product-template.html">Horchata</a>
                      </h6>
                      {/* product-title end */}
                      {/* product-price start */}
                      <div className="price-box">
                        <span className="new-price">$15.00</span>
                        <span className="old-price">$21.00</span>
                      </div>
                      {/* product-price end */}
                      {/* product-action start */}
                      <div className="product-action">
                        <a href="javascript:void(0)" className="add-to-cart">
                          <span className="tooltip-text">Add to cart</span>
                          <span className="cart-icon">
                            <i className="feather-shopping-bag" />
                          </span>
                        </a>
                        <a
                          href="#quickview"
                          className="quick-view"
                          data-bs-toggle="modal"
                          data-bs-target="#quickview"
                        >
                          <span className="tooltip-text">Quickview</span>
                          <span className="quickview-icon">
                            <i className="feather-eye" />
                          </span>
                        </a>
                        <a
                          href="wishlist-product.html"
                          className="wishlist-product"
                        >
                          <span className="tooltip-text">Wishlist</span>
                          <span className="wishlist-icon">
                            <i className="feather-heart" />
                          </span>
                        </a>
                      </div>
                      {/* product-action end */}
                    </div>
                    {/* product-content end */}
                  </div>
                  {/* product end */}
                </div>
                <div className="swiper-slide">
                  {/* product start */}
                  <div className="single-product-wrap">
                    {/* product-img start */}
                    <div className="product-image">
                      <a href="product-template.html" className="pro-img">
                        <img
                          src="https://spacingtech.com/html/banno/banno-ltr/img/product/p-151.jpg"
                          className="img-fluid img1"
                          alt="p-151"
                        />
                        <img
                          src="https://spacingtech.com/html/banno/banno-ltr/img/product/p-152.jpg"
                          className="img-fluid img2"
                          alt="p-152"
                        />
                      </a>
                      {/* product-action start */}
                      <div className="product-action">
                        <a
                          href="wishlist-product.html"
                          className="wishlist-product"
                        >
                          <span className="tooltip-text">Wishlist</span>
                          <span className="wishlist-icon">
                            <i className="feather-heart" />
                          </span>
                        </a>
                        <a
                          href="#quickview"
                          className="quick-view"
                          data-bs-toggle="modal"
                          data-bs-target="#quickview"
                        >
                          <span className="tooltip-text">Quickview</span>
                          <span className="quickview-icon">
                            <i className="feather-eye" />
                          </span>
                        </a>
                      </div>
                      {/* product-action end */}
                      <div className="product-add-cart-action">
                        <a
                          href="javascript:void(0)"
                          className="add-to-cart btn-style2"
                        >
                          <span className="tooltip-text">Add to cart</span>
                        </a>
                      </div>
                    </div>
                    {/* product-img end */}
                    {/* product-content start */}
                    <div className="product-content">
                      {/* product-title start */}
                      <h6>
                        <a href="product-template.html">Banana nut</a>
                      </h6>
                      {/* product-title end */}
                      {/* product-price start */}
                      <div className="price-box">
                        <span className="new-price">$20.00</span>
                        <span className="old-price">$26.00</span>
                      </div>
                      {/* product-price end */}
                      {/* product-action start */}
                      <div className="product-action">
                        <a href="javascript:void(0)" className="add-to-cart">
                          <span className="tooltip-text">Add to cart</span>
                          <span className="cart-icon">
                            <i className="feather-shopping-bag" />
                          </span>
                        </a>
                        <a
                          href="#quickview"
                          className="quick-view"
                          data-bs-toggle="modal"
                          data-bs-target="#quickview"
                        >
                          <span className="tooltip-text">Quickview</span>
                          <span className="quickview-icon">
                            <i className="feather-eye" />
                          </span>
                        </a>
                        <a
                          href="wishlist-product.html"
                          className="wishlist-product"
                        >
                          <span className="tooltip-text">Wishlist</span>
                          <span className="wishlist-icon">
                            <i className="feather-heart" />
                          </span>
                        </a>
                      </div>
                      {/* product-action end */}
                    </div>
                    {/* product-content end */}
                  </div>
                  {/* product end */}
                </div>
                <div className="swiper-slide">
                  {/* product start */}
                  <div className="single-product-wrap">
                    {/* product-img start */}
                    <div className="product-image">
                      <a href="product-template.html" className="pro-img">
                        <img
                          src="https://spacingtech.com/html/banno/banno-ltr/img/product/p-153.jpg"
                          className="img-fluid img1"
                          alt="p-153"
                        />
                        <img
                          src="https://spacingtech.com/html/banno/banno-ltr/img/product/p-154.jpg"
                          className="img-fluid img2"
                          alt="p-154"
                        />
                      </a>
                      {/* product-action start */}
                      <div className="product-action">
                        <a
                          href="wishlist-product.html"
                          className="wishlist-product"
                        >
                          <span className="tooltip-text">Wishlist</span>
                          <span className="wishlist-icon">
                            <i className="feather-heart" />
                          </span>
                        </a>
                        <a
                          href="#quickview"
                          className="quick-view"
                          data-bs-toggle="modal"
                          data-bs-target="#quickview"
                        >
                          <span className="tooltip-text">Quickview</span>
                          <span className="quickview-icon">
                            <i className="feather-eye" />
                          </span>
                        </a>
                      </div>
                      {/* product-action end */}
                      <div className="product-add-cart-action">
                        <a
                          href="javascript:void(0)"
                          className="add-to-cart btn-style2"
                        >
                          <span className="tooltip-text">Add to cart</span>
                        </a>
                      </div>
                    </div>
                    {/* product-img end */}
                    {/* product-content start */}
                    <div className="product-content">
                      {/* product-title start */}
                      <h6>
                        <a href="product-template.html">Root beer float</a>
                      </h6>
                      {/* product-title end */}
                      {/* product-price start */}
                      <div className="price-box">
                        <span className="new-price">$22.00</span>
                        <span className="old-price">$28.00</span>
                      </div>
                      {/* product-price end */}
                      {/* product-action start */}
                      <div className="product-action">
                        <a href="javascript:void(0)" className="add-to-cart">
                          <span className="tooltip-text">Add to cart</span>
                          <span className="cart-icon">
                            <i className="feather-shopping-bag" />
                          </span>
                        </a>
                        <a
                          href="#quickview"
                          className="quick-view"
                          data-bs-toggle="modal"
                          data-bs-target="#quickview"
                        >
                          <span className="tooltip-text">Quickview</span>
                          <span className="quickview-icon">
                            <i className="feather-eye" />
                          </span>
                        </a>
                        <a
                          href="wishlist-product.html"
                          className="wishlist-product"
                        >
                          <span className="tooltip-text">Wishlist</span>
                          <span className="wishlist-icon">
                            <i className="feather-heart" />
                          </span>
                        </a>
                      </div>
                      {/* product-action end */}
                    </div>
                    {/* product-content end */}
                  </div>
                  {/* product end */}
                </div>
                <div className="swiper-slide">
                  {/* product start */}
                  <div className="single-product-wrap">
                    {/* product-img start */}
                    <div className="product-image">
                      <a href="product-template.html" className="pro-img">
                        <img
                          src="https://spacingtech.com/html/banno/banno-ltr/img/product/p-155.jpg"
                          className="img-fluid img1"
                          alt="p-155"
                        />
                        <img
                          src="https://spacingtech.com/html/banno/banno-ltr/img/product/p-156.jpg"
                          className="img-fluid img2"
                          alt="p-156"
                        />
                      </a>
                      {/* product-action start */}
                      <div className="product-action">
                        <a
                          href="wishlist-product.html"
                          className="wishlist-product"
                        >
                          <span className="tooltip-text">Wishlist</span>
                          <span className="wishlist-icon">
                            <i className="feather-heart" />
                          </span>
                        </a>
                        <a
                          href="#quickview"
                          className="quick-view"
                          data-bs-toggle="modal"
                          data-bs-target="#quickview"
                        >
                          <span className="tooltip-text">Quickview</span>
                          <span className="quickview-icon">
                            <i className="feather-eye" />
                          </span>
                        </a>
                      </div>
                      {/* product-action end */}
                      <div className="product-add-cart-action">
                        <a
                          href="javascript:void(0)"
                          className="add-to-cart btn-style2"
                        >
                          <span className="tooltip-text">Add to cart</span>
                        </a>
                      </div>
                    </div>
                    {/* product-img end */}
                    {/* product-content start */}
                    <div className="product-content">
                      {/* product-title start */}
                      <h6>
                        <a href="product-template.html">Almond joy</a>
                      </h6>
                      {/* product-title end */}
                      {/* product-price start */}
                      <div className="price-box">
                        <span className="new-price">$18.00</span>
                        <span className="old-price">$22.00</span>
                      </div>
                      {/* product-price end */}
                      {/* product-action start */}
                      <div className="product-action">
                        <a href="javascript:void(0)" className="add-to-cart">
                          <span className="tooltip-text">Add to cart</span>
                          <span className="cart-icon">
                            <i className="feather-shopping-bag" />
                          </span>
                        </a>
                        <a
                          href="#quickview"
                          className="quick-view"
                          data-bs-toggle="modal"
                          data-bs-target="#quickview"
                        >
                          <span className="tooltip-text">Quickview</span>
                          <span className="quickview-icon">
                            <i className="feather-eye" />
                          </span>
                        </a>
                        <a
                          href="wishlist-product.html"
                          className="wishlist-product"
                        >
                          <span className="tooltip-text">Wishlist</span>
                          <span className="wishlist-icon">
                            <i className="feather-heart" />
                          </span>
                        </a>
                      </div>
                      {/* product-action end */}
                    </div>
                    {/* product-content end */}
                  </div>
                  {/* product end */}
                </div>
                <div className="swiper-slide">
                  {/* product start */}
                  <div className="single-product-wrap">
                    {/* product-img start */}
                    <div className="product-image">
                      <a href="product-template.html" className="pro-img">
                        <img
                          src="https://spacingtech.com/html/banno/banno-ltr/img/product/p-157.jpg"
                          className="img-fluid img1"
                          alt="p-157"
                        />
                        <img
                          src="https://spacingtech.com/html/banno/banno-ltr/img/product/p-158.jpg"
                          className="img-fluid img2"
                          alt="p-158"
                        />
                      </a>
                      {/* product-action start */}
                      <div className="product-action">
                        <a
                          href="wishlist-product.html"
                          className="wishlist-product"
                        >
                          <span className="tooltip-text">Wishlist</span>
                          <span className="wishlist-icon">
                            <i className="feather-heart" />
                          </span>
                        </a>
                        <a
                          href="#quickview"
                          className="quick-view"
                          data-bs-toggle="modal"
                          data-bs-target="#quickview"
                        >
                          <span className="tooltip-text">Quickview</span>
                          <span className="quickview-icon">
                            <i className="feather-eye" />
                          </span>
                        </a>
                      </div>
                      {/* product-action end */}
                      <div className="product-add-cart-action">
                        <a
                          href="javascript:void(0)"
                          className="add-to-cart btn-style2"
                        >
                          <span className="tooltip-text">Add to cart</span>
                        </a>
                      </div>
                    </div>
                    {/* product-img end */}
                    {/* product-content start */}
                    <div className="product-content">
                      {/* product-title start */}
                      <h6>
                        <a href="product-template.html">Orange cream</a>
                      </h6>
                      {/* product-title end */}
                      {/* product-price start */}
                      <div className="price-box">
                        <span className="new-price">$14.00</span>
                        <span className="old-price">$16.00</span>
                      </div>
                      {/* product-price end */}
                      {/* product-action start */}
                      <div className="product-action">
                        <a href="javascript:void(0)" className="add-to-cart">
                          <span className="tooltip-text">Add to cart</span>
                          <span className="cart-icon">
                            <i className="feather-shopping-bag" />
                          </span>
                        </a>
                        <a
                          href="#quickview"
                          className="quick-view"
                          data-bs-toggle="modal"
                          data-bs-target="#quickview"
                        >
                          <span className="tooltip-text">Quickview</span>
                          <span className="quickview-icon">
                            <i className="feather-eye" />
                          </span>
                        </a>
                        <a
                          href="wishlist-product.html"
                          className="wishlist-product"
                        >
                          <span className="tooltip-text">Wishlist</span>
                          <span className="wishlist-icon">
                            <i className="feather-heart" />
                          </span>
                        </a>
                      </div>
                      {/* product-action end */}
                    </div>
                    {/* product-content end */}
                  </div>
                  {/* product end */}
                </div>
                <div className="swiper-slide">
                  {/* product start */}
                  <div className="single-product-wrap">
                    {/* product-img start */}
                    <div className="product-image">
                      <a href="product-template.html" className="pro-img">
                        <img
                          src="https://spacingtech.com/html/banno/banno-ltr/img/product/p-159.jpg"
                          className="img-fluid img1"
                          alt="p-159"
                        />
                        <img
                          src="https://spacingtech.com/html/banno/banno-ltr/img/product/p-160.jpg"
                          className="img-fluid img2"
                          alt="p-160"
                        />
                      </a>
                      {/* product-action start */}
                      <div className="product-action">
                        <a
                          href="wishlist-product.html"
                          className="wishlist-product"
                        >
                          <span className="tooltip-text">Wishlist</span>
                          <span className="wishlist-icon">
                            <i className="feather-heart" />
                          </span>
                        </a>
                        <a
                          href="#quickview"
                          className="quick-view"
                          data-bs-toggle="modal"
                          data-bs-target="#quickview"
                        >
                          <span className="tooltip-text">Quickview</span>
                          <span className="quickview-icon">
                            <i className="feather-eye" />
                          </span>
                        </a>
                      </div>
                      {/* product-action end */}
                      <div className="product-add-cart-action">
                        <a
                          href="javascript:void(0)"
                          className="add-to-cart btn-style2"
                        >
                          <span className="tooltip-text">Add to cart</span>
                        </a>
                      </div>
                    </div>
                    {/* product-img end */}
                    {/* product-content start */}
                    <div className="product-content">
                      {/* product-title start */}
                      <h6>
                        <a href="product-template.html">Praline pecan</a>
                      </h6>
                      {/* product-title end */}
                      {/* product-price start */}
                      <div className="price-box">
                        <span className="new-price">$10.00</span>
                        <span className="old-price">$15.00</span>
                      </div>
                      {/* product-price end */}
                      {/* product-action start */}
                      <div className="product-action">
                        <a href="javascript:void(0)" className="add-to-cart">
                          <span className="tooltip-text">Add to cart</span>
                          <span className="cart-icon">
                            <i className="feather-shopping-bag" />
                          </span>
                        </a>
                        <a
                          href="#quickview"
                          className="quick-view"
                          data-bs-toggle="modal"
                          data-bs-target="#quickview"
                        >
                          <span className="tooltip-text">Quickview</span>
                          <span className="quickview-icon">
                            <i className="feather-eye" />
                          </span>
                        </a>
                        <a
                          href="wishlist-product.html"
                          className="wishlist-product"
                        >
                          <span className="tooltip-text">Wishlist</span>
                          <span className="wishlist-icon">
                            <i className="feather-heart" />
                          </span>
                        </a>
                      </div>
                      {/* product-action end */}
                    </div>
                    {/* product-content end */}
                  </div>
                  {/* product end */}
                </div>
              </div>
            </div>
            {/* product-slider end */}
          </div>
        </div>
      </div>
    </div>
  </section></>
  )
}

export default ProductTab