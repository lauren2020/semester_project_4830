class Post < ApplicationRecord
  belongs_to :message_board, inverse_of: :posts
  belongs_to :user, inverse_of: :posts

  validates :title, :body, :message_board, :user, presence: true
end
