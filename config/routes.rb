Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  get 'samchat', to: 'sam_chat#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Serve websocket cable requests in-process
  # mount ActionCable.server => '/cable'
end
