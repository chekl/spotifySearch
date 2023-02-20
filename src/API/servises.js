async function getArtistId(searchInput, setArtist, authParam) {

    return await fetch(
    `https://api.spotify.com/v1/search?q=${searchInput}&type=artist`,
    authParam
  )
    .then((result) => result.json())
    .then((data) => {
      setArtist(data.artists.items[0]);
      return data.artists.items[0].id;
    });
}

async function getArtistAlbums(authParam) {
  return await fetch(
    'https://api.spotify.com/v1/artists/' +
      getArtistId() +
      '/albums?include_groups=album&market=US&limit=50',
      authParam
  )
    .then((response) => response.json())
    .then((data) => data.items);
}

async function getArtistsByGenre(setArtist, searchInput, authParam) {
    return await fetch(
    `https://api.spotify.com/v1/search?q=${searchInput}&type=artist`,
    authParam
  )
    .then((result) => result.json())
    .then((data) => setArtist(data.artists.items));
}

export { getArtistsByGenre, getArtistAlbums, getArtistId };
