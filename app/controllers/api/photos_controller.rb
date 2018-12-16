class Api::PhotosController < ApplicationController
    before_action :require_login, only: [:create]

    def index
        @photo = Photo.all
    end

    def show
        @photo = Photo.find(params[:id])
    end

    def create
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
        params.require(:photos).permit(:title, :image_url, :author_id)
    end
end
