import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Animation variants
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

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-500 via-pink-400 to-cyan-400">
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Find Your Rhythm.
            <br />
            <span className="text-yellow-300">Book Your Dance Class.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Discover the best dance classes near you. From Salsa to Hip-Hop, find your perfect groove.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/classes"
              className="px-8 py-3 bg-white text-pink-600 font-semibold rounded-full hover:bg-gray-100 transition shadow-lg hover:shadow-xl text-lg"
            >
              Explore Classes →
            </Link>
            <Link
              to="/register"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition text-lg"
            >
              Get Started
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-2xl"
        >
          ↓
        </motion.div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
              Why <span className="text-pink-600 dark:text-pink-400">Move & Groove</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-600 dark:text-gray-400 mt-2">
              Everything you need to start your dance journey
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all text-center group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== DANCE STYLES SECTION ===== */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
              Explore <span className="text-pink-600 dark:text-pink-400">Dance Styles</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-600 dark:text-gray-400">
              Find the style that moves you
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {danceStyles.map((style, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white dark:bg-gray-700 p-4 rounded-xl text-center shadow hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer"
              >
                <div className="text-4xl mb-2">{style.emoji}</div>
                <p className="font-medium text-gray-800 dark:text-white text-sm">{style.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== FEATURED CLASSES ===== */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
              Featured <span className="text-pink-600 dark:text-pink-400">Classes</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-600 dark:text-gray-400">
              Handpicked classes to get you started
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {featuredClasses.map((cls, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-lg transition-all group"
              >
                <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: `url(${cls.image})` }}>
                  <div className="absolute top-3 right-3 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {cls.level}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <span className="text-white font-bold text-lg">${cls.price}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 dark:text-white">{cls.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{cls.instructor}</p>
                  <div className="flex items-center gap-2 mt-2 text-sm text-gray-500 dark:text-gray-400">
                    <span>⭐ {cls.rating}</span>
                    <span>•</span>
                    <span>{cls.style}</span>
                    <span>•</span>
                    <span>{cls.date}</span>
                  </div>
                  <Link
                    to={`/classes/${cls.id}`}
                    className="mt-4 block text-center bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 rounded-lg transition"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Link
              to="/classes"
              className="inline-block px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-full transition shadow-lg hover:shadow-xl"
            >
              View All Classes →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== STATISTICS ===== */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-500 to-cyan-400 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {stats.map((stat, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Counter end={stat.value} label={stat.label} suffix={stat.suffix} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
              What Our <span className="text-pink-600 dark:text-pink-400">Students Say</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">{t.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="mt-3 text-yellow-400 text-sm">⭐ ⭐ ⭐ ⭐ ⭐</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-bold text-gray-800 dark:text-white">
              Get <span className="text-pink-600 dark:text-pink-400">10% Off</span> Your First Class
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-600 dark:text-gray-400 mt-2">
              Subscribe to our newsletter and get dance tips, class updates, and exclusive offers.
            </motion.p>

            <motion.form
              variants={fadeUp}
              className="mt-6 flex flex-col sm:flex-row gap-4 justify-center"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white flex-1 max-w-md focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-full transition shadow-lg hover:shadow-xl"
              >
                Subscribe
              </button>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
              Frequently Asked <span className="text-pink-600 dark:text-pink-400">Questions</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="space-y-4"
          >
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={fadeUp}>
                <FaqItem question={faq.question} answer={faq.answer} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// ===== COUNTER COMPONENT =====
function Counter({ end, label, suffix }: { end: number; label: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const step = Math.max(1, Math.floor(end / 60));
      const interval = setInterval(() => {
        start += step;
        if (start >= end) {
          setCount(end);
          clearInterval(interval);
        } else {
          setCount(start);
        }
      }, duration / 60);
      return () => clearInterval(interval);
    }
  }, [inView, end]);

  return (
    <div ref={ref}>
      <div className="text-4xl md:text-5xl font-bold">
        {count}{suffix}
      </div>
      <div className="text-white/80 text-sm mt-1">{label}</div>
    </div>
  );
}

// ===== FAQ ITEM =====
function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-600 transition"
      >
        <span className="font-medium text-gray-800 dark:text-white">{question}</span>
        <span className="text-xl text-pink-600 dark:text-pink-400">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

// ===== DATA =====
const features = [
  { icon: '💃', title: 'Expert Instructors', description: 'Learn from the best dancers in the industry.' },
  { icon: '🏛️', title: 'Top Studios', description: 'Classes at premium dance studios near you.' },
  { icon: '🎯', title: 'All Levels Welcome', description: 'From absolute beginners to advanced dancers.' },
];

const danceStyles = [
  { name: 'Salsa', emoji: '💃' },
  { name: 'Ballet', emoji: '🩰' },
  { name: 'Hip-Hop', emoji: '🕺' },
  { name: 'Zumba', emoji: '🎵' },
  { name: 'Contemporary', emoji: '🌊' },
  { name: 'Jazz', emoji: '🎷' },
];

const featuredClasses = [
  {
    id: '1',
    title: 'Salsa Night Beginners',
    instructor: 'Maria Rodriguez',
    style: 'Salsa',
    level: 'Beginner',
    price: 25,
    date: 'Every Sat',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=400&h=300&fit=crop',
  },
  {
    id: '2',
    title: 'Ballet for Adults',
    instructor: 'Elena Volkova',
    style: 'Ballet',
    level: 'Beginner',
    price: 30,
    date: 'Tue & Thu',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1545529468-42764ef8c85f?w=400&h=300&fit=crop',
  },
  {
    id: '3',
    title: 'High-Energy Hip-Hop',
    instructor: 'Jay Thompson',
    style: 'Hip-Hop',
    level: 'Intermediate',
    price: 20,
    date: 'Wed & Fri',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop',
  },
  {
    id: '4',
    title: 'Zumba Fitness Party',
    instructor: 'Carlos Mendez',
    style: 'Zumba',
    level: 'All Levels',
    price: 15,
    date: 'Mon & Wed',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1594035910383-cf091e981ede?w=400&h=300&fit=crop',
  },
];

const stats = [
  { value: 500, label: 'Happy Students', suffix: '+' },
  { value: 50, label: 'Expert Instructors', suffix: '+' },
  { value: 100, label: 'Dance Classes', suffix: '+' },
  { value: 4.8, label: 'Average Rating', suffix: '⭐' },
];

const testimonials = [
  {
    name: 'Sarah J.',
    role: 'Student',
    quote: 'I never danced before, but the beginner Salsa class made me feel so welcome!',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: 'Mike R.',
    role: 'Student',
    quote: 'The Hip-Hop classes are incredible. I\'ve learned so much in just a few weeks!',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  {
    name: 'Emily K.',
    role: 'Student',
    quote: 'Ballet for Adults is a dream come true. The instructor is so patient and skilled.',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
];

const faqs = [
  {
    question: 'Do I need any dance experience?',
    answer: 'Not at all! We have classes for all levels, from absolute beginners to advanced dancers. Every class is designed to be welcoming and supportive.',
  },
  {
    question: 'What should I wear to class?',
    answer: 'Comfortable clothing that allows you to move freely. For shoes, wear dance sneakers or socks. We recommend bringing a water bottle!',
  },
  {
    question: 'How do I book a class?',
    answer: 'Simply browse our classes, click "View Details", and follow the booking instructions. You can also manage your bookings from your dashboard.',
  },
  {
    question: 'Can I cancel or reschedule?',
    answer: 'Yes, you can cancel or reschedule up to 24 hours before the class starts. Check your dashboard for cancellation options.',
  },
  {
    question: 'Are classes in-person or online?',
    answer: 'All our classes are in-person at our partner studios. We believe in the power of dancing together in a physical space.',
  },
];