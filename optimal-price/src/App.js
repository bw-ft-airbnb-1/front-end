
import React, { useState } from 'react';
import {Dashboard} from './components/Dashboard/Dashboard.js';
import { AddListing } from './components/Dashboard/AddListing.js';
import { MyListings } from './components/Dashboard/MyListings.js';
import PrivateRoute from './utils/PrivateRoute';
import { Switch, Route} from 'react-router-dom';
import Context from "./contexts/loginContext";
import SignUp from './components/SignUp';
import UserLogin from './components/UserLogin';
import {Edit} from './components/Dashboard/Edit';

function App() {

  // adding state
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: ''
  })

  const [user, setUser] = useState({})

  const [properties, setProperties] = useState([])

  return (
    <div>
      <Switch>
        <Context.Provider value = {{credentials, setCredentials, user, setUser, properties, setProperties}} >
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/" component={UserLogin} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/newlisting" component={AddListing}/>
            <PrivateRoute path="/listings" component={MyListings} />
            <PrivateRoute path= "/edit/:id" component={Edit} />
        </Context.Provider>
      </Switch>
    </div>
  );
}

export default App;
