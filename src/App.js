import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';

const App = () => {
  return (
    <div className="App">
      <ToastContainer/>
      <Navbar/>
      <Switch>
        <Route exact path='/' component= {()=><Home/>}/>
        <Route path='/add'>
    <AddContact></AddContact>
        </Route>
        <Route path='/edit/:id'>
       <EditContact/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
