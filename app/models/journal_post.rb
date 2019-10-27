class JournalPost < ApplicationRecord
  belongs_to :user, inverse_of: :journal_posts
end
