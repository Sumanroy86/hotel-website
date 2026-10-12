# 🌊 Coastal Stay — Luxury Hotel & Guest House Website

A complete, modern, responsive website built for **Coastal Stay**, a premier hospitality property offering both luxury hotel rooms and peaceful guest house accommodations in **Digha, Purba Medinipur, West Bengal, India**.

Designed with a rich, dark luxury aesthetic inspired by warm neutral tones, moody dark greens, and glowing champagne-gold accents with authentic high-resolution accommodation photography.

---

## ✨ Key Features & Sections

1. **Sticky Glassmorphic Navigation Bar**
   - Brand logo with geometric gold monogram and name (`Coastal Stay`).
   - Links: Home, Hotel Rooms, Guest House, Facilities, Room Tariff, Gallery, About Us, Location, Contact.
   - Prominent **WhatsApp Us** button with direct prefilled chat link.
   - Fully responsive slide-out mobile drawer menu.

2. **Hero Section**
   - Heading: *"Your Comfortable Stay Away From Home"*.
   - Atmospheric ambient bedroom photography with warm lighting.
   - Two primary CTA buttons: *"Explore Hotel Rooms"* and *"Explore Guest House"*.
   - Interactive Quick WhatsApp Trip Planner (Select room type, tentative date, guests).
   - Quick Info Strip matching luxury hotel design (Check-in/Out times, Digha location, WhatsApp direct support).

3. **Hotel Rooms Showcase**
   - **Deluxe Hotel Room**: ₹2,499/night (Sample) with king bed, AC, wood slats, geyser.
   - **Premium Sea-Breeze Room**: ₹3,299/night (Sample) with private balcony, smart TV, tea tray.
   - **Grand Family Hotel Suite**: ₹4,299/night (Sample) with dual queen beds, seating lounge.
   - Each card features photo zoom, highlights, editable price tag, and dedicated **WhatsApp Enquiry** button.

4. **"Discover Refined Coastal Comfort" Feature Showcase**
   - Visual luxury highlight section featuring side-by-side photography of modern marble en-suite bathrooms and Digha coastline.

5. **Guest House Accommodation**
   - **Cozy Standard Guest Room**: ₹1,199/night (Sample) budget homestay option.
   - **Comfort AC Guest Room**: ₹1,899/night (Sample) with 1.5-ton split AC, geyser, desk.
   - **Spacious Family Guest Haven**: ₹2,699/night (Sample) with 2 large beds and dining space.
   - WhatsApp enquiry buttons configured for each guest room.

6. **Facilities & Amenities**
   - 8 verified amenities: High-Speed Wi-Fi, Split AC, Free On-Site Parking, Bengali & Multi-Cuisine Food Services, 24/7 Power Backup, 24-Hour Front Desk, 5-minute stroll to Sea Beach, and Geyser Hot Water.
   - Clearly labeled verification badge noting that amenities are editable sample content.

7. **Room Tariff Comparison Matrix**
   - Clean, readable responsive table comparing weekday vs. weekend rates, standard occupancy, extra person fees, and inclusions.
   - Labeled sample rates with a direct WhatsApp rate-verification CTA.

8. **Photo Gallery with Lightbox Modal**
   - Interactive category filter tabs: *All Photos, Hotel Rooms, Guest House, Dining & Food, Digha Beach*.
   - Click-to-enlarge Lightbox modal with captions and instant WhatsApp action button.

9. **About Us**
   - Story of Coastal Stay in Digha, highlighting tranquil family-friendly environment and coastal Bengali hospitality.

10. **Location & Nearby Sightseeing**
    - Business address in Purba Medinipur, Digha, West Bengal.
    - Interactive Google Maps embed/preview card with "Open in Google Maps" link.
    - Distances to New Digha Sea Beach, Digha Railway Station, Old Digha Beach, Marine Aquarium, and Amarabati Park.

11. **Contact Section & Instant WhatsApp Form**
    - Editable reception phone number, address, and check-in/out hours.
    - Custom enquiry form that formats guest details (Name, Room type, Dates, Notes) directly into a ready-to-send WhatsApp message.

12. **Floating WhatsApp Button**
    - Fixed bottom-right button with pulse animation and accessible labels.

---

## 🛠️ Technology Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Pure Vanilla CSS (`src/index.css`) with custom CSS variables, luxury typography, glassmorphism, and responsive grid layouts.
- **Icons**: `lucide-react`
- **Fonts**: Google Fonts (`Cinzel`, `Playfair Display`, `Plus Jakarta Sans`)

---

## 🚀 How to Install and Run Locally

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher) installed on your computer.

### 2. Install Dependencies
Open your terminal in the project root folder and run:
```bash
npm install
```

### 3. Start the Development Server
Run:
```bash
npm run dev
```

Open your browser and navigate to:
```
http://localhost:5173/
```

### 4. Build for Production
To generate an optimized production bundle:
```bash
npm run build
```
The output files will be created in the `dist/` directory.

---

## 📱 WhatsApp Business Configuration

All contact details and WhatsApp settings are centralized in:
📂 [`src/data/hotelData.js`](file:///c:/Users/sroyc/OneDrive/Desktop/antigravity%20by%20suman%20roy/src/data/hotelData.js)

To update the WhatsApp business number, simply change the `whatsappNumber` field:

```javascript
export const BUSINESS_INFO = {
  name: "Coastal Stay",
  // International format WITHOUT spaces or '+' sign:
  whatsappNumber: "919876543210", 
  displayPhone: "+91 98765 43210 (Demo)",
  locationFull: "Near New Digha Sea Beach, Purba Medinipur, West Bengal - 721428, India",
  ...
};
```

---

## 📝 Important Hospitality Disclaimer
- **No Online Booking / Payment Gateways**: This website intentionally does not process automated bookings or transactions.
- **Manual Verification**: All room tariffs, availability, and policies are verified directly between the guest and hotel management via WhatsApp.
- **Placeholders**: All displayed rates, phone numbers, and addresses are editable sample placeholders designed for demonstration.
