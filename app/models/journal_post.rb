class JournalPost < ApplicationRecord
  belongs_to :user, inverse_of: :journal_posts

  validates :title, :body, :user, presence: true
end
