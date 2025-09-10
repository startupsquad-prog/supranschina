
import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import TopBanner from "../components/TopBanner"; // ✅ Import banner
import CallbackModal from "../components/modal/CallbackModal";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [spacerHeight, setSpacerHeight] = useState(0);

  const containerRef = useRef(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Update spacer height on mount, resize, and menu open/close
  useEffect(() => {
    function updateHeight() {
      if (containerRef.current) {
        setSpacerHeight(containerRef.current.offsetHeight);
      }
    }
    updateHeight();

    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // Update spacer height when menu toggles because mobile menu changes layout
  useEffect(() => {
    if (containerRef.current) {
      setSpacerHeight(containerRef.current.offsetHeight);
    }
  }, [isMenuOpen]);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-red-600 font-semibold block w-full"
      : "text-gray-700 hover:text-red-600 transition duration-150 block w-full";

  return (
    <>
      {/* Fixed Top Banner + Navbar */}
      <div ref={containerRef} className="fixed top-0 left-0 w-full z-50">
        <TopBanner />
        <nav className="flex items-center justify-between bg-white px-4 sm:px-6 py-3 shadow-md">
          {/* Logo */}
          <div className="text-xl sm:text-2xl font-bold text-black">
            Suprans<span className="text-red-600">.</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-gray-700 font-medium items-center">
            <li>
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
            </li>
            <li className="relative group">
              <NavLink to="/services/dropshipping" className={navLinkClass}>
                Services
              </NavLink>
              <ul className="absolute left-0 top-full mt-2 hidden group-hover:flex flex-col bg-white shadow-md rounded-md z-50 w-48">
                <li>
                  <NavLink
                    to="/services/dropshipping"
                    className="px-4 py-2 text-gray-800 hover:bg-red-50"
                  >
                    Dropshipping
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/branddevelopment"
                    className="px-4 py-2 text-gray-800 hover:bg-red-50"
                  >
                    Brand Development
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/usllc" className={navLinkClass}>
                US LLC
              </NavLink>
            </li>
            <li>
              <NavLink to="/videocall" className={navLinkClass}>
                Video Call
              </NavLink>
            </li>
            <li>
              <NavLink to="/watch" className={navLinkClass}>
                Watch
              </NavLink>
            </li>
            <li>
              <NavLink to="/cantonchinatravel" className={navLinkClass}>
                Canton China Travel
              </NavLink>
            </li>
          </ul>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <button
              onClick={openModal}
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full font-semibold shadow-md"
            >
              Book a CALL
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-red-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
          <CallbackModal isOpen={isModalOpen} onClose={closeModal} />
        </nav>
      </div>

      {/* Spacer with dynamic height */}
      <div style={{ height: spacerHeight }} />

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden bg-white shadow-lg px-6 py-6 space-y-4 fixed top-[var(--navbar-height)] left-0 w-full z-40"
          style={{ top: spacerHeight }}
        >
          <NavLink
            to="/"
            className={navLinkClass}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>

          <details className="group">
            <summary className="cursor-pointer font-medium hover:text-red-600">
              Services
            </summary>
            <ul className="pl-4 mt-2 space-y-2">
              <li>
                <NavLink
                  to="/services/dropshipping"
                  className="block hover:text-red-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dropshipping
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services/branddevelopment"
                  className="block hover:text-red-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Brand Development
                </NavLink>
              </li>
            </ul>
          </details>

          <NavLink
            to="/about"
            className={navLinkClass}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/usllc"
            className={navLinkClass}
            onClick={() => setIsMenuOpen(false)}
          >
            US LLC
          </NavLink>
          <NavLink
            to="/videocall"
            className={navLinkClass}
            onClick={() => setIsMenuOpen(false)}
          >
            Video Call
          </NavLink>
          <NavLink
            to="/watch"
            className={navLinkClass}
            onClick={() => setIsMenuOpen(false)}
          >
            Watch
          </NavLink>
          <NavLink
            to="/cantonchinatravel"
            className={navLinkClass}
            onClick={() => setIsMenuOpen(false)}
          >
            Canton China Travel
          </NavLink>

          <button
            onClick={openModal}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-full font-semibold shadow-md w-full"
          >
            Book a CALL
          </button>
        </div>
      )}
    </>
  );
}
