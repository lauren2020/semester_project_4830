class CreateJournalPosts < ActiveRecord::Migration[6.0]
  def change
    create_table :journal_posts do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.belongs_to :user, null: false, index: true
      t.timestamps
    end
  end
end
