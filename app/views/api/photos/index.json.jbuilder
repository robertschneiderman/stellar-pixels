json.array! @photos do |photo|
  json.extract! photo, :id, :url, :width, :height, :title, :favorites
end
