require 'rails_helper'

RSpec.describe Message, :type => :model do
  let(:message) { Message.first }

  it 'validates fields' do
    expect(subject).to validate_presence_of :body
    expect(subject).to validate_presence_of :sent_at
    expect(subject).to validate_inclusion_of(:fruit).in_array(FruitWarrior.fruits)
  end

  it 'serializes to json' do
    expect(message.as_json.keys).to match_array([
      :id,
      :body,
      :sent_at,
      :fruit
    ])
  end
end
