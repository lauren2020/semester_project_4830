class AddPendingInvitesToUsers < ActiveRecord::Migration[6.0]
  def change
    #{ requested_by: sent_to: date: }
    add_column :users, :sent_connection_requests, :json, array: true, null: false, :default => []
    add_column :users, :connection_requests, :json, array: true, null: false, :default => []

    # { invited_by, group, date_sent }
    add_column :users, :group_invites, :json, array: true, null: false, :default => []
    add_column :groups, :sent_invites, :json, array: true, null: false, :default => []
  end
end
