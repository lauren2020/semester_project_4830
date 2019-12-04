import React from "react"
import { connect } from 'react-redux'
import UserHomePage from './userHomePage/UserHomePage'
import mapDispatchToProps from './dispatch'
import mapStateToProps from './selectors'


const HomePageBase = ({
    currentUser,
    userGroups,
    userConnections,
    postToUser,
    postToGroup,
    onAddPost,
    userPosts,
    pageFilters
}) => {

  return (
      <>
        <UserHomePage {...{
            user: currentUser,
            displayedPosts: userPosts,
            pageFilters,
            postToUser,
            postToGroup,
            userGroups,
            userConnections
        }}></UserHomePage>
    </>
  )
}
  
const HomePage = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePageBase);
  

export default HomePage;
