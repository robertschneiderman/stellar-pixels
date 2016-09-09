json.extract! user, :id, :email, :avatar

json.set! :photos do
  user.photos.each do |photo|
    json.set! photo.id do
      json.extract! photo, :id, :url, :title, :favorites, :width, :height, :user_id
      json.email photo.user.email
      json.avatar photo.user.avatar
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

json.set! :followers do
  user.followers.each do |follower|
    json.set! follower.id do
      json.extract! follower, :email
    end
  end
end

json.set! :favorites do
  user.favorites.each do |favorite|

    json.set! favorite.photo.id do
      json.extract! favorite, :photo_id
    end
  end
end