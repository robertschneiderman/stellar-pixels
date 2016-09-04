def fetch_photos(should_run = false)
  return unless should_run
  
  Photo.destroy_all

      # 'https://api.gettyimages.com/v3/search/images?phrase=kitties', :headers => { "Api-Key": "uax7gur8ac925x3acrqktf6j"}

  response = HTTParty.get(
    'https://api.500px.com/v1/photos?only=Abstract&feature=highest_rated&sort=created_at&image_size=31&include_store=store_download&include_states=voted&rpp=100&tags=1&consumer_key=5b7xXF28c7zkXZpkLzUAxUn0lp5tdVoGlEEK4gJk')

  abstract = JSON.parse(response.body)["photos"]

  response = HTTParty.get(
    'https://api.500px.com/v1/photos?only=Animals&feature=highest_rated&sort=created_at&image_size=31&include_store=store_download&include_states=voted&rpp=100&tags=1&consumer_key=5b7xXF28c7zkXZpkLzUAxUn0lp5tdVoGlEEK4gJk')

  animals = JSON.parse(response.body)["photos"]

  response = HTTParty.get(
    'https://api.500px.com/v1/photos?only=Black%2Band%2BWhite&feature=highest_rated&sort=created_at&image_size=31&include_store=store_download&include_states=voted&rpp=100&tags=1&consumer_key=5b7xXF28c7zkXZpkLzUAxUn0lp5tdVoGlEEK4gJk')

  black_and_white = JSON.parse(response.body)["photos"]

  response = HTTParty.get(
    'https://api.500px.com/v1/photos?only=City%2B%26%2BArchitecture&feature=highest_rated&sort=created_at&image_size=31&include_store=store_download&include_states=voted&rpp=100&tags=1&consumer_key=5b7xXF28c7zkXZpkLzUAxUn0lp5tdVoGlEEK4gJk')

  city = JSON.parse(response.body)["photos"]  

  response = HTTParty.get(
    'https://api.500px.com/v1/photos?only=Commercial&feature=highest_rated&sort=created_at&image_size=31&include_store=store_download&include_states=voted&rpp=100&tags=1&consumer_key=5b7xXF28c7zkXZpkLzUAxUn0lp5tdVoGlEEK4gJk')  

  commercial = JSON.parse(response.body)["photos"]

  response = HTTParty.get(
    'https://api.500px.com/v1/photos?only=Concert&feature=highest_rated&sort=created_at&image_size=31&include_store=store_download&include_states=voted&rpp=100&tags=1&consumer_key=5b7xXF28c7zkXZpkLzUAxUn0lp5tdVoGlEEK4gJk')  

  concert = JSON.parse(response.body)["photos"]

  response = HTTParty.get(
    'https://api.500px.com/v1/photos?only=Family&feature=highest_rated&sort=created_at&image_size=31&include_store=store_download&include_states=voted&rpp=100&tags=1&consumer_key=5b7xXF28c7zkXZpkLzUAxUn0lp5tdVoGlEEK4gJk')  

  family = JSON.parse(response.body)["photos"]

  response = HTTParty.get(
    'https://api.500px.com/v1/photos?only=Fashion&feature=highest_rated&sort=created_at&image_size=31&include_store=store_download&include_states=voted&rpp=100&tags=1&consumer_key=5b7xXF28c7zkXZpkLzUAxUn0lp5tdVoGlEEK4gJk')  

  fashion = JSON.parse(response.body)["photos"]

  response = HTTParty.get(
    'https://api.500px.com/v1/photos?only=Film&feature=highest_rated&sort=created_at&image_size=31&include_store=store_download&include_states=voted&rpp=100&tags=1&consumer_key=5b7xXF28c7zkXZpkLzUAxUn0lp5tdVoGlEEK4gJk')  

  film = JSON.parse(response.body)["photos"]

  response = HTTParty.get(
    'https://api.500px.com/v1/photos?only=Fine%2BArt&feature=highest_rated&sort=created_at&image_size=31&include_store=store_download&include_states=voted&rpp=100&tags=1&consumer_key=5b7xXF28c7zkXZpkLzUAxUn0lp5tdVoGlEEK4gJk')  

  fine_art = JSON.parse(response.body)["photos"]

  response = HTTParty.get(
    'https://api.500px.com/v1/photos?only=Food&feature=highest_rated&sort=created_at&image_size=31&include_store=store_download&include_states=voted&rpp=100&tags=1&consumer_key=5b7xXF28c7zkXZpkLzUAxUn0lp5tdVoGlEEK4gJk')  

  food = JSON.parse(response.body)["photos"]

  response = HTTParty.get(
    'https://api.500px.com/v1/photos?only=Landscapes&feature=highest_rated&sort=created_at&image_size=31&include_store=store_download&include_states=voted&rpp=100&tags=1&consumer_key=5b7xXF28c7zkXZpkLzUAxUn0lp5tdVoGlEEK4gJk')  

  landscapes = JSON.parse(response.body)["photos"]

  response = HTTParty.get(
    'https://api.500px.com/v1/photos?only=Nature&feature=highest_rated&sort=created_at&image_size=31&include_store=store_download&include_states=voted&rpp=100&tags=1&consumer_key=5b7xXF28c7zkXZpkLzUAxUn0lp5tdVoGlEEK4gJk')  

  nature = JSON.parse(response.body)["photos"]

  response = HTTParty.get(
    'https://api.500px.com/v1/photos?only=People&feature=highest_rated&sort=created_at&image_size=31&include_store=store_download&include_states=voted&rpp=100&tags=1&consumer_key=5b7xXF28c7zkXZpkLzUAxUn0lp5tdVoGlEEK4gJk')  

  people = JSON.parse(response.body)["photos"]

  response = HTTParty.get(
    'https://api.500px.com/v1/photos?only=Performing%2BArts&feature=highest_rated&sort=created_at&image_size=31&include_store=store_download&include_states=voted&rpp=100&tags=1&consumer_key=5b7xXF28c7zkXZpkLzUAxUn0lp5tdVoGlEEK4gJk')  

  performing_arts = JSON.parse(response.body)["photos"]

  response = HTTParty.get(
    'https://api.500px.com/v1/photos?only=Sport&feature=highest_rated&sort=created_at&image_size=31&include_store=store_download&include_states=voted&rpp=100&tags=1&consumer_key=5b7xXF28c7zkXZpkLzUAxUn0lp5tdVoGlEEK4gJk')  

  sport = JSON.parse(response.body)["photos"]

  response = HTTParty.get(
    'https://api.500px.com/v1/photos?only=Still%2BLife&feature=highest_rated&sort=created_at&image_size=31&include_store=store_download&include_states=voted&rpp=100&tags=1&consumer_key=5b7xXF28c7zkXZpkLzUAxUn0lp5tdVoGlEEK4gJk')  

  still_life = JSON.parse(response.body)["photos"]

  response = HTTParty.get(
    'https://api.500px.com/v1/photos?only=Street&feature=highest_rated&sort=created_at&image_size=31&include_store=store_download&include_states=voted&rpp=100&tags=1&consumer_key=5b7xXF28c7zkXZpkLzUAxUn0lp5tdVoGlEEK4gJk')  

  street = JSON.parse(response.body)["photos"]

  response = HTTParty.get(
    'https://api.500px.com/v1/photos?only=Transportation&feature=highest_rated&sort=created_at&image_size=31&include_store=store_download&include_states=voted&rpp=100&tags=1&consumer_key=5b7xXF28c7zkXZpkLzUAxUn0lp5tdVoGlEEK4gJk')  

  transportation = JSON.parse(response.body)["photos"]

  response = HTTParty.get(
    'https://api.500px.com/v1/photos?only=Travel&feature=highest_rated&sort=created_at&image_size=31&include_store=store_download&include_states=voted&rpp=100&tags=1&consumer_key=5b7xXF28c7zkXZpkLzUAxUn0lp5tdVoGlEEK4gJk')  

  travel = JSON.parse(response.body)["photos"]


  results = abstract.concat(animals).concat(black_and_white).concat(city).concat(commercial).concat(concert).concat(family).concat(film).concat(fine_art).concat(food).concat(landscapes).concat(nature).concat(people).concat(performing_arts).concat(sport).concat(still_life).concat(street).concat(transportation).concat(travel)


  results = results.each_with_index do |obj, i|
    unless Photo.find_by_api_id(obj["id"])
      user_id = Random.rand(1..100)
      photo = {
        api_id: obj["id"],
        url: obj["image_url"],
        title: obj["name"],
        favorites: Random.rand(0..8),
        height: obj["height"],
        width: obj["width"],
        user_id: user_id
      }
      photo = Photo.create!(photo)

      obj["tags"].each do |tag_name|
        tag = Tag.find_by_name(tag_name)

        if !tag
          tag = Tag.create!(name: tag_name)
        end

        Tagging.create!(photo_id: photo["id"], tag_id: tag["id"])
      end
    end

    # obj["tags"].each do |tag|
    #   foundTag = Tag.find_by_name(tag)

    # end
  end

  # p results["images"];
end