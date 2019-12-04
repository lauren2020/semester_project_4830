import { addPost, setLoading } from '../../actions';
import { ApiHelper } from '../ApiHelper'
import axios from 'axios';

const mapDispatchToProps = dispatch => {
    return {
      onAddPost: body => {
        dispatch(addPost(body))
      },
      changePrivacySettings: (user_id, settings) => {
        dispatch(setLoading(true))
        axios.patch(ApiHelper.CHANGE_USER_PRIVACY_SETTINGS_ENDPOINT(user_id), { defaultPostVisibility: settings["defaultPostVisibility"], allowConnectionToViewInCommon: settings["allowConnectionToViewInCommon"], allowUsersToSearchProfile: settings["allowUsersToSearchProfile"], allowConnectionsToAddMeToGroup: settings["allowConnectionsToAddMeToGroup"], defaultAllowOthersInGroupToViewProfile: settings["defaultAllowOthersInGroupToViewProfile"] })
        .then(function (response) {
            console.log("SUCCES!", response);
            dispatch(setLoading(false))
        })
        .catch(function (error) {
            console.log("ERROR!", error);
            dispatch(setLoading(false))
        });
      }
    }
}

export default mapDispatchToProps;