import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Modalprops } from "../utils/types";
import NewsImage from "../utils/images/icons/email-Img.png";

const Newsletter: React.FC<Modalprops> = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
        setShow(true);
    }, 5000);

    return () => clearTimeout(timer);
     
  }, []);

  const handleSubscribe = async () => {
    

//    { try {
//       const response = await fetch("/api/subscribe", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email }),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         setMessage("Subscription successful");
//         setEmail("");
//       } else {
//         setMessage(result.error);
//       }
//     }
    
//     catch (error) {
//       setMessage("An error occurred. Please try again.");
//     }

  };

  return (
    <>
      <div
        className={`modal fade ${show ? "show d-block" : ""}`}
        tabIndex={-1}
        role="dialog"
        aria-labelledby="newsletter subscription"
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
            <div className="modal-body text-center d-flex flex-column align-items-center modal-body-custom">
              <Image
                src={NewsImage}
                alt="Newsletter"
                width={200}
                height={200}
              />
              <span className="d-block mt-3">
                Subscribe to our newsletter in order not to miss new arrivals
                <br />
                promotions and discounts of our store
              </span>
              <div className="mx-5">
                <div className="input-group mb-3 mt-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-label="Recipient's email"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn btn-warning border-rad"
                    type="button"
                    id="button-addon2"
                    onClick={handleSubscribe}
                  >
                    Subscribe
                  </button>
                </div>
                {message && <p className="text-center mt-2">{message}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
