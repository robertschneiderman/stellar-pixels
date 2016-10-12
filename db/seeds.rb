require_relative './seeds_helper.rb'

User.destroy_all

ActiveRecord::Base.connection.reset_pk_sequence!('users')


100.times do

  response = HTTParty.get('https://randomuser.me/api/')

  avatar = JSON.parse(response.body)["results"][0]["picture"]["large"]
  User.create!({ email: Faker::Name.name, password: 'password', avatar: avatar})
  
end



fetch_photos(true)