class CreateJoinTableUsersGroups < ActiveRecord::Migration[6.0]
  def change
    add_column :groups, :name, :string, null: false, default: "My Group"

    create_join_table :users, :groups do |t|
      # t.index [:user_id, :meet_option_id]
      # t.index [:meet_option_id, :user_id]
    end
  end
end
