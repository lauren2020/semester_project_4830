import { createStore, applyMiddleware, compose } from 'redux';
import { middleWare, apiReducer, railsActions } from 'redux-rails';
import { default as thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
};

const apiConfig = {
    baseUrl: 'http://localhost:3000/api/v1/',
    resources: {
      Users: {
        controller: 'users'
      },
      Posts: {
        controller: 'posts'
      }
    }
};

const deviceFinderApiReducer = apiReducer(apiConfig);

const App = createStore(
    deviceFinderApiReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(middleWare(apiConfig))
    )
);

export default App;
