Rails.application.routes.draw do
  devise_for :users
  root 'landing#index'

  get 'user', to: 'users#show'
  post 'user/feed', to: 'users#feed'
  get 'user/feed', to: 'users#feed'

  post 'user/groups', to: 'users#groups'
  get 'user/groups', to: 'users#groups'

  post 'user/connections', to: 'users#connections'
  get 'user/connections', to: 'users#connections'

  post 'user/privacy_settings', to: 'users#privacy_settings'
  get 'user/privacy_settings', to: 'users#privacy_settings'
  # resources :users
  resources :posts
end
