json.array! @photos do |photo|
  json.extract! photo, :id, :url, :width, :height, :title, :favorites, :user_id

  json.email photo.user.email
  json.avatar photo.user.avatar
end
