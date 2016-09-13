export const requestSearchItems = (query, page) => ({
  type: "REQUEST_SEARCH_ITEMS",
  query,
  page: page
});

export const receiveSearchItems = (items, query, page) => ({
  type: "RECEIVE_SEARCH_ITEMS",
  items,
  query,
  page
});

export const filterSearchItems = (query, page) => ({
  type: "FILTER_SEARCH_ITEMS",
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

export const receiveSingleImage = (image) => {
  return {
    type: "RECEIVE_SINGLE_IMAGE",
    image
  }
};

export const receiveSingleImageSearch = (image) => {
  return {
    type: "RECEIVE_SINGLE_IMAGE_SEARCH",
    image
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