import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const FooterMuni = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="border-t border-gray-200">
      <div className="container-padding py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-600 mb-4 md:mb-0">
            <p>© 2020-{currentYear} itechStore. All rights reserved.</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">We accept:</span>
            <div className="flex space-x-3">
              <div className="flex items-center bg-gray-100 px-3 py-1 rounded">
                <FontAwesomeIcon icon={faMoneyBill} className="text-green-600 mr-2" />
                <span className="text-sm">Cash on Delivery</span>
              </div>
              <div className="flex items-center bg-gray-100 px-3 py-1 rounded">
                <FontAwesomeIcon icon={faCreditCard} className="text-blue-600 mr-2" />
                <span className="text-sm">connectIPS</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 text-xs text-center text-gray-500">
          <div className="flex justify-center space-x-4">
            <Link to="/privacy" className="hover:text-blue-600 transition-colors duration-300">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms" className="hover:text-blue-600 transition-colors duration-300">Terms of Use</Link>
            <span>|</span>
            <Link to="/contact" className="hover:text-blue-600 transition-colors duration-300">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMuni;
