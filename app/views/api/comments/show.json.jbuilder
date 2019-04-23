json.comment do
  json.extract! comment, :id, :body, :photo_id, :author_id
end

json.author do
  json.partial! '/api/users/user', user: @comment.author
end