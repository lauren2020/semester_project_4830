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
      createGroup: (user_id, name) => {
        dispatch(setLoading(true))
        axios.post(ApiHelper.CREATE_GROUP_ENDPOINT, { user_id, name })
        .then(function (response) {
          //dispatch(createGroup(response.data))
            //dispatch(addNewDeviceSuccess(response.data.devices))
            console.log("GROUP CREATED: ");// + response.data);
            dispatch(setLoading(false))
        })
        .catch(function (error) {
            //dispatch(addNewDeviceFailed(error))
            console.log("error" + error);
            dispatch(setLoading(false))
        });
      },
      acceptInvite: (group_id, user_id) => {
        dispatch(setLoading(true))
        axios.patch(ApiHelper.ADD_MEMBER_TO_GROUP_ENDPOINT(group_id), { user_id })
        .then(function (response) {
            console.log("SUCCES!", response);
            dispatch(setLoading(false))
        })
        .catch(function (error) {
            console.log("ERROR!", error);
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
      }
    }
}

export default mapDispatchToProps;