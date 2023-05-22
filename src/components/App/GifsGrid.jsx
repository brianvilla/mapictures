import React, { useEffect, useState } from 'react';

import { AppGif } from './Gif.jsx';
import { getGifs } from '../../helpers/getGifs.js';

export const AppGifsGrid = ({ category, likedGifs, setLikedGifs }) => {
  const [gifs, setGifs] = useState([]);
  const className =
    gifs.length !== 0
      ? 'h-fit columns-2 sm:columns-3 xl:columns-5 animate__animated animate__fadeIn'
      : 'h-fit flex justify-center animate__animated animate__fadeIn';

  const getImages = async () => {
    const newGifs = await getGifs(category);
    if (!newGifs) return;
    setGifs(newGifs);
  };

  useEffect(() => {
    getImages();
  }, [category]);

  return (
    <section className={className}>
      {gifs.length === 0 ? (
        <section className='flex flex-col rounded-3xl font-mono text-white text-xl md:text-3xl animate__animated animate__fadeIn'>
          <img
            src='../../../assets/no-data.gif'
            alt='no data'
            className='w-2/4 md:w-3/4 rounded-3xl place-self-center'
          />
          <div className='flex flex-col text-center'>
            <p className='text-5xl md:text-7xl font-sans font-black text-green-400'>
              No results found
            </p>
            <p>
              We couldn&apos;t find what you searched for.
              <br />
              Try searching again.
            </p>
          </div>
        </section>
      ) : (
        gifs.map(item => {
          return (
            <AppGif
              key={item.id}
              gif={item}
              likedGifs={likedGifs}
              setLikedGifs={setLikedGifs}
            />
          );
        })
      )}
    </section>
  );
};
