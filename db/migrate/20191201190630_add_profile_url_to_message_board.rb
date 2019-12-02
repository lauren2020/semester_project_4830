class AddProfileUrlToMessageBoard < ActiveRecord::Migration[6.0]
  def change
    add_column :message_boards, :profile_url, :string, default: "https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_960_720.png"
  end
end
