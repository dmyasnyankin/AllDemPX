class Api::PhotosController < ApplicationController
    before_action :require_login, only: [:create]

    
end
