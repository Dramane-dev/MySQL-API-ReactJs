import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Imports components
import Home from './components/Home';
import Navbar from './components/Nav';
import NewTask from './components/NewTask';
import EditTask from './components/EditTask';

// Imports styles
import './styles/taskList.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  render() {
    return (
      <>
      <Navbar />
      <Switch>
        <Route path='/' component={ Home } exact />
        <Route path='/Task' component={ NewTask } />
        <Route path='/Task/:id' component={ EditTask } />
        {/* <Route path='/Register' component={ Home } /> */}
        <Route component={Error} />
      </Switch>
      </>
    )
  }
}

export default App;
