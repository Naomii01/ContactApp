import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import BrowserRouter
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';

const App = () => {
  return (
    <Router> {/* Wrap your routes with BrowserRouter */}
      <div className="App">
        <ToastContainer/>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/add' component={AddContact} /> {/* Use component prop directly */}
          <Route path='/edit/:id' component={EditContact} /> {/* Use component prop directly */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
