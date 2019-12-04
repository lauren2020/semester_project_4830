class RemoveMessageBoardFromPosts < ActiveRecord::Migration[6.0]
  def change

    remove_reference :posts, :message_board, index: true
  end
end
