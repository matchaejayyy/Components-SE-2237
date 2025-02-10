import { useState, useEffect } from 'react';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import dogGif from './assets/images/dog.gif';

function Counter() {
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModePreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(darkModePreference);
  }, []);

  const handleAdd = () => {
    setCount(count + 1);
    toast.success('Number increased!', { position: "top-right", autoClose: 1500 });
  };

  const handleRemove = () => {
    setCount(count - 1);
    toast.warn('Number decreased!', { position: "top-right", autoClose: 1500 });
  };

  const handleReset = () => {
    setCount(0);
    toast.info('Counter reset!', { position: "top-right", autoClose: 1500 });
  };

  return (
    <div className={`card ${isDarkMode ? 'dark' : ''}`}>
      <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'orange' }}>Current Count: {count}</p>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button className="btn" style={{ backgroundColor: 'green', color: 'white' }} onClick={handleAdd}>Add</button>
        <button className="btn" style={{ backgroundColor: 'red', color: 'white' }} onClick={handleRemove}>Remove</button>
        <button className="btn reset" style={{ backgroundColor: 'blue', color: 'white' }} onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <> 
      <div>
        <img src={dogGif} className="logo" alt="Dog gif" style={{ width: '300px', height: '300px' }} />
      </div>
      <Counter />
      <p className="read-the-docs">Press any button to add, remove, and to reset the counter.</p>
      <ToastContainer transition={Slide} theme="colored" />
    </>
  );
}

export default App;
