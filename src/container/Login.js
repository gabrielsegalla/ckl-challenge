import React from 'react';
import LoginForm from '../ui/LoginForm';


export default class Login extends React.Component {
    render() {
        return (
            <div className='container'>
                <h1>Login</h1>
                <LoginForm />
            </div>
        );
    }
}