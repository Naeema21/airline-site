'use client'
import Link from 'next/link';
import React, { useState } from 'react';

import { DropdownProps } from '../utils/types';

const Dropdown: React.FC<DropdownProps> = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <li className="nav-item dropdown">
            <Link href="#" className="nav-link mein-link dropdown-toggle" onClick={toggleDropdown}>
                {title}
            </Link>
            <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                {items.map((item, index) => (
                    <li key={index}><Link className="dropdown-item" href={item?.link || '#'}>{item?.label}</Link></li>
                ))}
            </ul>
        </li>
    );
}

export default Dropdown;
