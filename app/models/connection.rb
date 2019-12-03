class Connection < ApplicationRecord
    belongs_to :connection, :class_name => 'User'
    belongs_to :user, optional: true
  end