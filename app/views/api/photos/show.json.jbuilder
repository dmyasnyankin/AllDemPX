json.photo do
  json.extract! @photo, :id, :title, :author_id
  json.imageUrl url_for(@photo.photo)
  json.commentIds @photo.comments.pluck(:id)
end

@photo.comments.includes(:author).each do |comment|
  json.comments do
    json.set! comment.id do
      json.partial! 'api/comments/comment', comment: comment
    end
  end

  json.authors do
    json.set! comment.author.id do
      json.extract! comment.author, :id, :username
    end
  end
end