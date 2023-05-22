import React, { useState } from 'react';
import 'animate.css';

export const AppAddCategoryForm = ({ categories, setCategories }) => {
  const [category, setCategory] = useState('');

  const handleChange = ({ target: { value } }) => {
    setCategory(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (categories.find(element => element === category)) {
      setCategory('');
      return;
    }
    if (category.trim().length <= 1) return;
    setCategories(categories => [category.trim(), ...categories]);
    setCategory('');
  };

  return (
    <section className='animate__animated animate__fadeIn'>
      <form className='flex gap-1 justify-center mt-12' onSubmit={handleSubmit}>
        <input
          className='w-full md:w-1/2 bg-zinc-500 px-3 md:px-5 py-3 md:py-5 text-sm md:text-lg text-white rounded-lg md:rounded-xl'
          type='text'
          placeholder='Type something...'
          value={category}
          onChange={handleChange}
          maxLength={25}
        />
        <button
          type='submit'
          className='bg-gradient-to-r from-green-400 to-blue-500 px-3 md:px-5 py-3 md:py-5 font-semibold text-sm md:text-lg text-white rounded-lg md:rounded-xl hover:brightness-110 transition ease-in-out'
        >
          Search
        </button>
      </form>
    </section>
  );
};
