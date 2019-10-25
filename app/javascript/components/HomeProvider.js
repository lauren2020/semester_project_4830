import React from "react"
import PropTypes from "prop-types"

import { Provider, connect } from 'react-redux'
import configureStore from '../configureStore'
// import dispatchActions from './dispatch'
// import selectors from './selectors'
import UserHomePage from './userHomePage/UserHomePage'
import {
  ADD_POST,
    ADD_COMMENT,
    SET_PAGE_FILTER,
    PageFilters,
    addPost
} from '../actions';
import { getVisiblePosts } from './selectors'
import HomePage from './HomePage'

const store = configureStore();

class HomeProvider extends React.Component {
  render () {
    return (
        <Provider store={store}>
          <HomePage />
        </Provider>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     userPosts: getVisiblePosts(state)
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     onAddPost: body => {
//       dispatch(addPost(body))
//     }
//   }
// }

// const HomePage = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(HomeProviderBase);

export default HomeProvider;
