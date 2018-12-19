class Api::PhotosController < ApplicationController
    before_action :require_login, only: [:create]

    def index
        @photos = Photo.all
        render :index
    end

    def show
        @photo = Photo.find(params[:id])
    end

    def create
        # @photo = Photo.new(params[:photo][:title, :photo, :author_id])
        # debugger
        @photo.author_id = current_user.id
        @photo = Photo.new(photo_params)
        if @photo.save
            render "api/photos"
        else
            render json: @photo.errors.full_messages, status: 422
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
        params.require(:photo).permit(:title, :author_id, :photo)
    end
end
