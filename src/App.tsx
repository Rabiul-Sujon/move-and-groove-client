import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

// Placeholder Home component
function Home() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-pink-50 dark:bg-gray-900 px-4 transition-colors">
      <h1 className="text-5xl font-bold text-pink-600 dark:text-pink-400 mb-4">
        🕺 Move & Groove
      </h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 text-center">
        Find your rhythm. Book your dance class.
      </p>
      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        API Status: ✅ Connected
      </p>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/classes" element={<div className="p-8 text-center text-gray-700 dark:text-gray-300">Explore Classes (Coming soon)</div>} />
              <Route path="/about" element={<div className="p-8 text-center text-gray-700 dark:text-gray-300">About Us (Coming soon)</div>} />
              <Route path="/contact" element={<div className="p-8 text-center text-gray-700 dark:text-gray-300">Contact Us (Coming soon)</div>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;