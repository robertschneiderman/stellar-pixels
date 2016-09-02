def fetch_photos(should_run = false)
  return unless should_run
  
  Photo.destroy_all
  ActiveRecord::Base.connection.reset_pk_sequence!("movie_locations")

  response = HTTParty.get(
    'https://api.gettyimages.com/v3/search/images?phrase=kitties', :headers => { "Api-Key": "uax7gur8ac925x3acrqktf6j"})
  # Note: The `$select` query tag leaves out meta-data, returning the full subset
  # of movie location listings
  results = JSON.parse(response.body)

  # {"id"=>"BD8365-001", 
  #   "asset_family"=>"creative", 
  #   "caption"=>"Latin name: Felis catus", 
  #   "collection_code"=>"ICO", 
  #   "collection_id"=>117, 
  #   "collection_name"=>"Iconica", 
  #   "display_sizes"=>[{"is_watermarked"=>false, "name"=>"thumb", "uri"=>"http://cache3.asset-cache.net/xt/BD8365-001.jpg?v=1&g=fs1|0|ICO|83|651&s=1&b=NDJC"}],
  #   "license_model"=>"rightsmanaged",
  #   "max_dimensions"=>{"height"=>4700, "width"=>4309},
  #   "title"=>"Chinchilla cat wearing diamond tiara, resting on cushion"}

  results = results["images"].map do |obj|
    params = {
      url: obj["display_sizes"][0]["uri"],
      title: obj["title"],
      favorites: Random.rand(0..8),
      height: obj["max_dimensions"]["height"],
      width: obj["max_dimensions"]["width"],
      user_id: Random.rand(1..3)
    }
  end

  # p results["images"];

  results.each_with_index do |image, i|
    # p result
    p Photo.create!(image);
  end
end