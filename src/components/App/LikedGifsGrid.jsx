import React from 'react';
import { AppLikedGif } from './LikedGif';

export const AppLikedGifsGrid = ({ likedGifs, setLikedGifs, handleClick }) => {
  const className =
    likedGifs.length > 3
      ? 'fixed z-10 w-full md:w-3/6 h-80 sm:h-64 md:h-1/3 xl:h-1/2 bg-zinc-700 rounded-t-xl flex flex-wrap justify-center gap-1 sm:gap-3 overflow-auto p-4 md:py-8 bottom-0 drop-shadow-lg animate__animated animate__fadeInUp'
      : 'fixed z-10 w-full md:w-3/6 h-fit bg-zinc-700 rounded-t-xl flex flex-wrap justify-center gap-1 sm:gap-3 overflow-auto p-4 md:py-8 bottom-0 drop-shadow-lg animate__animated animate__fadeInUp';

  const onDislikeGif = gif => {
    const newGif = JSON.stringify(gif);
    likedGifs.includes(newGif)
      ? setLikedGifs(likedGifs.filter(gif => gif !== newGif))
      : setLikedGifs(gifs => [newGif, ...gifs]);
  };

  return (
    <>
      <div
        className='fixed w-screen h-screen bg-black opacity-70 z-10'
        onClick={handleClick}
      ></div>
      <section className={className}>
        {likedGifs.length === 0 ? (
          <section className='flex flex-col rounded-3xl font-mono text-white text-xl md:text-3xl animate__animated animate__fadeIn'>
            <div className='flex flex-col text-center'>
              <p className='text-5xl md:text-7xl font-sans font-black text-green-400'>
                It&apos;s empty!
              </p>
              <br />
              <p>
                You don&apos;t have favorite gifs.
                <br />
                Try clicking on the heart icon from a gif.
              </p>
            </div>
          </section>
        ) : (
          likedGifs.map(element => {
            const newElement = JSON.parse(element);

            return (
              <AppLikedGif
                key={newElement.id}
                gif={newElement}
                onDislikeGif={onDislikeGif}
              />
            );
          })
        )}
      </section>
    </>
  );
};
