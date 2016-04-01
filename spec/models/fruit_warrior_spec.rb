require 'rails_helper'

RSpec.describe FruitWarrior, :type => :model do
  it 'renders correctly as json' do
    expect(FruitWarrior.next.as_json.keys).to match_array([
      :fruit,
      :name,
      :colour,
      :avatarUrl
    ])
  end
end
