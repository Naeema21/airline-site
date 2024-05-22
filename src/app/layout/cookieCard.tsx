'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const CookieCard = () => {
    const [cookieConsent, setCookieConsent] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check if the cookie consent has already been given
        const consent = Cookies.get('cookieConsent');
        if (consent) {
            setCookieConsent(true);
        }
        setLoading(false); // Loading complete
    }, []);

    const handleAllowCookies = () => {
        // Set the cookie to indicate consent
        Cookies.set('cookieConsent', 'true', { expires: 3 });
        setCookieConsent(true);
        // Perform any additional actions on allowing cookies
    };

    const handleCancel = () => {
        setCookieConsent(true)
        // Perform any action on cancel, if needed
    };

    if (loading) {
        return null; // Wait until the loading state is false before rendering
    }

    if (cookieConsent) {
        return null; // Don't render the component if consent is already given
    }

    return (
        <div className="cookie-consent">
            <span>
                This site uses cookies to enhance user experience. See
                <Link href="/privacy-policy" target='_blank' className="ml-1 text-decoration-none">
                    Privacy policy
                </Link>
            </span>
            <div className="mt-2 d-flex align-items-center justify-content-center g-2 gap-2">
                <button className="allow-button mr-1" onClick={handleAllowCookies}>
                    Allow cookies
                </button>
                <button className="allow-button" onClick={handleCancel}>
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default CookieCard;
