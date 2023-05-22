import React from 'react';

export const AppCategory = ({ children, setCategories, shownCategory }) => {
  const handleClick = () => {
    setCategories(categories => [
      children,
      ...categories.filter(category => category !== children),
    ]);
  };

  return (
    <span
      className={
        children === shownCategory
          ? 'bg-gradient-to-r from-green-400 to-blue-500 px-3 py-1 text-sm md:text-lg text-white font-semibold rounded-lg hover:cursor-pointer transition ease-in-out'
          : 'bg-zinc-600 hover:bg-zinc-700 px-3 py-1 text-sm md:text-lg text-white rounded-lg hover:cursor-pointer transition ease-in-out'
      }
      onClick={handleClick}
    >
      {children}
    </span>
  );
};
