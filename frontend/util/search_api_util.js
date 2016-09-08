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

export const fetchImageDetail = (image, success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/photos/${image}/`,
    success,
    error
  });

};


export const createPhoto = (image, success, error) => {
  $.ajax({
    method: 'POST',
    url: '/api/photos/',
    data: {image: image},
    success,
    error
  });
};


export const fetchUser = (user_id, success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/users/${user_id}`,
    success,
    error
  });
};

export const fetchFeed = (success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/photos/feed`,
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
}

// /api/photos/feed/

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