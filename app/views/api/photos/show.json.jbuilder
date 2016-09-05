json.extract! @photo, :id, :url, :width, :height, :title, :favorites

json.email @photo.user.email
json.avatar @photo.user.avatar
