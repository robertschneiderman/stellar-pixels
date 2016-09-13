export const requestFeedPhotos = () => ({
  type: "REQUEST_FEED_PHOTOS"
});

export const receiveFeedPhotos = photos => ({
  type: "RECEIVE_FEED_PHOTOS",
  photos
});

export const requestProfilePhotos = (user_id) => ({
  type: "REQUEST_PROFILE_PHOTOS",
  user_id: user_id
});

export const receiveProfilePhotos = (user) => {
  return {
    type: "RECEIVE_PROFILE_PHOTOS",
    user: user
  };
};

export const requestPhotoDetail = photo => ({
  type: "REQUEST_PHOTO_DETAIL",
  photo
});

export const receivePhotoDetail = photo => ({
  type: "RECEIVE_PHOTO_DETAIL",
  photo
});

export const uploadPhoto = photo => ({
  type: "UPLOAD_PHOTO",
  photo
});

export const favorite = (photo_id) => {
  return {
    type: "FAVORITE",
    photo_id
  }
};

export const receiveSinglePhoto = (photo) => {
  return {
    type: "RECEIVE_SINGLE_PHOTO",
    photo: photo
  };
};