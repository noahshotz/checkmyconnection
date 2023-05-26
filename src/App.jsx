import React, { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      // Internet connection re-established logic here
    };

    const handleOffline = () => {
      setIsOnline(false);
      // Internet connection lost logic here
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <React.Fragment>
      {isOnline ? (
        <h1>You are online. 🤘</h1>
      ) : (
        <h1>You are offline. 😞</h1>
      )}
      <div className="card"></div>
    </React.Fragment>
  )
}

export default App
