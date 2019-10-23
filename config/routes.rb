Rails.application.routes.draw do
  root 'landing#index'
  get 'user/:id', to: 'users#show'
  get 'sign_up', to: 'users#sign_up'
  get 'login', to: 'users#login'
end
