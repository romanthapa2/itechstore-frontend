import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faEnvelope, 
  faPhone, 
  faLocationDot 
} from "@fortawesome/free-solid-svg-icons";
import { 
  faFacebook, 
  faTwitter, 
  faInstagram, 
  faYoutube 
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 shadow-md">
      <div className="container-padding py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Support Section */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="font-bold text-xl mb-4 text-gray-900 border-b-2 border-blue-500 pb-2">Support</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faLocationDot} className="text-blue-600" />
                <p>1st floor, 777 building</p>
              </div>
              <p className="ml-6">Sundhara, Lalitpur</p>
              <p className="ml-6">Bagmati 44600, Nepal</p>
              <div className="flex items-center gap-2 mt-2">
                <FontAwesomeIcon icon={faEnvelope} className="text-blue-600" />
                <a href="mailto:thaparoman970@gmail.com" className="hover:text-blue-600 transition-colors duration-300">thaparoman970@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faPhone} className="text-blue-600" />
                <a href="tel:9806580938" className="hover:text-blue-600 transition-colors duration-300">9806580938</a>
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex mt-4 gap-4">
              <a href="#" className="text-gray-600 hover:text-blue-600 text-xl transition-colors duration-300">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-400 text-xl transition-colors duration-300">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-600 text-xl transition-colors duration-300">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="text-gray-600 hover:text-red-600 text-xl transition-colors duration-300">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>

          {/* Shop Section */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="font-bold text-xl mb-4 text-gray-900 border-b-2 border-blue-500 pb-2">Shop</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/laptops" className="hover:text-blue-600 transition-colors duration-300">Laptops</Link>
              </li>
              <li>
                <Link to="/desktops" className="hover:text-blue-600 transition-colors duration-300">Desktops</Link>
              </li>
              <li>
                <Link to="/apple" className="hover:text-blue-600 transition-colors duration-300">Apple Products</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-600 transition-colors duration-300">Services</Link>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="font-bold text-xl mb-4 text-gray-900 border-b-2 border-blue-500 pb-2">Help</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/returns" className="hover:text-blue-600 transition-colors duration-300">Returns & Refunds</Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-blue-600 transition-colors duration-300">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-blue-600 transition-colors duration-300">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* About Section */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="font-bold text-xl mb-4 text-gray-900 border-b-2 border-blue-500 pb-2">About</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/blogs" className="hover:text-blue-600 transition-colors duration-300">Blogs</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-600 transition-colors duration-300">Contact Us</Link>
              </li>
              <li>
                <Link to="/pc-builder" className="hover:text-blue-600 transition-colors duration-300">PC Builder</Link>
              </li>
              <li>
                <Link to="/sitemap" className="hover:text-blue-600 transition-colors duration-300">Sitemap</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
