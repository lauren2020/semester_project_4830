import { addPost, createGroup, setLoading, addGroup } from '../../actions';
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
            dispatch(addGroup(response.data))
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
      },
      addLike: (post_id, user_id) => {
        dispatch(setLoading(true))
        axios.patch(ApiHelper.ADD_LIKE_TO_POST_ENDPOINT(user_id), { post_id })
        .then(function (response) {
            console.log("SUCCES!", response);
            dispatch(setLoading(false))
        })
        .catch(function (error) {
            console.log("ERROR!", error);
            dispatch(setLoading(false))
        });
      },
      addComment: (comment, post_id, user_id) => {

        dispatch(setLoading(true))
        axios.patch(ApiHelper.ADD_COMMENT_TO_POST_ENDPOINT(user_id), { post_id, body: comment })
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