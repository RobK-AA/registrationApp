import React from 'react';
import { Route } from 'react-router-dom';
import FormContainer from './form/form_container';
import UserIndexContainer from './user_index/user_index_container';


const App = () => (
  <div>
    <Route exact path='/admin' component={UserIndexContainer} />
    <Route exact path='/'component={FormContainer} />
  </div>
);

export default App;