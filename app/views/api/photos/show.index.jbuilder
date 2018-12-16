json.photo do
  json.extract! @photo, :id, :title, :author_id
  json.image_url asset_path(@photo.image_url)
end