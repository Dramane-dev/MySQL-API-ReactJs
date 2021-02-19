import React from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

// Import style 
import styled from 'styled-components';

const Form = styled.form`
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 10%;
`;

// API TASK 
const api = Axios.create({
    baseURL: `http://localhost:3030/task/`
});

class EditTask extends React.Component {
    state = {
        redirect: null,
        task: [],
        id: '',
        nom: '',
        date: ''
    }
    async componentDidMount() {
        try {
            const id = this.props.id;
/*             console.log(this.props.name.map(task => {
                const { id, nom, date } = task;
                console.log(id)
                console.log(nom)
                console.log(date)
            })); */
            //console.log(this.props.tasks.map(task => console.log(task)))

            const result = await this.props.tasks.filter(taskId => taskId.id == id);
            console.log(result);
            this.setState({ id: id, task: result });
        } catch (error) {
            console.log(error.message)
        }

        console.log(this.state.task.length)
        this.getData(this.state.task);
    }

    // Get Object data of Task filtered and assign a value in my state
    getData = async tasks => {
        await tasks.map(task => {
            const { nom, date } = task;
            this.setState({ nom: nom, date: date });
        })
        console.log(this.state.nom)
        console.log(this.state.date)
    }

    handleChangeNom = event => {
        this.setState({ nom: event.target.value });
    }

    handleChangeDate = event => {
        this.setState({  date: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const nom = this.state.nom, date = this.state.date;
        const id = 'this.props;';
        console.log(`${ this.state.urlToDelete }${ id }`);
        api.put(`${ id }`, { nom, date })
         .then(res => {
             console.log(res.data);
             this.setState({ redirect: '/' });
         })
         .catch(err => console.log(err));
    }

    render() {
        if (this.state.redirect) {
            console.log(this.state.redirect);
            return <Redirect to={ this.state.redirect } />
        }
        return (
             <>
                <h1>Edit a task</h1>
                <br/>
                <Form onSubmit={ this.handleSubmit }>
                    <div className="col-auto mb-3">
                        <label className="form-label">Nom de la tâche </label> &nbsp;
                        <label><strong>ID : </strong> { this.state.id }</label>
                        <input type="text" className="form-control" name="nom" onChange={ this.handleChangeNom } placeholder={ this.state.nom } />
                    </div>
                    <div className="col-auto mb-3">
                        <label className="form-label">Date</label>
                        <input type="date" className="form-control" name="date" onChange={ this.handleChangeDate } placeholder={ this.state.date } />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-light mb-3">Créer</button>
                    </div>
                </Form>
             </>
        );
    }
}

export default EditTask;