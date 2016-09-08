json.extract! user, :id, :email, :avatar

json.set! :photos do
  user.photos.each do |photo|
    json.set! photo.id do
      json.extract! photo, :url, :title, :favorites, :width, :height, :user_id
    end
  end
end

json.set! :broadcasters do
  user.broadcasters.each do |broadcaster|
    json.set! broadcaster.id do
      json.extract! broadcaster, :email
    end
  end
end