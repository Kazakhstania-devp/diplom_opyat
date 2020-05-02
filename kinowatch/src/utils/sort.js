
export function sortByArtist(a, b) {
  if(a.artist[0].name > b.artist[0].name) {
    return 1;
  } else if (a.artist[0].name < b.artist[0].name) {
    return -1;
  }
  return 0;
}

export function shuffle() {
  return 0.5 - Math.random();
}
