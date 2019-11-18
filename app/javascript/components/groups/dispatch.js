import { addPost } from '../../actions';

const mapDispatchToProps = dispatch => {
    return {
      onAddPost: body => {
          console.log("adding post");
        dispatch(addPost(body))
      },
      searchGroups: string => {
        
      }
    }
}

export default mapDispatchToProps;