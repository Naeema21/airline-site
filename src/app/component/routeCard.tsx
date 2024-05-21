// RouteCard.tsx
import Image from 'next/image';
import React from 'react';

import { RouteCardProps } from '../utils/types';

const RouteCard: React.FC<RouteCardProps> = ({ routes , handle}) => {
    const {
        image,
        departureTime,
        departureAirport,
        duration,
        arrivalTime,
        arrivalAirport,
        price,
        deals
    } = routes
    return (
        <div className="col-12 mb-3">
            <div className="p-3 theme-border-radius border">
                <div className="row justify-content-between align-items-center">
                    <div className="col-xl-8 col-lg-6">
                        <div className="row align-items-center">
                            <div className="col-sm-auto">
                                <Image className="size-40" src={image} alt="Cheap flight ticket, traveller agency" />
                            </div>
                            <div className="col">
                                <div className="row align-items-center">
                                    <div className="col-auto">
                                        <div className="fs-6">{arrivalTime}</div>
                                        <div className="small theme-text-accent-one">{arrivalAirport}</div>
                                    </div>
                                    <div className="col text-center">
                                        <div className="flightLine">
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <div className="small theme-text-accent-two">{duration}</div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="fs-6">{departureTime}</div>
                                        <div className="small theme-text-accent-one">{departureAirport}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-xl-4 col-lg-6 my-5 my-lg-0">
                        <div className="row align-items-center">
                            <div className="col-sm-auto">
                                <img className="size-40" src="assets/images/icons/2.png" alt="image" />
                            </div>
                            <div className="col">
                                <div className="row align-items-center">
                                    <div className="col-auto">
                                        <div className="fs-6">15:00</div>
                                        <div className="small theme-text-accent-one">ABD</div>
                                    </div>
                                    <div className="col text-center">
                                        <div className="flightLine">
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <div className="small theme-text-accent-two">2h 00m- Nonstop</div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="fs-6">17:00</div>
                                        <div className="small theme-text-accent-one">AEH</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="col-auto">
                        <div className="d-flex justify-content-between">
                            <div className="me-4">
                                <div className="fs-6">{price}</div>
                                <div className="small theme-text-accent-one">{deals}</div>
                            </div>
                            <button onClick={handle} className="theme-btn-outline p-2">
                                View Deal <i className="bi bi-arrow-up-right ms-2"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RouteCard;
