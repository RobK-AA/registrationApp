import React from 'react';
import { Route } from 'react-router-dom';
import FormContainer from './form/form_container';
import UserIndex from './user_index/user_index';


const App = () => (
  <div>
    <Route exact path='/admin' component={UserIndex} />
    <Route exact path='/'component={FormContainer} />
  </div>
);

export default App;