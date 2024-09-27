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

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <BacktoTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servise" element={<Services />} />
        <Route path="/app" element={<AppDevelopment />} />
        <Route path="/smo" element={<SMO />} />
        <Route path="/seo" element={<SEO />} />
        <Route path="/conservation" element={<Conservation />} />
        <Route path="/ecommerces" element={<Ecommerce />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/graphic" element={<Graphic />} />
        <Route path="/hrms" element={<HRMS />} />
      </Routes>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
