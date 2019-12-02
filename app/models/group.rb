class Group < ApplicationRecord
  before_save :set_members_count
    belongs_to :user
    has_and_belongs_to_many :users

  def set_members_count
    if self.id == nil
      self.members_count = 1
      return
    end
    group = Group.find(self.id)
    self.members_count = group.users.length + 1
  end
end