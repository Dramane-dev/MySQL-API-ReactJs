import React from 'react';
import Axios from 'axios';

// Imports styles 
import '../styles/taskList.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

// Import fontawesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

class TaskList extends React.Component {
    state = {
        url: 'http://localhost:3030/tasks',
        tasks: []
    }

    async componentDidMount() {
        try {
            const res = await Axios.get(this.state.url)
            this.setState({ tasks: res.data.result })
        } catch (err){
            console.log(err);
        }
    }

    dynamicTab() {
        return this.state.tasks.map((task, index) => {
            const { id, nom, date } = task;
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{nom}</td>
                    <td>{date}</td>
                    <td>
                        <button><FontAwesomeIcon icon={ faPen } pulse /></button>
                        <button><FontAwesomeIcon icon={ faTrash } pulse/></button>
                    </td>
                </tr>
            )
        });
    }

    headerTable() {
        if (this.state.tasks.length > 0 && this.state.tasks !== undefined) {
            let header = Object.keys(this.state.tasks[0]);
            return header.map((key, index) => {
                return <th key={index}>{ key }</th>
            })
        } else {
            console.log(this.state.tasks);
        }
    }

    render() {
        return (
            <>
                <table className="table tasks" style={{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
                    <tbody>
                        <tr>{this.headerTable()}<th>Update or Delete</th></tr>
                        { this.dynamicTab() }
                    </tbody>
                </table>
            </>
        );
    }
}

export default TaskList;