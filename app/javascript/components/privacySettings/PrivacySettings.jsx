import React from "react"
import { connect } from 'react-redux'
import { Button, Input, InputGroup, InputGroupAddon, InputGroupText, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import BaseDivider from '../shared/BaseDivider'
import mapDispatchToProps from './dispatch'
import mapStateToProps from './selectors'
import styles from './styles'

const PrivacySettingsBase = ({
    privacySettings
}) => {
    console.log(privacySettings)

    //const [currentPrivacySettings, setCurrentPrivacySettings] = React.useState(privacySettings);

    const renderPrivacySettingRow = (label, value, setValue) => {
        const [isEditing, setIsEditing] = React.useState(false);
        return (
            <div className="settingRow">
                <h4 className="">{label}: </h4>
                {isEditing 
                    ? <InputGroup className="settingValueEditing">
                    <Input placeholder={value} />
                  </InputGroup>
                  : <p className="settingValue">{value}</p>}

                <BaseDivider {...{
                    color: "lightgray",
                    length: "70%"
                }}></BaseDivider>
                <Button color="warning" className="floatRight" onClick={() => {
                    setIsEditing(!isEditing);
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
        //const [dropdownOpen, setDropdownOpen] = React.useState(false);
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
            {renderPrivacySettingRow("Default Post Visibility", privacySettings.defaultPostVisibility)}
            {renderPrivacySettingRow("Allow connections to view in common connections", "No")}
            {renderPrivacySettingRow("Allow users to search my profile", "No")}
            {renderPrivacySettingRow("Allow connections to add me to a group", "No")}
            {renderPrivacySettingRow("By default, allow others in my groups to view my profile", "No")}
        </div>
    )
}

const PrivacySettings = connect(
    mapStateToProps,
    mapDispatchToProps
)(PrivacySettingsBase);

export default PrivacySettings;