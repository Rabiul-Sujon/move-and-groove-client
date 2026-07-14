import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Login from './pages/Login';
import Register from './pages/Register';

function Home() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-pink-50 dark:bg-gray-900 px-4 transition-colors">
      <h1 className="text-5xl font-bold text-pink-600 dark:text-pink-400 mb-4">
        🕺 Move & Groove
      </h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 text-center">
        Find your rhythm. Book your dance class.
      </p>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/classes" element={<div className="p-8 text-center">Explore Classes</div>} />
                <Route path="/about" element={<div className="p-8 text-center">About Us</div>} />
                <Route path="/contact" element={<div className="p-8 text-center">Contact Us</div>} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;