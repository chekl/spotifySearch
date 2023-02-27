async function getArtistById(id, authParam) {
    return await fetch(
    `https://api.spotify.com/v1/artists/${id}`,
    authParam
  )
    .then((result) => result.json())
    .then((data) => data);
}

async function getArtistAlbums(id, authParam) {
  return await fetch(
    `https://api.spotify.com/v1/artists/${id}/albums?include_groups=album&market=US&limit=50`,
      authParam
  )
    .then((response) => response.json())
    .then((data) => data.items);
}

async function getArtistsByGenre(setArtist, searchInput, authParam) {
    await fetch(
    `https://api.spotify.com/v1/search?q=${searchInput}&type=artist`,
    authParam
  )
    .then((result) => result.json())
    .then((data) => setArtist(data.artists.items));
}

export { getArtistsByGenre, getArtistAlbums, getArtistById };
