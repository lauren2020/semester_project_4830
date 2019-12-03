class Post < ApplicationRecord

  belongs_to :user, inverse_of: :posts

  belongs_to :shared_to_group, class_name: "Group", optional: true
  belongs_to :shared_to_user, class_name: "User", optional: true

  has_many :comments, inverse_of: :post

  validates :title, :body, :user, presence: true
end
