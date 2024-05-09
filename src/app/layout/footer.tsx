'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react';

import { SubscribeIcon, PlayIcon, AppleIcon } from '../utils/images'

const Footer = () => {

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 500) {
                setIsActive(false);
            } else {
                setIsActive(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <>
            <section className="py-5 theme-bg-primary">
                <div className="container">
                    <div className="row justify-between items-center">
                        <div className="col-12 col-lg-6">
                            <div className="d-flex  align-items-center">
                                <Image src={SubscribeIcon} alt="subscribe" width={100} height={100} />
                                <div className="ms-3">
                                    <h4 className="text-26 text-white fw-600">Your Travel Journey Starts Here</h4>
                                    <p className="text-white">{`Sign up and we'll send the best deals to you`}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5 offset-lg-1 align-self-center">
                            <div className="input-group subs-form">
                                <input type="text" className="form-control border-0" placeholder="Your Email"
                                    aria-label="Your Email" aria-describedby="button-addon2" />
                                <button className="btn btn-search" type="button" id="button-addon2">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-3 mb-5 mb-lg-0">
                            <h5 className="mb-5 fs-6">Contact Us</h5>
                            <div className="flex-grow-1">
                                Customer Care<br />
                                <span className="fs-5 theme-text-primary">+(1) 123 456 7890</span>
                            </div>
                            <div className="flex-grow-1 mt-3">
                                Need live support?<br />
                                <Link href="#" className="fs-5 theme-text-primary">hi@example.com</Link>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-2 mb-5 mb-lg-0">
                            <div className="d-flex">
                                <h5 className="mb-5 fs-6">Company</h5>
                            </div>
                            <div className="d-flex">
                                <ul className="fl-menu">
                                    <li className="nav-item"><Link href="javascript:void(0)">About Us</Link></li>
                                    <li className="nav-item"><Link href="javascript:void(0)">Careers</Link></li>
                                    <li className="nav-item"><Link href="javascript:void(0)">Blog</Link></li>
                                    <li className="nav-item"><Link href="javascript:void(0)">Press</Link></li>
                                    <li className="nav-item"><Link href="javascript:void(0)">Offers</Link></li>
                                    <li className="nav-item"><Link href="javascript:void(0)">Deals</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-2 mb-5 mb-lg-0">
                            <h5 className="mb-5 fs-6">Support</h5>
                            <div className="mt-5">
                                <ul className="fl-menu">
                                    <li className="nav-item"><Link href="javascript:void(0)">Contact</Link></li>
                                    <li className="nav-item"><Link href="javascript:void(0)">Legal Notice</Link></li>
                                    <li className="nav-item"><Link href="javascript:void(0)">Privacy Policy</Link></li>
                                    <li className="nav-item"><Link href="javascript:void(0)">Terms and Conditions</Link></li>
                                    <li className="nav-item"><Link href="javascript:void(0)">Sitemap</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3 mb-5 mb-lg-0">
                            <div className="d-flex justify-content-lg-center">
                                <h5 className="mb-5 fs-6">Other Services</h5>
                            </div>
                            <div className="d-flex justify-content-lg-center">
                                <ul className="fl-menu">
                                    <li className="nav-item"><Link href="javascript:void(0)">Bus</Link></li>
                                    <li className="nav-item"><Link href="javascript:void(0)">Activity Finder</Link></li>
                                    <li className="nav-item"><Link href="javascript:void(0)">Tour List</Link></li>
                                    <li className="nav-item"><Link href="javascript:void(0)">Flight Search</Link></li>
                                    <li className="nav-item"><Link href="javascript:void(0)">Cruise Ticket</Link></li>
                                    <li className="nav-item"><Link href="javascript:void(0)">Holidays</Link></li>
                                    <li className="nav-item"><Link href="javascript:void(0)">Travel Agents</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-2 mb-5 mb-lg-0">
                            <h5 className="mb-5 fs-6">Download App</h5>
                            <Link href="javascript:void(0)"
                                className="d-inline-flex align-items-center border px-3 py-2 theme-border-radius min-w-150">
                                <div className="flex-shrink-0">
                                    <Image src={PlayIcon} className="img-fluid" alt="Google-Play"
                                        title="Google-Play" />
                                </div>
                                <div className="flex-grow-1 ms-2">
                                    <p className="mb-0 small theme-text-accent-two">Get it on</p>
                                    <p className="mb-0 small theme-text-accent-one fw-bold">Google Play</p>
                                </div>
                            </Link>
                            <Link href="javascript:void(0)"
                                className="d-inline-flex align-items-center border px-3 py-2 theme-border-radius mt-2 min-w-150">
                                <div className="flex-shrink-0">
                                    <Image src={AppleIcon} className="img-fluid" alt="apple" title="apple" />
                                </div>
                                <div className="flex-grow-1 ms-2">
                                    <p className="mb-0 small theme-text-accent-two">Get it on</p>
                                    <p className="mb-0 small theme-text-accent-one fw-bold">App Store</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-3 mt-lg-5">
                            <p className="pt-2 mb-0 small theme-text-accent-one">&copy; 2024 Reservationkart All rights reserved.
                            </p>
                        </div>
                        <div className="col-12 col-lg-6 mt-5">
                            <ul className="footer-link d-flex flex-row flex-wrap justify-content-lg-center align-items-center">
                                <li><Link href="javascript:void(0)">Privacy</Link></li>
                                <li><Link href="javascript:void(0)">Terms</Link></li>
                                <li><Link href="javascript:void(0)">Site Map</Link></li>
                            </ul>
                        </div>
                        <div className="col-12 col-lg-3 mt-5">
                            <div className="d-flex social justify-content-lg-end">
                                <Link href="javascript:void(0)" className="fs-4 pe-3"><i className="bi bi-facebook"></i></Link>
                                <Link href="javascript:void(0)" className="fs-4 pe-3"><i className="bi bi-twitter"></i></Link>
                                <Link href="javascript:void(0)" className="fs-4 pe-3"><i className="bi bi-linkedin"></i></Link>
                                <Link href="javascript:void(0)" className="fs-4 pe-3"><i className="bi bi-instagram"></i></Link>
                                <Link href="javascript:void(0)" className="fs-4"><i className="bi bi-whatsapp"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <button className={`scrollToTop ${isActive ? 'active' : ''}`} onClick={scrollToTop} >
                    <i className="bi bi-chevron-double-up"></i>
                </button>
            </footer>
        </>

    )
}

export default Footer