"use client";
import Link from "next/link";
import Image from "next/image";
import {AboutusImg1,AboutusImg2,Advantage1,Advantage2,Advantage3,Advantage4,EasyImg,ExcImg,LowestImg,Support,}
from "./utils/images"; 
import { useState } from "react";
import { destinationData, recommendedCardData, routesData } from "./utils/data";
import { DestinationCard, CallModal, RouteCard, RecommendedCard, } from "./component";
import {Product01,Product02,experienceBg,Gallery1, Gallery2, Gallery3, Gallery5} from "./utils/images";


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
          // style={{ backgroundImage: `url(${bannerImage1.src})` }}
          >
            <video autoPlay loop muted >
              <source src="/flight_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
           </video>
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
                    <span className="fw-bold"> Call Now</span>
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
          <div className="row mt-5">
            {recommendedCardData?.map((card, index) => (
              <RecommendedCard card={card} key={index} />
            ))}
          </div>
        </div>
      </section>  */}

<section className="pt-5 pt-lg-5 step-container">
        <div className="pb-md-4 mt-4 container">
          <div className="d-flex flex-column flex-md-row mb-0 w-100 mx-auto container-xl gap-4">
            <div className="w-100 w-md-50 max-h-330 p-0 rounded overflow-hidden">
              <Image
                src={AboutusImg1}
                alt="about image"
                title="About"
                layout="responsive"
                width={250}
                height={160}
                className="h-100 w-100 object-cover"
              />
            </div>
            <div className="p-3 d-flex align-items-end align-items-xl-center justify-content-center flex-column w-100 w-md-50">
              <div>
                <div className="row">
                  <div className="col-12 text-center mb-3">
                    <h4 className="fs-2 fw-bold theme-text-secondary mb-0">
                      Welcome to ReservationKart.com 
                    </h4>
                  </div>
                </div>
                <p className="theme-text-accent-one p-0 font-normal text-base max-w-440 text-center text-md-start">
                  Welcome to reservationkart.com, your ultimate destination for
                  effortless and affordable travel solutions. As a leading cheap
                  flight agency, we specialize in providing budget friendly
                  options for all your travel needs, from airplane reservations
                  to comprehensive travel packages. Book flights online
                  effortlessly with our user-friendly platform, designed to help
                  you find and secure cheap flight tickets with ease. Whether
                  you are searching for airline tickets for a domestic trip or
                  cheap international flights, we have you covered. Our
                  extensive network ensures you get the best deals on plane
                  tickets, making travel accessible and affordable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
       
        {/*sec 2 who we are  */}
      <section className="step-container">
        <div className="py-4 container">
          <div className="d-flex flex-column flex-md-row mb-0 w-100 container-xl mx-auto gap-4">
            <div className="p-3 d-flex align-items-end align-items-xl-center justify-content-center flex-column w-100 w-md-50">
              <div>
                <div className="row">
                  <div className="col-12 text-center mb-3">
                    <h4 className="fs-2 fw-bold theme-text-secondary mb-0">
                      Looking for more than just flights
                    </h4>
                  </div>
                </div>
                <p className="theme-text-accent-one pb-0 pb-md-3 font-weight-normal text-base max-w-440 text-start text-md-left">
                  We offer a complete traveler agency experience with services
                  that include cab bookings and hotel reservations. Plan your
                  entire journey in one place, saving you time and money.
                  Explore multi-city flights for those adventurous trips and
                  discover the convenience of our seamless booking process. Our
                  commitment to providing cheap airline flights means you can
                  focus on enjoying your travel experiences without worrying
                  about high costs.
                </p>
              </div>
            </div>
            <div className="w-100 w-md-50 mh-350  p-0 rounded overflow-hidden">
              <Image
                src={AboutusImg2}
                alt="who we are"
                title="About Us"
                layout="responsive"
                width={250}
                height={160}
                className="h-100 w-100 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Book With Us */}
      <section id='whyBookWithUs'>
        <div className="container my-4">
          <div className="text-center mb-4">
            <h4 className="fs-2 fw-bold theme-text-secondary">Why Book With Us?</h4>
          </div>
          <div className="row">
            <div className="col-md-3 mb-4">
              <div className="card h-100">
                <div className="card-body text-center mb-2">
                  <Image
                    src={EasyImg}
                    className="w-50 mb-3"
                    alt="easy booking"
                  />
                  <h5 className="card-title">Easy Booking</h5>
                  <p className="card-text">We offer easy and convenient flight bookings with attractive offers.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card h-100">
                <div className="card-body text-center mb-4">
                  <Image
                    src={LowestImg}
                    className="w-50 mb-3"
                    alt="best price"
                  />
                  <h5 className="card-title">Lowest Price</h5>
                  <p className="card-test"> We ensure low rates on hotel reservation, holiday packages and on flight tickets.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card h-100">
                <div className="card-body text-center mb-4">
                  <Image
                    src={ExcImg}
                    className="w-50 mb-3"
                    alt="Existing Deal"
                  />
                  <h5 className="card-title">Exciting Deals</h5>
                  <p className="card-text">Enjoy exciting deals on flights, hotels, buses, car rental and tour packages.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card h-100">
                <div className="card-body text-center mb-4">
                  <Image
                    src={Support}
                    className="w-50 mb-3"
                    alt="24/7 Support"
                  />
                  <h5 className="card-title">24/7 Support</h5>
                  <p className="card-text">Get assistance 24/7 on any kind of travel related query. We are happy to assist you. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* <!-- special offers section --> 
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
      </section>    */}

      {/* destination section 
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
               <ul className="nav nav-pills mb-3 destination-pill" id="pills-tab2" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="pills-regions-tab" data-bs-toggle="pill" data-bs-target="#pills-regions" type="button" role="tab" aria-controls="pills-regions" aria-selected="true">Regions</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-cities-tab" data-bs-toggle="pill" data-bs-target="#pills-cities" type="button" role="tab" aria-controls="pills-cities" aria-selected="false">Cities</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Places of interest</button>
                </li>
              </ul> 
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
      </section>  */}

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
          </div>  */}
        </div>
      </section>  

      {/* <!-- popular routes section --> */}
     {/*  <section className="popular-routes">
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
      </section>  ~ */}


      {/* Gallery */}
      <section id="gallery">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h4 className="fs-2 fw-bold theme-text-secondary mb-0">
                Photo&apos;s From Travellers
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
        {/*  <PaymentMethod /> */}
      </section>

  
      {/* call us modal */}
      <CallModal show={show} handleClose={handleToggle} setShow={setShow} />
    </main >
  );
};

export default Home;
