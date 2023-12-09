import React, { useState } from "react";
import Category from "../common/Category";
import Product from "../common/Product";
import ShopCategory from "../common/ShopCategory";
import BannerGrid from "../common/BannerGrid";
import Testimonial from "../common/Testimonial";
import ProductTab from "../common/ProductTab";
import Blog from "../common/Blog";
import InstaSection from "../common/InstaSection";
import Footer from "../common/Footer";
import NavBar from "../common/NavBar";
import NotificationBar from "../common/NotificationBar";

// import "./header.css";

const LandingPage = () => {
  return (

    <>
    <NotificationBar />

    {/* header start */}
  <NavBar />
    {/* header end */}
    <main>
      {/* home slider start */}
      <section className="section-slider">
        <div className="slider-content">
          <div className="home-slider owl-carousel owl-theme" id="home-slider">
            <div className="item">
              <div className="slide-image">
                <img
                  src="https://spacingtech.com/html/banno/banno-ltr/img/slider/ice-slider-09.png"
                  className="img-fluid desk-img"
                  alt="slider-09"
                />
                <img
                  src="https://spacingtech.com/html/banno/banno-ltr/img/slider/mobile-slider-09.png"
                  className="img-fluid mobile-img"
                  alt="mobile-slider-09"
                />
                {/* slider-text start */}
                <div className="container-fluid slider-info-content">
                  <div className="row">
                    <div className="col">
                      <div className="slider-text-info slider-content-left slider-text-left">
                        <span className="sub-title e1">
                          Sweet fun, full of millk
                        </span>
                        <h2 className="e1">
                          <span>Feel inside</span>
                          <span>our delicious</span>
                        </h2>
                        <a href="collection.html" className="btn btn-style e1">
                          Shop now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* slider-text end */}
              </div>
            </div>
            <div className="item">
              <div className="slide-image">
                <img
                  src="https://spacingtech.com/html/banno/banno-ltr/img/slider/ice-slider-10.png"
                  className="img-fluid desk-img"
                  alt="slider-10"
                />
                <img
                  src="https://spacingtech.com/html/banno/banno-ltr/img/slider/mobile-slider-10.png"
                  className="img-fluid mobile-img"
                  alt="mobile-slider-10"
                />
                {/* slider-text start */}
                <div className="container-fluid slider-info-content">
                  <div className="row">
                    <div className="col">
                      <div className="slider-text-info slider-content-left slider-text-left">
                        <span className="sub-title e1">Creamy luscious</span>
                        <h2 className="e1">
                          <span>A Taste Of</span>
                          <span>Guilty Pleasure</span>
                        </h2>
                        <a href="collection.html" className="btn btn-style e1">
                          Shop now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* slider-text end */}
              </div>
            </div>
            <div className="item">
              <div className="slide-image">
                <img
                  src="https://spacingtech.com/html/banno/banno-ltr/img/slider/ice-slider-11.png"
                  className="img-fluid desk-img"
                  alt="slider-11"
                />
                <img
                  src="https://spacingtech.com/html/banno/banno-ltr/img/slider/mobile-slider-11.png"
                  className="img-fluid mobile-img"
                  alt="mobile-slider-11"
                />
                {/* slider-text start */}
                <div className="container-fluid slider-info-content">
                  <div className="row">
                    <div className="col">
                      <div className="slider-text-info slider-content-left slider-text-left">
                        <span className="sub-title e1">Flavor favors</span>
                        <h2 className="e1">
                          <span>Eat it before</span>
                          <span>it melts</span>
                        </h2>
                        <a href="collection.html" className="btn btn-style e1">
                          Shop now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* slider-text end */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* home slider end */}
      {/* banner start */}
      <section className="slider-category2 section-ptb">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="banner-category">
                <div className="section-capture">
                  <div className="section-title">
                    <span className="sub-title">Shop by category</span>
                    <h2>Best of flavour</h2>
                  </div>
                </div>
              </div>
              <div className="cat-slider owl-carousel owl-theme" id="cat-slider">
                <div className="item">
                  <div className="banner-content">
                    {/* img start */}
                    <div className="banner-image">
                      <a href="collection.html" className="banner-title">
                        <img
                          src="https://spacingtech.com/html/banno/banno-ltr/img/banner/cat-img-07.jpg"
                          className="img-fluid"
                          alt="cat-img-07"
                        />
                      </a>
                    </div>
                    {/* img end */}
                    {/* banner content start */}
                    <div className="content-banner">
                      <div className="banner-text-wrap">
                        <div className="content-title">
                          <span className="title-banner">Butter pecan</span>
                          <h2>Mango vanila</h2>
                        </div>
                        <div className="banner-btn">
                          <a href="collection.html">
                            <i className="feather-arrow-up-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* banner content end */}
                  </div>
                </div>
                <div className="item">
                  <div className="banner-content">
                    {/* img start */}
                    <div className="banner-image">
                      <a href="collection.html" className="banner-title">
                        <img
                          src="https://spacingtech.com/html/banno/banno-ltr/img/banner/cat-img-08.jpg"
                          className="img-fluid"
                          alt="cat-img-08"
                        />
                      </a>
                    </div>
                    {/* img end */}
                    {/* banner content start */}
                    <div className="content-banner">
                      <div className="banner-text-wrap">
                        <div className="content-title">
                          <span className="title-banner">Kaju and pistachio</span>
                          <h2>Matcha</h2>
                        </div>
                        <div className="banner-btn">
                          <a href="collection.html">
                            <i className="feather-arrow-up-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* banner content end */}
                  </div>
                </div>
                <div className="item">
                  <div className="banner-content">
                    {/* img start */}
                    <div className="banner-image">
                      <a href="collection.html" className="banner-title">
                        <img
                          src="https://spacingtech.com/html/banno/banno-ltr/img/banner/cat-img-09.jpg"
                          className="img-fluid"
                          alt="cat-img-09"
                        />
                      </a>
                    </div>
                    {/* img end */}
                    {/* banner content start */}
                    <div className="content-banner">
                      <div className="banner-text-wrap">
                        <div className="content-title">
                          <span className="title-banner">Chocolate chip</span>
                          <h2>Badam pista</h2>
                        </div>
                        <div className="banner-btn">
                          <a href="collection.html">
                            <i className="feather-arrow-up-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* banner content end */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* banner end */}
      {/* category start */}
 <Category />
      {/* category end */}
      {/* product-tab start */}
   <Product />
      {/* product-tab end */}
      {/* shop category start */}
  <ShopCategory />
      {/* shop category end */}
      {/* banner-grid start */}
 <BannerGrid />
      {/* banner-grid end */}
      {/* testimonial strat */}
   <Testimonial />
      {/* testimonial end */}
      {/* product-tab start */}
 <ProductTab />
      {/* product-tab end */}
      {/* blog start */}
   <Blog />
      {/* blog end */}
      {/* insta start */}
    <InstaSection />
      {/* insta end */}
    </main>
    {/* footer start */}
   <Footer />
    {/* footer end */}
    {/* search-popup start */}
    <div className="modal fade" id="seachmodal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="crap-search">
                    {/* search-button-close start */}
                    <div className="button-close">
                      <button
                        type="button"
                        className="search-close"
                        data-bs-dismiss="modal"
                      >
                        <i className="feather-x" />
                      </button>
                    </div>
                    {/* search-button-close end */}
                    {/* search-form start */}
                    <form method="get" className="search-bar">
                      <div className="form-search">
                        <input
                          type="search"
                          name="q"
                          placeholder="Search product here.."
                          className="input-text"
                          required=""
                        />
                        <button type="submit" className="search-btn">
                          <i className="feather-search" />
                        </button>
                      </div>
                    </form>
                    {/* search-form end */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* search-popup end */}
    {/* mobile-menu start */}
    <div className="mobile-menu" id="menu-toggle">
      <div className="main-menu-area">
        {/* box-header start */}
        <div className="box-header">
          <button className="close-menu" type="button">
            <i className="feather-x" />
          </button>
        </div>
        {/* box-header end */}
        <div className="megamenu-content">
          <a
            href="#resp-main"
            className="browse-cat"
            data-bs-toggle="collapse"
            aria-expanded="true"
          >
            <span className="line" />
            <span className="menu-title">Menu</span>
            <span className="menu-arrow">
              <i className="feather-chevron-down" />
            </span>
          </a>
          <div className="mainwrap collapse show" id="resp-main">
            <ul className="main-menu">
              <li className="menu-link">
                <a href="index.html" className="link-title">
                  <span className="sp-link-title">Home</span>
                  <span className="menu-arrow">
                    <i className="feather-chevron-down" />
                  </span>
                </a>
                <a
                  href="#resp-home"
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
                  id="resp-home"
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
                  <span className="sp-link-title">Product</span>
                  <span className="menu-arrow">
                    <i className="feather-chevron-down" />
                  </span>
                </a>
                <a
                  href="#resp-single-product"
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
                  id="resp-single-product"
                >
                  <ul className="container ul p-0">
                    <li className="productlink-li">
                      <a href="collection.html" className="productlink-title">
                        <span className="sp-link-title">Shop page</span>
                      </a>
                      <a
                        href="#resp-product-page"
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
                        id="resp-product-page"
                      >
                        <li className="productsupmenu-li">
                          <a
                            href="collection.html"
                            className="productsuplink-title"
                          >
                            <span className="sp-link-title">01 Collection</span>
                          </a>
                        </li>
                        <li className="productsupmenu-li">
                          <a
                            href="collection-without.html"
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
                            href="collection-list.html"
                            className="productsuplink-title"
                          >
                            <span className="sp-link-title">
                              04 Collection list
                            </span>
                          </a>
                        </li>
                        <li className="productsupmenu-li">
                          <a
                            href="collection-list-without.html"
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
                      <a href="collection.html" className="productlink-title">
                        <span className="sp-link-title">Product page</span>
                      </a>
                      <a
                        href="#resp-shop-page"
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
                        id="resp-shop-page"
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
                                      src="https://spacingtech.com/html/banno/banno-ltr/img/product-list/p-17.jpg"
                                      className="img-fluid img1"
                                      alt="p-17"
                                    />
                                    <img
                                      src="https://spacingtech.com/html/banno/banno-ltr/img/product-list/p-18.jpg"
                                      className="img-fluid img2"
                                      alt="p-18"
                                    />
                                  </a>
                                </div>
                                <div className="product-content">
                                  <h6>
                                    <a href="product-template.html">
                                      Donuts yeast donut strawberry
                                    </a>
                                  </h6>
                                  <div className="price-box">
                                    <span className="new-price">$12.00</span>
                                    <span className="old-price">$18.00</span>
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
                                      src="https://spacingtech.com/html/banno/banno-ltr/img/product/p-19.jpg"
                                      className="img-fluid img1"
                                      alt="p-19"
                                    />
                                    <img
                                      src="https://spacingtech.com/html/banno/banno-ltr/img/product/p-20.jpg"
                                      className="img-fluid img2"
                                      alt="p-20"
                                    />
                                  </a>
                                </div>
                                <div className="product-content">
                                  <h6>
                                    <a href="product-template.html">
                                      Unicorn cup cream cake
                                    </a>
                                  </h6>
                                  <div className="price-box">
                                    <span className="new-price">$10.00</span>
                                    <span className="old-price">$15.00</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <div className="menu-product-btn">
                          <a href="collection.html" className="menu-pro-link">
                            <span className="menu-title">See more</span>
                            <span className="menu-icon">
                              <i className="bi bi-chevron-right" />
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
                                      src="https://spacingtech.com/html/banno/banno-ltr/img/product/p-21.jpg"
                                      className="img-fluid img1"
                                      alt="p-21"
                                    />
                                    <img
                                      src="https://spacingtech.com/html/banno/banno-ltr/img/product/p-22.jpg"
                                      className="img-fluid img2"
                                      alt="p-22"
                                    />
                                  </a>
                                </div>
                                <div className="product-content">
                                  <h6>
                                    <a href="product-template.html">
                                      Giant cup cream cake
                                    </a>
                                  </h6>
                                  <div className="price-box">
                                    <span className="new-price">$10.00</span>
                                    <span className="old-price">$15.00</span>
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
                                      src="https://spacingtech.com/html/banno/banno-ltr/img/product/p-23.jpg"
                                      className="img-fluid img1"
                                      alt="p-23"
                                    />
                                    <img
                                      src="https://spacingtech.com/html/banno/banno-ltr/img/product/p-24.jpg"
                                      className="img-fluid img2"
                                      alt="p-24"
                                    />
                                  </a>
                                </div>
                                <div className="product-content">
                                  <h6>
                                    <a href="product-template.html">
                                      Strawberry cheese cake cup
                                    </a>
                                  </h6>
                                  <div className="price-box">
                                    <span className="new-price">$13.00</span>
                                    <span className="old-price">$17.00</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <div className="menu-product-btn">
                          <a href="collection.html" className="menu-pro-link">
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
                  href="#resp-single-collection"
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
                  id="resp-single-collection"
                >
                  <ul className="container ul p-0">
                    <li className="bannermenu-li banner-hover">
                      <a
                        href="collection.html"
                        className="collection-img banner-img"
                      >
                        <img
                          src="https://spacingtech.com/html/banno/banno-ltr/img/menu/menu-banner-09.jpg"
                          className="img-fluid"
                          alt="menu-banner-09"
                        />
                      </a>
                      <a href="collection.html" className="collection-title">
                        <span>Bread</span>
                      </a>
                    </li>
                    <li className="bannermenu-li banner-hover">
                      <a
                        href="collection.html"
                        className="collection-img banner-img"
                      >
                        <img
                          src="https://spacingtech.com/html/banno/banno-ltr/img/menu/menu-banner-10.jpg"
                          className="img-fluid"
                          alt="menu-banner-10"
                        />
                      </a>
                      <a href="collection.html" className="collection-title">
                        <span>Cakes</span>
                      </a>
                    </li>
                    <li className="bannermenu-li banner-hover">
                      <a
                        href="collection.html"
                        className="collection-img banner-img"
                      >
                        <img
                          src="https://spacingtech.com/html/banno/banno-ltr/img/menu/menu-banner-11.jpg"
                          className="img-fluid"
                          alt="menu-banner-11"
                        />
                      </a>
                      <a href="collection.html" className="collection-title">
                        <span>Bun</span>
                      </a>
                    </li>
                    <li className="bannermenu-li banner-hover">
                      <a
                        href="collection.html"
                        className="collection-img banner-img"
                      >
                        <img
                          src="https://spacingtech.com/html/banno/banno-ltr/img/menu/menu-banner-12.jpg"
                          className="img-fluid"
                          alt="menu-banner-12"
                        />
                      </a>
                      <a href="collection.html" className="collection-title">
                        <span>Pastries</span>
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
                  href="#resp-single-blog"
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
                  id="resp-single-blog"
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
                        <span className="sp-link-title">02 Blog grid left</span>
                      </a>
                    </li>
                    <li className="singlemenu-li">
                      <a href="blog-grid-right.html" className="singlelink-title">
                        <span className="sp-link-title">03 Blog grid right</span>
                      </a>
                    </li>
                    <li className="singlemenu-li">
                      <a
                        href="article-post-without.html"
                        className="singlelink-title"
                      >
                        <span className="sp-link-title">04 Article post</span>
                      </a>
                    </li>
                    <li className="singlemenu-li">
                      <a href="article-post.html" className="singlelink-title">
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
                  href="#resp-pages"
                  className="link-title link-title-lg"
                  data-bs-toggle="collapse"
                >
                  <span className="sp-link-title">Pages</span>
                  <span className="menu-arrow">
                    <i className="feather-chevron-down" />
                  </span>
                </a>
                <div className="menu-dropdown sub-menu collapse" id="resp-pages">
                  <ul className="container p-0 ul">
                    <li className="submenu-li">
                      <a href="about-us.html" className="sublink-title">
                        <span className="sp-link-title">About us</span>
                        <span className="menu-arrow">
                          <i className="feather-chevron-right" />
                        </span>
                      </a>
                      <a
                        href="#resp-about-us"
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
                        id="resp-about-us"
                      >
                        <li className="supmenu-li">
                          <a href="about-us.html" className="suplink-title">
                            <span className="sp-link-title">About us</span>
                          </a>
                        </li>
                        <li className="supmenu-li">
                          <a href="about-us-2.html" className="suplink-title">
                            <span className="sp-link-title">About us 2</span>
                          </a>
                        </li>
                        <li className="supmenu-li">
                          <a href="about-us-3.html" className="suplink-title">
                            <span className="sp-link-title">About us 3</span>
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
                        href="#resp-account"
                        className="sublink-title sublink-title-lg"
                        data-bs-toggle="collapse"
                      >
                        <span className="sp-link-title">My account</span>
                        <span className="menu-arrow">
                          <i className="feather-chevron-right" />
                        </span>
                      </a>
                      <ul className="supmenu-dropdown collapse" id="resp-account">
                        <li className="supmenu-li">
                          <a href="order-history.html" className="suplink-title">
                            <span className="supmenu-title">Order</span>
                          </a>
                        </li>
                        <li className="supmenu-li">
                          <a href="profile.html" className="suplink-title">
                            <span className="supmenu-title">Profile</span>
                          </a>
                        </li>
                        <li className="supmenu-li">
                          <a href="pro-address.html" className="suplink-title">
                            <span className="supmenu-title">Address</span>
                          </a>
                        </li>
                        <li className="supmenu-li">
                          <a href="pro-wishlist.html" className="suplink-title">
                            <span className="supmenu-title">Wishlist</span>
                          </a>
                        </li>
                        <li className="supmenu-li">
                          <a href="pro-tickets.html" className="suplink-title">
                            <span className="supmenu-title">My tickets</span>
                          </a>
                        </li>
                        <li className="supmenu-li">
                          <a href="billing-info.html" className="suplink-title">
                            <span className="supmenu-title">Billing info</span>
                          </a>
                        </li>
                        <li className="supmenu-li">
                          <a href="track-page.html" className="suplink-title">
                            <span className="supmenu-title">Track page</span>
                          </a>
                        </li>
                        <li className="supmenu-li">
                          <a href="order-complete.html" className="suplink-title">
                            <span className="supmenu-title">Order complete</span>
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
                        href="#resp-contact-us"
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
                        id="resp-contact-us"
                      >
                        <li className="supmenu-li">
                          <a href="contact-us.html" className="suplink-title">
                            <span className="supmenu-title">Contact us</span>
                          </a>
                        </li>
                        <li className="supmenu-li">
                          <a href="contact-us-2.html" className="suplink-title">
                            <span className="supmenu-title">Contact us 2</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="submenu-li">
                      <a href="javascript:void(0)" className="sublink-title">
                        <span className="sp-link-title">Checkout</span>
                        <span className="menu-arrow">
                          <i className="feather-chevron-right" />
                        </span>
                      </a>
                      <a
                        href="#resp-checkout"
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
                        id="resp-checkout"
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
                      <a href="javascript:void(0)" className="sublink-title">
                        <span className="sp-link-title">Features</span>
                        <span className="menu-arrow">
                          <i className="feather-chevron-right" />
                        </span>
                      </a>
                      <a
                        href="#resp-feature"
                        className="sublink-title sublink-title-lg"
                        data-bs-toggle="collapse"
                      >
                        <span className="sp-link-title">Features</span>
                        <span className="menu-arrow">
                          <i className="feather-chevron-right" />
                        </span>
                      </a>
                      <ul className="supmenu-dropdown collapse" id="resp-feature">
                        <li className="supmenu-li">
                          <a href="cancellation.html" className="suplink-title">
                            <span className="supmenu-title">Cancellation</span>
                          </a>
                        </li>
                        <li className="supmenu-li">
                          <a href="cart-page.html" className="suplink-title">
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
                      <a href="privacy-policy.html" className="sublink-title">
                        <span className="sp-link-title">Privacy policy</span>
                      </a>
                      <a
                        href="privacy-policy.html"
                        className="sublink-title sublink-title-lg"
                      >
                        <span className="sp-link-title">Privacy policy</span>
                      </a>
                    </li>
                    <li className="submenu-li">
                      <a href="payment-policy.html" className="sublink-title">
                        <span className="sp-link-title">Payment policy</span>
                      </a>
                      <a
                        href="payment-policy.html"
                        className="sublink-title sublink-title-lg"
                      >
                        <span className="sp-link-title">Payment policy</span>
                      </a>
                    </li>
                    <li className="submenu-li">
                      <a href="terms-condition.html" className="sublink-title">
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
                      <a href="return-policy.html" className="sublink-title">
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
        {/* mega-menu end */}
      </div>
    </div>
    {/* mobile-menu end */}
    {/* notification-bottom start */}
    <div className="notification-bottom">
      <ul className="shop-element-menu navigation-menu">
        <li className="side-wrap home-wrap">
          <div className="home-wrapper">
            <a href="index-4.html" className="home-modal">
              <span className="home-icon">
                <i className="feather-home" />
              </span>
              <span className="header-title">Home</span>
            </a>
          </div>
        </li>
        <li className="side-wrap search-wrap">
          <div className="search-wrapper">
            <a href="#seachmodal" data-bs-toggle="modal" className="search-modal">
              <span className="search-icon">
                <i className="feather-search" />
              </span>
              <span className="header-title">Search</span>
            </a>
          </div>
        </li>
        <li className="side-wrap wishlist-wrap">
          <div className="wishlist-wrapper">
            <div className="wish-det">
              <a href="wishlist-product.html" className="wishlist-count">
                <span className="wishlist-icon">
                  <i className="feather-heart" />
                </span>
                <span className="wishlist-counter">5</span>
                <span className="header-title">Wishlist</span>
              </a>
            </div>
          </div>
        </li>
        <li className="side-wrap cart-wrap">
          <div className="cart-wrapper">
            <div className="cart-det">
              <a href="javascript:void(0)" className="add-to-cart cart-count">
                <span className="cart-icon">
                  <i className="feather-shopping-bag" />
                </span>
                <span className="cart-counter">8</span>
                <span className="header-title">Cart</span>
              </a>
            </div>
          </div>
        </li>
        <li className="side-wrap user-wrap">
          <div className="user-wrapper">
            <a href="login-account.html" className="user-login">
              <span className="user-icon">
                <i className="feather-user" />
              </span>
              <span className="header-title">User</span>
            </a>
          </div>
        </li>
      </ul>
    </div>
    {/* notification-bottom end */}
    {/* mini-cart start */}
    <div className="mini-cart">
      <div className="cart-text">
        {/* minicart-empty start */}
        <p className="d-none">No products in the cart.</p>
        {/* minicart-empty end */}
        {/* minicart-fill start */}
        <p>
          <span className="cart-count-desc">There are</span>
          <span className="cart-count">8</span>
          <span className="cart-count-desc">products</span>
        </p>
        {/* minicart-fill end */}
        {/* minicart-close start */}
        <button className="cart-close">
          <i className="feather-x" />
        </button>
        {/* minicart-close end */}
      </div>
      {/* minicart empty-content start */}
      <div className="empty-cart d-none">
        <span className="cart-icon">
          <i className="bi bi-bag-dash" />
        </span>
        <a href="collection.html" className="btn btn-style">
          Continue shopping
        </a>
      </div>
      {/* minicart empty-content end */}
      <ul className="cart-item">
        <li className="cart-product">
          <div className="cart-img">
            {/* minicart-img start */}
            <a href="product-template1.html" className="img-area">
              <img
                src="https://spacingtech.com/html/banno/banno-ltr/img/product-list/p-25.jpg"
                className="img-fluid"
                alt="p-25"
              />
            </a>
            {/* minicart-img end */}
          </div>
          <div className="cart-content">
            {/* minicart-title start */}
            <h6>
              <a href="product-template2.html">Mint chocolate chip</a>
            </h6>
            {/* minicart-title end */}
            <div className="product-info">
              {/* minicart-price start */}
              <div className="info-item">
                <span className="product-qty">1</span>
                <span>×</span>
                <span className="product-price">$12.00</span>
              </div>
              {/* minicart-price end */}
            </div>
            <div className="product-quantity-action">
              <div className="product-quantity">
                <div className="cart-plus-minus">
                  <button className="dec qtybutton minus">
                    <i className="feather-minus" />
                  </button>
                  <input type="text" name="quantity" defaultValue={1} />
                  <button className="inc qtybutton plus">
                    <i className="feather-plus" />
                  </button>
                </div>
              </div>
              {/* minicart delete-icon start */}
              <div className="delete-cart">
                <a href="javascript:void(0)" className="delete-icon">
                  <i className="feather-trash-2" />
                </a>
              </div>
              {/* minicart delete-icon end */}
            </div>
          </div>
        </li>
        <li className="cart-product">
          <div className="cart-img">
            {/* minicart-img start */}
            <a href="product-template1.html" className="img-area">
              <img
                src="https://spacingtech.com/html/banno/banno-ltr/img/product-list/p-26.jpg"
                className="img-fluid"
                alt="p-26"
              />
            </a>
            {/* minicart-img end */}
          </div>
          <div className="cart-content">
            {/* minicart-title start */}
            <h6>
              <a href="product-template2.html">Vanilla</a>
            </h6>
            {/* minicart-title end */}
            <div className="product-info">
              {/* minicart-price start */}
              <div className="info-item">
                <span className="product-qty">1</span>
                <span>×</span>
                <span className="product-price">$16.00</span>
              </div>
              {/* minicart-price end */}
            </div>
            <div className="product-quantity-action">
              <div className="product-quantity">
                <div className="cart-plus-minus">
                  <button className="dec qtybutton minus">
                    <i className="feather-minus" />
                  </button>
                  <input type="text" name="quantity" defaultValue={1} />
                  <button className="inc qtybutton plus">
                    <i className="feather-plus" />
                  </button>
                </div>
              </div>
              {/* minicart delete-icon start */}
              <div className="delete-cart">
                <a href="javascript:void(0)" className="delete-icon">
                  <i className="feather-trash-2" />
                </a>
              </div>
              {/* minicart delete-icon end */}
            </div>
          </div>
        </li>
        <li className="cart-product">
          <div className="cart-img">
            {/* minicart-img start */}
            <a href="product-template1.html" className="img-area">
              <img
                src="https://spacingtech.com/html/banno/banno-ltr/img/product-list/p-27.jpg"
                className="img-fluid"
                alt="p-27"
              />
            </a>
            {/* minicart-img end */}
          </div>
          <div className="cart-content">
            {/* minicart-title start */}
            <h6>
              <a href="product-template2.html">Avocado</a>
            </h6>
            {/* minicart-title end */}
            <div className="product-info">
              {/* minicart-price start */}
              <div className="info-item">
                <span className="product-qty">1</span>
                <span>×</span>
                <span className="product-price">$10.00</span>
              </div>
              {/* minicart-price end */}
            </div>
            <div className="product-quantity-action">
              <div className="product-quantity">
                <div className="cart-plus-minus">
                  <button className="dec qtybutton minus">
                    <i className="feather-minus" />
                  </button>
                  <input type="text" name="quantity" defaultValue={1} />
                  <button className="inc qtybutton plus">
                    <i className="feather-plus" />
                  </button>
                </div>
              </div>
              {/* minicart delete-icon start */}
              <div className="delete-cart">
                <a href="javascript:void(0)" className="delete-icon">
                  <i className="feather-trash-2" />
                </a>
              </div>
              {/* minicart delete-icon end */}
            </div>
          </div>
        </li>
        <li className="cart-product">
          <div className="cart-img">
            {/* minicart-img start */}
            <a href="product-template1.html" className="img-area">
              <img
                src="https://spacingtech.com/html/banno/banno-ltr/img/product-list/p-28.jpg"
                className="img-fluid"
                alt="p-28"
              />
            </a>
            {/* minicart-img end */}
          </div>
          <div className="cart-content">
            {/* minicart-title start */}
            <h6>
              <a href="product-template2.html">Moose Tracks</a>
            </h6>
            {/* minicart-title end */}
            <div className="product-info">
              {/* minicart-price start */}
              <div className="info-item">
                <span className="product-qty">1</span>
                <span>×</span>
                <span className="product-price">$8.00</span>
              </div>
              {/* minicart-price end */}
            </div>
            <div className="product-quantity-action">
              <div className="product-quantity">
                <div className="cart-plus-minus">
                  <button className="dec qtybutton minus">
                    <i className="feather-minus" />
                  </button>
                  <input type="text" name="quantity" defaultValue={1} />
                  <button className="inc qtybutton plus">
                    <i className="feather-plus" />
                  </button>
                </div>
              </div>
              {/* minicart delete-icon start */}
              <div className="delete-cart">
                <a href="javascript:void(0)" className="delete-icon">
                  <i className="feather-trash-2" />
                </a>
              </div>
              {/* minicart delete-icon end */}
            </div>
          </div>
        </li>
        <li className="cart-product">
          <div className="cart-img">
            {/* minicart-img start */}
            <a href="product-template1.html" className="img-area">
              <img
                src="https://spacingtech.com/html/banno/banno-ltr/img/product-list/p-29.jpg"
                className="img-fluid"
                alt="p-29"
              />
            </a>
            {/* minicart-img end */}
          </div>
          <div className="cart-content">
            {/* minicart-title start */}
            <h6>
              <a href="product-template2.html">Cookies N' CreamPistachio</a>
            </h6>
            {/* minicart-title end */}
            <div className="product-info">
              {/* minicart-price start */}
              <div className="info-item">
                <span className="product-qty">1</span>
                <span>×</span>
                <span className="product-price">$11.00</span>
              </div>
              {/* minicart-price end */}
            </div>
            <div className="product-quantity-action">
              <div className="product-quantity">
                <div className="cart-plus-minus">
                  <button className="dec qtybutton minus">
                    <i className="feather-minus" />
                  </button>
                  <input type="text" name="quantity" defaultValue={1} />
                  <button className="inc qtybutton plus">
                    <i className="feather-plus" />
                  </button>
                </div>
              </div>
              {/* minicart delete-icon start */}
              <div className="delete-cart">
                <a href="javascript:void(0)" className="delete-icon">
                  <i className="feather-trash-2" />
                </a>
              </div>
              {/* minicart delete-icon end */}
            </div>
          </div>
        </li>
        <li className="cart-product">
          <div className="cart-img">
            {/* minicart-img start */}
            <a href="product-template1.html" className="img-area">
              <img
                src="https://spacingtech.com/html/banno/banno-ltr/img/product-list/p-30.jpg"
                className="img-fluid"
                alt="p-30"
              />
            </a>
            {/* minicart-img end */}
          </div>
          <div className="cart-content">
            {/* minicart-title start */}
            <h6>
              <a href="product-template2.html">Pistachio</a>
            </h6>
            {/* minicart-title end */}
            <div className="product-info">
              {/* minicart-price start */}
              <div className="info-item">
                <span className="product-qty">1</span>
                <span>×</span>
                <span className="product-price">$13.00</span>
              </div>
              {/* minicart-price end */}
            </div>
            <div className="product-quantity-action">
              <div className="product-quantity">
                <div className="cart-plus-minus">
                  <button className="dec qtybutton minus">
                    <i className="feather-minus" />
                  </button>
                  <input type="text" name="quantity" defaultValue={1} />
                  <button className="inc qtybutton plus">
                    <i className="feather-plus" />
                  </button>
                </div>
              </div>
              {/* minicart delete-icon start */}
              <div className="delete-cart">
                <a href="javascript:void(0)" className="delete-icon">
                  <i className="feather-trash-2" />
                </a>
              </div>
              {/* minicart delete-icon end */}
            </div>
          </div>
        </li>
        <li className="cart-product">
          <div className="cart-img">
            {/* minicart-img start */}
            <a href="product-template1.html" className="img-area">
              <img
                src="https://spacingtech.com/html/banno/banno-ltr/img/product-list/p-31.jpg"
                className="img-fluid"
                alt="p-31"
              />
            </a>
            {/* minicart-img end */}
          </div>
          <div className="cart-content">
            {/* minicart-title start */}
            <h6>
              <a href="product-template2.html">Horchata</a>
            </h6>
            {/* minicart-title end */}
            <div className="product-info">
              {/* minicart-price start */}
              <div className="info-item">
                <span className="product-qty">1</span>
                <span>×</span>
                <span className="product-price">$10.00</span>
              </div>
              {/* minicart-price end */}
            </div>
            <div className="product-quantity-action">
              <div className="product-quantity">
                <div className="cart-plus-minus">
                  <button className="dec qtybutton minus">
                    <i className="feather-minus" />
                  </button>
                  <input type="text" name="quantity" defaultValue={1} />
                  <button className="inc qtybutton plus">
                    <i className="feather-plus" />
                  </button>
                </div>
              </div>
              {/* minicart delete-icon start */}
              <div className="delete-cart">
                <a href="javascript:void(0)" className="delete-icon">
                  <i className="feather-trash-2" />
                </a>
              </div>
              {/* minicart delete-icon end */}
            </div>
          </div>
        </li>
        <li className="cart-product">
          <div className="cart-img">
            {/* minicart-img start */}
            <a href="product-template1.html" className="img-area">
              <img
                src="https://spacingtech.com/html/banno/banno-ltr/img/product-list/p-32.jpg"
                className="img-fluid"
                alt="p-32"
              />
            </a>
            {/* minicart-img end */}
          </div>
          <div className="cart-content">
            {/* minicart-title start */}
            <h6>
              <a href="product-template2.html">Banana Nut</a>
            </h6>
            {/* minicart-title end */}
            <div className="product-info">
              {/* minicart-price start */}
              <div className="info-item">
                <span className="product-qty">1</span>
                <span>×</span>
                <span className="product-price">$44.00</span>
              </div>
              {/* minicart-price end */}
            </div>
            <div className="product-quantity-action">
              <div className="product-quantity">
                <div className="cart-plus-minus">
                  <button className="dec qtybutton minus">
                    <i className="feather-minus" />
                  </button>
                  <input type="text" name="quantity" defaultValue={1} />
                  <button className="inc qtybutton plus">
                    <i className="feather-plus" />
                  </button>
                </div>
              </div>
              {/* minicart delete-icon start */}
              <div className="delete-cart">
                <a href="javascript:void(0)" className="delete-icon">
                  <i className="feather-trash-2" />
                </a>
              </div>
              {/* minicart delete-icon end */}
            </div>
          </div>
        </li>
      </ul>
      {/* minicart-total start */}
      <ul className="subtotal-area">
        <li className="subtotal-info">
          <div className="subtotal-titles">
            {/* minicart total-title start */}
            <h6 className="cart-total">Subtotal:</h6>
            {/* minicart total-title end */}
            {/* minicart total-price start */}
            <span className="subtotal-price">$124.00</span>
            {/* minicart total-price end */}
          </div>
        </li>
        <li className="mini-info">
          {/* minicart agree-text start */}
          <label className="box-area">
            <span className="agree-text">
              I have read and agree with the{" "}
              <a href="terms-condition.html">terms &amp; condition.</a>
            </span>
            <input type="checkbox" className="cust-checkbox" />
            <span className="cust-check" />
          </label>
          {/* minicart agree-text end */}
          {/* minicart button start */}
          <div className="cart-btn">
            <a href="cart-page.html" className="btn btn-style2">
              View cart
            </a>
            <a
              href="checkout-style1.html"
              className="btn btn-style2 checkout disabled"
            >
              Checkout
            </a>
          </div>
          {/* minicart button end */}
        </li>
      </ul>
      {/* minicart-total end */}
    </div>
    {/* minicart end */}
    {/* quickview modal start */}
    <div className="productmodal">
      <div className="modal fade" id="quickview" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-quickview">Quickview</h6>
              <button type="button" className="close" data-bs-dismiss="modal">
                <i className="feather-x" />
              </button>
            </div>
            <div className="modal-body">
              {/* swiper slider start */}
              <div className="quickview-main-area">
                <div className="quickview-slider">
                  <div className="swiper gallery-top">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <a href="product-template.html">
                          <img
                            src="https://spacingtech.com/html/banno/banno-ltr/img/product/p-136.jpg"
                            className="img-fluid"
                            alt="p-136"
                          />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a href="product-template.html">
                          <img
                            src="https://spacingtech.com/html/banno/banno-ltr/img/product/p-137.jpg"
                            className="img-fluid"
                            alt="p-137"
                          />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a href="product-template.html">
                          <img
                            src="https://spacingtech.com/html/banno/banno-ltr/img/product/p-138.jpg"
                            className="img-fluid"
                            alt="p-138"
                          />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a href="product-template.html">
                          <img
                            src="https://spacingtech.com/html/banno/banno-ltr/img/product/p-139.jpg"
                            className="img-fluid"
                            alt="p-139"
                          />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a href="product-template.html">
                          <img
                            src="https://spacingtech.com/html/banno/banno-ltr/img/product/p-140.jpg"
                            className="img-fluid"
                            alt="p-140"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="swiper-button">
                      <button className="quick-prev">
                        <i className="fas fa-chevron-left" />
                      </button>
                      <button className="quick-next">
                        <i className="fas fa-chevron-right" />
                      </button>
                    </div>
                  </div>
                  <div className="swiper gallery-thumbs">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <a href="javascript:void(0)">
                          <img
                            src="https://spacingtech.com/html/banno/banno-ltr/img/product/p-136.jpg"
                            className="img-fluid"
                            alt="p-136"
                          />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a href="javascript:void(0)">
                          <img
                            src="https://spacingtech.com/html/banno/banno-ltr/img/product/p-137.jpg"
                            className="img-fluid"
                            alt="p-137"
                          />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a href="javascript:void(0)">
                          <img
                            src="https://spacingtech.com/html/banno/banno-ltr/img/product/p-138.jpg"
                            className="img-fluid"
                            alt="p-138"
                          />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a href="javascript:void(0)">
                          <img
                            src="https://spacingtech.com/html/banno/banno-ltr/img/product/p-139.jpg"
                            className="img-fluid"
                            alt="p-139"
                          />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a href="javascript:void(0)">
                          <img
                            src="https://spacingtech.com/html/banno/banno-ltr/img/product/p-140.jpg"
                            className="img-fluid"
                            alt="p-140"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* swiper slider end */}
                {/* quick-view content start */}
                <div className="quick-view-content">
                  <div className="product-rating">
                    <span className="star-rating">
                      <i className="far fa-star" />
                      <i className="far fa-star" />
                      <i className="far fa-star" />
                      <i className="far fa-star" />
                      <i className="far fa-star" />
                    </span>
                  </div>
                  <div className="product-title">
                    <h6 className="product_title">Mint chocolate chip</h6>
                  </div>
                  {/* product-price start */}
                  <div className="price-box">
                    <span className="new-price">$12.00</span>
                    <span className="old-price">$20.00</span>
                  </div>
                  {/* product-price end */}
                  <div className="product-desc">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magn
                    </p>
                  </div>
                  <form method="post">
                    <div className="quick-view-select variants select-option-part">
                      <div className="variants_selects">
                        <div className="selector-wrapper">
                          <label>Flavor</label>
                        </div>
                        <div className="select-icon">
                          <select className="single-option-selector select--wd">
                            <option value="Almond">Almond</option>
                            <option value="Cannoli">Cannoli</option>
                            <option value="Lychee">Lychee</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="product-quantity-action">
                      <h6>Quantity:</h6>
                      <div className="product-quantity">
                        <div className="cart-plus-minus">
                          <button className="dec qtybutton minus">
                            <i className="fa-solid fa-minus" />
                          </button>
                          <input type="text" name="quantity" defaultValue={1} />
                          <button className="inc qtybutton plus">
                            <i className="fa-solid fa-plus" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="quickview-buttons">
                      <button type="submit" className="addtocartqv">
                        <span className="cart-title">Add to cart</span>
                      </button>
                    </div>
                  </form>
                </div>
                {/* quick-view content end */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* quickview modal end */}
    {/* screen-bg start */}
    <div className="screen-bg" />
  
    <a href="javascript:void(0)" id="top" className="scroll">
      <span>
        <i className="feather-arrow-up" />
      </span>
    </a>
  
  </>
  
       );
};

export default LandingPage;
