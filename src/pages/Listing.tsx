import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../services/api';

interface ClassData {
  _id: string;
  title: string;
  shortDescription: string;
  instructor: string;
  style: string;
  level: string;
  price: number;
  date: string;
  time: string;
  location: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
}

export default function Listing() {
  const [classes, setClasses] = useState<ClassData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await api.get('/classes?limit=8');
        setClasses(response.data.data.classes || []);
      } catch (err) {
        setError('Failed to load classes');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchClasses();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-gray-200 dark:bg-gray-700 rounded-xl h-72 animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <p className="text-red-500 dark:text-red-400">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 py-8 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
          Explore <span className="text-pink-600 dark:text-pink-400">Classes</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Find the perfect dance class for you
        </p>

        {classes.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400 py-12">
            No classes available yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {classes.map((cls) => (
              <div
                key={cls._id}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-lg transition-all group"
              >
                <div
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${cls.imageUrl || 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=400&h=300&fit=crop'})` }}
                >
                  <div className="absolute top-3 right-3 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {cls.level}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <span className="text-white font-bold text-lg">${cls.price}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 dark:text-white text-lg truncate">
                    {cls.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{cls.instructor}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                    {cls.shortDescription}
                  </p>
                  <div className="flex items-center gap-2 mt-2 text-sm text-gray-500 dark:text-gray-400">
                    <span>⭐ {cls.rating || 0}</span>
                    <span>•</span>
                    <span>{cls.style}</span>
                    <span>•</span>
                    <span>{cls.date}</span>
                  </div>
                  <Link
                    to={`/classes/${cls._id}`}
                    className="mt-4 block text-center bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 rounded-lg transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}