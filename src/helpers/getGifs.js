export const getGifs = async category => {
  if (!category) return;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=5lPmkoWyX1TZpBNeWUX2pnGSUKvwR6av&q=${category}`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const newGifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium,
      embedUrl: img.embed_url,
      user: img.user?.username,
      avatar: img.user?.avatar_url,
    };
  });

  // console.log(newGifs);
  return newGifs;
};
