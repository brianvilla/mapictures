import React from 'react';
import 'animate.css';

import { AppCategory } from './Category.jsx';

export const AppCategoriesGrid = ({ categories, setCategories }) => {
  return (
    <section className='flex justify-center flex-wrap gap-3 mt-5 mb-12 animate__animated animate__fadeIn'>
      {categories.map((category, index) => (
        <AppCategory
          key={index}
          setCategories={setCategories}
          shownCategory={categories[0]}
        >
          {category}
        </AppCategory>
      ))}
    </section>
  );
};
