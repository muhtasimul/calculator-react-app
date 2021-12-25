import React from 'react'
import { Route, Switch } from 'react-router';
import Keyboard from "./component/Keyboard"

function App() {

  return (
    <>
      <Switch>
        <Route exact path="/" component={Keyboard}/>
          
      </Switch>
    </>

  );
}

export default App;
