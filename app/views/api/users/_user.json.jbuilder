json.extract! user, :id, :email, :avatar

json.set! :photos do
  user.photos.each do |photo|
    json.set! photo.id do
      json.extract! photo, :url, :title, :favorites, :width, :height
    end
  end
end