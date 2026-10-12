import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/hotelData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Hotel Rooms', path: '/hotel-rooms' },
    { label: 'Guest House', path: '/guest-house' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Facilities', path: '/facilities' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <div className="navbar-wrapper">
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container nav-container">
          {/* ROYAL STAY Logo - ONLY the hotel name, NO location underneath */}
          <Link to="/" className="brand-logo" aria-label="ROYAL STAY - Home">
            <div className="brand-icon-box">
              <span>RS</span>
            </div>
            <span className="brand-name">{BUSINESS_INFO.name}</span>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop Direct Phone Call Button */}
          <div className="nav-actions">
            <a
              href={BUSINESS_INFO.phoneTelLink}
              className="nav-phone-link"
              aria-label={`Call reception at ${BUSINESS_INFO.displayPhone}`}
            >
              <Phone size={16} />
              <span>{BUSINESS_INFO.displayPhone}</span>
            </a>

            <button
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`mobile-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Slide-out Drawer */}
      <aside className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} aria-label="Mobile Navigation">
        <div className="mobile-drawer-header">
          <Link to="/" className="brand-logo" onClick={() => setMobileMenuOpen(false)}>
            <div className="brand-icon-box">
              <span>RS</span>
            </div>
            <span className="brand-name">{BUSINESS_INFO.name}</span>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            style={{ color: '#F5F0E8', padding: '0.4rem' }}
          >
            <X size={24} />
          </button>
        </div>

        <ul className="mobile-drawer-links">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `mobile-drawer-link ${isActive ? 'active' : ''}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div>
          <a
            href={BUSINESS_INFO.phoneTelLink}
            className="btn btn-gold"
            style={{ width: '100%' }}
            aria-label={`Call reception at ${BUSINESS_INFO.displayPhone}`}
          >
            <Phone size={18} />
            <span>Call {BUSINESS_INFO.displayPhone}</span>
          </a>
        </div>
      </aside>
    </div>
  );
}
