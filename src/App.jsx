import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import DisclaimerBanner from './components/DisclaimerBanner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LightboxModal from './components/LightboxModal';
import { GALLERY_ITEMS } from './data/hotelData';

// Multi-Page Routes
import HomePage from './pages/HomePage';
import HotelRoomsPage from './pages/HotelRoomsPage';
import GuestHousePage from './pages/GuestHousePage';
import RoomDetailsPage from './pages/RoomDetailsPage';
import GalleryPage from './pages/GalleryPage';
import FacilitiesPage from './pages/FacilitiesPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [lightboxData, setLightboxData] = useState(null);

  const handleOpenLightbox = (indexOrData) => {
    if (typeof indexOrData === 'number') {
      const item = GALLERY_ITEMS[indexOrData];
      if (item) {
        setLightboxData({ src: item.image, title: item.title, caption: item.caption });
      }
    } else if (indexOrData && typeof indexOrData === 'object') {
      setLightboxData(indexOrData);
    }
  };

  const handleCloseLightbox = () => {
    setLightboxData(null);
  };

  return (
    <BrowserRouter>
      <div className="royal-stay-app">
        {/* Ensures route changes scroll automatically to top */}
        <ScrollToTop />

        {/* Top Advisory Banner */}
        <DisclaimerBanner />

        {/* Sticky Luxury Navbar with Direct Phone Call */}
        <Navbar />

        {/* Main Routed Content */}
        <main>
          <Routes>
            {/* Page 1: Home */}
            <Route path="/" element={<HomePage onOpenLightbox={handleOpenLightbox} />} />

            {/* Page 2: Dedicated Hotel Rooms */}
            <Route path="/hotel-rooms" element={<HotelRoomsPage />} />

            {/* Page 3: Dedicated Guest House */}
            <Route path="/guest-house" element={<GuestHousePage />} />

            {/* Page 4: Room Details (for Hotel Rooms) */}
            <Route path="/hotel-rooms/:roomId" element={<RoomDetailsPage />} />

            {/* Page 5: Room Details (for Guest House) */}
            <Route path="/guest-house/:roomId" element={<RoomDetailsPage />} />

            {/* Page 6: Photo Gallery */}
            <Route path="/gallery" element={<GalleryPage onOpenLightbox={handleOpenLightbox} />} />

            {/* Page 7: Facilities */}
            <Route path="/facilities" element={<FacilitiesPage />} />

            {/* Page 8: Contact */}
            <Route path="/contact" element={<ContactPage />} />

            {/* Fallback to Home */}
            <Route path="*" element={<HomePage onOpenLightbox={handleOpenLightbox} />} />
          </Routes>
        </main>

        {/* Luxury Footer */}
        <Footer />

        {/* Lightbox Modal */}
        <LightboxModal
          isOpen={Boolean(lightboxData)}
          imageData={lightboxData}
          onClose={handleCloseLightbox}
        />
      </div>
    </BrowserRouter>
  );
}
