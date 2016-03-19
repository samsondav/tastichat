class SamChatController < ApplicationController
  def index
    @sam_chat_props = {
      messages: Message.all.as_json
    }
  end
end
