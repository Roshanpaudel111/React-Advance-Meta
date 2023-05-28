import './switch.css';
import { useTheme } from '../ThemeContext';
import { useState } from 'react';

const Switch = () => {
  const [dtheme, setdTheme] = useState('light');

  function handleClick() {
    if (dtheme == 'light') {
      setdTheme('dark');
    } else {
      setdTheme('light');
    }
  }

  const { theme } = useTheme();
  return (
    <label className='switch'>
      <input type='checkbox' checked={theme === dtheme} onClick={handleClick} />
      <span className='slider round' />
    </label>
  );
};

export default Switch;
