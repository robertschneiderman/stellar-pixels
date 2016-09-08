Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    # resources :photos, only: [:index]
    get '/photos/search', to: 'photos#search'
    get '/photos/feed', to: 'photos#feed'    
    post '/users/follow/:id', to: 'users#follow'    
    resources :photos, only: [:show, :create]
  end

  root "static_pages#root"

end
