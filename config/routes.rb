Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    # resources :photos, only: [:index]
    get '/photos/search', to: 'photos#search'
  end

  root "static_pages#root"

end
