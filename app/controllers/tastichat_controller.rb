class TastichatController < ApplicationController
  def index
    @tastichat_props = {
      messages: Message.all.as_json,
      warriors: FruitWarrior.all_keyed_by_fruit.as_json,
      thisFruit: FruitWarrior.next.fruit
    }
  end

  def api_list_messages
    render json: { messages: Message.all.as_json }
  end

  def api_post_message
    m = Message.create!(message_params)
    ActionCable.server.broadcast 'messages', message: m
    render json: { message: { id: m.id } }, status: :created
  end

  private

  def message_params
    params.require(:message).permit(:body, :sent_at, :fruit)
  end
end
