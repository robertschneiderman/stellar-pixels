
export const requestSearchItems = user => ({
  type: "SIGNUP",
  user  
});

export const receiveSearchItems = user => ({
  type: "LOGIN",
  user
});

export const logout = () => ({
  type: "LOGOUT",
});

export const receiveCurrentUser = currentUser => ({
  type: "RECEIVE_CURRENT_USER",
  currentUser
});

export const receiveErrors = errors => ({
  type: "RECEIVE_ERRORS",
  errors
});



