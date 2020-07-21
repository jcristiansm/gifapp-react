export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=m4FOnCuPd6rm90o0bshOOfP68QVvVroM`;
  const res = await fetch(url);
  const { data } = await res.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium.url,
  }));

  // console.log(gifs);
  return gifs;
};
