import React from 'react';
import 'animate.css';

export const AppGif = ({ gif, likedGifs, setLikedGifs }) => {
  const newTitle = gif.title
    ? gif.title.slice(0, gif.title.search('GIF') - 1)
    : 'Unknown';

  const handleClick = () => {
    const newGif = JSON.stringify(gif);
    likedGifs.includes(newGif)
      ? setLikedGifs(likedGifs.filter(gif => gif !== newGif))
      : setLikedGifs(gifs => [newGif, ...gifs]);
  };

  return (
    <article className='truncate bg-zinc-800 rounded-xl static group mb-4 hover:scale-100 md:hover:scale-105 transition ease-in-out animate__animated animate__fadeIn'>
      <div className='group-hover:w-full invisible group-hover:visible group-hover:z-10 absolute flex justify-end py-3 px-4'>
        {likedGifs.includes(JSON.stringify(gif)) ? (
          <span
            onClick={handleClick}
            className='text-red-500 text-lg md:text-xl hover:cursor-pointer'
          >
            <i className='fa-solid fa-heart fa-xl'></i>
          </span>
        ) : (
          <span
            onClick={handleClick}
            className='text-white text-lg md:text-xl hover:cursor-pointer'
          >
            <i className='fa-regular fa-heart fa-xl'></i>
          </span>
        )}
      </div>
      <img
        src={gif.url.url}
        alt={gif.title}
        loading='lazy'
        className='w-full bg-slate-300 rounded-xl group-hover:opacity-75 transition ease-in-out'
      />
      <div className='w-48 sm:w-72 md:w-80 truncate invisible group-hover:visible absolute flex gap-2 -translate-y-9 md:-translate-y-16 translate-x-3'>
        {gif.avatar && (
          <img
            src={gif.avatar}
            loading='lazy'
            className='w-6 md:w-12 h-6 md:h-12 rounded-full'
          />
        )}
        <div className='flex flex-col text-white'>
          <a
            href={gif.embedUrl}
            className='line-clamp-1 font-sans font-bold text-sm md:text-lg hover:cursor-pointer hover:underline'
          >
            {newTitle}
          </a>
          <span className='font-mono font-thin text-xs md:text-sm -mt-1'>
            {gif.user ? `by ${gif.user}` : `user unknown`}
          </span>
        </div>
      </div>
    </article>
  );
};
