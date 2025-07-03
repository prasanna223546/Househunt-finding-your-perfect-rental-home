import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Settings = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Settings</h2>
      <label>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={toggleTheme}
          style={{ marginRight: '8px' }}
        />
        Enable Dark Mode
      </label>
    </div>
  );
};

export default Settings;
