# Be sure to restart your server when you modify this file. Action Cable runs in a loop that does not support auto reloading.
module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :chat_window_id

    def connect
      self.chat_window_id = cookies['chat_window_id']
    end
  end
end
