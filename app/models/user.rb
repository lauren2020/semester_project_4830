class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :journal_posts, inverse_of: :user
  has_many :journal_comments, inverse_of: :user

  has_many :message_boards, inverse_of: :user
  has_many :posts, inverse_of: :user
  has_many :comments, inverse_of: :user

  has_many :groups
  has_and_belongs_to_many :groups

  # has_many :groups, :through => :group_memberships  # Edit :needs to be plural same as the has_many relationship   
  # has_many :group_memberships
  #has_and_belongs_to_many :message_boards #, join_table: 'group_memberships', class_name: 'MessageBoard', association_foreign_key: "message_board_id"
  #, class_name: "MessageBoard", join_table: "group_memberships", association_foreign_key: "groups"

  #has_many
  has_and_belongs_to_many :connections
  # ,
  #   class_name: "User",
  #   join_table: "connections",
  #   association_foreign_key: "connection_id"
  # has_many :connection_list, foreign_key: :user_id, class_name: 'Connection'
  # has_many :connections, through: :connection_list

  # has_many :on_connection_list, foreign_key: :connection_id, class_name: 'Connection'
  # has_many :connecteds, through: :on_connection_list

  validates :username, uniqueness: true, allow_nil: true
end
