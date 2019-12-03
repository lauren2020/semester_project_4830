import { addPost, setLoading } from '../actions';
import { ApiHelper } from './ApiHelper'
import axios from 'axios';


const mapDispatchToProps = dispatch => {
    return {
      onAddPost: body => {
        dispatch(addPost(body))
      },
      postToUser: (user_id, body, shared_user_id) => {
        dispatch(setLoading(true))
        axios.post(ApiHelper.POST_TO_USER_ENDPOINT(user_id), { body, shared_user_id })
        .then(function (response) {
            console.log("Success! " + response);
            dispatch(setLoading(false))
        })
        .catch(function (error) {
            console.log("error" + error);
            dispatch(setLoading(false))
        });
      },
      postToGroup: (user_id, body, group_id) => {
        console.log("Group Id in dispatch: ", group_id);
        dispatch(setLoading(true))
        axios.post(ApiHelper.POST_TO_GROUP_ENDPOINT(user_id), { body, group_id })
        .then(function (response) {
            console.log("Success! " + response);
            dispatch(setLoading(false))
        })
        .catch(function (error) {
            console.log("error" + error);
            dispatch(setLoading(false))
        });
      }
    }
}

export default mapDispatchToProps;