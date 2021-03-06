import { addPost, addLikeToPost, addCommentToPost, setLoading, addComment, addLike } from '../../actions';
import { ApiHelper } from '../ApiHelper'
import axios from 'axios';

const mapDispatchToProps = dispatch => {
    return {
      onAddPost: body => {
          console.log("adding post");
        dispatch(addPost(body))
      },
      addLike: (post_id, user_id) => {

        dispatch(setLoading(true))
        axios.patch(ApiHelper.ADD_LIKE_TO_POST_ENDPOINT(user_id), { post_id })
        .then(function (response) {
            console.log("SUCCES!", response);
            dispatch(addLike(user_id, post_id))
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
            dispatch(addComment(post_id, response.data))
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