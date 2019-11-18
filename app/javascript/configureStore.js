import { createStore, applyMiddleware, combineReducers } from 'redux';
import { middleWare, apiReducer, railsActions } from 'redux-rails'
import { default as thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
    ADD_POST,
    ADD_COMMENT,
    SET_PAGE_FILTER,
    PageFilters
} from './actions';
const { SHOW_ALL } = PageFilters

const initialState = {
    currentUser: {id: 1, name: "testUser"},
    userPosts: [
        {id: 1, body: "post initial", comments: []}
    ],
    pageFilter: PageFilters.SHOW_ALL,
    userGroups: [],
    userConnections: [],
    privacySettings: { defaultPostVisibility: "Only Me" }
};

function privacySettings(state = [], action) {
    switch (action.type) {
        default:
            return state;
    }
}

function userConnections(state = [], action) {
    switch (action.type) {
        default:
            return state;
    }
}

function userGroups(state = [], action) {
    switch (action.type) {
        default:
            return state;
    }
}

function currentUser(state = {}, action) {
    switch (action.type) {
        case 'SWITCH_USER':
            return {id: 2, name: "user 2"}
        default:
            return state;
    }

}

function userPosts(state = [], action) {
    switch (action.type) {
        case ADD_POST:
            return [...state, { id: 2, body: action.text, comments: [] }];
        case ADD_COMMENT:
            return state;
        default:
            return state;
    }
}

function pageFilter(state = SHOW_ALL, action) {
    switch (action.type) {
      case SET_PAGE_FILTER:
        return action.filter
      default:
        return state
    }
  }

const rootReducer = combineReducers({
    currentUser,
    pageFilter,
    userPosts,
    userGroups,
    userConnections,
    privacySettings
})

// export default function configureStore() {
//     const store = createStore(
//         rootReducer, 
//         initialState,
//         composeWithDevTools (
//             applyMiddleware(thunk)
//         )
//     );
//     return store;
// }

export default function configureStore(hydratedState = {}) {
    const store = createStore(
        rootReducer, 
        {...initialState, ...hydratedState},
        composeWithDevTools (
            applyMiddleware(thunk)
        )
    );
    return store;
}
