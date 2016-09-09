export const requestSearchItems = (query, page) => ({
  type: "REQUEST_SEARCH_ITEMS",
  query,
  page: page
});

export const makeNewSearch = (query, page) => ({
  type: "MAKE_NEW_SEARCH",
  query,
  page: page
});

export const filterSearchItems = (query, page) => ({
  type: "FILTER_SEARCH_ITEMS",
  query,
  page: page
});

export const receiveSearchItems = (items, query, page) => ({
  type: "RECEIVE_SEARCH_ITEMS",
  items,
  query,
  page
});

export const receiveNewSearch = (items, query, page) => ({
  type: "RECEIVE_NEW_SEARCH",
  items,
  query,
  page: page
});

export const requestImageDetail = image => ({
  type: "REQUEST_IMAGE_DETAIL",
  image
});

export const receiveImageDetail = image => ({
  type: "RECEIVE_IMAGE_DETAIL",
  image
});

export const uploadPhoto = image => ({
  type: "UPLOAD_PHOTO",
  image
});

export const requestUserPhotos = (user_id) => ({
  type: "REQUEST_USER_PHOTOS",
  user_id: user_id
});

export const receiveUser = (user) => {
  console.log("user:", user);
  return {
    type: "RECEIVE_USER",
    user: user
  }
};

export const requestFeedItems = () => ({
  type: "REQUEST_FEED_ITEMS"
});

export const receiveFeedItems = items => ({
  type: "RECEIVE_FEED_ITEMS",
  items
});

export const follow = (broadcaster_id) => ({
  type: "FOLLOW",
  broadcaster_id
});

export const favorite = (photo_id) => {
  return {
    type: "FAVORITE",
    photo_id
  }
};

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