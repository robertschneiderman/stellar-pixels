require_relative './seeds_helper.rb'

100.times do

  avatar = JSON.parse(HTTParty.get('http://uifaces.com/api/v1/random'))["image_urls"]["normal"]

  User.create!({ email: Faker::Name.name, password: 'password'})
end



# fetch_photos(true)