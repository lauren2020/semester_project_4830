class MessageBoard < ApplicationRecord
  belongs_to :user, inverse_of: :message_boards

  validates :name, presence: true
end
