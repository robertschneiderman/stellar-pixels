var appendApiKeyHeader = function( xhr ) {
  xhr.setRequestHeader('Api-Key', 'uax7gur8ac925x3acrqktf6j')
}

export const fetchSearchItems = (query, page, success, error) => {
  $.ajax({
    method: 'GET',
    data: {search: query, page},
    url: `/api/photos/search`,
    success: success(query, page),
    error
  });

};

export const filterSearchItems = (query, page, success, error) => {
  const searchQuery = query ? `?filter=${query}&page=${page}` : '';

  $.ajax({
    method: 'GET',
    url: `/api/photos/search/${searchQuery}`,
    success,
    error
  });

};