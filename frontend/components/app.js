import React from 'react';
import { Route } from 'react-router-dom';
import FormContainer from './form/form_container';
import UserIndexContainer from './user_index/user_index_container';
import Confirmation from './confirmation/confirmation';

const App = () => (
  <div>
    <Route exact path='/admin' component={UserIndexContainer} />
    <Route exact path='/confirmation' component={Confirmation} />
    <Route exact path='/'component={FormContainer} />
  </div>
);

export default App;