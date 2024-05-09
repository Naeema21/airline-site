'use client'
import Link from "next/link";
import { useState } from "react";

import { Dropdown } from "../component";
import { currencyItems, languageItems, userItems } from "../utils/data";

const Header = () => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => {
        setCollapsed(!collapsed);
    };

    return (
        <header className="header theme-bg-white">
            <div className="container">
                <nav className="navbar navbar-expand-lg py-3 py-lg-0 px-0">
                    <Link href="/" className="navbar-brand">
                        reservationkart
                    </Link>
                    <button
                        className="navbar-toggler px-1 btn rounded-0"
                        type="button"
                        onClick={toggleNavbar}
                        aria-expanded={!collapsed ? 'true' : 'false'}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`} id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto page-menu" id="nav">
                            <li className="nav-item"><Link className="nav-link pe-5 ps-0 ps-lg-5" href="#deals">Deals</Link></li>
                            <li className="nav-item"><Link className="nav-link pe-5" href="#offers">Offers</Link></li>
                            <li className="nav-item"><Link className="nav-link pe-5" href="#holidays">Holidays</Link></li>
                            <li className="nav-item"><Link className="nav-link pe-5" href="#review">Review</Link></li>
                        </ul>
                        <ul className="navbar-nav page-menu mb-3 mb-lg-0">
                            <Dropdown title={<><i className="bi bi-globe me-2"></i>Eng</>} items={languageItems} />
                            <Dropdown title="INR" items={currencyItems} />
                            <li className="nav-item">
                                <Link href="#" className="nav-link mein-link d-inline-block position-relative">
                                    <i className="bi bi-bell"></i>
                                    <span className="position-absolute translate-middle p-1 bg-success border border-light rounded-circle">
                                        <span className="visually-hidden">New alerts</span>
                                    </span>
                                </Link>
                            </li>
                            <Dropdown title={<i className="bi bi-person"></i>} items={userItems} />
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;