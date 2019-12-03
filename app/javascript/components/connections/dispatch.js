import { addPost, setLoading } from '../../actions';
import { ApiHelper } from '../ApiHelper'
import axios from 'axios';
import CircularJSON from 'circular-json';

const mapDispatchToProps = dispatch => {
    return {
      onAddPost: body => {
          console.log("adding post");
        dispatch(addPost(body))
      },
      inviteUserToConnect: (inviting_user_id, invited_user_id) => {
        dispatch(setLoading(true))
        axios.patch(ApiHelper.INVITE_USER_TO_CONNECT_ENDPOINT(inviting_user_id), { invited_user_id })
        .then(function (response) {
          let json = CircularJSON.stringify(response);
            console.log("SUCCES!", json);
            dispatch(setLoading(false))
        })
        .catch(function (error) {
            console.log("ERROR!", error);
            dispatch(setLoading(false))
        });
      },
      acceptConnectionInvite: (inviting_user_id, invited_user_id) => {
        dispatch(setLoading(true))
        axios.patch(ApiHelper.ACCEPT_CONNECTION_INVITE_ENDPOINT(invited_user_id), { inviting_user_id })
        .then(function (response) {
            console.log("SUCCES!", response);
            dispatch(setLoading(false))
        })
        .catch(function (error) {
            console.log("ERROR!", error);
            dispatch(setLoading(false))
        });
      },
      inviteUserToConnectByUsername: (inviting_user_id, invited_username) => {
        dispatch(setLoading(true))
        axios.patch(ApiHelper.INVITE_USER_TO_CONNECT_BY_USERNAME_ENDPOINT(inviting_user_id), { invited_username: invited_username })
        .then((response) => {
          //let json = CircularJSON.stringify(response);
            console.log("SUCCES!");// + response.data);
            dispatch(setLoading(false))
        })
        .catch((error) => {
            console.log("ERROR!", error);
            dispatch(setLoading(false))
        });
      },
      addLike: (post_id, user_id) => {
        //dispatch(addLikeToPost(post))

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
        //body, user_id, post_id
        //dispatch(addCommentToPost(post_id, comment, user_id))

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