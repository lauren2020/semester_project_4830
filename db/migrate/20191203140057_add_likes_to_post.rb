class AddLikesToPost < ActiveRecord::Migration[6.0]
  def change
    add_column :posts, :likes, :integer, array: true, null: false, default: []
  end
end
