import { addPost, createGroup, setLoading } from '../../actions';
import { ApiHelper } from '../ApiHelper'
import axios from 'axios';

const mapDispatchToProps = dispatch => {
    return {
      onAddPost: body => {
          console.log("adding post");
        dispatch(addPost(body))
      },
      searchGroups: string => {
        
      },
      createGroup: (user_id, name, profile_url) => {
        dispatch(setLoading(true))
        axios.post(ApiHelper.CREATE_GROUP_ENDPOINT, { user_id, name, profile_url })
        .then(function (response) {
            console.log("Success! " + response);
            dispatch(setLoading(false))
        })
        .catch(function (error) {
            console.log("error" + error);
            dispatch(setLoading(false))
        });
      },
      inviteUser: (group_id, inviting_user_id, invited_user_id) => {
        dispatch(setLoading(true))
        axios.patch(ApiHelper.INVITE_USER_TO_GROUP(group_id), { inviting_user_id, invited_user_id })
        .then(function (response) {
            console.log("SUCCES!", response);
            dispatch(setLoading(false))
        })
        .catch(function (error) {
            console.log("ERROR!", error);
            dispatch(setLoading(false))
        });
      },
      acceptInvite: (group_id, invited_user_id) => {
        dispatch(setLoading(true))
        axios.patch(ApiHelper.ACCEPT_GROUP_INVITE_ENDPOINT(group_id), { invited_user_id })
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