var appendApiKeyHeader = function( xhr ) {
  xhr.setRequestHeader('Api-Key', 'uax7gur8ac925x3acrqktf6j')
}

export const fetchSearchItems = (query, success, error) => {
  const searchQuery = query ? `?search=${query}` : '';
  $.ajax({
    method: 'GET',
    url: `/api/photos/search/${searchQuery}`,
    success,
    error
  });
};
  // $.ajax({
  //   method: 'GET',
  //   url: `/api/photos/${searchQuery}`,
  //   success,
  //   error
  // });
  // $.ajax({
  //   method: 'GET',
  //   url: `/api/photos/search=snow`,
  //   success: (data) => console.log(data),
  // });

    // url: 'https://api.flickr.com/services/rest?&method=flickr.people.getPublicPhotos&api_key=5ac499560cf48f5f4f844fb9d689149f&user_id=146774503@N02&method=json',



  // $.ajax({
  //   method: 'GET',
  //   url: 'https://api.500px.com/v1/photos?feature=popular',
  //   success,
  //   error
  // });


  //   $.ajax({
  //   method: 'GET',
  //   beforeSend: appendApiKeyHeader,
  //   url: 'https://api.gettyimages.com/v3/search/images?phrase=kitties',
  //   success,
  //   error
  // }).done(function(data){
  //       console.log("Success with data")
  //       for(var i = 0;i<data.images.length;i++)
  //       {
  //         debugger;
  //         $item = $('.flex-images').append(".item").append("<img src='" + data.images[i].display_sizes[0].uri + "'/>");
  //       }
  //   });