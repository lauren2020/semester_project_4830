class AddConnectionsCountToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :connections_count, :integer, null: false, default: 0

    change_column_null :groups, :profile_url, false, "https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_960_720.png"
  end
end
