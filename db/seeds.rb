require_relative './seeds_helper.rb'

User.destroy_all

ActiveRecord::Base.connection.reset_pk_sequence!('users')


100.times do

  response = HTTParty.get('http://uifaces.com/api/v1/random')

  avatar = JSON.parse(response.body)["image_urls"]["bigger"]

  User.create!({ email: Faker::Name.name, password: 'password', avatar: avatar})
  
end



fetch_photos(true)