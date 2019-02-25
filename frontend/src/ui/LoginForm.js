import React from 'react'
import { hashHistory } from 'react-router'
import axios from 'axios';
import Enviroments from '../enviroments'

const LoginForm = () => {
    let _email, _password;
    const handleSubmit = (e) => {
        const user = {
            username: _email.value,
            password: _password.value
        };
        axios.post(Enviroments.url + 'api-token-auth/', user)
            .then(resp => {
                localStorage.setItem('auth_token', resp.data.token);
                hashHistory.push('/my-interests')
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group row">
                <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control" ref={input => _email = input} placeholder="Email" />
                </div>
            </div>
            <div className="form-group row">
                <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" ref={input => _password = input} placeholder="Password" />
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-10">
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
            </div>
        </form>
    );
};

export default LoginForm;