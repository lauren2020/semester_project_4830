class ChangeDefaultValueForPrivacySettingsOnUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :privacy_settings, :json, null: false, default: { 
      defaultPostVisibility: "Only Me",
      allowConnectionToViewInCommon: "No",
      allowUsersToSearchProfile: "No",
      allowConnectionsToAddMeToGroup: "No",
      defaultAllowOthersInGroupToViewProfile: "No"
  }
  end
end
