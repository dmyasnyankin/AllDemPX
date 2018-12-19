json.array! @photos do |photo|
  json.extract! photo, :id, :titls, :author_id
  json.imageUrl url_for(photo.photo)
end