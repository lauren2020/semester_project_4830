class CreateJoinTableUsersUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :groups, :post_count, :integer, null: false, default: 0
    add_column :users, :post_count, :integer, null: false, default: 0
    # create_join_table :users, :users, column_options: { foreign_key: true } do |t|
    #   t.index [:connection_id, :connected_id]
    #   t.index [:connected_id, :connection_id]
    # end
  end
end
