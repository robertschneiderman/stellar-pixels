json.array! @photos do |photo|
  json.extract! photo, :url, :width, :height, :title, :favorites
end
