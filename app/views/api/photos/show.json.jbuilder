json.photo do
  json.extract! @photo, :id, :title, :author_id
  json.imageUrl url_for(@photo.photo)
end