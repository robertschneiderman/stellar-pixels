
export const requestAllItems = () => ({
  type: "REQUEST_ALL_ITEMS",
});


export const requestSearchItems = query => ({
  type: "REQUEST_SEARCH_ITEMS",
  query
});

export const receiveSearchItems = items => ({
  type: "RECEIVE_SEARCH_ITEMS",
  items
});



