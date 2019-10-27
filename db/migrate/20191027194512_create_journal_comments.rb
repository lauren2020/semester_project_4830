class CreateJournalComments < ActiveRecord::Migration[6.0]
  def change
    create_table :journal_comments do |t|
      t.belongs_to :journal_post, null: false, index: true
      t.belongs_to :user, null: false, index: true
      t.text :body, null: false
      t.timestamps
    end
  end
end
