
import React, { useState } from 'react';

import {
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

import Context from "./contexts/loginContext";

import SignUp from './components/SignUp';
// import UserLogin from './components/UserLogin';

function App() {

  // adding state
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  return (
    <div>
      <Router>
      <Switch>
        <Context.Provider value = {{credentials, setCredentials}} >
            {/* <Route exact path="/" component={UserLogin} />  */}
            <Route exact path="/signup" component={SignUp} />
        </Context.Provider>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
