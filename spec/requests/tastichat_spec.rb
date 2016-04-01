require 'rails_helper'

RSpec.describe TastichatController, type: :request do
  describe 'tastichat' do
    it 'renders tastichat app' do
    end
  end

  describe 'listing messages' do
    it 'renders all messages' do
      get '/api/messages'

      expect(JSON.parse(response.body)['messages']).to match_array([
        {"id"=>309456473, "body"=>"Our arch-enemies the Dutch Daimyo Vegetables have struck again!", "sent_at"=>"1635-03-04T13:45:00Z", "fruit"=>"pineapple"},
        {"id"=>908005739, "body"=>"We must strike back at once and destroy those dutch dogs!", "sent_at"=>"1635-03-04T13:46:00Z", "fruit"=>"blueberries"}
      ])

      expect(response).to have_http_status(:ok)
    end
  end

  describe 'posting a message' do
    let(:valid_message_json) do
      { body: 'foo', sent_at: '2016-01-01', fruit: 'banana'}.freeze
    end

    it 'adds message to the db' do
      expect do
        post '/api/message', message: valid_message_json
      end.to change { Message.count }.by(1)
    end

    it 'publishes on the messages channel' do
      expect(ActionCable).to receive_message_chain(:server, :broadcast).with(
        'messages',
        hash_including(:message)
      )

      post '/api/message', message: valid_message_json
    end

    it 'renders the created message' do
      post '/api/message', message: valid_message_json

      message = Message.order(created_at: :asc).last

      expect(JSON.parse(response.body)).to eq({ 'message' => { 'id' => message.id } })
    end
  end
end
