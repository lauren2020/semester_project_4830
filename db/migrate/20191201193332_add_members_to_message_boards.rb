class AddMembersToMessageBoards < ActiveRecord::Migration[6.0]
  def change
    # add_column :message_boards, :member_id
    # add_column :users, :group_id
    # add_index(:connections, [:user_id, :connection_id], :unique => true)
    # add_index(:connections, [:connection_id, :user_id], :unique => true)

    create_join_table :message_boards, :users, table_name: :group_memberships do |t|
      # t.index [:group_id, :member_id]
      # t.index [:member_id, :group_id]
    end
  end
end
