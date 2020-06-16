/* eslint no-underscore-dangle: 0 */
import React, { useState, useEffect } from 'react';
import Icons from '../Icons/ListIcons';

function ToggleTheme() {
  const [theme, setTheme] = useState(null);
  const isDarkMode = theme === 'dark';

  useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => setTheme(window.__theme);
  }, []);

  const handleToggle = () => {
    window.__setPreferredTheme(isDarkMode ? 'light' : 'dark');

    if (window.DISQUS !== undefined) {
      window.setTimeout(() => {
        window.DISQUS.reset({
          reload: true,
        });
      }, 300);
    }
  };

  const { LightOn, LightOff } = Icons;
  const Icon = isDarkMode ? LightOff : LightOn;

  return <Icon onClick={handleToggle} />;
}
export default ToggleTheme;
