export const requestUser = (user_id) => ({
  type: "REQUEST_USER",
  user_id: user_id
});

export const receiveUser = (user) => {
  return {
    type: "RECEIVE_USER",
    user: user
  };
};

export const follow = (broadcaster_id) => {
  return {
    type: "FOLLOW",
    broadcaster_id
  }
};