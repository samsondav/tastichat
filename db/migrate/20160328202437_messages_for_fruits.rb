class MessagesForFruits < ActiveRecord::Migration[5.0]
  def change
    Message.delete_all
    remove_column :messages, :author
    remove_column :messages, :colour
    add_column :messages, :fruit, :string, null: false, default: 'ghost'
  end
end
