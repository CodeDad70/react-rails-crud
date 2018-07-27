Rails.application.routes.draw do

  root to: 'site#home'

  namespace :api do 
    namespace :v1 do
      resources :fruits, only: [:index, :create, :update, :destroy]
    end
  end
    
end


