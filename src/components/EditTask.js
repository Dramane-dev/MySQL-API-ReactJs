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
        id: '',
        nom: '',
        date: ''
    }
    componentDidMount() {
        try {
            const id = this.props.name;
            console.log(this.props.name)
            this.setState({ id: id });
        } catch (error) {
            console.log(error.message)
        }
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
                        <label className="form-label">Nom de la tâche</label>
                        <input type="text" className="form-control" name="nom" onChange={ this.handleChangeNom } placeholder={ this.state.id } />
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

export default EditTask;