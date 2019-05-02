Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :photos, only: [:create, :index, :show, :destroy, :update] do
      resources :comments, only: [:create]
    end
  end

  root "static_pages#root"
end
