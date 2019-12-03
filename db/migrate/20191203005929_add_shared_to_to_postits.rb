class AddSharedToToPostits < ActiveRecord::Migration[6.0]
  def change
    add_reference :postits, :shared_group, index: true, foreign_key: {to_table: :groups}
    add_reference :postits, :shared_user, index: true, foreign_key: {to_table: :users}
  end
end
