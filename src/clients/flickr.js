const getFlickrUrl = (page) => {
  const baseUrl =
    'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=ffee324251c2815b9b895133af851243&safe_search=1&content_type=1&sort=relevance&text=vessel%20marine&format=json&nojsoncallback=1&per_page=16';
  return page ? `${baseUrl}&page=${page}` : baseUrl;
};

const getPhotoUrl = (photo) =>
  `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`;

const fetchPhotos = (currentPage) =>
  fetch(getFlickrUrl(currentPage)).then((res) => res.json());

export { fetchPhotos, getPhotoUrl };
