import React from 'react';
import './App.css';
// import hook
import useOnlineStatus from './useOnlineStatus';

function App() {
  const isOnline = useOnlineStatus();

  return (
    <React.Fragment>
      {isOnline ? (
        <h1>You are online. 🤘</h1>
      ) : (
        <h1>You are offline. 😞</h1>
      )}
      <div className="card"></div>
    </React.Fragment>
  );
}

export default App;
