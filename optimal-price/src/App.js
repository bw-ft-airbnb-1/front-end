
import React, { useState } from 'react';

import {
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

import Context from "./contexts/loginContext";

import SignUp from './components/SignUp';
import UserLogin from './components/UserLogin';

function App() {

  // adding state
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: ''
  })

  return (
    <div>
      <Switch>
        <Context.Provider value = {{credentials, setCredentials}} >
            {/* <Route exact path="/" component={UserLogin} />  */}
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/" component={UserLogin} />
        </Context.Provider>
      </Switch>
    </div>
  );
}

export default App;
