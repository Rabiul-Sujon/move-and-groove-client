import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Hero */}
      <section className="bg-gradient-to-r from-pink-500 to-cyan-400 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Get in <span className="text-yellow-300">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90"
          >
            We'd love to hear from you. Reach out anytime.
          </motion.p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* Contact Info */}
          <motion.div variants={fadeUp} className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Contact <span className="text-pink-600 dark:text-pink-400">Information</span>
            </h2>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">Address</p>
                  <p className="text-gray-600 dark:text-gray-300">123 Dance Street, NYC 10001</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">Email</p>
                  <p className="text-gray-600 dark:text-gray-300">info@moveandgroove.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">Phone</p>
                  <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-2xl">🕐</span>
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">Hours</p>
                  <p className="text-gray-600 dark:text-gray-300">Mon – Sat: 9:00 AM – 9:00 PM</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-3">Follow Us</h3>
              <div className="flex gap-4 text-3xl">
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
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={fadeUp}>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Send us a <span className="text-pink-600 dark:text-pink-400">Message</span>
            </h2>

            {submitted ? (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-500 text-green-700 dark:text-green-400 p-4 rounded-lg">
                ✅ Thank you! We'll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-lg transition"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}