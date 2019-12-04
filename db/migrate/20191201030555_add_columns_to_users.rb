class AddColumnsToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :profile_url, :string, null: false, default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    add_column :users, :first_name, :string, null: false, default: ""
    add_column :users, :last_name, :string, null: false, default: ""
  end
end
