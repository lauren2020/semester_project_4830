Rails.application.routes.draw do
  devise_for :user
  root 'landing#index'

  get 'user/:id', to: 'users#show'
  post 'user/:id/feed', to: 'users#feed'
  get 'user/:id/feed', to: 'users#feed'

  post 'user/:id/groups', to: 'users#groups'
  get 'user/:id/groups', to: 'users#groups'

  post 'user/:id/connections', to: 'users#connections'
  get 'user/:id/connections', to: 'users#connections'

  post 'user/:id/privacy_settings', to: 'users#privacy_settings'
  get 'user/:id/privacy_settings', to: 'users#privacy_settings'
  # resources :users
  resources :posts


  #######
  post 'landing/go_to_login', to: 'landing#go_to_login'
  get 'authentication/login', to: 'authentication#login'
  get 'create_account', to: 'authentication#create_account'
  post 'authenticate', to: 'authentication#authenticate'
end
