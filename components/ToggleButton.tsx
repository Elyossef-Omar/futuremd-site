import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMoon, FiSun } from 'react-icons/fi';

type ToggleOptionsType = 'dark' | 'light';

interface ToggleButtonProps {
  selected: ToggleOptionsType;
  setSelected: React.Dispatch<React.SetStateAction<ToggleOptionsType>>;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ selected, setSelected }) => {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ToggleOptionsType | null;
    if (savedTheme) {
      setSelected(savedTheme);
    } else {
      setSelected('dark'); 
      localStorage.setItem('theme', 'dark');
    }
  }, []); // Run once on component mount

  const toggleTheme = () => {
    const newTheme = selected === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.add('transition-colors');
    setSelected(newTheme);
    localStorage.setItem('theme', newTheme);
    setTimeout(() => {
      document.documentElement.classList.remove('transition-colors');
    }, 1500);
  };

  return (
    <button
      onClick={toggleTheme}
      className={`flex items-center p-2.5 rounded-md border-none transition-colors duration-1500 ${
        selected === 'light'
          ? 'text-black hover:bg-gray-300'
          : 'text-white hover:bg-[#191919]'
      }`}
    >
      <motion.div
        key={selected}
        initial={{ opacity: 0, rotate: -90 }}
        animate={{ opacity: 1, rotate: 0 }}
        exit={{ opacity: 0, rotate: 90 }}
        transition={{ duration: 0.5 }}
      >
        {selected === 'light' ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />}
      </motion.div>
    </button>
  );
};

export default ToggleButton;
