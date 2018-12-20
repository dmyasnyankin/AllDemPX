

@photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :id, :title, :author_id
    json.imageUrl url_for(photo.photo)
  end
end

