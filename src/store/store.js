import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from "./rootReducer";

import ReduxThunk from "redux-thunk";

const store = createStore(
  rootReducer,

  window.__REDUX_DEVTOOLS_EXTENSION__
  ? compose(
      applyMiddleware(ReduxThunk),
      window.__REDUX_DEVTOOLS_EXTENSION__({
        trace: true,
        traceLimit: 25
      }),
    )
  : compose(applyMiddleware(ReduxThunk))
  // applyMiddleware(ReduxThunk,   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  
);




export default store;