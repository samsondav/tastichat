class Message < ApplicationRecord
  def as_json
    {
      key: id,
      author: author,
      body: body
    }
  end
end
