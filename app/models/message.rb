class Message < ApplicationRecord
  validates :author, :body, :sent_at, :colour, presence: true

  def as_json
    {
      id: id,
      author: author,
      body: body,
      sent_at: sent_at.iso8601,
      colour: colour
    }
  end
end
