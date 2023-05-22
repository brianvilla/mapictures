import React from 'react';
import 'animate.css';

export const AppLikedGif = ({ gif, onDislikeGif }) => {
  const newTitle = gif.title
    ? gif.title.slice(0, gif.title.search('GIF') - 1)
    : 'Unknown';

  return (
    <article className='truncate w-full md:w-full h-fit bg-gradient-to-r from-green-400 to-blue-500 flex shrink-0 gap-3 p-2 sm:p-4 rounded-xl animate__animated animate__fadeIn'>
      <img
        src={gif.url.url}
        loading='lazy'
        alt={newTitle}
        className='rounded-xl w-20 md:w-24 xl:w-32 h-20 md:h-24 xl:h-32 object-cover'
      />
      <div className='w-full truncate flex flex-col shrink lg:p-3 mt-4 md:mt-6 lg:mt-4 xl:mt-7'>
        <a
          href={gif.embedUrl}
          className='w-fit line-clamp-1 text-white text-sm md:text-lg lg:text-xl font-sans font-bold hover:cursor-pointer hover:underline'
        >
          {newTitle}
        </a>
        <span className='w-fit line-clamp-1 text-white text-xs md:text-lg font-mono font-thin -mt-1'>
          {gif.user ? `by ${gif.user}` : `user unknown`}
        </span>
      </div>
      <span
        onClick={() => onDislikeGif(gif)}
        className='h-fit text-white hover:text-red-500 hover:cursor-pointer text-3xl md:text-5xl mt-5 md:mt-3 mr-4 md:mr-3'
      >
        <i className='fa-solid fa-heart-crack'></i>
      </span>
    </article>
  );
};
