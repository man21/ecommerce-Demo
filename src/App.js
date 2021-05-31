import React from "react";
import Home from "./component/home/Home"

import {Provider} from 'react-redux'
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Home/>
    </Provider>
    
    // <div className="App">
    //  <Home/>
    //  </div>
  );
}

export default App;
