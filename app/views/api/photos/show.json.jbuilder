json.extract! @photo, :id, :url, :user_id, :width, :height, :title, :favorites

json.email @photo.user.email
json.avatar @photo.user.avatar
