import logo from './logo.svg';
import './App.css';
import {TopicsForum} from "./Topics-Forum";
import {AppContext, initialState, reducer} from "./AppContext";
import {useReducer} from "react";

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)
  return (
      <AppContext.Provider value={{state, dispatch}}>
          <TopicsForum/>
      </AppContext.Provider>
  );
}

export default App;
