import React from 'react';

// Import Compnents 
import Navbar from '../components/Nav';
import TaskList from '../components/TasksList';

// Import Syle 
import '../styles/Home.css';
import '../styles/taskList.css';

class Home extends React.Component {
    render() {
        return (
            <>
                <div className="App">
                    <br />
                    <h1>My Tasks Today 😊</h1>
                    <br />
                    <br />
                    <br />
                    <TaskList />
                </div>
            </>
        )
    }
}

export default Home;