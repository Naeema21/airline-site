import React from 'react';
import Image from 'next/image';

import { DestinationCardProps } from '../utils/types';

const DestinationCard: React.FC<DestinationCardProps> = ({ destination, handle }) => {
  const { imgSrc, destination: destinationName, hotels} = destination;

  return (
    <div className="col-12 col-lg-3">
      <div className="theme-bg-white mb-5">
        <div className="row g-0 align-items-center">
          <div className="col-4 col-xxl-2 overflow-hidden rounded-circle">
            <div className="overflow-hidden">
              <figure className="mb-0 img-effect">
                <Image src={imgSrc} alt={destinationName} className="img-fluid" width={150} height={150} />
              </figure>
            </div>
          </div>
          <div className="col-8 col-xxl-10">
            <div className="mt-2 mt-xxl-0 ps-3 d-flex justify-content-between align-items-center">
              <div className="d-flex flex-column">
                <span className="d-flex fs-6">{destinationName}</span>
                <span className="d-flex small fw-normal theme-text-accent-one">{hotels} Hotels</span>
              </div>
              <div className="d-flex">
                <button onClick={handle} className="link-btn border-0"><span><i className="bi bi-arrow-up-right"></i></span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
