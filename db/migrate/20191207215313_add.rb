class Add < ActiveRecord::Migration[6.0]
  def change
    enable_extension :pgcrypto
    add_column :users, :password_digest, :string
  end
end
