class Api::CommentsController < ApplicationController
    before_action :require_login
  
    def create
      @comment = Comment.new(comment_params)
      @comment.author_id = current_user.id
      @comment.photo_id = params[:photo_id]
      p @comment.body
      if @comment.save
        # render :show
        render :show
      else
        render json: @comment.errors.full_messages, status: :unprocessable_entity
      end
    end
  
    def comment_params
      params.require(:comment).permit(:body, :photo_id)
    end
  end