Rails.application.routes.draw do
  scope constraints: { format: :html } do
    get 'samchat', to: 'sam_chat#index'
  end

  scope constraints: { format: :json } do
    get 'api/messages', to: 'sam_chat#api_list_messages'
    post 'api/message', to: 'sam_chat#api_post_message'
  end

  # mount ActionCable.server => '/cable'
end
