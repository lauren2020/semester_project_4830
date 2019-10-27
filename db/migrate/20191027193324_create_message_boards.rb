class CreateMessageBoards < ActiveRecord::Migration[6.0]
  def change
    create_table :message_boards do |t|
      t.belongs_to :user
      t.string :name
      t.timestamps
    end
  end
end
