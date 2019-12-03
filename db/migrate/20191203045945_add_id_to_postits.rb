class AddIdToPostits < ActiveRecord::Migration[6.0]
  def change
    #add_column :postits, :id, :primary_key
    add_reference :users, :shared_postits, foreign_key: {to_table: :postits}
    add_reference :users, :postits, foreign_key: true

    add_reference :groups, :shared_postits, foreign_key: {to_table: :postits}
  end
end
