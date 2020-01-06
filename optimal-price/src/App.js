import React, { useState } from 'react';

import {
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

import SignUp from './components/SignUp';
import UserLogin from './components/UserLogin';

function App() {
  // STATE
  const [user, setUser] = useState()

  // useEffect


  return (
    <div>
      <Switch>
        <Route
            exact
            path='/'
            component={UserLogin}
            />
        <Route 
          exact
          path='/signup'
          component={SignUp}
          />
      </Switch>
    </div>
  );
}

export default App;
