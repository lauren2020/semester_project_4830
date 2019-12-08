import { createStore, applyMiddleware, combineReducers } from 'redux';
import { default as thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
//import update from 'immutability-helper';
import update from 'react-addons-update';

import {
    ADD_POST,
    ADD_COMMENT,
    SET_PAGE_FILTER,
    PageFilters,
    ADD_GROUP,
    ADD_LIKE,
    ADD_CONNECTION,
    SET_PRIVACY
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
        case ADD_CONNECTION:
            state[action.connection.id] = [];
            return state;
        default:
            return state;
    }
}

function groupPosts(state = {}, action) {
    switch (action.type) {
        case ADD_GROUP:
            state[action.group.id] = []
            return state;
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

function privacySettings(state = {}, action) {
    switch (action.type) {
        case SET_PRIVACY:
            return update(state, {
                defaultPostVisibility: {$set: action.settings.defaultPostVisibility ? action.settings.defaultPostVisibility : state.defaultPostVisibility},
                allowConnectionToViewInCommon: {$set: action.settings.allowConnectionToViewInCommon ? action.settings.allowConnectionToViewInCommon : state.allowConnectionToViewInCommon},
                allowUsersToSearchProfile: {$set: action.settings.allowUsersToSearchProfile ? action.settings.allowUsersToSearchProfile : state.allowUsersToSearchProfile},
                allowConnectionsToAddMeToGroup: {$set: action.settings.allowConnectionsToAddMeToGroup ? action.settings.allowConnectionsToAddMeToGroup : state.allowConnectionsToAddMeToGroup},
                defaultAllowOthersInGroupToViewProfile: {$set: action.settings.defaultAllowOthersInGroupToViewProfile ? action.settings.defaultAllowOthersInGroupToViewProfile : state.defaultAllowOthersInGroupToViewProfile}
            });
        default:
            return state;
    }
}

function userConnections(state = [], action) {
    switch (action.type) {
        case ADD_CONNECTION:
                return [...state, action.connection];
        default:
            return state;
    }
}

function userGroups(state = [], action) {
    switch (action.type) {
        case ADD_GROUP:
            return [...state, action.group];
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
            let updatedPost = {};
                var index = 0;
                for (index = 0; index < state.length; index++) {
                    if (state[index].content.id === action.post_id) {
                        console.log("Found Post", index);
                        // console.log(state[index]);
                        // updatedPost = state[index];
                        // updatedPost.likes.push(user_id);
                        break;
                    }
                }
                console.log(index);
            return update(state, { 
                [index]: {
                    content: {
                        likes: {$push: [action.user_id]}
                    }
                }
            });
        case ADD_POST:
            return [...state, { id: 2, body: action.text, comments: [] }];
        case ADD_COMMENT:
            console.log("Comment: ", action.comment)
                var index = 0;
                for (index = 0; index < state.length; index++) {
                    if (state[index].content.id === action.post_id) {
                        break;
                    }
                }
                return update(state, { 
                    [index]: {
                        comments: {$push: [action.comment]}
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
