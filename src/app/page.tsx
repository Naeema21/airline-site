'use client'
import Link from 'next/link';

import SearchEngine from './container/searchEngine';
import { destinationData, recommendedCardData, routesData } from './utils/data';
import { RecommendedCard, DestinationCard, RouteCard } from './component';
import { Product01, Product02, bannerImage, experienceBg, bannerImage1 } from './utils/images';

const Home = () => {
  return (
    <main>     
      <div className="pagewrap">
        <div className="head-wrapper">
          <div className="search-engine" style={{ backgroundImage: `url(${bannerImage1.src})` }}>
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-12  text-center position-relative">
                  <h1 className="display-3 fw-bold mb-2 theme-text-white theme-text-shadow">
                   Your dream travel just a phone call away !
                  </h1>
                  <p className="mb-0 theme-text-white">Discover amzaing places at exclusive deals</p>
                </div>
              </div>
              <SearchEngine />
            </div>
          </div>
        </div>
      </div>
      

      {/* <!-- recommended section --> */}
      <section className="recommended" id="deals">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <h4 className="fs-2 fw-bold theme-text-secondary mb-0">Recommended</h4>
              <p className="mb-0 theme-text-accent-one">International & Domestic fames ac ante ipsum</p>
            </div>
          </div>
          {/* <!-- recomended tours card --> */}
          <div className="row mt-5">
            {recommendedCardData?.map((card, index) => (
              <RecommendedCard card={card} key={index} />
            ))}
          </div>
        </div>
      </section>

      {/* <!-- special offers section --> */}
      <section className="special-offers" id="offers">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h4 className="fs-2 fw-bold theme-text-secondary mb-0">Special Offers</h4>
              <p className="mb-0 theme-text-accent-one">These popular destinations have a lot to offer</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 mb-3 mb-md-0 overflow-hidden hoverShine">
              <div className="box product01" style={{ backgroundImage: `url(${Product01.src})` }}>
                <div className="content">
                  <p className="fs-1 theme-heading theme-text-white mb-4">Things to do on <br />
                    your trip</p>
                  <div className="custom-button">
                    <Link href="#" className="btn btn-shop small">
                      Learn More
                      <i className="bi bi-arrow-up-right fs-6 ms-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-3 mb-md-0 overflow-hidden hoverShine">
              <div className="box product02" style={{ backgroundImage: `url(${Product02.src})` }}>
                <div className="content">
                  <p className="fs-6 mb-2 theme-text-white">Enjoy Summer Deals</p>
                  <p className="fs-1 theme-heading theme-text-white mb-4">Up to 70% Discount!</p>
                  <div className="custom-button">
                    <Link href="#" className="btn btn-shop small">
                      View Deal
                      <i className="bi bi-arrow-up-right fs-6 ms-2"></i>
                    </Link>
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
              <h4 className="fs-2 fw-bold theme-text-secondary mb-0">Most loved Destinations</h4>
              <p className="mb-0 theme-text-accent-one">International & Domestic fames ac ante ipsum</p>
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
              <div className="tab-content mt-5" id="pills-tab2Content">
                <div className="tab-pane fade show active" id="pills-regions" role="tabpanel" aria-labelledby="pills-regions-tab">
                  <div className="row">
                    {destinationData.map((destination, index) => (
                      <DestinationCard key={index} destination={destination} />
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
              <div className="wrap" style={{ backgroundImage: `url(${experienceBg.src})` }}>
                <div className="row">
                  <div className="col-12 position-relative align-self-center">
                    <h4 className="display-4 theme-text-white mb-0 fw-bold text-center">Wonderful Travel
                      Experiences with<br />
                      Round Tours</h4>
                    <div className="group custom-button">
                      <div className="d-flex align-items-center">
                        <Link href="tel:1888 508 7143"
                          className="video-icon video-icon2 mr-30 ml-20 video_model">
                          <i className="bi bi-telephone"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 col-sm-6 col-lg-3 mb-3 mb-lg-0">
              <div className="d-flex align-items-center p-4 p-md-0">
                <i className="bi bi-airplane fs-4 theme-text-primary"></i>
                <h3 className="fs-2 mb-0 mx-3">4259</h3>
                <p className="fs-4 mb-0 theme-text-accent-one">Flights</p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 mb-3 mb-lg-0">
              <div className="d-flex align-items-center p-4 p-md-0">
                <i className="bi bi-hospital fs-4 theme-text-primary"></i>
                <h3 className="fs-2 mb-0 mx-3">8289</h3>
                <p className="fs-4 mb-0 theme-text-accent-one">Hotels</p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 mb-3 mb-lg-0">
              <div className="d-flex align-items-center p-4 p-md-0">
                <i className="bi bi-award fs-4 theme-text-primary"></i>
                <h3 className="fs-2 mb-0 mx-3">9789</h3>
                <p className="fs-4 mb-0 theme-text-accent-one">Packages</p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 mb-3 mb-lg-0">
              <div className="d-flex align-items-center p-4 p-md-0">
                <i className="bi bi-star fs-4 theme-text-primary"></i>
                <h3 className="fs-2 mb-0 mx-3">9999</h3>
                <p className="fs-4 mb-0 theme-text-accent-one">Ratings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- popular routes section --> */}
      <section className="popular-routes">
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
                  <RouteCard routes={routes} key={index} />
                ))
              }
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

export default Home
