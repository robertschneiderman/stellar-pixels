export const requestSearchPhotos = (query, page) => ({
  type: "REQUEST_SEARCH_PHOTOS",
  query,
  page: page
});

export const receiveSearchPhotos = (photos, query, page) => ({
  type: "RECEIVE_SEARCH_PHOTOS",
  photos,
  query,
  page
});

export const filterSearchPhotos = (query, page) => ({
  type: "FILTER_SEARCH_PHOTOS",
  query,
  page: page
});

export const follow = (broadcaster_id) => ({
  type: "FOLLOW",
  broadcaster_id
});

export const favoriteFeed = (photo_id) => {
  return {
    type: "FAVORITE_FEED",
    photo_id
  }
};

export const receiveSinglePhoto = (photo) => {
  return {
    type: "RECEIVE_SINGLE_PHOTO",
    photo
  }
};

export const receiveSinglePhotoSearch = (photo) => {
  return {
    type: "RECEIVE_SINGLE_PHOTO_SEARCH",
    photo
  }
};

export const loadPage = () => ({
  type: "LOAD_PAGE",
});


export const addFavoriteToPicture = (photo_id, user_id) => ({
  type: "ADD_FAVORITE_TO_PICTURE",
  photo_id,
  user_id
});