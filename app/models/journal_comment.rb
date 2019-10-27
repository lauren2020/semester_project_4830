class JournalComment < ApplicationRecord
  belongs_to :journal_post, inverse_of: :journal_comments
  belongs_to :user, inverse_of: :journal_comments

  validates :body, :journal_post, :user, presence: true
end
