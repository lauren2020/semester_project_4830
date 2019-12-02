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
  post 'user/create_account', to: 'users#create'
  post 'logout', to: 'users#logout'
  post 'authenticate', to: 'authentication#authenticate'

  post 'create_group', to: 'groups#create'
  patch 'groups/:id/change_profile_image', to: 'groups#change_profile_image'
  patch 'groups/:id/add_member', to: 'groups#add_member_to_group'
  patch 'user/:id/add_connection', to: 'users#add_connection'
  patch 'groups/:id/send_invite', to: 'groups#send_invite_to_group'

  get 'groups/list_all', to: 'groups#all_groups'
  get 'users/list_all', to: 'users#list_all'
end
