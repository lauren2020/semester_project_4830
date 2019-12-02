class AddMembersCountToGroups < ActiveRecord::Migration[6.0]
  def change
    add_column :groups, :members_count, :integer, null: false, default: 0
  end
end
