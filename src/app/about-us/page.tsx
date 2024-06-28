import React from "react";
import Image from "next/image";
import {AboutusImg1,AboutusImg2,Advantage1,Advantage2,Advantage3,Advantage4,EasyImg,ExcImg,LowestImg,Support,} from "../utils/images";

const About = () => {
  return (
    <>
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
                      Welcome to ReservationKart.com !
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
                      Looking for more than just flights !
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

      {/* Advantage section */}
      {/* <section className="py-5 step-container">
        <div className="container">
          <div className="d-flex justify-content-center align-items-center">
            <div className="flex-shrink-0">
              <div className="row">
                <div className="col-12 text-center mb-4">
                  <h4 className="fs-2 fw-bold theme-text-secondary mb-0">
                    What Sets Us Apart
                  </h4>
                  <p className="theme-text-accent-one pb-0 pb-md-3 font-weight-normal text-base max-w-440 text-start text-md-left">
                    Maximize your travel experience with our outstanding advantages.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center px-3 mx-auto">
            <div className="col-12 col-lg-6 pb-3 px-3">
              <div className="d-flex flex-column">
                <div className="w-100 h-auto  flex-shrink-0 rounded overflow-hidden">
                  <Image
                    src={Advantage1}
                    alt="advantages-1"
                    title="Advantages"
                    layout="responsive"
                    width={250}
                    height={160}
                    className="w-100 h-100 object-cover"
                  />
                </div>
                <div className="mt-3 mt-lg-4 d-flex flex-column">
                  <h3 className="text-yellow fs-4 fw-bold">
                    Excellence in Operation
                  </h3>
                  <p className="theme-text-accent-one text-sm font-normal mt-2 mt-lg-3">
                    We take immense pride in the expertise and dedication of our
                    team. Each member of our sales floor boasts an average
                    experience of 8 years in the travel industry. This means you
                    can rely on their wealth of knowledge and industry insights
                    to craft a travel experience tailored specifically to your
                    needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 pb-3 px-3">
              <div className="d-flex flex-column">
                <div className="w-100 h-auto max-h-220px flex-shrink-0 rounded overflow-hidden">
                  <Image
                    src={Advantage2}
                    alt="advantages-2"
                    title="Advantages"
                    layout="responsive"
                    width={250}
                    height={160}
                    className="w-100 h-100 object-cover"
                  />
                </div>
                <div className="mt-3 mt-lg-4 d-flex flex-column">
                  <h3 className="text-yellow fs-4 fw-bold">
                    Transparency and Professionalism
                  </h3>
                  <p className="theme-text-accent-one text-sm font-normal mt-2 mt-lg-3">
                    Building trust and lasting client relationships are
                    paramount. We prioritize transparency and professionalism,
                    ensuring clear and accurate information in your travel
                    planning. Our dedicated team is committed to exceptional
                    service, guiding you every step and addressing any concerns.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 pb-3 px-3">
              <div className="d-flex flex-column">
                <div className="w-100 h-auto max-h-220px flex-shrink-0 rounded overflow-hidden">
                  <Image
                    src={Advantage3}
                    alt="advantages-3"
                    title="Advantages"
                    layout="responsive"
                    width={250}
                    height={160}
                    className="w-100 h-100 object-cover"
                  />
                </div>    
                <div className="mt-3 mt-lg-4 d-flex flex-column">
                  <h3 className=" text-yellow fs-4 fw-bold">
                    Start Your Journey
                  </h3>
                  <p className="theme-text-accent-one text-sm font-normal mt-2 mt-lg-3">
                    Join us on an extraordinary travel experience with
                    ReservationKart.com, where every journey is meticulously
                    crafted to create lasting memories. Our team of passionate
                    travel experts is ready to turn your travel dreams into
                    reality. Contact us today to start planning your next dream
                    vacation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 pb-3 px-3">
              <div className="d-flex flex-column">
                <div className="w-100 h-auto max-h-220px flex-shrink-0 rounded overflow-hidden">
                  <Image
                    src={Advantage4}
                    alt="advantages-4"
                    title="Advantages"
                    layout="responsive"
                    width={250}
                    height={160}
                    className="w-100 h-100 object-cover"
                  />
                </div>
                <div className="mt-3 mt-lg-4 d-flex flex-column">
                  <h3 className="text-yellow fs-4 fw-bold">
                    Service Commitment
                  </h3>
                  <p className="theme-text-accent-one text-sm font-normal mt-2 mt-lg-3">
                    At ReservationKart.com, our primary focus is on delivering
                    exceptional service to our clients. We strive to exceed your
                    expectations by creating personalized journeys filled with
                    unique experiences, hidden gems, and unforgettable memories.
                    Whether you are seeking a luxury adventure, a cultural
                    exploration, or a relaxing retreat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 

      {/* how to book */}

      {/* <section className="step-container py-4" id="steps">
        <div className="container text-center">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h4 className="fs-2 fw-bold theme-text-secondary mb-0">
                How To Book
              </h4>
              <p className="mb-0 theme-text-accent-one">
                Quick and easy airline ticket reservations for stress-free
                travel planning.
              </p>
            </div>
          </div>
          <div className="row g-4 relative">
            <div className="col-12 col-lg-3 step-card">
              <div className="step-icon mx-auto">
                <i className="bi bi-airplane text-white fs-1"></i>
              </div>
              <h3 className="theme-text-primary fs-5 fw-bold mt-2">Step 1</h3>
              <p className="step-text">
                Enter your flight details and click search
              </p>
            </div>
            <div className="col-12 col-lg-3 step-card">
              <div className="step-icon mx-auto">
                <i className="bi bi-person-lines-fill text-white fs-1"></i>
              </div>
              <h3 className="theme-text-primary fs-5 fw-bold mt-2">Step 2</h3>
              <p className="step-text">Fill your contact information</p>
            </div>
            <div className="col-12 col-lg-3 step-card">
              <div className="step-icon mx-auto">
                <i className="bi bi-headset text-white fs-1"></i>
              </div>
              <h3 className="theme-text-primary fs-5 fw-bold mt-2">Step 3</h3>
              <p className="step-text">
                Your personal travel advisor will contact you momentarily
              </p>
            </div>
            <div className="col-12 col-lg-3 step-card">
              <div className="step-icon mx-auto">
                <i className="bi bi-ticket-perforated text-white fs-1"></i>
              </div>
              <h3 className="theme-text-primary fs-5 fw-bold mt-2">Step 4</h3>
              <p className="step-text">Get your tickets and enjoy your trip</p>
            </div>
          </div>
        </div>
      </section> */}

      
    </>
  );
};

export default About;
