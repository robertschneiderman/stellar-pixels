export const fetchUser = (user_id, success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/users/${user_id}`,
    success,
    error
  });
};

export const follow = (broadcaster_id, success, error) => {
  $.ajax({
    method: 'POST',
    url: `/api/users/follow/${broadcaster_id}`,
    success,
    error
  });
};