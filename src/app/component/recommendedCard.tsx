import React from 'react';
import Image from 'next/image';
import { recommendedCardProps } from '../utils/types';

const RecommendedCard: React.FC<recommendedCardProps> = ({ card }) => {
    const { imgSrc, offerTag, tagColor, title, location, rating, reviews, price } = card;
    return (
        <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
            <div className="card-wrap">
                <div className="con-img-wrap m-auto">
                    <Image src={imgSrc} className="img-fluid mx-auto d-block" 
                    alt="cheap flight agency,airoplan ticket booking" width={300} height={200} />
                    <div className={`offer-tag ${tagColor}`}>{offerTag}</div>
                    <span className="wishlist-tag"><i className="bi bi-heart"></i></span>
                </div>
                <div className="con-wrap mt-4">
                    <h2 className="fs-6 mt-4 fw-bold text-truncate">{title}</h2>
                    <p className="mb-2 theme-text-accent-two small">{location}</p>
                    <div className="d-flex bottom mb-2">
                        <div className="rating-cover">
                            <span className={`p-1 small rounded-1 ${tagColor} theme-text-white`}>{rating}</span>
                            <span className="me-2 small theme-text-accent-one">Exceptional</span>
                            <span className="small">{reviews} reviews</span>
                        </div>
                    </div>
                    <p className="mb-0 theme-text-accent-one">Starting from {price}</p>
                </div>
            </div>
        </div>
    );
};

export default RecommendedCard;
