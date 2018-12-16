@photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :id, :title, :author_id
    json.image_url asset_path(photo.image_url)
  end
end