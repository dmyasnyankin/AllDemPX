class Api::PhotosController < ApplicationController
    before_action :require_login, only: [:create]

    def index
        @photos = Photo.all
        render :index
    end

    def show
        @photo = Photo.find(params[:id])
        render :show
    end

    def create
        @photo = Photo.new(photo_params)
        @photo.author_id = current_user.id
        if @photo.save
            render "api/photos/show"
        else
            render json: @photo.errors.full_messages, status: 422
            # render json: ["Please give your entry a title or choose a photo to upload"], status: 401

        end
    end

    def destroy
        @photo = Photo.find(params[:id])

        if @photo.destroy
            render :show
        else
            render json: @photo.errors.full_messages, status: 422
        end
    end

    def photo_params
        params.require(:photo).permit(:title, :photo)
    end
end
