class AddSharedToToPosts < ActiveRecord::Migration[6.0]
  def change
    add_reference :posts, :shared_to_user, index: true
    add_reference :posts, :shared_to_group, index: true
  end
end
