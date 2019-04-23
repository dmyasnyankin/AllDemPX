class Api::CommentsController < ApplicationController
    before_action :require_login
  
    def create
      # @comment = Comment.new(comment_params)
      @comment = current_user.comments.new(comment_params)
  
      if @comment.save
        # render :show
        render "api/comments"
      else
        render json: @comment, status: :unprocessable_entity
      end
    end
  
    def comment_params
      params.require(:comment).permit(:body, :photo_id)
    end
  end