import React, { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import CallImage from "../utils/images/icons/call-Img.jpg"; // Ensure this path is correct
import Link from "next/link";

const CallRequestPopup: React.FC = () => {
  const [show, setShow] = useState(true);
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleRequestCall = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/request-call", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone }),
      });
      const result = await response.json();
      if (result?.status) {
        setShow(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        className={`modal fade ${show ? "show d-block" : ""}`}
        tabIndex={-1}
        role="dialog"
        aria-labelledby="call request"
        aria-hidden={!show}
        style={{ display: show ? "block" : "none" }}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header justify-content-end border-0 p-0">
              <button
                type="button"
                className="closeButton mx-2"
                onClick={() => setShow(false)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
         {/*   <div className="modal-body text-center d-flex flex-column align-items-center modal-body-custom">
              <Image
                src={CallImage}
                alt="Request Call"
                width={200}
                height={200}
              />
              <span className="d-block mt-3">
              Request a call back from us to get more information about our
              services and offers.
              </span> */}
              <div className="modal-body text-center d-flex flex-column align-items-center">
              <Link href="tel:1888 632 2155"
                className="video-icon video-icon2 mr-30 ml-20 video_model mb-3">
                <i className="bi bi-telephone"></i>
              </Link>

              <Link href={"tel:1888 632 2155"} className='call-title my-2'> 1888 632 2155 </Link>
              <h4 className='call-title'>Give Us A Call</h4>
              <p>Request a call back from us to get more information about our
              services and offers.</p>

              <button className='btn btn-search'>
                <Link href={'tel:1888 632 2155'}>
                  <span className="fw-bold text-white">CALL US </span>
                </Link>
              </button>
            </div>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default CallRequestPopup;
