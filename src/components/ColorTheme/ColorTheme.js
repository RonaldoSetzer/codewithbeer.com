/* eslint no-underscore-dangle: 0 */
import React, { useState, useEffect } from 'react';
import Icons from '../Icons/ListIcons';

function ColorTheme() {
  const [theme, setTheme] = useState(null);
  const themes = ['kaiser', 'dracula', 'palenight', 'gruvbox', 'gruvboxlight'];

  useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => setTheme(window.__theme);
  }, []);

  const getNextIndex = (index) => {
    if (index === -1) return 0;

    const nextIndex = index + 1;

    return nextIndex < themes.length ? nextIndex : 0;
  };

  const handleToggle = () => {
    const currentIndex = themes.indexOf(theme);
    const nextIndex = getNextIndex(currentIndex);
    const newTheme = themes[nextIndex];

    window.__setPreferredTheme(newTheme);

    if (window.DISQUS !== undefined) {
      window.setTimeout(() => {
        window.DISQUS.reset({
          reload: true,
        });
      }, 300);
    }
  };

  const { Palette } = Icons;

  return <Palette onClick={handleToggle} />;
}
export default ColorTheme;
