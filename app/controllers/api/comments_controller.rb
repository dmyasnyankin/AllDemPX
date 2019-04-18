class Api::CommentsController < ApplicationController
    before_action :require_login
  
    def create
      @comment = current_user.comments.new(comment_params)
  
      if @comment.save
        # render :show
        render "api/photos/show"
      else
        render json: @comment, status: :unprocessable_entity
      end
    end
  
    private
  
    def comment_params
      params.require(:comment).permit(:body, :photo_id)
    end
  end