import React from "react"
import { Provider, connect } from 'react-redux'

import dispatchActions from '../dispatch'
import selectors from '../selectors'

import configureStore from '../../configureStore'

const store = configureStore();
 
const UserHomePage = ({

}) => {
    return (
        <h1>User Home Page Here</h1>
    )
}

export default UserHomePage;
