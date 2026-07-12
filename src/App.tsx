import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('Loading...');
  const [error, setError] = useState('');

  useEffect(() => {
    console.log('🔄 API Call Started');
    
    const apiUrl = import.meta.env.VITE_API_URL;
    console.log('📡 API URL:', apiUrl);
    
    axios.get(`${apiUrl}/health`)
      .then(response => {
        console.log('✅ API Response:', response.data);
        setMessage(response.data.message);
      })
      .catch(err => {
        console.error('❌ API Error:', err);
        setError(err.message);
      });
  }, []);

  return (
    <div className="bg-pink-500 text-white text-center p-8 min-h-screen">
      <h1 className="text-4xl font-bold">Move & Groove</h1>
      <p className="mt-4 text-xl">API Test Result:</p>
      {error ? (
        <p className="text-red-300 mt-2">❌ Error: {error}</p>
      ) : (
        <p className="text-white mt-2">✅ {message}</p>
      )}
      <p className="mt-4 text-sm opacity-75">Backend URL: {import.meta.env.VITE_API_URL}</p>
    </div>
  );
}

export default App;