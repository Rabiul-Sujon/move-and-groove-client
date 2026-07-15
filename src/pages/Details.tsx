import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { api } from '../services/api';

interface ClassData {
  _id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  instructor: string;
  style: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  price: number;
  date: string;
  time: string;
  location: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  createdBy: {
    name: string;
    email: string;
  };
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Details() {
  const { id } = useParams<{ id: string }>();
  const [classData, setClassData] = useState<ClassData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchClass = async () => {
      try {
        const response = await api.get(`/classes/${id}`);
        setClassData(response.data.data);
      } catch (err) {
        setError('Class not found');
      } finally {
        setLoading(false);
      }
    };
    fetchClass();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-pink-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading class...</p>
        </div>
      </div>
    );
  }

  if (error || !classData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <p className="text-2xl text-gray-600 dark:text-gray-400">❌ {error || 'Class not found'}</p>
          <Link to="/classes" className="mt-4 inline-block text-pink-600 dark:text-pink-400 hover:underline">
            ← Back to Classes
          </Link>
        </div>
      </div>
    );
  }

  const { title, instructor, style, level, price, date, time, location, imageUrl, fullDescription, rating, reviewCount } = classData;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Hero Image Section */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={imageUrl || 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=1200&h=600&fit=crop'}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="bg-pink-600 px-3 py-1 rounded-full text-sm font-semibold">
                {style}
              </span>
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                {level}
              </span>
              <span className="flex items-center gap-1 text-sm">
                ⭐ {rating} ({reviewCount} reviews)
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
            <p className="text-xl md:text-2xl text-white/80 mt-2">with {instructor}</p>
            <div className="flex flex-wrap items-center gap-4 mt-4 text-sm md:text-base">
              <span className="bg-white/20 px-4 py-1 rounded-full">📍 {location}</span>
              <span className="bg-white/20 px-4 py-1 rounded-full">📅 {date}</span>
              <span className="bg-white/20 px-4 py-1 rounded-full">🕐 {time}</span>
              <span className="bg-pink-600 px-4 py-1 rounded-full font-bold text-lg">${price}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">About This Class</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {fullDescription}
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl"
            >
              <h3 className="font-semibold text-gray-800 dark:text-white mb-3">Class Details</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Style</p>
                  <p className="font-medium text-gray-800 dark:text-white">{style}</p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Level</p>
                  <p className="font-medium text-gray-800 dark:text-white">{level}</p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Instructor</p>
                  <p className="font-medium text-gray-800 dark:text-white">{instructor}</p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Price</p>
                  <p className="font-medium text-pink-600 dark:text-pink-400">${price}</p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Date</p>
                  <p className="font-medium text-gray-800 dark:text-white">{date}</p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Time</p>
                  <p className="font-medium text-gray-800 dark:text-white">{time}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-gray-500 dark:text-gray-400">Location</p>
                  <p className="font-medium text-gray-800 dark:text-white">{location}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-6"
          >
            <div className="bg-pink-50 dark:bg-gray-800 p-6 rounded-xl text-center">
              <p className="text-3xl font-bold text-pink-600 dark:text-pink-400">${price}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">per session</p>
              <button className="w-full mt-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-lg transition">
                Book Now
              </button>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">Free cancellation up to 24 hours</p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Instructor</h4>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-pink-200 dark:bg-pink-700 rounded-full flex items-center justify-center text-xl font-bold text-pink-600 dark:text-pink-300">
                  {instructor.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">{instructor}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{style} Specialist</p>
                </div>
              </div>
            </div>

            <Link
              to="/classes"
              className="block text-center text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition"
            >
              ← Browse More Classes
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}