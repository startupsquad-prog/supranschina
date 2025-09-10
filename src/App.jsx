
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

// Site Components
import Navbar from "./pages/Navbar";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import Footer from "./pages/Footer";
import Dropshipping from "./pages/services/Dropshipping";
import Branddevelopment from "./pages/services/Branddevelopment";
import Videocall from "./pages/Videocall";
import USLLC from "./pages/USLLC";
import Watch from "./pages/Watch";
import Cantonchinatravel from "./pages/Cantonchinatravel";
import ScrollToTop from "./components/ScrollToTop";
import ContactForm1 from "./pages/ContactForm1";

// Admin
import Login from "./components/admin/Login";
import Dashboard from "./components/admin/Dashboard";

// Global Modal
import RegisterModal from "./components/modal/RegisterModal";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  // Show modal after 10s
  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />

      {/* ✅ Global Sticky Navbar */}
      <Navbar />

      {/* ✅ Global Modal */}
      <RegisterModal isOpen={showModal} onClose={() => setShowModal(false)} />

      {/* ✅ App Routes */}
      <Routes>
        {/* Admin Routes - no Navbar/Footer */}
        <Route path="/admin" element={<Login />} />
        <Route path="/admindashboard/*" element={<Dashboard />} />

        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/usllc" element={<USLLC />} />
        <Route path="/videocall" element={<Videocall />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/cantonchinatravel" element={<Cantonchinatravel />} />
        <Route path="/contactform1" element={<ContactForm1 />} />
        <Route path="/services/dropshipping" element={<Dropshipping />} />
        <Route path="/services/branddevelopment" element={<Branddevelopment />} />
      </Routes>

      {/* ✅ Global Footer */}
      <Footer />
    </BrowserRouter>
  );
}
