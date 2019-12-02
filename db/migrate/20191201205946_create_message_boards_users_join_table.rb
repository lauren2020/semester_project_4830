class CreateMessageBoardsUsersJoinTable < ActiveRecord::Migration[6.0]
  def change
    create_join_table :message_boards, :users do |t|
      t.index :message_board_id
      t.index :user_id
    end
  end
end
