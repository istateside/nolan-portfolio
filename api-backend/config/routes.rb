Rails.application.routes.draw do
  namespace :api do
    scope :v1 do
      resources :images
      resources :blocks
      resources :pages
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
