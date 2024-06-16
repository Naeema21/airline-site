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
                  <p className="mb-0 theme-text-white">
                    Travel has always proven to be the ultimate cure. Even if
                    not pursued with fervor,
                    <br />
                    unfamiliar destinations consistently offer the tranquility
                    you have been seeking.
                  </p>

                  <button
                    type="submit"
                    className="btn btn-search mt-4 mb-6"
                    onClick={handleToggle}
                  >
                    <span className="fw-bold"> Call Us Now</span>
                  </button>
                </div>
              </div>
              {/* <SearchEngine handleToggle={handleToggle} /> */}
            </div>
          </div>
        </div>
        {/*   <NewsLetter  /> */}
      </div>

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
            <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849m.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1s-.458.158-.678.599"/>
          </svg>
        </div>
        <h3 className="text-black mt-2">Step 1</h3>
        <p className="step-text">Enter your flight details and click search</p>
      </div>
      <div className="col-12 col-lg-3 step-card">
        <div className="step-icon mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="bi bi-person-lines-fill">
            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H11zm-2-4.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
          </svg>
        </div>
        <h3 className="text-black mt-2">Step 2</h3>
        <p className="step-text">Fill your contact information</p>
      </div>
      <div className="col-12 col-lg-3 step-card">
        <div className="step-icon mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="bi bi-headset">
            <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z"/>
          </svg>
        </div>
        <h3 className="text-black mt-2">Step 3</h3>
        <p className="step-text">Your personal travel advisor will contact you momentarily</p>
      </div>
      <div className="col-12 col-lg-3 step-card">
        <div className="step-icon mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="bi bi-envelope-plus">
            <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zM5.708 8.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
            <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5z"/>
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

      {/* call us modal */}
      <CallModal show={show} handleClose={handleToggle} setShow={setShow} />
    </main>
  );
};

export default Home;
