import { useState, useEffect } from 'react';
import showToast from '../component/ToastNotification';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }, []);

  const handleAdd = () => {
    setCount(count + 1);
    showToast('success', 'Number increased!');
  };

  const handleRemove = () => {
    setCount(count - 1);
    showToast('warn', 'Number decreased!');
  };

  const handleReset = () => {
    setCount(0);
    showToast('info', 'Counter reset!');
  };

  return (
    <div className={`card ${isDarkMode ? 'dark' : ''}`}>
      <p>Current Count: {count}</p>
      <button className="btn" onClick={handleAdd}>Add</button>
      <button className="btn" onClick={handleRemove}>Remove</button>
      <button className="btn reset" onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;
