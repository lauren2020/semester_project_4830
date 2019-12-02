class AddConnectionsToUser < ActiveRecord::Migration[6.0]

  def self.up
    create_table :connections, id: false do |t|
      t.integer :user_id
      t.integer :connection_id
    end

    add_index(:connections, [:user_id, :connection_id], :unique => true)
    add_index(:connections, [:connection_id, :user_id], :unique => true)
  end

  def self.down
      remove_index(:connections, [:connection_id, :user_id])
      remove_index(:connections, [:user_id, :connection_id])
      drop_table :connections
  end
end
