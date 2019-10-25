import React from "react"
import { connect } from 'react-redux'
import UserHomePage from './userHomePage/UserHomePage'
import mapDispatchToProps from './dispatch'
import mapStateToProps from './selectors'


const HomePageBase = ({
    onAddPost,
    userPosts,
    pageFilters
}) => {
    const renderPost = (post) => {
        return (
            <h1 key={post.id} >User Posts: {post.body}</h1>
        )
    }

  return (
      <>
      <h1>Page Filters: {pageFilters}</h1>
      {userPosts.map(post => renderPost(post))}
      <div onClick={() => onAddPost("Test Add Post")}>
          Add Post +
      </div>
        <UserHomePage {...{
            userPosts,
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
