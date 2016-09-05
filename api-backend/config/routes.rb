Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  namespace :api do
    scope :v1 do
      resources :images
      resources :blocks
      resources :pages
    end
  end
end
