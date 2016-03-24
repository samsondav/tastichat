class Message < ApplicationRecord
  def as_json
    {
      id: id,
      author: author,
      body: body,
      sent_at: sent_at.iso8601
    }
  end
end
