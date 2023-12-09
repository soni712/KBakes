import React from 'react'

const NavBar = () => {
  return (
    <>  <header className="header-area">
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="header-main">
            {/* header logo start */}
            <div className="header-element logo">
              <a href="index-5.html" className="theme-header-logo">
                <img
                  src="./LogoKanu.png"
                  className="img-fluid"
                  style={{height:'100px'}}
                  alt="logo"
                />
              </a>
            </div>
            {/* header logo end */}
            {/* header megamenu start */}
            <div className="header-element megamenu-content">
              <a
                href="#main-collapse"
                className="browse-cat"
                data-bs-toggle="collapse"
                aria-expanded="true"
              >
                <span className="menu-icon">
                  <i className="feather-menu" />
                </span>
                <span className="menu-title">Menu</span>
                <span className="menu-arrow">
                  <i className="feather-chevron-down" />
                </span>
              </a>
              <div className="mainwrap collapse show" id="main-collapse">
                <ul className="main-menu">
                  <li className="menu-link">
                    <a href="index.html" className="link-title">
                      <span className="sp-link-title">Home</span>
                      <span className="menu-arrow">
                        <i className="feather-chevron-down" />
                      </span>
                    </a>
                    <a
                      href="#desk-home"
                      data-bs-toggle="collapse"
                      className="link-title link-title-lg"
                    >
                      <span className="sp-link-title">Home</span>
                      <span className="menu-arrow">
                        <i className="feather-chevron-down" />
                      </span>
                    </a>
                    <div
                      className="menu-dropdown single-menu collapse"
                      id="desk-home"
                    >
                      <ul className="container ul p-0">
                        <li className="singlemenu-li">
                          <a
                            href="../banno-ltr/index.html"
                            className="singlelink-title"
                          >
                            <span className="sp-link-title">01 Home</span>
                          </a>
                        </li>
                        <li className="singlemenu-li">
                          <a
                            href="../banno-ltr/index-2.html"
                            className="singlelink-title"
                          >
                            <span className="sp-link-title">02 Home</span>
                          </a>
                        </li>
                        <li className="singlemenu-li">
                          <a
                            href="../banno-ltr/index-3.html"
                            className="singlelink-title"
                          >
                            <span className="sp-link-title">03 Home</span>
                          </a>
                        </li>
                        <li className="singlemenu-li">
                          <a
                            href="../banno-ltr/index-4.html"
                            className="singlelink-title"
                          >
                            <span className="sp-link-title">04 Home</span>
                          </a>
                        </li>
                        <li className="singlemenu-li">
                          <a
                            href="../banno-ltr/index-5.html"
                            className="singlelink-title"
                          >
                            <span className="sp-link-title">05 Home</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-link">
                    <a href="collection.html" className="link-title">
                      <span className="sp-link-title">
                        Product
                        <span className="label">sale</span>
                      </span>
                      <span className="menu-arrow">
                        <i className="feather-chevron-down" />
                      </span>
                    </a>
                    <a
                      href="#desk-single-product"
                      data-bs-toggle="collapse"
                      className="link-title link-title-lg"
                    >
                      <span className="sp-link-title">Product</span>
                      <span className="menu-arrow">
                        <i className="feather-chevron-down" />
                      </span>
                    </a>
                    <div
                      className="menu-dropdown product-menu collapse"
                      id="desk-single-product"
                    >
                      <ul className="container ul p-0">
                        <li className="productlink-li">
                          <a
                            href="collection.html"
                            className="productlink-title"
                          >
                            <span className="sp-link-title">Shop page</span>
                          </a>
                          <a
                            href="#desk-product-page"
                            className="productlink-title productlink-title-lg"
                            data-bs-toggle="collapse"
                          >
                            <span className="sp-link-title">Shop page</span>
                            <span className="menu-arrow">
                              <i className="feather-chevron-down" />
                            </span>
                          </a>
                          <ul
                            className="productsupmenu-dropdown collapse"
                            id="desk-product-page"
                          >
                            <li className="productsupmenu-li">
                              <a
                                href="collection-without.html"
                                className="productsuplink-title"
                              >
                                <span className="sp-link-title">
                                  01 Collection
                                </span>
                              </a>
                            </li>
                            <li className="productsupmenu-li">
                              <a
                                href="collection.html"
                                className="productsuplink-title"
                              >
                                <span className="sp-link-title">
                                  02 Collection left
                                </span>
                              </a>
                            </li>
                            <li className="productsupmenu-li">
                              <a
                                href="collection-right.html"
                                className="productsuplink-title"
                              >
                                <span className="sp-link-title">
                                  03 Collection right
                                </span>
                              </a>
                            </li>
                            <li className="productsupmenu-li">
                              <a
                                href="collection-list-without.html"
                                className="productsuplink-title"
                              >
                                <span className="sp-link-title">
                                  04 Collection list
                                </span>
                              </a>
                            </li>
                            <li className="productsupmenu-li">
                              <a
                                href="collection-list.html"
                                className="productsuplink-title"
                              >
                                <span className="sp-link-title">
                                  05 Collection list left
                                </span>
                              </a>
                            </li>
                            <li className="productsupmenu-li">
                              <a
                                href="collection-list-right.html"
                                className="productsuplink-title"
                              >
                                <span className="sp-link-title">
                                  06 Collection list right
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="productlink-li">
                          <a
                            href="collection.html"
                            className="productlink-title"
                          >
                            <span className="sp-link-title">Product page</span>
                          </a>
                          <a
                            href="#desk-shop-page"
                            className="productlink-title productlink-title-lg"
                            data-bs-toggle="collapse"
                          >
                            <span className="sp-link-title">Product page</span>
                            <span className="menu-arrow">
                              <i className="feather-chevron-down" />
                            </span>
                          </a>
                          <ul
                            className="productsupmenu-dropdown collapse"
                            id="desk-shop-page"
                          >
                            <li className="productsupmenu-li">
                              <a
                                href="product-template.html"
                                className="productsuplink-title"
                              >
                                <span className="sp-link-title">
                                  01 Product style
                                </span>
                              </a>
                            </li>
                            <li className="productsupmenu-li">
                              <a
                                href="product-template2.html"
                                className="productsuplink-title"
                              >
                                <span className="sp-link-title">
                                  02 Product style
                                </span>
                              </a>
                            </li>
                            <li className="productsupmenu-li">
                              <a
                                href="product-template3.html"
                                className="productsuplink-title"
                              >
                                <span className="sp-link-title">
                                  03 Product style
                                </span>
                              </a>
                            </li>
                            <li className="productsupmenu-li">
                              <a
                                href="product-template4.html"
                                className="productsuplink-title"
                              >
                                <span className="sp-link-title">
                                  04 Product style
                                </span>
                              </a>
                            </li>
                            <li className="productsupmenu-li">
                              <a
                                href="product-template5.html"
                                className="productsuplink-title"
                              >
                                <span className="sp-link-title">
                                  05 Product style
                                </span>
                              </a>
                            </li>
                            <li className="productsupmenu-li">
                              <a
                                href="product-template6.html"
                                className="productsuplink-title"
                              >
                                <span className="sp-link-title">
                                  06 Product style
                                </span>
                              </a>
                            </li>
                            <li className="productsupmenu-li">
                              <a
                                href="product-template7.html"
                                className="productsuplink-title"
                              >
                                <span className="sp-link-title">
                                  07 Product style
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="productlink-li">
                          <div className="menu-product">
                            <ul className="product-ul">
                              <li className="product-li">
                                <div className="product-menu-list">
                                  <div className="single-product-wrap">
                                    <div className="product-image">
                                      <a
                                        href="product-template.html"
                                        className="pro-img"
                                      >
                                        <img
                                          src="https://spacingtech.com/html/banno/banno-ltr/img/product-list/p-25.jpg"
                                          className="img-fluid img1"
                                          alt="p-25"
                                        />
                                        <img
                                          src="https://spacingtech.com/html/banno/banno-ltr/img/product-list/p-26.jpg"
                                          className="img-fluid img2"
                                          alt="p-26"
                                        />
                                      </a>
                                    </div>
                                    <div className="product-content">
                                      <h6>
                                        <a href="product-template.html">
                                          Mint chocolate chip
                                        </a>
                                      </h6>
                                      <div className="price-box">
                                        <span className="new-price">
                                          $12.00
                                        </span>
                                        <span className="old-price">
                                          $18.00
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="product-li">
                                <div className="product-menu-list">
                                  <div className="single-product-wrap">
                                    <div className="product-image">
                                      <a
                                        href="product-template.html"
                                        className="pro-img"
                                      >
                                        <img
                                          src="https://spacingtech.com/html/banno/banno-ltr/img/product-list/p-27.jpg"
                                          className="img-fluid img1"
                                          alt="p-27"
                                        />
                                        <img
                                          src="https://spacingtech.com/html/banno/banno-ltr/img/product-list/p-28.jpg"
                                          className="img-fluid img2"
                                          alt="p-28"
                                        />
                                      </a>
                                    </div>
                                    <div className="product-content">
                                      <h6>
                                        <a href="product-template.html">
                                          Vanilla
                                        </a>
                                      </h6>
                                      <div className="price-box">
                                        <span className="new-price">
                                          $10.00
                                        </span>
                                        <span className="old-price">
                                          $15.00
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                            <div className="menu-product-btn">
                              <a
                                href="collection.html"
                                className="menu-pro-link"
                              >
                                <span className="menu-title">See more</span>
                                <span className="menu-icon">
                                  <i className="feather-chevron-right" />
                                </span>
                              </a>
                            </div>
                          </div>
                        </li>
                        <li className="productlink-li">
                          <div className="menu-product">
                            <ul className="product-ul">
                              <li className="product-li">
                                <div className="product-menu-list">
                                  <div className="single-product-wrap">
                                    <div className="product-image">
                                      <a
                                        href="product-template.html"
                                        className="pro-img"
                                      >
                                        <img
                                          src="https://spacingtech.com/html/banno/banno-ltr/img/product-list/p-29.jpg"
                                          className="img-fluid img1"
                                          alt="p-29"
                                        />
                                        <img
                                          src="https://spacingtech.com/html/banno/banno-ltr/img/product-list/p-30.jpg"
                                          className="img-fluid img2"
                                          alt="p-30"
                                        />
                                      </a>
                                    </div>
                                    <div className="product-content">
                                      <h6>
                                        <a href="product-template.html">
                                          Avocado
                                        </a>
                                      </h6>
                                      <div className="price-box">
                                        <span className="new-price">
                                          $10.00
                                        </span>
                                        <span className="old-price">
                                          $15.00
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="product-li">
                                <div className="product-menu-list">
                                  <div className="single-product-wrap">
                                    <div className="product-image">
                                      <a
                                        href="product-template.html"
                                        className="pro-img"
                                      >
                                        <img
                                          src="https://spacingtech.com/html/banno/banno-ltr/img/product-list/p-31.jpg"
                                          className="img-fluid img1"
                                          alt="p-31"
                                        />
                                        <img
                                          src="https://spacingtech.com/html/banno/banno-ltr/img/product-list/p-32.jpg"
                                          className="img-fluid img2"
                                          alt="p-32"
                                        />
                                      </a>
                                    </div>
                                    <div className="product-content">
                                      <h6>
                                        <a href="product-template.html">
                                          Moose tracks
                                        </a>
                                      </h6>
                                      <div className="price-box">
                                        <span className="new-price">
                                          $13.00
                                        </span>
                                        <span className="old-price">
                                          $17.00
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                            <div className="menu-product-btn">
                              <a
                                href="collection.html"
                                className="menu-pro-link"
                              >
                                <span className="menu-title">See more</span>
                                <span className="menu-icon">
                                  <i className="feather-chevron-right" />
                                </span>
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-link">
                    <a href="collection.html" className="link-title">
                      <span className="sp-link-title">Collection</span>
                      <span className="menu-arrow">
                        <i className="feather-chevron-down" />
                      </span>
                    </a>
                    <a
                      href="#desk-single-collection"
                      className="link-title link-title-lg"
                      data-bs-toggle="collapse"
                    >
                      <span className="sp-link-title">Collection</span>
                      <span className="menu-arrow">
                        <i className="feather-chevron-down" />
                      </span>
                    </a>
                    <div
                      className="menu-dropdown banner-menu collapse"
                      id="desk-single-collection"
                    >
                      <ul className="container ul p-0">
                        <li className="bannermenu-li banner-hover">
                          <a
                            href="collection.html"
                            className="collection-img banner-img"
                          >
                            <img
                              src="https://spacingtech.com/html/banno/banno-ltr/img/menu/menu-banner-13.jpg"
                              className="img-fluid"
                              alt="menu-banner-13"
                            />
                          </a>
                          <a
                            href="collection.html"
                            className="collection-title"
                          >
                            <span>Soft ice candy</span>
                          </a>
                        </li>
                        <li className="bannermenu-li banner-hover">
                          <a
                            href="collection.html"
                            className="collection-img banner-img"
                          >
                            <img
                              src="https://spacingtech.com/html/banno/banno-ltr/img/menu/menu-banner-14.jpg"
                              className="img-fluid"
                              alt="menu-banner-14"
                            />
                          </a>
                          <a
                            href="collection.html"
                            className="collection-title"
                          >
                            <span>Kaju nuts cone</span>
                          </a>
                        </li>
                        <li className="bannermenu-li banner-hover">
                          <a
                            href="collection.html"
                            className="collection-img banner-img"
                          >
                            <img
                              src="https://spacingtech.com/html/banno/banno-ltr/img/menu/menu-banner-15.jpg"
                              className="img-fluid"
                              alt="menu-banner-15"
                            />
                          </a>
                          <a
                            href="collection.html"
                            className="collection-title"
                          >
                            <span>Orange juice</span>
                          </a>
                        </li>
                        <li className="bannermenu-li banner-hover">
                          <a
                            href="collection.html"
                            className="collection-img banner-img"
                          >
                            <img
                              src="https://spacingtech.com/html/banno/banno-ltr/img/menu/menu-banner-16.jpg"
                              className="img-fluid"
                              alt="menu-banner-16"
                            />
                          </a>
                          <a
                            href="collection.html"
                            className="collection-title"
                          >
                            <span>Chocolate cone</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-link">
                    <a href="blog-grid.html" className="link-title">
                      <span className="sp-link-title">Blogs</span>
                      <span className="menu-arrow">
                        <i className="feather-chevron-down" />
                      </span>
                    </a>
                    <a
                      href="#desk-single-blog"
                      data-bs-toggle="collapse"
                      className="link-title link-title-lg"
                    >
                      <span className="sp-link-title">Blogs</span>
                      <span className="menu-arrow">
                        <i className="feather-chevron-down" />
                      </span>
                    </a>
                    <div
                      className="menu-dropdown single-menu collapse"
                      id="desk-single-blog"
                    >
                      <ul className="container ul p-0">
                        <li className="singlemenu-li">
                          <a
                            href="blog-grid-without.html"
                            className="singlelink-title"
                          >
                            <span className="sp-link-title">01 Blog grid</span>
                          </a>
                        </li>
                        <li className="singlemenu-li">
                          <a href="blog-grid.html" className="singlelink-title">
                            <span className="sp-link-title">
                              02 Blog grid left
                            </span>
                          </a>
                        </li>
                        <li className="singlemenu-li">
                          <a
                            href="blog-grid-right.html"
                            className="singlelink-title"
                          >
                            <span className="sp-link-title">
                              03 Blog grid right
                            </span>
                          </a>
                        </li>
                        <li className="singlemenu-li">
                          <a
                            href="article-post-without.html"
                            className="singlelink-title"
                          >
                            <span className="sp-link-title">
                              04 Article post
                            </span>
                          </a>
                        </li>
                        <li className="singlemenu-li">
                          <a
                            href="article-post.html"
                            className="singlelink-title"
                          >
                            <span className="sp-link-title">
                              05 Article post left
                            </span>
                          </a>
                        </li>
                        <li className="singlemenu-li">
                          <a
                            href="article-post-right.html"
                            className="singlelink-title"
                          >
                            <span className="sp-link-title">
                              06 Article post right
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-link">
                    <a href="about-us.html" className="link-title">
                      <span className="sp-link-title">Pages</span>
                      <span className="menu-arrow">
                        <i className="feather-chevron-down" />
                      </span>
                    </a>
                    <a
                      href="#desk-pages"
                      className="link-title link-title-lg"
                      data-bs-toggle="collapse"
                    >
                      <span className="sp-link-title">Pages</span>
                      <span className="menu-arrow">
                        <i className="feather-chevron-down" />
                      </span>
                    </a>
                    <div
                      className="menu-dropdown sub-menu collapse"
                      id="desk-pages"
                    >
                      <ul className="container p-0 ul">
                        <li className="submenu-li">
                          <a href="about-us.html" className="sublink-title">
                            <span className="sp-link-title">About us</span>
                            <span className="menu-arrow">
                              <i className="feather-chevron-right" />
                            </span>
                          </a>
                          <a
                            href="#desk-about-us"
                            className="sublink-title sublink-title-lg"
                            data-bs-toggle="collapse"
                          >
                            <span className="sp-link-title">About us</span>
                            <span className="menu-arrow">
                              <i className="feather-chevron-right" />
                            </span>
                          </a>
                          <ul
                            className="supmenu-dropdown collapse"
                            id="desk-about-us"
                          >
                            <li className="supmenu-li">
                              <a href="about-us.html" className="suplink-title">
                                <span className="sp-link-title">About us</span>
                              </a>
                            </li>
                            <li className="supmenu-li">
                              <a
                                href="about-us-2.html"
                                className="suplink-title"
                              >
                                <span className="sp-link-title">
                                  About us 2
                                </span>
                              </a>
                            </li>
                            <li className="supmenu-li">
                              <a
                                href="about-us-3.html"
                                className="suplink-title"
                              >
                                <span className="sp-link-title">
                                  About us 3
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="submenu-li">
                          <a href="my-account.html" className="sublink-title">
                            <span className="sp-link-title">My account</span>
                            <span className="menu-arrow">
                              <i className="feather-chevron-right" />
                            </span>
                          </a>
                          <a
                            href="#desk-account"
                            className="sublink-title sublink-title-lg"
                            data-bs-toggle="collapse"
                          >
                            <span className="sp-link-title">My account</span>
                            <span className="menu-arrow">
                              <i className="feather-chevron-right" />
                            </span>
                          </a>
                          <ul
                            className="supmenu-dropdown collapse"
                            id="desk-account"
                          >
                            <li className="supmenu-li">
                              <a
                                href="order-history.html"
                                className="suplink-title"
                              >
                                <span className="supmenu-title">Order</span>
                              </a>
                            </li>
                            <li className="supmenu-li">
                              <a href="profile.html" className="suplink-title">
                                <span className="supmenu-title">Profile</span>
                              </a>
                            </li>
                            <li className="supmenu-li">
                              <a
                                href="pro-address.html"
                                className="suplink-title"
                              >
                                <span className="supmenu-title">Address</span>
                              </a>
                            </li>
                            <li className="supmenu-li">
                              <a
                                href="pro-wishlist.html"
                                className="suplink-title"
                              >
                                <span className="supmenu-title">Wishlist</span>
                              </a>
                            </li>
                            <li className="supmenu-li">
                              <a
                                href="pro-tickets.html"
                                className="suplink-title"
                              >
                                <span className="supmenu-title">
                                  My tickets
                                </span>
                              </a>
                            </li>
                            <li className="supmenu-li">
                              <a
                                href="billing-info.html"
                                className="suplink-title"
                              >
                                <span className="supmenu-title">
                                  Billing info
                                </span>
                              </a>
                            </li>
                            <li className="supmenu-li">
                              <a
                                href="track-page.html"
                                className="suplink-title"
                              >
                                <span className="supmenu-title">
                                  Track page
                                </span>
                              </a>
                            </li>
                            <li className="supmenu-li">
                              <a
                                href="order-complete.html"
                                className="suplink-title"
                              >
                                <span className="supmenu-title">
                                  Order complete
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="submenu-li">
                          <a href="contact-us.html" className="sublink-title">
                            <span className="sp-link-title">Contact us</span>
                            <span className="menu-arrow">
                              <i className="feather-chevron-right" />
                            </span>
                          </a>
                          <a
                            href="#desk-contact-us"
                            className="sublink-title sublink-title-lg"
                            data-bs-toggle="collapse"
                          >
                            <span className="sp-link-title">Contact us</span>
                            <span className="menu-arrow">
                              <i className="feather-chevron-right" />
                            </span>
                          </a>
                          <ul
                            className="supmenu-dropdown collapse"
                            id="desk-contact-us"
                          >
                            <li className="supmenu-li">
                              <a
                                href="contact-us.html"
                                className="suplink-title"
                              >
                                <span className="supmenu-title">
                                  Contact us
                                </span>
                              </a>
                            </li>
                            <li className="supmenu-li">
                              <a
                                href="contact-us-2.html"
                                className="suplink-title"
                              >
                                <span className="supmenu-title">
                                  Contact us 2
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="submenu-li">
                          <a
                            href="javascript:void(0)"
                            className="sublink-title"
                          >
                            <span className="sp-link-title">Checkout</span>
                            <span className="menu-arrow">
                              <i className="feather-chevron-right" />
                            </span>
                          </a>
                          <a
                            href="#desk-checkout"
                            className="sublink-title sublink-title-lg"
                            data-bs-toggle="collapse"
                          >
                            <span className="sp-link-title">Checkout</span>
                            <span className="menu-arrow">
                              <i className="feather-chevron-right" />
                            </span>
                          </a>
                          <ul
                            className="supmenu-dropdown collapse"
                            id="desk-checkout"
                          >
                            <li className="supmenu-li">
                              <a
                                href="checkout-style1.html"
                                className="suplink-title"
                              >
                                <span className="supmenu-title">
                                  Checkout style 1
                                </span>
                              </a>
                            </li>
                            <li className="supmenu-li">
                              <a
                                href="checkout-style2.html"
                                className="suplink-title"
                              >
                                <span className="supmenu-title">
                                  Checkout style 2
                                </span>
                              </a>
                            </li>
                            <li className="supmenu-li">
                              <a
                                href="checkout-style3.html"
                                className="suplink-title"
                              >
                                <span className="supmenu-title">
                                  Checkout style 3
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="submenu-li">
                          <a
                            href="javascript:void(0)"
                            className="sublink-title"
                          >
                            <span className="sp-link-title">Features</span>
                            <span className="menu-arrow">
                              <i className="feather-chevron-right" />
                            </span>
                          </a>
                          <a
                            href="#desk-feature"
                            className="sublink-title sublink-title-lg"
                            data-bs-toggle="collapse"
                          >
                            <span className="sp-link-title">Features</span>
                            <span className="menu-arrow">
                              <i className="feather-chevron-right" />
                            </span>
                          </a>
                          <ul
                            className="supmenu-dropdown collapse"
                            id="desk-feature"
                          >
                            <li className="supmenu-li">
                              <a
                                href="cancellation.html"
                                className="suplink-title"
                              >
                                <span className="supmenu-title">
                                  Cancellation
                                </span>
                              </a>
                            </li>
                            <li className="supmenu-li">
                              <a
                                href="cart-page.html"
                                className="suplink-title"
                              >
                                <span className="supmenu-title">Cart page</span>
                              </a>
                            </li>
                            <li className="supmenu-li">
                              <a
                                href="wishlist-product.html"
                                className="suplink-title"
                              >
                                <span className="supmenu-title">
                                  Wishlist product
                                </span>
                              </a>
                            </li>
                            <li className="supmenu-li">
                              <a href="sitemap.html" className="suplink-title">
                                <span className="supmenu-title">Sitemap</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="submenu-li">
                          <a href="faq.html" className="sublink-title">
                            <span className="sp-link-title">Faq's</span>
                          </a>
                          <a
                            href="faq.html"
                            className="sublink-title sublink-title-lg"
                          >
                            <span className="sp-link-title">Faq's</span>
                          </a>
                        </li>
                        <li className="submenu-li">
                          <a
                            href="privacy-policy.html"
                            className="sublink-title"
                          >
                            <span className="sp-link-title">
                              Privacy policy
                            </span>
                          </a>
                          <a
                            href="privacy-policy.html"
                            className="sublink-title sublink-title-lg"
                          >
                            <span className="sp-link-title">
                              Privacy policy
                            </span>
                          </a>
                        </li>
                        <li className="submenu-li">
                          <a
                            href="payment-policy.html"
                            className="sublink-title"
                          >
                            <span className="sp-link-title">
                              Payment policy
                            </span>
                          </a>
                          <a
                            href="payment-policy.html"
                            className="sublink-title sublink-title-lg"
                          >
                            <span className="sp-link-title">
                              Payment policy
                            </span>
                          </a>
                        </li>
                        <li className="submenu-li">
                          <a
                            href="terms-condition.html"
                            className="sublink-title"
                          >
                            <span className="sp-link-title">
                              Terms &amp; condition
                            </span>
                          </a>
                          <a
                            href="terms-condition.html"
                            className="sublink-title sublink-title-lg"
                          >
                            <span className="sp-link-title">
                              Terms &amp; condition
                            </span>
                          </a>
                        </li>
                        <li className="submenu-li">
                          <a
                            href="return-policy.html"
                            className="sublink-title"
                          >
                            <span className="sp-link-title">Return policy</span>
                          </a>
                          <a
                            href="return-policy.html"
                            className="sublink-title sublink-title-lg"
                          >
                            <span className="sp-link-title">Return policy</span>
                          </a>
                        </li>
                        <li className="submenu-li">
                          <a href="404.html" className="sublink-title">
                            <span className="sp-link-title">404</span>
                          </a>
                          <a
                            href="404.html"
                            className="sublink-title sublink-title-lg"
                          >
                            <span className="sp-link-title">404</span>
                          </a>
                        </li>
                        <li className="submenu-li">
                          <a href="coming-soon.html" className="sublink-title">
                            <span className="sp-link-title">Coming soon</span>
                          </a>
                          <a
                            href="coming-soon.html"
                            className="sublink-title sublink-title-lg"
                          >
                            <span className="sp-link-title">Coming soon</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* header megamenu end */}
            {/* right-block-box start*/}
            <div className="header-element right-block-box">
              <ul className="shop-element">
                {/* button toggler start */}
                <li className="side-wrap toggle-wrap">
                  <button className="toggler-button">
                    <span className="line" />
                  </button>
                </li>
                {/* button toggler end */}
                {/* search-modal start */}
                <li className="side-wrap search-wrap">
                  <a
                    href="#seachmodal"
                    className="search-popup"
                    data-bs-toggle="modal"
                  >
                    <i className="feather-search" />
                  </a>
                  <a
                    href="#seachmodal"
                    className="search-popup search-popup-lg"
                    data-bs-toggle="modal"
                  >
                    <i className="feather-search" />
                  </a>
                </li>
                {/* search-modal end */}
                {/* login-account start */}
                <li className="side-wrap user-wrap">
                  <div className="acc-desk-header">
                    <div className="acc-title">
                      <a href="login-account.html">
                        <span className="user-icon">
                          <i className="feather-user" />
                        </span>
                      </a>
                    </div>
                    <div className="acc-title-lg">
                      <a href="login-account.html">
                        <i className="feather-user" />
                      </a>
                    </div>
                  </div>
                </li>
                {/* login-account end */}
                {/* wishlist start */}
                <li className="side-wrap wishlist-wrap">
                  <a
                    href="wishlist-product.html"
                    className="header-wishlist-btn"
                  >
                    <span className="wishlist-icon">
                      <i className="feather-heart" />
                    </span>
                    <span className="wishlist-counter">5</span>
                  </a>
                </li>
                {/* wishlist end */}
                {/* cart start */}
                <li className="side-wrap cart-wrap">
                  <div className="shopping-widget">
                    <div className="shopping-cart">
                      <a href="javascript:void(0)" className="cart-count">
                        <span className="cart-icon">
                          <i className="feather-shopping-bag" />
                        </span>
                        <span className="cart-bigcounter">8</span>
                      </a>
                    </div>
                  </div>
                </li>
                {/* cart end */}
              </ul>
            </div>
            {/* right-block-box end*/}
          </div>
        </div>
      </div>
    </div>
  </header></>
  )
}

export default NavBar