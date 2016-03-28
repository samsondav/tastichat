class TastichatController < ApplicationController
  def index
    @tastichat_props = {
      messages: Message.all.as_json,
      config: {
        WARRIOR: FruitWarrior.next.as_json
      }
    }
  end

  def api_list_messages
    render json: { messages: Message.all.as_json }
  end

  def api_post_message
    m = Message.create!(message_params)
    render json: { message: { id: m.id } }, status: :created
  end

  private

  def message_params
    params.require(:message).permit(:author, :body, :sent_at, :colour)
  end
end
