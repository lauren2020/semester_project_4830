class MessageBoard < ApplicationRecord
  belongs_to :user, inverse_of: :message_boards

  #has_and_belongs_to_many :users #, join_table: 'group_memberships', class_name: 'User', association_foreign_key: "user_id"
  #, class_name: "User", join_table: "group_memberships", association_foreign_key: "members"

  validates :name, presence: true
end
