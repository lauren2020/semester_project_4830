import React from "react"
import { Provider, connect } from 'react-redux'

import dispatchActions from '../dispatch'
import selectors from '../selectors'

import configureStore from '../../configureStore'

const store = configureStore();
 
const UserHomePage = ({

}) => {
    return (
        // <Provider store={store}>
            <h1>User Home Page Here</h1>
        // </Provider>
    )
}

export default UserHomePage;

// const mapDispatchToProps = () => {
//     dispatchActions
//   }

// //   function mapStateToProps(state) {
// //     return {
// //       test: state.test
// //     }
// //   }

// function mapStateToProps(state, ownProps) {
//     const { visibilityFilter } = state
//     const { id } = ownProps
//     const todo = getTodoById(state, id)
  
//     // component receives additionally:
//     return { todo, visibilityFilter }
//   }
  
//   export default connect(selectors, mapStateToProps)(UserHomePage);