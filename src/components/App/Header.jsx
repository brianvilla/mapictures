import React from 'react';
import 'animate.css';

export const AppHeader = ({ showLikedGifs, displayLikedGifs }) => {
  return (
    <section className='flex justify-between mt-4'>
      <span className='text-lg sm:text-xl lg:text-3xl text-white font-bold header animate__animated animate__fadeIn'>
        M[API]CTURES
      </span>
      <span
        className='text-lg sm:text-xl lg:text-3xl text-white font-bold hover:cursor-pointer z-10 animate__animated animate__fadeIn'
        onClick={displayLikedGifs}
      >
        {showLikedGifs === false ? (
          <i className='fa-solid fa-heart fa-xl animate__animated'></i>
        ) : (
          <i className='fa-solid fa-xmark fa-xl animate__animated'></i>
        )}
      </span>
    </section>
  );
};
