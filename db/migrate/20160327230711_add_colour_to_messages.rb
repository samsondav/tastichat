class AddColourToMessages < ActiveRecord::Migration[5.0]
  def change
    add_column :messages, :colour, :string
    Message.update_all(colour: '#0f0f0f')
    change_column_null :messages, :colour, false
  end
end
