class ChangeDefaultFruitForMessages < ActiveRecord::Migration[5.0]
  def change
    change_column_default :messages, :fruit, ''
  end
end
