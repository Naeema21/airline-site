import Link from 'next/link'
import React from 'react'

const CookieCard = () => {
    return (
        <div className="cookie-consent">
            <span>This site uses cookies to enhance user experience. see
                <Link href="/privacy-policy" target='_blank' className="ml-1 text-decoration-none"> Privacy policy</Link>
            </span>
            <div className="mt-2 d-flex align-items-center justify-content-center g-2 gap-2">
                <button className="allow-button mr-1">Allow cookies</button>
                <button className="allow-button">cancel</button>
            </div>
        </div>
    )
}

export default CookieCard