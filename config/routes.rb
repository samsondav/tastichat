Rails.application.routes.draw do
  root to: 'tastichat#index'

  scope constraints: { format: :html } do
    get 'tastichat', to: 'tastichat#index'
  end

  scope constraints: { format: :json } do
    get 'api/messages', to: 'tastichat#api_list_messages'
    post 'api/message', to: 'tastichat#api_post_message'
  end

  # mount ActionCable.server => '/cable'
end
