class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :journal_posts, inverse_of: :user
  has_many :message_boards, inverse_of: :user

  validates :username, uniqueness: true, allow_nil: true
end
