import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ContactForm from "./Components/ContactForm";
import AppDevelopment from "./pages/AppDevelopment";
import SMO from "./pages/SMO";
import SEO from "./pages/SEO";
import BacktoTop from "./Components/BacktoTop";
import Curser from "./Components/Curser";
import Contact from "./pages/Contact";
import Conservation from "./pages/Conservation";
import Ecommerce from "./pages/Ecommerce";
import Graphic from "./pages/Graphic";
import HRMS from "./pages/HRMS";
import Healthcare from "./pages/Healthcare";
import MarketingSolutions from "./pages/MarketingSolutions";
import RealEstate from "./pages/RealEstate";
import DigitalMarketing from "./pages/DigitalMarketing";
import Banking from "./pages/Banking";
import Education from "./pages/Education";
import Servicesmain from "./pages/Servicesmain";

function App() {
  return (
    <div className="overflow-x-hidden font-dm">
      <Navbar />
      <BacktoTop />
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
        <Route path="/marketingsolutions" element={<MarketingSolutions />} />
        <Route path="/realestate" element={<RealEstate />} />
        <Route path="/banking" element={<Banking />} />
        <Route path="/education" element={<Education />} />
        <Route path="/services" element={<Servicesmain />} />
      </Routes>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
