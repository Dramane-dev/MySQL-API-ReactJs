import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

// Import style 
import styled from 'styled-components';

const Form = styled.form`
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 7%;
`;


class NewTask extends React.Component {
    state = {
        url: 'http://localhost:3030/task',
        redirect: null,
        nom: '',
        date: ''
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

        axios.post(this.state.url, { nom, date })
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.setState({ redirect: '/' });
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        if (this.state.redirect) {
            console.log(this.state.redirect);
            return <Redirect to={ this.state.redirect } />
        }
        return (
             <>
                <br/>
                <br/>
                <h1>Create a new task</h1>
                <Form onSubmit={ this.handleSubmit }>
                    <div className="col-auto mb-3">
                        <label className="form-label">Nom de la tâche</label>
                        <input type="text" className="form-control" name="nom" onChange={ this.handleChangeNom } placeholder="Ajouter une tâche" />
                    </div>
                    <div className="col-auto mb-3">
                        <label className="form-label">Date</label>
                        <input type="date" className="form-control" name="date" onChange={ this.handleChangeDate } placeholder="Date de fin de votre tâche" />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-light mb-3">Créer</button>
                    </div>
                </Form>
             </>
        );
    }
}

export default NewTask;