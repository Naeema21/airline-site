"use client";
import Link from "next/link";
import Image from "next/image";

import PaymentMethod from "./component/paymentMethod";
import { useState } from "react";

import { destinationData } from "./utils/data";
import { DestinationCard, CallModal } from "./component";
import {
  Product01,
  Product02,
  experienceBg,
  bannerImage1,
  Gallery1,
  Gallery2,
  Gallery3,
  Gallery5,
} from "./utils/images";

const Home = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <main>
      <div className="pagewrap" id="home">
        <div className="head-wrapper">
          <div
            className="search-engine"
            style={{ backgroundImage: `url(${bannerImage1.src})` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-12  text-center position-relative">
                  <h1 className="display-1 mb-2 theme-text-white theme-text-shadow">
                    Your dream travel just <br /> a phone call away!
                  </h1>
                  <p className="mb-0 theme-text-white">Travel has always proven to be the ultimate cure. Even if not pursued with fervor,<br />
                    unfamiliar destinations consistently offer the tranquility you have been seeking.</p>

                  <button
                    type="submit"
                    className="btn btn-search mt-4 mb-6"
                    onClick={handleToggle}
                  >
                    <span className="fw-bold"> Call Us Now</span>
                  </button>
                </div >
              </div >
              {/* <SearchEngine handleToggle={handleToggle} /> */}
            </div >
          </div >
        </div >
        {/*   <NewsLetter  /> */}
      </div >

      {/* <!-- recommended section --> */}
      {/* <section className="recommended" id="deals">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <h4 className="fs-2 fw-bold theme-text-secondary mb-0">Recommended</h4>
              <p className="mb-0 theme-text-accent-one">International & Domestic fames ac ante ipsum</p>
            </div>
          </div>
          {/* <!-- recomended tours card -->
          <div className="row mt-5">
            {recommendedCardData?.map((card, index) => (
              <RecommendedCard card={card} key={index} />
            ))}
          </div>
        </div>
      </section> */}

      {/* <!-- special offers section --> */}
      <section className="special-offers" id="offers">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h4 className="fs-2 fw-bold theme-text-secondary mb-0">
                Special Offers
              </h4>
              <p className="mb-0 theme-text-accent-one">
                These popular destinations have a lot to offer
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 mb-3 mb-md-0 overflow-hidden hoverShine">
              <div
                className="box product01"
                style={{ backgroundImage: `url(${Product01.src})` }}
              >
                <div className="content">
                  <p className="fs-1 theme-heading theme-text-white mb-4">
                    Things to do on <br />
                    your trip
                  </p>
                  <div className="custom-button">
                    <button
                      onClick={handleToggle}
                      className="btn btn-shop small"
                    >
                      Learn More
                      <i className="bi bi-arrow-up-right fs-6 ms-2"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-3 mb-md-0 overflow-hidden hoverShine">
              <div
                className="box product02"
                style={{ backgroundImage: `url(${Product02.src})` }}
              >
                <div className="content">
                  <p className="fs-6 mb-2 theme-text-white">
                    Enjoy Summer Deals
                  </p>
                  <p className="fs-1 theme-heading theme-text-white mb-4">
                    Up to 70% Discount!
                  </p>
                  <div className="custom-button">
                    <button
                      onClick={handleToggle}
                      className="btn btn-shop small"
                    >
                      View Deal
                      <i className="bi bi-arrow-up-right fs-6 ms-2"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* destination section */}
      <section className="destinations" id="holidays">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-5">
              <h4 className="fs-2 fw-bold theme-text-secondary mb-0">
                Most loved Destinations
              </h4>
              <p className="mb-0 theme-text-accent-one">
                International & Domestic fames{" "}
              </p>
            </div>
            <div className="col-12">
              {/* <ul className="nav nav-pills mb-3 destination-pill" id="pills-tab2" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="pills-regions-tab" data-bs-toggle="pill" data-bs-target="#pills-regions" type="button" role="tab" aria-controls="pills-regions" aria-selected="true">Regions</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-cities-tab" data-bs-toggle="pill" data-bs-target="#pills-cities" type="button" role="tab" aria-controls="pills-cities" aria-selected="false">Cities</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Places of interest</button>
                </li>
              </ul> */}
              <div className="tab-content mt-3" id="pills-tab2Content">
                <div
                  className="tab-pane fade show active"
                  id="pills-regions"
                  role="tabpanel"
                  aria-labelledby="pills-regions-tab"
                >
                  <div className="row">
                    {destinationData.map((destination, index) => (
                      <DestinationCard
                        key={index}
                        destination={destination}
                        handle={handleToggle}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- wonderful experience --> */}
      <section className="experience">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="wrap"
                style={{ backgroundImage: `url(${experienceBg.src})` }}
              >
                <div className="row">
                  <div className="col-12 position-relative align-self-center">
                    <h4 className="display-4 theme-text-white mb-0 fw-bold text-center">
                      Wonderful Travel Experiences with
                      <br />
                      Round Tours
                    </h4>
                    <div className="group custom-button">
                      <div className="d-flex align-items-center">
                        <Link
                          href="tel:1888 508 7143"
                          className="video-icon video-icon2 mr-30 ml-20 video_model"
                        >
                          <i className="bi bi-telephone"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row mt-5">
            <div className="col-12 col-sm-6 col-lg-4 mb-3 mb-lg-0">
              <div className="d-flex align-items-center p-4 p-md-0">
                <i className="bi bi-airplane fs-4 theme-text-primary"></i>
                <h3 className="fs-2 mb-0 mx-3">4259</h3>
                <p className="fs-4 mb-0 theme-text-accent-one">Flights</p>
              </div>
            </div>
          
            <div className="col-12 col-sm-6 col-lg-4 mb-3 mb-lg-0">
              <div className="d-flex align-items-center p-4 p-md-0">
                <i className="bi bi-award fs-4 theme-text-primary"></i>
                <h3 className="fs-2 mb-0 mx-3">9789</h3>
                <p className="fs-4 mb-0 theme-text-accent-one">Packages</p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 mb-3 mb-lg-0">
              <div className="d-flex align-items-center p-4 p-md-0">
                <i className="bi bi-star fs-4 theme-text-primary"></i>
                <h3 className="fs-2 mb-0 mx-3">9999</h3>
                <p className="fs-4 mb-0 theme-text-accent-one">Ratings</p>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* <!-- popular routes section --> */}
      {/* <section className="popular-routes">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 mb-5 mb-lg-0">
              <h4 className="fs-2 fw-bold theme-text-secondary mb-0">Popular Routes</h4>
              <p className="mb-0 theme-text-accent-one">International &amp; Domestic fames ac ante ipsum</p>
            </div>
            <div className="col-12 col-lg-6 align-self-center justify-content-end d-flex">
              <div className="d-flex">
                <div className="dropdown-center">
                  <button className="btn recomended-btn" type="button">More <i
                    className="bi bi-arrow-up-right ms-2"></i></button>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 mb-3">
              {
                routesData.map((routes, index) => (
                  <RouteCard routes={routes}  handle={handleToggle} key={index} />
                ))
              }
            </div>
          </div>
        </div>
      </section> */}

      {/* How to book */}

      <div className="container-fluid step-container">
        <div className="container text-center">
          <svg className="svg-divider" xmlns="http://www.w3.org/2000/svg" width="930" height="50" viewBox="0 0 950 50" fill="none">
            <path d="M0.5 34.9981C99 50.9984 248 -11.0007 347 27.4986C463 72.6088 583.061 34.7134 629 20.4977C803.5 -33.5004 928.5 45.0006 953 26.5" stroke="#CEA67D" stroke-opacity="0.4" stroke-width="2" stroke-dasharray="9 9"></path>
          </svg>
          <div className="text-center pb-4">
            <h2 className="text-black fw-bold">How to Book</h2>
          </div>
          <div className="row g-4">
            <div className="col-12 col-lg-3 step-card">
              <div className="step-icon mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="bi bi-airplane">
                  <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849m.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1s-.458.158-.678.599" />
                </svg>
              </div>
              <h3 className="text-black mt-2">Step 1</h3>
              <p className="step-text">Enter your flight details and click search</p>
            </div>
            <div className="col-12 col-lg-3 step-card">
              <div className="step-icon mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="bi bi-person-lines-fill">
                  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H11zm-2-4.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                </svg>
              </div>
              <h3 className="text-black mt-2">Step 2</h3>
              <p className="step-text">Fill your contact information</p>
            </div>
            <div className="col-12 col-lg-3 step-card">
              <div className="step-icon mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="bi bi-headset">
                  <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
                </svg>
              </div>
              <h3 className="text-black mt-2">Step 3</h3>
              <p className="step-text">Your personal travel advisor will contact you momentarily</p>
            </div>
            <div className="col-12 col-lg-3 step-card">
              <div className="step-icon mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="bi bi-envelope-plus">
                  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zM5.708 8.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z" />
                  <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5z" />
                </svg>
              </div>
              <h3 className="text-black mt-2">Step 4</h3>
              <p className="step-text">Get your tickets and enjoy your trip</p>
            </div>
          </div>
        </div>
      </div>


      {/* Gallery */}
      <section id="gallery">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h4 className="fs-2 fw-bold theme-text-secondary mb-0">
                PHOTO&apos;S FROM TRAVELLERS
              </h4>
              <p className="mb-0 theme-text-accent-one">
                Be it a family vacation, a business trip or a short getaway,we
                know exactly how to make it unforgettable
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <Image
                src={Gallery1}
                className="w-100  h-full shadow-1-strong rounded mb-4"
                alt="Boat on Calm Water"
              />

              <Image
                src={Gallery5}
                className="w-100 h-full shadow-1-strong rounded mb-4"
                alt="Wintry Mountain Landscape"
              />
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
              <Image
                src={Gallery3}
                className="w-100 h-auto shadow-1-strong rounded mb-4"
                alt="Mountains in the Clouds"
              />
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
              <Image
                src={Gallery2}
                className="w-100 h-full shadow-1-strong rounded mb-4"
                alt="Waves at Sea"
              />

              <Image
                src={Gallery1}
                className="w-100 h-full shadow-1-strong rounded mb-4"
                alt="Yosemite National Park"
              />
            </div>
          </div>
        </div>
        <PaymentMethod />
      </section>

      {/* steps  */}
      <section className="pt-0">
        <div className="container">
          <div className="row g-4 g-lg-5 justify-content-center">
            {/* <!-- Step item --> */}
            <div className="col-sm-6 col-md-4 text-center position-relative">
              {/* <!-- SVG decoration --> */}
              <figure className="position-absolute top-0 start-100 translate-middle mt-8 d-none d-lg-block">
                <svg width="154px" height="83px">
                  <path className="fill-secondary opacity-4" d="M142.221,83.016 L140.251,81.082 L148.020,73.376 C146.847,73.405 145.665,73.402 144.479,73.353 L144.548,70.637 C145.888,70.692 147.217,70.676 148.535,70.628 L139.384,62.839 L141.165,60.792 L153.787,71.539 L142.221,83.016 ZM131.667,71.378 L132.327,68.751 C134.373,69.284 136.418,69.712 138.402,70.022 L138.015,72.707 C135.938,72.383 133.803,71.936 131.667,71.378 ZM119.489,67.036 L120.594,64.564 C122.531,65.433 124.480,66.221 126.383,66.905 L125.482,69.458 C123.509,68.751 121.493,67.935 119.489,67.036 ZM108.113,60.978 L109.540,58.677 C111.340,59.784 113.170,60.834 114.978,61.800 L113.698,64.186 C111.840,63.193 109.961,62.115 108.113,60.978 ZM99.302,55.005 C98.712,54.567 98.124,54.125 97.540,53.680 L99.203,51.541 C99.776,51.978 100.352,52.412 100.933,52.843 C102.031,53.657 103.148,54.459 104.282,55.243 L102.729,57.461 C101.568,56.659 100.426,55.841 99.302,55.005 ZM87.631,45.617 L89.413,43.574 C91.015,44.943 92.626,46.298 94.258,47.629 L92.525,49.714 C90.877,48.369 89.247,47.000 87.631,45.617 ZM78.063,37.231 L79.883,35.221 L84.635,39.423 L82.823,41.439 L78.063,37.231 ZM68.521,28.905 L70.295,26.853 C71.914,28.227 73.520,29.618 75.118,31.017 L73.310,33.038 C71.724,31.648 70.130,30.268 68.521,28.905 ZM58.688,21.003 L60.328,18.848 C62.036,20.128 63.717,21.440 65.378,22.781 L63.659,24.875 C62.023,23.557 60.369,22.263 58.688,21.003 ZM48.288,13.967 L49.683,11.647 C51.494,12.727 53.321,13.891 55.111,15.108 L53.575,17.340 C51.832,16.155 50.053,15.019 48.288,13.967 ZM38.981,9.077 C38.372,8.799 37.760,8.531 37.146,8.268 L38.204,5.775 C38.838,6.046 39.469,6.325 40.098,6.611 C41.429,7.216 42.746,7.854 44.046,8.521 L42.810,10.930 C41.547,10.283 40.272,9.664 38.981,9.077 ZM25.330,4.320 L25.934,1.679 C27.985,2.168 30.080,2.771 32.161,3.471 L31.314,6.042 C29.311,5.369 27.298,4.791 25.330,4.320 ZM13.076,2.706 L13.084,-0.012 C15.208,0.029 17.387,0.197 19.559,0.487 L19.234,3.180 C17.166,2.905 15.094,2.745 13.076,2.706 ZM0.759,1.270 C2.660,0.821 4.623,0.487 6.593,0.273 L6.939,2.975 C5.080,3.177 3.230,3.493 1.439,3.914 L0.759,1.270 Z"></path>
                </svg>
              </figure>

              <div className="px-4">
                {/* <!-- Image --> */}
                <img src="https://booking.webestica.com/assets/images/element/step-3.svg" className="w-150px mb-3" alt="" />
                {/* <!-- Title --> */}
                <h5>Search Choice</h5>
                <p className="mb-0">Total 630+ destinations that we work with</p>
              </div>
            </div>

            {/* <!-- Step item --> */}
            <div className="col-sm-6 col-md-4 position-relative text-center pt-0 pt-lg-5">
              {/* <!-- SVG decoration --> */}
              <figure className="position-absolute top-100 start-100 translate-middle d-none d-lg-block mt-n9">
                <svg className="fill-secondary opacity-4" width="161px" height="79px">
                  <path d="M158.107,15.463 L157.135,5.449 C156.369,6.347 155.573,7.235 154.736,8.101 L152.599,6.579 C153.544,5.600 154.425,4.592 155.272,3.574 L142.859,6.243 L142.411,3.796 L159.535,0.118 L160.985,15.028 L158.107,15.463 ZM131.614,21.310 C133.615,20.323 135.558,19.284 137.387,18.222 L138.833,20.282 C136.938,21.383 134.927,22.459 132.858,23.479 L131.614,21.310 ZM119.450,26.438 C121.550,25.684 123.624,24.876 125.616,24.039 L126.674,26.293 C124.626,27.153 122.496,27.983 120.340,28.758 L119.450,26.438 ZM107.366,32.761 L106.764,30.352 C107.500,30.158 108.237,29.959 108.974,29.755 C110.367,29.370 111.762,28.963 113.155,28.535 L113.894,30.904 C112.468,31.343 111.042,31.759 109.615,32.153 C108.867,32.359 108.116,32.563 107.366,32.761 ZM93.778,33.405 C95.956,32.941 98.128,32.461 100.295,31.955 L100.806,34.386 C98.616,34.898 96.421,35.383 94.222,35.850 L93.778,33.405 ZM80.657,36.053 L87.229,34.752 L87.633,37.206 L81.049,38.509 L80.657,36.053 ZM67.485,38.736 C69.678,38.262 71.876,37.807 74.074,37.362 L74.484,39.816 C72.299,40.256 70.119,40.708 67.942,41.181 L67.485,38.736 ZM54.349,41.900 C56.526,41.309 58.711,40.754 60.906,40.230 L61.433,42.656 C59.274,43.174 57.122,43.718 54.979,44.301 L54.349,41.900 ZM41.404,46.011 C43.490,45.232 45.654,44.489 47.835,43.801 L48.597,46.164 C46.472,46.834 44.363,47.557 42.331,48.315 L41.404,46.011 ZM30.259,53.613 L28.967,51.468 C29.611,51.137 30.259,50.813 30.912,50.495 C32.293,49.821 33.691,49.176 35.102,48.558 L36.207,50.792 C34.838,51.392 33.483,52.016 32.143,52.670 C31.511,52.978 30.883,53.292 30.259,53.613 ZM17.425,58.480 C19.198,57.202 21.090,55.953 23.052,54.765 L24.549,56.794 C22.662,57.937 20.844,59.138 19.142,60.364 L17.425,58.480 ZM7.428,67.231 C8.888,65.655 10.488,64.107 12.182,62.630 L14.128,64.332 C12.516,65.738 10.995,67.211 9.607,68.707 L7.428,67.231 ZM0.172,77.195 C1.089,75.523 2.140,73.865 3.293,72.267 L5.697,73.469 C4.610,74.977 3.620,76.539 2.755,78.114 L0.172,77.195 ZM149.871,12.613 C148.214,13.999 146.419,15.364 144.535,16.669 L142.867,14.750 C144.671,13.499 146.390,12.194 147.973,10.869 L149.871,12.613 Z"></path>
                </svg>
              </figure>

              <div className="px-4">
                {/* <!-- Image --> */}
                <img src="https://booking.webestica.com/assets/images/element/step-2.svg" className="w-150px mb-3" alt="" />

                {/* <!-- Title --> */}
                <h5>Select Destination</h5>
                <p className="mb-0">Insipidity the sufficient discretion imprudence</p>
              </div>
            </div>

            {/* <!-- Step item --> */}
            <div className="col-sm-6 col-md-4 text-center">
              <div className="px-4">
                {/* <!-- Image --> */}
                <img src="https://booking.webestica.com/assets/images/element/step-1.svg" className="w-150px mb-3" alt="" />

                {/* <!-- Title --> */}
                <h5>Easy to Book</h5>
                <p className="mb-0">With an easy and fast ticket purchase process</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* call us modal */}
      <CallModal show={show} handleClose={handleToggle} setShow={setShow} />
    </main >
  );
};

export default Home;
