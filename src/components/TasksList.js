import React from 'react';
import Axios from 'axios';

// Import components
import EditTask from './EditTask';

// Imports styles 
import '../styles/taskList.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import fontawesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

// API TASK 
const api = Axios.create({
    baseURL: `http://localhost:3030/task/`
});

class TaskList extends React.Component {
    state = {
        url: 'http://localhost:3030/tasks',
        urlToDelete: 'localhost:3030/task/',
        id: '',
        redirect: null,
        tasks: []
    }

    // Lorsque le componsant est monté, ont tente de récupérer l'enssemble des tâches présentent dans la BDD
    async componentDidMount() {
        try {
            const res = await Axios.get(this.state.url)
            //console.log(res.data.result.filter(i => i.id == '8'))
            this.setState({ tasks: res.data.result })
        } catch (err){
            console.log(err);
        }
    }

    // Methode construisant un tableau de façon dynamique en fonction des informations présente en BDD
    dynamicTab() {
        return this.state.tasks.map((task, index) => {
            const { id, nom, date } = task;
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{nom}</td>
                    <td>{date}</td>
                    <td>
                        <button onClick={() => {
                            this.updateTask(id);
                        }}><FontAwesomeIcon icon={ faPen } pulse /></button>
                        <button onClick={() => {
                            this.deleteTask(task.id);
                        }}><FontAwesomeIcon icon={ faTrash } pulse/></button>
                    </td>
                </tr>
            )
        });
    }

    // Methode permettant d'ajouter les en-tête au tableau
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

    // Methode permettant la suppression d'une tâche
    deleteTask = async id => {
        if (window.confirm('Êtes-vous sûr de vouloir supprimer cette tâche ?')) {
            console.log(`${this.state.urlToDelete}${id}`);
            await api.delete(`${id}`)
             .then(res => {
                console.log(res);
                alert(`${res.data.message}`);
                this.refreshPage();
            })
             .catch(err => console.log(err.message));
        }
    }

    // Update Task
    updateTask = id => {
        console.log(id);
        return this.setState({ redirect: true, id: id });
    }

    // Refresh page 
    refreshPage = () => {
        window.location.reload(false);
    }

    render() {
        if (this.state.redirect) {
            return ( <EditTask tasks={this.state.tasks } id={this.state.id} /> )
        }
        return (
            <>
                <br />
                <h1>My Tasks Today 😊</h1>
                <br />
                <br />
                <br />
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