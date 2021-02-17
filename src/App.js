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
import TaskList from './components/TasksList';
import NewTask from './components/NewTask';

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
        {/* <Route path='/Register' component={ Home } /> */}
        <Route component={Error} />
      </Switch>
      </>
    )
  }
}

export default App;
