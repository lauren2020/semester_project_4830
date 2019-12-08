class User < ApplicationRecord
  # devise :database_authenticatable, :registerable,
  #        :recoverable, :rememberable, :validatable

  has_many :journal_posts, inverse_of: :user
  has_many :journal_comments, inverse_of: :user

  has_many :message_boards, inverse_of: :user
  has_many :posts, inverse_of: :user
  has_many :comments, inverse_of: :user

  has_many :groups
  has_and_belongs_to_many :groups

  has_many :connection_associations, :class_name => 'Connection'
  has_many :connections, :through => :connection_associations

  has_many :posts

  has_secure_password

  def as_json(options = {})
    super(options.merge({ except: %i[password password_digest] }))
  end
  

  validates :username, uniqueness: true, allow_nil: true

  def set_connections_count
    if self.id == nil
      self.connections_count = 0
      return
    end
    user = User.find(self.id)
    self.connections_count = user.connections.length
  end
end
