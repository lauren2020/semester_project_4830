Rails.application.routes.draw do
  devise_for :users
  root 'landing#index'
  get 'user/:id', to: 'users#show'
  get 'sign_up', to: 'users#sign_up'
  get 'login', to: 'users#login'

  resources :users
  resources :posts
end
