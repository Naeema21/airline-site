import React from "react";
import Image from "next/image";
import AboutUS from "../utils/images/icons/About1.avif";
import AboutusImg2 from "../utils/images/icons/about-2.jpg"
import Advantage1 from "../utils/images/icons/advantages-1.jpg"
import Advantage2 from "../utils/images/icons/advantages-2.jpg"
import Advantage3 from "../utils/images/icons/advantages-3.jpg"
import Advantage4 from "../utils/images/icons/advantages-4.jpg"

const About = () => {
  return (
    <>
    <section className="pt-5 pt-lg-5 bg-light-gray">
    <div className="pb-5 pb-md-4 mt-4 mb-4 ">
      <div className="d-flex flex-column flex-md-row mb-0 w-100 mx-auto container-xl gap-4">
        <div className="w-100 w-md-50 max-h-330 p-0 rounded overflow-hidden">
          <Image
            src={AboutUS}
            alt="about image"
            title="About"
            layout="responsive"
            width={500}
            height={330}
            className="h-100 w-100 object-cover" />
        </div>
        <div className="p-3 d-flex align-items-end align-items-xl-center justify-content-center flex-column w-100 w-md-50">
          <div>
            <h2 className="text-color pb-3 text-3xl font-bold max-w-440 mx-auto text-center text-md-start">
              Welcome to ReservationKart.com{" "}
            </h2>
            <p className="text-dark p-0 font-normal text-base max-w-440 text-center text-md-start">
              At ReservationKart.com, we are a team of passionate travel
              enthusiasts who believe that every journey should be an experience
              worth cherishing. With years of experience in the industry, our
              dedicated team has honed their expertise and knowledge to curate
              personalized travel experiences that cater to your unique
              preferences and desires.
            </p>
          </div>
        </div>
      </div>
    </div>
    </section>
  <br>
  </br>
    {/*sec 2 who we are  */}
    <section className="pb-5 bg-light-gray">
    <div className="pb-4 pb-md-5">
      <div className="d-flex flex-column flex-md-row mb-0 w-100 container-xl mx-auto gap-4">
        <div className="p-3 d-flex align-items-end align-items-xl-center justify-content-center flex-column w-100 w-md-50">
          <div>
            <h2 className="text-color2 pb-3 pb-md-4 text-3xl font-weight-bold max-w-440 mx-auto text-center text-md-left">
              Who We Are
            </h2>
            <p className=" text-dark p-0 font-weight-normal text-base max-w-440 text-start text-md-left">
              Your Ultimate Travel Experience
            </p>
            <p className="text-dark pb-0 pb-md-3 font-weight-normal text-base max-w-440 text-start text-md-left">
              At ReservationKart.com, we are delighted to introduce ourselves as a premier travel agency dedicated to creating extraordinary journeys for our clients. With our unwavering commitment to transparency, professionalism, and exceptional service, we aim to redefine the way you travel.
            </p>
          </div>
        </div>
        <div className="w-100 w-md-50 max-h-330px p-0 rounded overflow-hidden">
          <Image
            src={AboutusImg2}
            alt="who we are"
            title="About Us"
            layout="responsive"
            width={500}
            height={330}
            className="h-100 w-100 object-cover"
          />
        </div>
      </div>
    </div>
    </section>

    {/* Advantage section */}
    <section className="pb-5 bg-light-gray">
    <div className="container mx-auto xl:max-w-920px px-3">
        <div className="d-flex justify-content-center align-items-center">
          <div className="flex-shrink-0">
            <div className="text-center pb-3 pb-md-5">
              <h2 className=" text-adv font-weight-bold">Advantages</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center px-3 mx-auto">
          <div className="col-12 col-lg-6 pb-3 px-3">
            <div className="d-flex flex-column">
              <div className="w-100 h-auto max-h-220px flex-shrink-0 rounded overflow-hidden">
                <Image
                  src={Advantage1}
                  alt="advantages-1"
                  title="Advantages"
                  layout="responsive"
                  width={400}
                  height={220}
                  className="w-100 h-100 object-cover"
                />
              </div>
              <div className="mt-3 mt-lg-4 d-flex flex-column">
                <h3 className="text-info h5 font-weight-bold">Excellence in Operation</h3>
                <p className="text-dark text-sm font-normal mt-2 mt-lg-3">
                  We take immense pride in the expertise and dedication of our team. Each member of our sales floor boasts an average experience of 8 years in the travel industry. This means you can rely on their wealth of knowledge and industry insights to craft a travel experience tailored specifically to your needs.
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
                  width={400}
                  height={220}
                  className="w-100 h-100 object-cover"
                />
              </div>
              <div className="mt-3 mt-lg-4 d-flex flex-column">
                <h3 className="text-info h5 font-weight-bold">Transparency and Professionalism</h3>
                <p className="text-dark text-sm font-normal mt-2 mt-lg-3">
                  Building trust and lasting client relationships are paramount. We prioritize transparency and professionalism, ensuring clear and accurate information in your travel planning. Our dedicated team is committed to exceptional service, guiding you every step and addressing any concerns.
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
                  width={500}
                  height={220}
                  className="w-100 h-100 object-cover"
                />
              </div>
              <div className="mt-3 mt-lg-4 d-flex flex-column">
                <h3 className=" h5 text-info font-weight-bold">Start Your Journey</h3>
                <p className="text-dark text-sm font-normal mt-2 mt-lg-3">
                  Join us on an extraordinary travel experience with ReservationKart.com, where every journey is meticulously crafted to create lasting memories. Our team of passionate travel experts is ready to turn your travel dreams into reality. Contact us today to start planning your next dream vacation!
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
                  width={500}
                  height={220}
                  className="w-100 h-100 object-cover"
                />
              </div>
              <div className="mt-3 mt-lg-4 d-flex flex-column">
                <h3 className="text-info h5 font-weight-bold">Service Commitment</h3>
                <p className="text-dark text-sm font-normal mt-2 mt-lg-3">
                  At ReservationKart.com, our primary focus is on delivering exceptional service to our clients. We strive to exceed your expectations by creating personalized journeys filled with unique experiences, hidden gems, and unforgettable memories. Whether you're seeking a luxury adventure, a cultural exploration, or a relaxing retreat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
      

  );
};

export default About;
