class Message < ApplicationRecord
  validates :body, :sent_at, :fruit, presence: true
  validates :fruit, inclusion: { in: FruitWarrior.fruits }

  def as_json
    {
      id: id,
      body: body,
      sent_at: sent_at.iso8601,
      fruit: fruit,
    }
  end
end
