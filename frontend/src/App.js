import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import BacktoTop from "./Components/BacktoTop";
import ContactForm from "./Components/ContactForm";
import LoadingSpinner from "./Components/LoadingSpinner";

// Lazy loading the pages
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const AppDevelopment = lazy(() => import("./pages/AppDevelopment"));
const DigitalMarketing = lazy(() => import("./pages/DigitalMarketing"));
const SMO = lazy(() => import("./pages/SMO"));
const SEO = lazy(() => import("./pages/SEO"));
const Conservation = lazy(() => import("./pages/Conservation"));
const Ecommerce = lazy(() => import("./pages/Ecommerce"));
const Contact = lazy(() => import("./pages/Contact"));
const Graphic = lazy(() => import("./pages/Graphic"));
const HRMS = lazy(() => import("./pages/HRMS"));
const Healthcare = lazy(() => import("./pages/Healthcare"));
const MarketingSolutions = lazy(() => import("./pages/MarketingSolutions"));
const RealEstate = lazy(() => import("./pages/RealEstate"));
const Banking = lazy(() => import("./pages/Banking"));
const Education = lazy(() => import("./pages/Education"));
const Servicesmain = lazy(() => import("./pages/Servicesmain"));

function App() {
  return (
    <div className="overflow-x-hidden font-dm">
      <Suspense fallback={<LoadingSpinner />}>
        <Router>
          <Navbar />
          <BacktoTop />

          {/* Suspense with fallback for loading indication */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/web" element={<Services />} />
            <Route path="/app" element={<AppDevelopment />} />
            <Route path="/digitalmarketing" element={<DigitalMarketing />} />
            <Route path="/smo" element={<SMO />} />
            <Route path="/seo" element={<SEO />} />
            <Route path="/contact" element={<Conservation />} />
            <Route path="/ecommerces" element={<Ecommerce />} />
            <Route path="/about" element={<Contact />} />
            <Route path="/graphic" element={<Graphic />} />
            <Route path="/hrms" element={<HRMS />} />
            <Route path="/healthcare" element={<Healthcare />} />
            <Route
              path="/marketingsolutions"
              element={<MarketingSolutions />}
            />
            <Route path="/realestate" element={<RealEstate />} />
            <Route path="/banking" element={<Banking />} />
            <Route path="/education" element={<Education />} />
            <Route path="/services" element={<Servicesmain />} />
          </Routes>

          <ContactForm />
          <Footer />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
