class Comment < ApplicationRecord
  belongs_to :user, inverse_of: :comments
  belongs_to :post, inverse_of: :comments

  validates :body, :user, :post, presence: true
end
