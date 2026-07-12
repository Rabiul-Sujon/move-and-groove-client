import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 mt-auto transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-pink-600 dark:text-pink-400 mb-3">
              Move & Groove
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Find your rhythm. Book your dance class.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-pink-600 dark:hover:text-pink-400">Home</Link></li>
              <li><Link to="/classes" className="hover:text-pink-600 dark:hover:text-pink-400">Explore</Link></li>
              <li><Link to="/about" className="hover:text-pink-600 dark:hover:text-pink-400">About</Link></li>
              <li><Link to="/contact" className="hover:text-pink-600 dark:hover:text-pink-400">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>📧 info@moveandgroove.com</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>📍 123 Dance St, NYC</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-3">Follow Us</h4>
           <div className="flex gap-4 text-2xl">
           <a href="#" className="hover:text-pink-600 dark:hover:text-pink-400 transition">
           <FaInstagram />
           </a>
           <a href="#" className="hover:text-pink-600 dark:hover:text-pink-400 transition">
           <FaTwitter />
           </a>
           <a href="#" className="hover:text-pink-600 dark:hover:text-pink-400 transition">
           <FaFacebook />
            </a>
            <a href="#" className="hover:text-pink-600 dark:hover:text-pink-400 transition">
            <FaYoutube />
            </a>

            </div>
        </div>

        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Move & Groove. All rights reserved.
        </div>
      </div>
    </footer>
  );
}