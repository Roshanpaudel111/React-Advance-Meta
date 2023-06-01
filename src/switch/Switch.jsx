import './switch.css';
import { useTheme } from '../ThemeContext';

const Switch = () => {
  const { theme, setTheme } = useTheme();

  function handleClick() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <label className='switch'>
      <input type='checkbox' checked={theme === 'dark'} onClick={handleClick} />
      <span className='slider round' />
    </label>
  );
};

export default Switch;
