import React, { useState, useEffect } from 'react';
import 'animate.css';

import {
  AppAddCategoryForm,
  AppCategoriesGrid,
  AppGifsGrid,
  AppHeader,
  AppLikedGifsGrid,
} from './index.js';

const cuerpo = document.getElementsByTagName('body');
console.log(cuerpo.className);

export const App = () => {
  const [categories, setCategories] = useState([]);
  const [likedGifs, setLikedGifs] = useState(() => {
    const fromStorage = JSON.parse(window.localStorage.getItem('liked-gifs'));
    return fromStorage ?? [];
  });

  const [showLikedGifs, setShowLikedGifs] = useState(false);

  const handleClick = () => {
    setShowLikedGifs(!showLikedGifs);
  };

  useEffect(() => {
    window.localStorage.setItem('liked-gifs', JSON.stringify(likedGifs));
  }, [likedGifs]);

  return (
    <>
      <section className='flex justify-center w-full'>
        {showLikedGifs && (
          <AppLikedGifsGrid
            likedGifs={likedGifs}
            setLikedGifs={setLikedGifs}
            handleClick={handleClick}
          />
        )}
      </section>

      <section className='p-4 md:px-12 xl:px-32 mt-0 md:pt-12 font-sans'>
        <AppHeader
          showLikedGifs={showLikedGifs}
          displayLikedGifs={handleClick}
        />

        <AppAddCategoryForm
          categories={categories}
          setCategories={setCategories}
        />

        <AppCategoriesGrid
          categories={categories}
          setCategories={setCategories}
        />

        {categories.length === 0 ? (
          <section className='p-20 md:p-44 flex flex-col rounded-3xl font-mono text-white text-xl md:text-3xl animate__animated animate__fadeIn'>
            <div className='flex flex-col text-center'>
              <p className='text-green-400 text-5xl md:text-7xl font-sans font-black'>
                Are you ready?
              </p>
              <br />
              <p>Let&apos;s try searching something!</p>
            </div>
          </section>
        ) : (
          <AppGifsGrid
            category={categories[0]}
            likedGifs={likedGifs}
            setLikedGifs={setLikedGifs}
          />
        )}
      </section>
    </>
  );
};
