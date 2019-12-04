class CreatePostits < ActiveRecord::Migration[6.0]
  def change
    create_table :remarks do |t|
      t.string :body
      t.datetime :date
      t.references :user, index: true, foreign_key: true, references: :user
    end

    create_table :postits do |t|
      t.string :body
      t.datetime :date
      t.integer :likes, array: true, null: false, :default => []
      t.references :user, index: true, foreign_key: {to_table: :users}
      t.references :comments, index: true, foreign_key: {to_table: :remarks}
    end
  end
end
