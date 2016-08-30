
export const signup = () => ({
  type: "SIGNUP",
  user  
});

export const login = user => ({
  type: "LOGIN",
  user
});

export const logout = user => ({
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



