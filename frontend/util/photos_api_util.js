export const fetchFeedPhotos = (success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/photos/feed`,
    success,
    error
  });
};

export const fetchProfilePhotos = (user_id, success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/photos/${user_id}`,
    success,
    error
  });
};

export const fetchImageDetail = (image, success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/photos/${image}/`,
    success,
    error
  });

};

export const uploadPhoto = (image, success, error) => {
  $.ajax({
    method: 'POST',
    url: '/api/photos/',
    data: {image: image},
    success,
    error
  });
};

export const favorite = (photo_id, success, error) => {
  $.ajax({
    method: 'POST',
    url: `/api/photos/favorite/${photo_id}`,
    success,
    error
  });
};