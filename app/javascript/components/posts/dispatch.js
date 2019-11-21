import { addPost, addLikeToPost, addCommentToPost } from '../../actions';

const mapDispatchToProps = dispatch => {
    return {
      onAddPost: body => {
          console.log("adding post");
        dispatch(addPost(body))
      },
      addLike: (post) => {
        dispatch(addLikeToPost(post))
      },
      addComment: (comment, post, user) => {
        dispatch(addCommentToPost(post, comment, user))
      }
    }
}

export default mapDispatchToProps;