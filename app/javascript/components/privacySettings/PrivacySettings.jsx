import React from "react"
import { connect } from 'react-redux'
import { Button, Input, InputGroup, InputGroupAddon, InputGroupText, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import BaseDivider from '../shared/BaseDivider'
import mapDispatchToProps from './dispatch'
import mapStateToProps from './selectors'
import styles from './styles'

const PrivacySettingsBase = ({
    currentUser,
    changePrivacySettings,
    privacySettings
}) => {
    const callChangePrivacySetting = (settings) => {
        changePrivacySettings(currentUser.id, { defaultPostVisibility: settings.defaultPostVisibility, allowConnectionToViewInCommon: settings.allowConnectionToViewInCommon, allowUsersToSearchProfile: settings.allowUsersToSearchProfile, allowConnectionsToAddMeToGroup: settings.allowConnectionsToAddMeToGroup, defaultAllowOthersInGroupToViewProfile: settings.defaultAllowOthersInGroupToViewProfile } );
    }

    const renderPrivacySettingRow = (label, value, key) => {
        const [isEditing, setIsEditing] = React.useState(false);
        const [newValue, setNewValue] = React.useState("");
        return (
            <div className="settingRow">
                <h4 className="">{label}: </h4>
                {isEditing 
                    ? <InputGroup className="settingValueEditing">
                    <Input value={newValue} onChange={e => setNewValue(e.target.value)} placeholder={value} />
                  </InputGroup>
                  : <p className="settingValue">{value}</p>}

                <BaseDivider {...{
                    color: "lightgray",
                    length: "70%"
                }}></BaseDivider>
                <Button color="warning" className="floatRight" onClick={() => {
                    setIsEditing(!isEditing);
                    if (isEditing) {
                        console.log("Key: ", key);
                        console.log("Value: ", newValue);
                        let sendValues = {};
                        sendValues[key] = newValue;
                        callChangePrivacySetting(sendValues);
                    }
                }}>{isEditing ? "Save" : "Edit"}</Button>{' '}
            </div>
        )
    }

    const renderPrivacySettingRowDropDown = (label, value, options, setValue) => {
        const [isEditing, setIsEditing] = React.useState(false);
        return (
            <div className="settingRow">
                <h4 className="">{label}: </h4>
                {isEditing 
                    ? renderDropdownEditMenu(options)
                    : <p className="settingValue">{value}</p>}

                <Button color="warning" className="floatRight" onClick={() => {
                    setIsEditing(!isEditing);
                }}>{isEditing ? "Save" : "Edit"}</Button>{' '}
            </div>
        )
    }

    const renderDropdownEditMenu = (options) => {
        const dropdownOpen = false;
        return (
            <ButtonDropdown isOpen={dropdownOpen} toggle={() => setDropdownOpen(!dropdownOpen)}>
                <DropdownToggle caret>
                     Button Dropdown
                </DropdownToggle>
                <DropdownMenu>
                    {options.map(option => <DropdownItem>{option}</DropdownItem>)}
                </DropdownMenu>
            </ButtonDropdown>
        )
    }

    return (
        <div>
            {renderPrivacySettingRow("Default Post Visibility", privacySettings.defaultPostVisibility, "defaultPostVisibility")}
            {renderPrivacySettingRow("Allow connections to view in common connections", privacySettings.allowConnectionToViewInCommon, "allowConnectionToViewInCommon")}
            {renderPrivacySettingRow("Allow users to search my profile", privacySettings.allowUsersToSearchProfile, "allowUsersToSearchProfile")}
            {renderPrivacySettingRow("Allow connections to add me to a group", privacySettings.allowConnectionsToAddMeToGroup, "allowConnectionsToAddMeToGroup")}
            {renderPrivacySettingRow("By default, allow others in my groups to view my profile", privacySettings.defaultAllowOthersInGroupToViewProfile, "defaultAllowOthersInGroupToViewProfile")}
        </div>
    )
}

const PrivacySettings = connect(
    mapStateToProps,
    mapDispatchToProps
)(PrivacySettingsBase);

export default PrivacySettings;