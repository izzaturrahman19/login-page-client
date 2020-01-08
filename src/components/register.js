import React from 'react'
import axios from 'axios'

export default class Register extends React.Component {
    state = {
        username  : '',
        firstname : '',
        lastname  : '',
        password  : ''
    }

    handleChange(event) {
        this.setState({name: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
   
        axios.post(`http://192.168.100.6:7070/register`, {user})
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        
        const 
            {username,
            firstname, 
            lastname, 
            password,} = user

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username :
                    <input type="text" name="username" />
                </label>
                <button type="submit" onClick={this.handleChange}>Register</button>
            </form>
        )
        
    }
}