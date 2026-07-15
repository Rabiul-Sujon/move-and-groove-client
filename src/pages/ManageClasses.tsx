import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { api } from '../services/api';

interface ClassData {
  _id: string;
  title: string;
  instructor: string;
  style: string;
  level: string;
  price: number;
  date: string;
  location: string;
  imageUrl: string;
  createdAt: string;
}

export default function ManageClasses() {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [classes, setClasses] = useState<ClassData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  // Fetch classes (only if authenticated and is instructor/admin)
  useEffect(() => {
    if (!isAuthenticated) return;
    if (user?.role !== 'instructor' && user?.role !== 'admin') return;

    const fetchClasses = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await api.get('/classes?limit=20');
        const allClasses = response.data.data.classes || [];
        // Filter classes created by the logged-in user
        const myClasses = allClasses.filter((cls: any) => cls.createdBy._id === user?.id);
        setClasses(myClasses);
      } catch (err) {
        setError('Failed to load your classes');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchClasses();
  }, [isAuthenticated, user, navigate]);

  const handleDelete = async (id: string) => {
    setDeleteId(id);
    setDeleting(true);
    try {
      await api.delete(`/classes/${id}`);
      setClasses(classes.filter((cls) => cls._id !== id));
    } catch (err) {
      setError('Failed to delete class');
      console.error(err);
    } finally {
      setDeleteId(null);
      setDeleting(false);
    }
  };

  // Conditional rendering after all hooks
  if (!isAuthenticated) {
    return null; // will redirect via useEffect
  }

  if (user?.role !== 'instructor' && user?.role !== 'admin') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <p className="text-xl text-red-500 dark:text-red-400">Access Denied</p>
          <p className="text-gray-600 dark:text-gray-400">Only instructors and admins can manage classes.</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-48"></div>
            <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 py-8 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Manage <span className="text-pink-600 dark:text-pink-400">Classes</span>
          </h1>
          <Link
            to="/classes/add"
            className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-4 py-2 rounded-lg transition"
          >
            + Add New Class
          </Link>
        </div>

        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-500 text-red-700 dark:text-red-400 p-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        {classes.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-8 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              You haven't created any classes yet.
            </p>
            <Link
              to="/classes/add"
              className="mt-4 inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded-lg transition"
            >
              Create Your First Class
            </Link>
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">Title</th>
                    <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">Style</th>
                    <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">Price</th>
                    <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">Date</th>
                    <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {classes.map((cls) => (
                    <tr key={cls._id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                      <td className="px-6 py-4 font-medium text-gray-800 dark:text-white">
                        {cls.title}
                      </td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{cls.style}</td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-300">${cls.price}</td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{cls.date}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <Link
                            to={`/classes/${cls._id}`}
                            className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                          >
                            View
                          </Link>
                          <button
                            onClick={() => handleDelete(cls._id)}
                            disabled={deleteId === cls._id && deleting}
                            className="text-red-600 dark:text-red-400 hover:underline text-sm disabled:opacity-50"
                          >
                            {deleteId === cls._id && deleting ? 'Deleting...' : 'Delete'}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}