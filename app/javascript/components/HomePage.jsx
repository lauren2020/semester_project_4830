import React from "react"
import { connect } from 'react-redux'
import UserHomePage from './userHomePage/UserHomePage'
import mapDispatchToProps from './dispatch'
import mapStateToProps from './selectors'


const HomePageBase = ({
    currentUser,
    onAddPost,
    userPosts,
    pageFilters
}) => {
    const renderPost = (post) => {
        return (
            <h1 key={post.id} >User Posts: {post.body}</h1>
        )
    }

    console.log("Base: ", currentUser);

  return (
      <>
        {/* <div className="addPostButton" onClick={() => onAddPost("Test Add Post")}>
          Add Post +
        </div> */}
        <UserHomePage {...{
            user: currentUser,
            displayedPosts: userPosts,
            pageFilters
        }}></UserHomePage>
    </>
  )
}
  
const HomePage = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePageBase);
  

export default HomePage;
