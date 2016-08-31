export const fetchSearchItems = (success, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/photos',
    success,
    error
  });
};