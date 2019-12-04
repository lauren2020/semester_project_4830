class AddMembersToMessageBoardsIndexes < ActiveRecord::Migration[6.0]
  def change
    add_index :group_memberships, [:message_board_id, :user_id]
    add_index :group_memberships, [:user_id, :message_board_id]
  end
end
