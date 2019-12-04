import { createStore, applyMiddleware, combineReducers } from 'redux';
import { default as thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import update from 'immutability-helper';

import {
    ADD_POST,
    ADD_COMMENT,
    SET_PAGE_FILTER,
    PageFilters,
    ADD_LIKE
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
    privacySettings: { 
        defaultPostVisibility: "Only Me",
        allowConnectionToViewInCommon: "No",
        allowUsersToSearchProfile: "No",
        allowConnectionsToAddMeToGroup: "No",
        defaultAllowOthersInGroupToViewProfile: "No"
    },
    groupSearchResults: [],
    groupPosts: {},
    connectionPosts: {}
};

function connectionPosts(state = {}, action) {
    switch (action.type) {
        default:
            return state;
    }
}

function groupPosts(state = {}, action) {
    switch (action.type) {
        default:
            return state;
    }
}

function groupSearchResults(state = [], action) {
    switch (action.type) {
        case 'SEARCH_GROUPS':
        default:
            return state;
    }
}

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
        case ADD_LIKE:
                var index = 0;
                for (index = 0; index < state.length; index++) {
                    if (state[index].id === action.post_id) {
                        break;
                    }
                }
            return update(state, { 
                [index]: {
                  likes: [...state[index].comments, action.user_id]
                }
            });
        case ADD_POST:
            return [...state, { id: 2, body: action.text, comments: [] }];
        case ADD_COMMENT:
                var index = 0;
                for (index = 0; index < state.length; index++) {
                    if (state[index].id === action.post_id) {
                        break;
                    }
                }

            const newComment = {id: "6", date: "11-18-2019", post: action.post_id, body: action.text, user: action.user};
            return update(state, { 
                [index]: {
                  comments: [...state[index].comments, newComment]
                }
            });
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
    privacySettings,
    groupSearchResults,
    groupPosts,
    connectionPosts
})

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
