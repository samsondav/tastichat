class SamChatController < ApplicationController
  def index
    @sam_chat_props = {
      messages: [
        'hello',
        'sam'
      ]
    }
  end
end
