json.photo do
  json.extract! @photo, :id, :title, :author_id
  json.image_url url_for(@photo.image_url)
end